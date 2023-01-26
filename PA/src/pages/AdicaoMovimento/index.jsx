import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CiEdit } from "react-icons/ci";
import ContentPageContainer from "../../components/ContentPageContainer";
import Header from "../../components/Header/index.jsx";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import SidebarComponent from "../../components/SidebarComponent";
import { MovimentoStyle } from "./Movimento";
import { ContainerCardSimplesStyle } from "./Movimento";
import { IoMdAddCircleOutline } from "react-icons/io";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { apiii } from "../../services/apiii";
import { useNavigate, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

// const newProduto = {
//   nome: nome,
//   descricao: descricao,
//   quantidade: quantidade,
//   valor: valor,
//   categoria: categoria,
//   foto: foto
// }

// const { data } = await api.post("/produtos", newProduto)
// setProdutoList([...produtoList, data])
// console.log(data)

// setNome("")
// setDescricao("")
// setQuantidade("")
// setValor("")
// setCategoria("")
// setFoto("")
// }

function AdicaoMovimento() {

  // private Long idAtivo;
  //   private String idUsuario;
  //   private String fullName;
  //   private String comentario;
  //   private Long idStatus;

  const navigate = useNavigate();

  const [idAtivo, setIdAtivo] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const [fullName, setFullName] = useState("");
  const [comentario, setComentario] = useState("");
  const [idStatus, setIdStatus] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");

  const { id } = useParams()

  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    const getUsuarios = async () => {
      const { data } = await apiii.get("/usuarios");
      console.log(data);
      setUsuarios(data);

    }
    getUsuarios();
  }, [])

  useEffect(() => {
    const getUsuario = async () => {
      console.log(idUsuario);

      const { data } = await apiii.get(`/usuarios/${idUsuario}`);
      console.log(data.fullName);
      setFullName(data.fullName)
      setUsuario(data);

    }
    getUsuario();
  }, [idUsuario])

  const postMovimento = async () => {

    try {

      const newMovimento = {
        idAtivo: id,

        idUsuario: idUsuario,

        fullName: fullName,

        comentario: comentario,

        idStatus: idStatus,

        dataEntrega: dataEntrega
      };

      const { data, status } = await apiii.post("/api/movimento", newMovimento);
      console.log(data, status);

      setIdAtivo("")
      setIdUsuario("")
      setFullName("")
      setComentario("")
      setIdStatus("")
      setDataEntrega("")

      alert("Movimento feito")

      navigate("/listaativos");


    } catch (error) {

      console.log(error)
      alert("Algum campo não foi preenchido");
    }
  }



  const Cancelar = () => {
    setIdAtivo("")
    setIdUsuario("")
    setFullName("")
    setComentario("")
    setIdStatus("")
    setDataEntrega("")
    navigate("/listaativos");


  }

  // const [manutencoes, setManutencoes] = useState("")
  // const [statusAtivo, setStatusAtivo] = useState("")
  // const [funcionario, setFuncionario] = useState("")
  // const [dataEntrega, setDataEntrega] = useState("")
  // const [comentario, setComentario] = useState("")

  return (
    <>
      <SidebarComponent />
      <PageContainerComponent>
        <MovimentoStyle>
          <div className="sidebar"></div>
          <div className="direito">
            <ContainerCardSimplesStyle tabIndex={0}>
              <Header title="Adição de Movimento" iconHeader={<IoMdAddCircleOutline />} />
            </ContainerCardSimplesStyle>

            <ContentPageContainer>

              <div className="container2">
                <div className="cadastro">
                  <Form>



                    {/* <Form.Group className="mb-3" controlId="formGridAddress1" >
                      <h3 tabIndex={0}>Manutenções</h3>
                      <Form.Label >Nº de Manutenções</Form.Label>
                      <Form.Control style={{ width: "3rem" }} placeholder="" />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="">
                      <h3 tabIndex={0}>Vínculo</h3>
                      <Form.Label tabIndex={0}>Status</Form.Label>
                      <Form.Select style={{ width: "10rem" }} defaultValue="Choose..." onChange={e => setIdStatus(e.target.value)} value={idStatus}>
                        <option>Selecione</option>
                        <option value={1}>Livre</option>
                        <option value={2}>Em Manutenção</option>
                        <option value={3}>Emprestado</option>
                        <option value={4}>Em Análise</option>
                      </Form.Select>
                    </Form.Group>

                    <Row className="mb-3" style={{ width: "50%", }}>
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Funcionário Vinculado</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={e => setIdUsuario(e.target.value)}>
                          <option>Selecione</option>

                          {usuarios.map((item) => <option value={item.id} key={item.id}>{item.fullName}</option>)
                          }

                        </Form.Select>
                      </Form.Group>

                      <Form.Group tabIndex={0} as={Col} controlId="">
                        <Form.Label >Data de Entrega</Form.Label>
                        <Form.Control input type='date' onChange={e => setDataEntrega(e.target.value)} value={dataEntrega} />
                      </Form.Group>

                    </Row>

                    <Form.Group
                      className="mb-3"
                      controlId="formGridAddress2"
                      style={{ width: "100%" }}
                    >
                      <Form.Label>Comentário</Form.Label>
                      <Form.Control style={{ height: "100px" }} onChange={e => setComentario(e.target.value)} value={comentario} placeholder="Digite seu comentário" />
                    </Form.Group>

                    <Button className="botaoColuna"
                      style={{
                        height: "2.5rem",
                        width: "10rem",
                        backgroundColor: "#03A688",
                        borderColor: "#03A688",
                        alignContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        justifyContent: "center"
                      }}
                    >
                      Gerar Documento
                    </Button>
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
                        <Button onClick={() => postMovimento()}
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
        </MovimentoStyle>
      </PageContainerComponent>
    </>
  );
}

export default AdicaoMovimento;
