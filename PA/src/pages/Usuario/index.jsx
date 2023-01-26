import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";
import React from "react";
import { UsuarioStyle } from "./Usuario";
import {TiCameraOutline} from "react-icons/ti";
import {FaRegEdit} from "react-icons/fa";



function Usuario(){

return(
    <>
    <SidebarComponent/>
    <PageContainerComponent>
        <ContentPageContainer>
            <UsuarioStyle>


        <div className="cabeçalho">

            <h1 className="titulo">Usuário</h1>
            <div className="borda">
            <div className="cam" style={{}}>
            <TiCameraOutline
            style={{
                      
                backgroundColor: "#D9D9D9",
                borderRadius: "50%",
                alignItems: "center",
                width: "5rem",
                height: "5rem",}} />
            
            </div>
                    
         </div>           

            <h1 className="subtitulo">Dados Pessoais</h1>
            <hr></hr>
            

        </div>

        <div className="info">
        
        
        <p2 className="nome">Nome <FaRegEdit className="icones" style={{color:"#03A688"}}/>
          <h3 className="h3">Em manutenção</h3>
          </p2>
        <p2 className="data">Data de nascimento <FaRegEdit className="icones" style={{color:"#03A688"}}/>
          <h3 className="h3">Em manutenção</h3>
        </p2>
        <p2 className="tel">Telefone <FaRegEdit className="icones" style={{color:"#03A688"}}/>
          <h3 className="h3">Em manutenção</h3>
        </p2>
        <p2 className= "cpf">CPF <FaRegEdit className="icones" style={{color:"#03A688"}}/>
          <h3 className="h3">Em manutenção</h3>
        </p2>
        <p2 className= "endereço">Endereço <FaRegEdit className="icones" style={{color:"#03A688"}}/>
          <h3 className="h3">Em manutenção</h3>
        </p2>
        

        </div>

            
        <div className="outras">
        <h1 className="opçoes">Dados na Empresa</h1>
        <div className="hr"><hr></hr></div>
            
        </div>

        <div className="final">

        <p2 className="mail">E-mail <FaRegEdit className="icones" style={{color:"#03A688"}}/>
        <h2 className="h2">Em manutenção</h2>
        </p2>
        <p2 className="admissao">Data de admissão <FaRegEdit className="icones" style={{color:"#03A688"}}/>
        <h2 className="h2">Em manutenção</h2>
        </p2>
        <p2 className="cargo">Cargo <FaRegEdit className="icones" style={{color:"#03A688"}}/>
        <h2 className="h2">Em manutenção</h2>
        </p2>
        <p2 className="gestor">Gestor <FaRegEdit className="icones" style={{color:"#03A688"}}/>
        <h2 className="h2">Em manutenção</h2>
        </p2>
        <p2 className="acesso">Acesso <FaRegEdit className="icones" style={{color:"#03A688"}}/>
        <h2 className="h2">Em manutenção</h2>
        </p2>

        </div>


            </UsuarioStyle>
        </ContentPageContainer>
    </PageContainerComponent>
    </>
)
}

export default Usuario;