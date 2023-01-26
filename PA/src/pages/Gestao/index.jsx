import Button from "react-bootstrap/Button";
import {AiOutlinePaperClip} from "react-icons/ai";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";
import SidebarComponent from "../../components/SidebarComponent";
import {GestaoStyle} from "./Gestao.js";

import { React, useState } from "react";
import {Link} from 'react-router-dom';


function Gestao(){

    return(
        <>
        <SidebarComponent/>
        <PageContainerComponent>
        

                <ContentPageContainer>
            <GestaoStyle>


                <div className="colunas">

                    <div className="coluna1">
                        <h3 tabIndex={0}>Gestão</h3>
                        <p tabIndex={0}>escolha uma opção</p>
                    </div>

                    <div className="coluna2">
                    <img src="src/components/images/image2.png" />
                    </div>
                </div>
            
            <div className="inferior">
                <h3 tabIndex={0}>Cadastros</h3>
                <div className="botao"  >
                <Link to="/cadastroativos">
                  <Button  style={{
                      backgroundColor: "#03A688",
                      width: "14rem",
                      height: "3.5rem",
                      borderColor: "#03A688",
                    }}>
                            
                        <AiOutlinePaperClip className="iconesHeader" />
                        Cadastrar Ativo
                  </Button>
                  </Link>
               </div>
            </div>

            </GestaoStyle>
            
                            </ContentPageContainer>
    </PageContainerComponent>
    </>
    )
    }
    
    export default Gestao;