import SearchComponent from "../../components/ComponenteBusca";
import PaginacaoComponent from "../../components/ComponentePaginacao";
import TableComponent from "../../components/ComponenteTabela";
import SidebarComponent from "../../components/SidebarComponent";
import PageContainerComponent from "../../components/PageContainerComponent/index.jsx";
import ContentPageContainer from "../../components/ContentPageContainer";




function Home() {

    return (<>
        <SidebarComponent />
        <PageContainerComponent>

            <ContentPageContainer>

                {/* <div>

                    <p>Novos</p>
                    <p>Modificados Recentemente</p>
                    <hr></hr>

                </div> */}

                <SearchComponent />

                <TableComponent />

                <PaginacaoComponent />
            </ContentPageContainer>

        </PageContainerComponent>
    </>
    )
}

export default Home;