import Button from "react-bootstrap/Button";
import {CiEdit} from "react-icons/ci";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";
import SidebarComponent from "../../components/SidebarComponent";
import {EdicaoStyle} from "./edicao";
// import { React, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import image2 from "../../components/images/image2.png";


function Edicao(){

    const {id} = useParams()

    return(
        <>
        <SidebarComponent/>
        <PageContainerComponent>
        

                <ContentPageContainer>
            <EdicaoStyle>


                <div className="colunas">

                    <div className="coluna1">
                        <h3 tabIndex={0}>Edição</h3>
                        <p tabIndex={0}>escolha uma opção</p>
                    </div>

                    <div className="coluna2">
                    <img src={image2} />
                    </div>
                </div>
            
            <div className="inferior">
                <h3 tabIndex={0}>Editar:</h3>

                <div className="botao">

                <div className="botao1">

                <Link to={`/edicaoativos/${id}`} >
                  <Button style={{
                      backgroundColor: "#03A688",
                      width: "14rem",
                      height: "3.5rem",
                      borderColor: "#03A688",
                      marginRight: "2.5rem",
                    }}>
                            
                        <CiEdit className="iconesHeader" />
                        Editar Ativo
                  </Button>
                  </Link>
                  </div>
                
                  <div className="botao2">
                  <Link to={`/adicaomovimento/${id}`}>
                  <Button style={{
                      backgroundColor: "#03A688",
                      width: "14rem",
                      height: "3.5rem",
                      borderColor: "#03A688",
                    }}>
                            
                        <CiEdit className="iconesHeader"/>
                        Adicionar Movimento
                  </Button>
                  </Link>
            </div>
               
               </div>
            </div>

            </EdicaoStyle>
            
                            </ContentPageContainer>
    </PageContainerComponent>
    </>
    )
    }
    
    export default Edicao;