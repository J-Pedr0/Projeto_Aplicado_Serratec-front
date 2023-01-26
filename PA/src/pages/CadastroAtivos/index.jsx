import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AiOutlinePaperClip } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ContentPageContainer from "../../components/ContentPageContainer";
import Header from "../../components/Header/index.jsx";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import SidebarComponent from "../../components/SidebarComponent";
import { apiii } from "../../services/apiii.js";
import { CadastroStyle, ContainerCardSimplesStyle } from "./CadastroAtivos.js";

function CadastroAtivos() {

  const navigate = useNavigate();

  const [patrimonio, setPatrimonio] = useState("");
  const [nroSerie, setNroSerie] = useState("");
  const [marca, setMarca] = useState("");
  const [dataAquisicao, setDataAquisicao] = useState("");
  const [dataGarantia, setDataGarantia] = useState("");
  const [descricao, setDescricao] = useState("");
  const [statusAtivo, setStatusAtivo] = useState("");

  const postAtivo = async () => {

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

      const { data, status } = await apiii.post("/api/ativo", newAtivo);

      console.log(data, status);
      setPatrimonio("")
      setNroSerie("")
      setDataAquisicao("")
      setDataGarantia("")
      setDescricao("")
      setMarca("")
      setStatusAtivo("")

      alert("Ativo cadastrado")

      navigate("/listaativos");

    } catch (error) {
      if (error.response.data == "Já existe um ativo com este Patrimônio") {
        alert(error.response.data);
        console.log(error)
        return
      }
      if (error.response.data == "Já existe um ativo com este Número de Série") {
        alert(error.response.data);
        console.log(error)
        return
      }

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
        <CadastroStyle>
          <div className="sidebar"></div>
          <div className="direito">
            <ContainerCardSimplesStyle tabIndex={0}>

              <Header title="Ativos" iconHeader={<AiOutlinePaperClip />} />
            </ContainerCardSimplesStyle>

            <ContentPageContainer>

              <div className="container2">
                <div className="cadastro">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Patrimônio</Form.Label>
                        <Form.Control type="text" onChange={e => setPatrimonio(e.target.value)} value={patrimonio} placeholder="" maxLength={10} />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Data de aquisição</Form.Label>
                        <Form.Control input type='date' onChange={e => setDataAquisicao(e.target.value)} value={dataAquisicao} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="a" as={Col} title="Número de Série">
                        <Form.Label>Número de Série</Form.Label>
                        <Form.Control placeholder="" onChange={e => setNroSerie(e.target.value)} value={nroSerie} maxLength={20} />
                      </Form.Group>

                      <Form.Group className="mb-3" title="Marca" as={Col} controlId="b">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={e => setMarca(e.target.value)} value={marca}>
                          <option >Selecione...</option>
                          <option value="Samsung">Samsung</option>
                          <option value="Dell">Dell</option>
                          <option value="Xiaomi">Xiaomi</option>
                        </Form.Select>
                        {/* <Form.Control onChange={e => setMarca(e.target.value)} value={marca} placeholder="" /> */}
                      </Form.Group>

                      <Form.Group as={Col} controlId="c">
                        <Form.Label>Garantia</Form.Label>
                        <Form.Control input type='date' onChange={e => setDataGarantia(e.target.value)} value={dataGarantia} />
                      </Form.Group>

                      <Form.Group className="mb-3" title="Ativo" as={Col} controlId="d">
                        <Form.Label>Ativo</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={e => setStatusAtivo(e.target.value)} value={statusAtivo}>
                          <option>Selecione...</option>
                          <option value={true}>Sim</option>
                          <option value={false}>Não</option>
                        </Form.Select>
                        {/* <Form.Control onChange={e => setStatusAtivo(e.target.value)} value={statusAtivo} /> */}
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control style={{ height: "70px" }} type="text" onChange={e => setDescricao(e.target.value)} value={descricao} placeholder="" maxLength={150}/>
                    </Form.Group>



                    

                    {/* <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                    <div className="botao" style={{ display: "fixed", marginLeft: "75%" }}>

                      <div className="botao1">
                        <Button onClick={() => Cancelar()}
                          style={{
                            backgroundColor: "#585859",
                            width: "10rem",
                            borderColor: "#585859",
                            marginRight: "1rem"
                          }}
                        >
                          Cancelar
                        </Button>

                      </div>

                      <div className="botao2">
                        <Button onClick={() => postAtivo()}
                          style={{
                            backgroundColor: "#03A688",
                            width: "10rem",
                            borderColor: "#03A688",
                          }}
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
        </CadastroStyle>
      </PageContainerComponent>
    </>
  );
}

export default CadastroAtivos;
