import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";
import {PerfilStyle} from "./Perfil";
import {FaRegEdit} from "react-icons/fa";
import {TiCameraOutline} from "react-icons/ti";

import { React, useEffect, useState } from "react";
import { apiii } from "../../services/apiii";


function Perfil(){

  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [endereco, setEndereco] = useState();

  useEffect(() => {
    const idUsuario = (localStorage.getItem('id'));

    const getUsuario = async () => {
      console.log(idUsuario);
  
      const { data } = await apiii.get(`/usuarios/${idUsuario}`);
      console.log(data);
      setNome(data.fullName)
      setDataNascimento(data.birthDate);
      setEmail(data.personalEmail)

      if ((data.phone == "null") || (data.phone == null)) {
        setTelefone("Não informado")
      } else {
        setTelefone(data.phone)
      }

      if ((data.cep == "null") || (data.cep == null)) {
        setEndereco("Não informado")
      } else {
        setEndereco(data.phone)
      }

  
    }
    getUsuario();

}, [])

return(
    <>
    <SidebarComponent/>
    <PageContainerComponent>
    <ContentPageContainer>
        <PerfilStyle>

        <div className="cabeçalho">

            <h1 className="titulo">Perfil</h1>
            <div className="borda">
            {/* <div className="texto">
            <p1 className="fotoTexto">Escolha uma foto</p1></div> */}
            {/* <div className="camera"><TiCameraOutline style={{
                      
                      backgroundColor: "#D9D9D9",
                      borderRadius: "50px",
                      alignItems: "center",
                      width: "5rem",
                      height: "5rem",

                    }}/></div> */}
                    </div>

            <h1 className="subtitulo">Dados Pessoais</h1>
            <div className="hr"><hr></hr></div>
            

        </div>

        <div className="info">
        
        
        <p2>Nome 
          <h3 className="h3">{nome}</h3>
          </p2>
        <p2 className="data">Data de nascimento
          <h3 className="h3">{dataNascimento}</h3>
        </p2>
        <p2 className="tel">Telefone 
          <h3 className="h3">{telefone}</h3>
        </p2>
        <p2 className= "mail">E-mail
          <h3 className="h3">{email}</h3>
        </p2>
        <p2 className= "endereço">Endereço
          <h3 className="h3">Cep: {endereco}</h3>
        </p2>
        

        </div>

            
        <div className="outras">
        <h1 className="opçoes">Outras opções</h1>
        <div className="hr"><hr></hr></div>
            
        </div>

        <div className="final">

        <h3 className="meusativos">Meus Ativos</h3>
        <h3 className="sair">Sair do Sistema</h3>

        </div>

        </PerfilStyle>
    </ContentPageContainer>
    </PageContainerComponent>
    </>
)
}

export default Perfil;