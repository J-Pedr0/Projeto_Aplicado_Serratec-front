import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";
import PaginacaoComponent from "../../components/ComponentePaginacao";
import TableComponentFuncionario from "../../components/TableComponentFuncionario";
import ComponenteBuscaFuncionario from "../../components/ComponenteBucaFuncionario";

function ListaFuncionarios(){

return(
    <>
    <SidebarComponent/>
    <PageContainerComponent>
        <ContentPageContainer>

        <ComponenteBuscaFuncionario/>

<TableComponentFuncionario></TableComponentFuncionario>

<PaginacaoComponent />
        </ContentPageContainer>
    </PageContainerComponent>
    </>
)
}

export default ListaFuncionarios;