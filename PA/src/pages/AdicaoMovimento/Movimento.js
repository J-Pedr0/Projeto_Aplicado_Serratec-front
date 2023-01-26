import styled from "styled-components";

export const ContainerCardSimplesStyle = styled.div`
  @import url("../../css-config/colors.css");

  > div {
    border-radius: 0.3rem !important;
    background-color: #01a998;
    box-shadow: 1px 1px 5px #0d0d0d;
    color: #fff;
    transition: 0.3s;
    text-align: center;
    align-items: center;

    .card-body {
      width: 100%;
      height: 100%;

      svg {
        cursor: pointer;

        :hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

export const MovimentoStyle = styled.div`


>div {
    background-color: #F2F2F2;
}


  h3 {
    padding-top: 2rem;
    color: #01a998;
  }

  .iconesHeader{
    width: 48px;
    height: 48px;
  }

  
  .botao{
    margin-right: 3rem;
    padding-bottom: 1rem;
    transition: 0.3s;
  }

  .botaoColuna{
    :hover {
      filter: brightness(0.8);
    }
  }

  .botao1{
    :hover {
          filter: brightness(0.8);
        }
  }

  .botao2{
    :hover {
          filter: brightness(0.8);
        }
  }
  h3 {
    padding-top: 2rem;
    color: #01a998;
  }

  `;
