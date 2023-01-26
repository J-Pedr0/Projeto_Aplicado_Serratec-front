
import Button from "react-bootstrap/Button";
import api from "../../services/api.js";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ContainerCardSimplesStyle, EquipamentoStyle } from "./Equipamento.js";
import { FaRegEdit } from "react-icons/fa";
import Header from "../../components/Header/index.jsx";
import { AiOutlinePaperClip } from "react-icons/ai";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import SidebarComponent from "../../components/SidebarComponent";
import ContentPageContainer from "../../components/ContentPageContainer";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiii } from "../../services/apiii.js";


function Equipamento() {

  const [dataAquisicao, setDataAquisicao] = useState("")
  const [dataGarantia, setDataGarantia] = useState("")
  const [descricao, setDescricao] = useState("")
  const [idAtivo, setIdAtivo] = useState("")
  const [marca, setMarca] = useState("")
  const [nroSerie, setNroSerie] = useState("")
  const [numeroManutencoes, setNumeroManutencoes] = useState("")
  const [patrimonio, setPatrimonio] = useState("")
  const [ultimoStatus, setUltimoStatus] = useState("")
  const [ultimaManutencao, setUltimaManutencao] = useState("")

  const [ultimoUsuario, setUltimoUsuario] = useState("")


  const { id } = useParams()

  useEffect(() => {

    const getAtivos = async () => {
      const { data } = await apiii.get(`/api/ativo/${id}`);

      console.log(data);
      setDataAquisicao(data.dataAquisicao)
      setDataGarantia(data.dataGarantia)
      setDescricao(data.descricao)
      setIdAtivo(data.idAtivo)
      setMarca(data.marca)
      setNroSerie(data.nroSerie)
      setPatrimonio(data.patrimonio)
      setUltimoStatus(data.ultimoStatus)
      setUltimoUsuario(data.ultimoUsuario)

      if (data.ultimaManutencao == null) {
        setUltimaManutencao("Não teve")
      } else {
        setUltimaManutencao(data.ultimaManutencao)
      }

      if (data.numeroManutencoes < 1) {
        setNumeroManutencoes("Não teve")
      } else {
        setNumeroManutencoes(data.numeroManutencoes)
      }

      if (data.ultimoUsuario == null) {
        setUltimoUsuario("Não tem")
      } else {
        setUltimoUsuario(data.ultimoUsuario)
      }

    }
    getAtivos();

  }, [])


  return (

    <>
      <SidebarComponent />
      <PageContainerComponent>
        <EquipamentoStyle>

          <div className="direito">
            <ContainerCardSimplesStyle tabIndex={0}>
              <Header title="Ativos" iconHeader={<AiOutlinePaperClip />} />
            </ContainerCardSimplesStyle>

            <ContentPageContainer>


              <div className="detalhes">
                <div className="detalhes1">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3 tabIndex={0}>Dados Gerais</h3>



                  </div>
                  <hr></hr>
                  <div style={{ display: "flex", flexDirection: "row", gap: "100px", paddingBottom: "3rem" }}>

                    <div tabIndex={0}>
                      <h4 >ID</h4>
                      <p>{idAtivo}</p>
                    </div>

                    <div tabIndex={0}>
                      <h4>Patrimônio</h4>
                      <p>{patrimonio}</p>
                    </div>

                    <div tabIndex={0}>
                      <h4>Número de Série</h4>
                      <p>{nroSerie}</p>
                    </div>

                    <div tabIndex={0}>
                      <h4>Marca</h4>
                      <p>{marca}</p>
                    </div>

                  </div>

                  <div style={{ display: "flex", flexDirection: "row", gap: "200px", paddingBottom: "3rem" }}>
                    <div tabIndex={0}>
                      <h4>Data de Aquisição</h4>
                      <p>{dataAquisicao}</p>
                    </div>
                    <div tabIndex={0}>
                      <h4>Data Limite Garantia</h4>
                      <p>{dataGarantia}</p>
                    </div>
                  </div>

                  <div tabIndex={0}>
                    <h4>Descrição</h4>
                    <p>{descricao}</p>
                  </div>

                </div>


                <div className="detalhes2">
                  <h3 tabIndex={0}>Manutenção</h3>
                  <hr></hr>

                  <div style={{ display: "flex", flexDirection: "row" }}>

                    <div tabIndex={0}>
                      <h4>Número de Manutenções</h4>
                      <p>{numeroManutencoes}</p>
                    </div>




                    <div tabIndex={0} style={{ paddingLeft: "5rem" }}>
                      <h4>Data da Última Manutenção</h4>
                      <p>{ultimaManutencao}</p>
                    </div>




                  </div>
                </div>

                <div className="detalhes3">
                  <h3 tabIndex={0}>Status</h3>
                  <hr></hr>

                  <div style={{ display: "flex", flexDirection: "row" }}>

                    <div tabIndex={0}>
                      <h4>Status do Ativo</h4>
                      <p>{ultimoStatus}</p>
                    </div>




                    <div tabIndex={0} style={{ paddingLeft: "5rem" }}>
                      <h4>Colaborador Vinculado</h4>
                      <p>{ultimoUsuario}</p>
                    </div>




                  </div>

                  <div className="botao">
                    <Link to={`/historico/${id}`} >
                      <Button
                        style={{

                          backgroundColor: "#03A688",
                          borderColor: "#03A688",
                          width: "10rem",
                        }}

                      >Histórico</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ContentPageContainer>
          </div>



        </EquipamentoStyle>
      </PageContainerComponent>

    </>
  );
}

export default Equipamento;
