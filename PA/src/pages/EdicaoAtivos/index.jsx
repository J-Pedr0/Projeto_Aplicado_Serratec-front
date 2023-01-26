
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CiEdit } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import ContentPageContainer from "../../components/ContentPageContainer";
import Header from "../../components/Header/index.jsx";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import SidebarComponent from "../../components/SidebarComponent";
import { apiii } from "../../services/apiii.js";
import { ContainerCardSimplesStyle, EdicaoAtivosStyle } from "./edicaoAtivos";

function EdicaoAtivos() {

  const [patrimonio, setPatrimonio] = useState("");
  const [nroSerie, setNroSerie] = useState("");
  const [marca, setMarca] = useState("");
  const [dataAquisicao, setDataAquisicao] = useState("");
  const [dataGarantia, setDataGarantia] = useState("");
  const [descricao, setDescricao] = useState("");
  const [statusAtivo, setStatusAtivo] = useState("");

  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    const getAtivo = async () => {
      const { data } = await apiii.get(`/api/ativo/${id}`);
      console.log(data);
      setPatrimonio(data.patrimonio)
      setNroSerie(data.nroSerie)
      let date = new Date(data.dataAquisicao)
      setDataAquisicao(date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, 0) + "-" + date.getDate())
      let date1 = new Date(data.dataGarantia)
      setDataGarantia(date1.getFullYear() + "-" + String(date1.getMonth() + 1).padStart(2, 0) + "-" + date1.getDate())
      setDescricao(data.descricao)
      setMarca(data.marca)
      setStatusAtivo(data.statusAtivo)
    }
    getAtivo()
  }, [])

  const putAtivo = async () => {

    try {

      const newAtivo = {
        patrimonio: patrimonio,
        nroSerie: nroSerie,
        dataAquisicao: dataAquisicao,
        dataGarantia: dataGarantia,
        descricao: descricao,
        marca: marca,
        statusAtivo: statusAtivo
      };

      const { data, status } = await apiii.put(`/api/ativo/${id}`, newAtivo);
      console.log(data, status);
      setPatrimonio("")
      setNroSerie("")
      setDataAquisicao("")
      setDataGarantia("")
      setDescricao("")
      setMarca("")
      setStatusAtivo("")

      alert("Ativo atualizado")

      navigate("/listaativos");

    } catch (error) {

      console.log(error)
      alert("Algum campo não foi preenchido");
    }
  }

  const Cancelar = () => {
    setPatrimonio("")
    setNroSerie("")
    setDataAquisicao("")
    setDataGarantia("")
    setDescricao("")
    setMarca("")
    setStatusAtivo("")
    navigate("/listaativos");
  }


  return (
    <>
      <SidebarComponent />
      <PageContainerComponent>
        <EdicaoAtivosStyle>
          <div className="sidebar"></div>
          <div className="direito">
            <ContainerCardSimplesStyle tabIndex={0}>
              <Header title="Edição de Ativos" iconHeader={<CiEdit />} />
            </ContainerCardSimplesStyle>

            <ContentPageContainer>
              <div className="container2">
                <div className="cadastro">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group className="mb-3" controlId="formGridAddress1" >
                        <Form.Label>Patrimônio</Form.Label>
                        <Form.Control type="text" /*onChange={e => setPatrimonio(e.target.value)}*/ value={patrimonio} placeholder="" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Data de aquisição</Form.Label>
                        <Form.Control input type="date" onChange={e => setDataAquisicao(e.target.value)} value={dataAquisicao} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="a"
                        as={Col}
                        title="Número de Série"
                      >
                        <Form.Label>Número de Série</Form.Label>
                        <Form.Control type="text" /*onChange={e => setNroSerie(e.target.value)}*/ value={nroSerie} placeholder="" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        title="Marca"
                        as={Col}
                        controlId="b"
                      >
                        <Form.Label>Marca</Form.Label>
                        <Form.Select onChange={e => setMarca(e.target.value)} value={marca}>
                          <option>Selecione</option>
                          <option value="Samsung">Samsung</option>
                          <option value="Dell">Dell</option>
                          <option value="Xiaomi">Xiaomi</option>
                        </Form.Select>
                        {/* <Form.Control type="text" onChange={e => setMarca(e.target.value)} value={marca} placeholder="" /> */}
                      </Form.Group>

                      <Form.Group as={Col} controlId="c">
                        <Form.Label>Garantia</Form.Label>
                        <Form.Control input type="date" onChange={e => setDataGarantia(e.target.value)} value={dataGarantia} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        title="Ativo"
                        as={Col}
                        controlId="d"
                      >
                        <Form.Label>Ativo</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={e => setStatusAtivo(e.target.value)} value={statusAtivo}>
                          <option>Selecione</option>
                          <option value={true} >Sim</option>
                          <option value={false}>Não</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control style={{ height: "70px" }} type="text" onChange={e => setDescricao(e.target.value)} value={descricao} placeholder="" maxLength={150} />
                    </Form.Group>

                    <div className="botaoColuna">
                      <Button
                        style={{
                          height: "2.5rem",
                          width: "10rem",
                          backgroundColor: "#03A688",
                          borderColor: "#03A688",
                        }}
                      >
                        Gerar Documento
                      </Button>
                    </div>

                    <div
                      className="botao"
                      style={{ display: "fixed", marginLeft: "75%" }}
                    >
                      <div className="botao1">
                        <Button onClick={() => Cancelar()}
                          style={{
                            backgroundColor: "#585859",
                            width: "10rem",
                            borderColor: "#585859",
                            marginRight: "1rem",
                          }}
                        >
                          Cancelar
                        </Button>
                      </div>

                      <div className="botao2">
                        <Button
                          style={{
                            backgroundColor: "#03A688",
                            width: "10rem",
                            borderColor: "#03A688",
                          }}
                          onClick={() => putAtivo()}
                        >
                          Salvar
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </ContentPageContainer>
          </div>
        </EdicaoAtivosStyle>
      </PageContainerComponent>
    </>
  );
}

export default EdicaoAtivos;
