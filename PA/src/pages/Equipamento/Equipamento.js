
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
    font-weight: bold;

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

export const EquipamentoStyle = styled.div`

background-color: #F2F2F2;


  h3 {
    padding-top: 2rem;
    color: #01a998;
    font-weight: bold;
    
  }

  h4{
    font-weight: bold;
  }

  .iconesHeader{
    width: 48px;
    height: 48px;
  }

  .icones{
    width: 24px;
    height: 24px;
    color: #01a998;
    cursor: pointer;

        :hover {
          filter: brightness(0.8);
        }
      }
  


  

  .last{
    padding-bottom: 3em;
  }

  .botao{
   
    display: fixed;
    align-items: left;
    transition: 0.3s;
    padding-bottom: 2rem;

    &:hover{
        filter: brightness(0.8);
        }
  }

  
  `;

 