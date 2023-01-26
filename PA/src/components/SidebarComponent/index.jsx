import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import LogoT2m from "../../assets/img/logo@2x.png";
import { BsListUl } from "react-icons/bs"
import { IoMdNotificationsOutline, IoMdAddCircleOutline } from "react-icons/io"
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ContainerNavStyle } from "./Sidebar.js";
import image3 from "../images/image3.png";

import { AuthContext } from "../../contexts/auth.jsx";
import { useContext } from "react";

function SidebarComponent({ logOut }) {
  const [sideBarCollapse, setSideBarCollapse] = useState(true);
  const navigate = useNavigate();
  const [role, setRole] = useState("")

  function navigateTo(route) {
    setSideBarCollapse(true);
    window.scrollTo(0, 0);
    navigate(route);
  }

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [])

  return (
    <ContainerNavStyle collapse={sideBarCollapse}>
      <Row>
        <Col className="column-container">
          <div className="logo-area">
            <img src={image3} alt="Logo T2M" tabIndex={0} />
          </div>
          <div className="collapse-sidebar-action">
            {sideBarCollapse ? (
              <BsArrowBarRight
                onClick={() => setSideBarCollapse(!sideBarCollapse)}
              />
            ) : (
              <BsArrowBarLeft
                onClick={() => setSideBarCollapse(!sideBarCollapse)}
              />
            )}
          </div>
          <div className="sidebar-nav">
            <div className="mt-2 sidebar-nav-item">
              <div onClick={() => navigateTo("/")}>
                <div className="area-icons-label">
                  <button tabIndex={0} title="Home">
                    <CgHome />
                  </button>
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Home</span>
                  )}
                </div>
              </div>
            </div>
            <div className="sidebar-nav-item">
              <div onClick={() => navigateTo("/listaativos")}>
                <div className="area-icons-label">
                  <button tabIndex={0} title="Listas">
                    <BsListUl />
                  </button>
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Listas</span>
                  )}
                </div>
              </div>
            </div>
            <div className="sidebar-nav-item">
              <div onClick={() => navigateTo("/notificacoes")}>
                <div className="area-icons-label">
                  <button tabIndex={0} title="Notificações">
                    < IoMdNotificationsOutline />
                  </button>
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Notificações</span>
                  )}
                </div>
              </div>
            </div>


            {role == "COLLABORATOR" || role == "MANAGER"?

              <div></div>
              :
              <div className="sidebar-nav-item">
                <div onClick={() => navigateTo("/gestao")}>
                  <div className="area-icons-label">
                    <button tabIndex={0} title="Gestão">
                      <IoMdAddCircleOutline />
                    </button>
                    {sideBarCollapse ? (
                      ""
                    ) : (
                      <span className="label-sidebar">Gestão</span>
                    )}
                  </div>
                </div>
              </div>
            }

            <div className="sidebar-nav-item">
              <div onClick={() => navigateTo("/perfil")}>
                <div className="area-icons-label">
                  <button tabIndex={0} title="Perfil">
                    <BiUserCircle />
                  </button>
                  {sideBarCollapse ? (
                    ""
                  ) : (
                    <span className="label-sidebar">Perfil</span>
                  )}
                </div>
              </div>
            </div>

          </div>
          {/* <div className="container-usuario">
            <BiUserCircle /> */}
          {/* <div className="usuario-info">
              {sideBarCollapse ? (
                ""
              ) : (
                <span title="Larissa Santos" className="label-sidebar">
                  Perfil
                </span>
              )}
              {sideBarCollapse ? (
                ""
              ) : (
                <span
                  id="usuario-departamento"
                  className="label-sidebar"
                  title="Departamento Pessoal"
                >
                  Departamento pessoal
                </span>
              )}
            </div> */}
          {/* </div> */}
          <div className="sidebar-nav">
            <div className="sidebar-nav-item">
              <div onClick={handleLogout}>
                <div onClick={() => logout()}>
                  <div className="area-icons-label">
                    <button tabIndex={0} title="Sair">
                      <MdOutlineExitToApp />
                    </button>
                    {sideBarCollapse ? (
                      ""
                    ) : (
                      <span className="label-sidebar">Sair</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </ContainerNavStyle>
  );
}

export default SidebarComponent;