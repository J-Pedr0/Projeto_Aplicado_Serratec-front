
import ComponenteBuscaHistorico from "../../components/ComponenteBuscaHistorico";
import PaginacaoComponent from "../../components/ComponentePaginacao";
import ComponenteTabelaHistorico from "../../components/ComponenteTabelaHistorico";
import ContentPageContainer from "../../components/ContentPageContainer";
import PageContainerComponent from "../../components/PageContainerComponent";
import SidebarComponent from "../../components/SidebarComponent";





function HistoricoMovimento(){

    return(
        <>
        <SidebarComponent/>
        <PageContainerComponent>

            <ContentPageContainer>
            
                <ComponenteBuscaHistorico />

                <ComponenteTabelaHistorico />

                <PaginacaoComponent />
                </ContentPageContainer>
            
            </PageContainerComponent>
            </>
    )

}

export default HistoricoMovimento;

