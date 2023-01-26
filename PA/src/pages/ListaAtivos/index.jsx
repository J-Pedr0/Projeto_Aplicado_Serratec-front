import SearchComponent from "../../components/ComponenteBusca";
import PaginacaoComponent from "../../components/ComponentePaginacao";
import TableComponent from "../../components/ComponenteTabela";
import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";




function ListaAtivos() {

    return (<>
    <SidebarComponent/>
        <PageContainerComponent>
            <ContentPageContainer>

            
                <SearchComponent />

                <TableComponent />

                <PaginacaoComponent />
            </ContentPageContainer>
            
            </PageContainerComponent>
            </>
    )
}

export default ListaAtivos;