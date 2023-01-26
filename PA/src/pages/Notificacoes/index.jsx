import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";
import CardSimples from "../../components/CardSimples";

function Notificacoes(){

return(
    <>
    <SidebarComponent/>
    <PageContainerComponent>
    <ContentPageContainer>
    <CardSimples></CardSimples>
    <CardSimples></CardSimples>
    <CardSimples></CardSimples>
    <CardSimples></CardSimples>
    <CardSimples></CardSimples>
    <CardSimples></CardSimples>
    </ContentPageContainer>
    </PageContainerComponent>
    </>
)
}

export default Notificacoes;