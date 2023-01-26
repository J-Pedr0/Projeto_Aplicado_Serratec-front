import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import Header from "../../components/Header";
import { BiUserCircle} from "react-icons/bi"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import ContentPageContainer from "../../components/ContentPageContainer";
import {AltUsuarioStyle} from "./Alteracao.js";

function AlteracaoUsuario(){

return(
    <>
    <SidebarComponent/>
    <PageContainerComponent>

    <Header title="Modificar Usuário" iconHeader={<BiUserCircle/>}/>

    <AltUsuarioStyle>
        <ContentPageContainer>
    
        <Form>
        <h3>Dados Pessoais</h3>
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control input type='date' />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="" placeholder="" />
                  </Form.Group>
                </Row>

                <h3>Endereço</h3>
                <Row className="mb-3">
                 

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control input type='' />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>UF</Form.Label>
                    <Form.Select defaultValue="Choose...">
                    <option>RJ</option>
                    <option>SP</option>
                  </Form.Select>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                 

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control input type='' />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control type="" placeholder="" />
                  </Form.Group>

                  <h3>Dados na Empresa</h3>
                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control input type='' />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Cargo</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>RH</option>
                  </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Data de Admissão</Form.Label>
                    <Form.Control type="date" placeholder="" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Acesso</Form.Label>
                    <Form.Select defaultValue="Choose...">
                    <option>Colaborador</option>
                  </Form.Select>
                  </Form.Group>
                </Row>

                  
                </Row>
    
                <div className="botao" style={{display: "fixed", marginLeft:"75%"}}>
                  <Button
                    style={{
                      backgroundColor: "#585859",
                      width: "10rem",
                      borderColor: "#585859",
                      marginRight: "1rem"
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#03A688",
                      width: "10rem",
                      borderColor: "#03A688",
                    }}
                  >
                    Salvar
                  </Button>
                </div>
              </Form>

        </ContentPageContainer>
              </AltUsuarioStyle>
    </PageContainerComponent>
    </>
)
}

export default AlteracaoUsuario;