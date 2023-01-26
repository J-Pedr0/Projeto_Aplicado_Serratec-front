import { React } from "react";
import Form from "react-bootstrap/Form";

import { ContainerPagination } from "./paginacao";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdLastPage,
  MdFirstPage,
} from "react-icons/md";

function PaginacaoComponent() {
  return (
    <ContainerPagination>
      <Form.Select className="select-per-page" tabIndex={0}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Form.Select>
      <div>
        <span tabIndex={0}>Total de registros: 1000</span>
      </div>
      <div className="area-paginacao">
        <span tabIndex={0}>conteúdo</span>
        <MdFirstPage tabIndex={0}/>
      </div>
      <div>
        <MdNavigateBefore tabIndex={0}/>
      </div>
      <div>
        <span tabIndex={0}>1 de 100</span>
      </div>
      <div>
        <MdNavigateNext tabIndex={0}/>
      </div>
      <div className="botaoLast">
        <MdLastPage tabIndex={0}/>
      </div>
    </ContainerPagination>
  );
}

export default PaginacaoComponent;
