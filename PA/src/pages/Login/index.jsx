import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup } from "react-bootstrap";
import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth"; 

import { Link, Navigate, useNavigate } from 'react-router-dom';
// import api from '../../services/api';

function Login() {
  const {user, login, isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// console.log(user?.role)

  // if(isAuthenticated){
  //   navigate("/");
  // }

  const handleSubmit = () => {
    // e.preventDefault();
    // console.log("submit", { email, password });
    login((email + "@t2mlab.com"), password)
  };

  return (
    <div className="container1">
      <div className="coluna-501">
        <div className="coluna1">
          <div className="imagem">
            <img src="src/components/images/image1.png" />
          </div>
        </div>
      </div>

      <div className="coluna-502">
        <div className="coluna2">
          <div className="logo">
            <img src="src/components/images/image3.png" />
          </div>

          <div className="texto">
            <h2>SGA</h2>
            <p>Sistema de Gestão de Ativos</p>
            {/* <p>{String(authenticated)}</p> */}
          </div>

          <div className="loginBox">
            <Form >
              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <img
                      src="src/components/images/image8.png"
                      width={25}
                      height={28}
                    />
                  </InputGroup.Text>

                  <Form.Control
                    type="email"
                    placeholder=""
                    style={{ backgroundColor: "#F3F5F6" }}
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                  <span class="input-group-text" id="basic-addon2">@t2mlab.com</span>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup>
                  <InputGroup.Text>
                    <img
                      src="src/components/images/image9.png"
                      width={25}
                      height={28}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    style={{ backgroundColor: "#F3F5F6" }}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="olho">
                    <InputGroup.Text>
                      <img
                        src="src/components/images/image10.png"
                        width={30}
                        height={28}
                        style={{ textAlign: "right" }}
                      />
                    </InputGroup.Text>
                  </div>
                </InputGroup>

              </Form.Group>
              <div className="botao">
                {/* <Link to="/"> */}
                <Button
                  style={{
                    backgroundColor: "#03A688",
                    width: "18rem",
                    borderColor: "#03A688",
                  }}
                  onClick={() => handleSubmit()}
                >
                  Entrar
                </Button>
                {/* </Link> */}
              </div>
              <Form.Text className="text-muted">
                <p className="mt-3" style={{ color: "black" }}>
                   <a href="#">Esqueci minha senha</a>
                </p>
              </Form.Text>
            </Form>

          </div>
          <div className="iconesInferiores">
            <img src="src/components/images/grade-a-plus.svg" />
            <img src="src/components/images/deaf.svg" />
            <img src="src/components/images/accessibility-blind.svg" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
