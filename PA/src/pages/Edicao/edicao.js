
import styled from "styled-components";

export const EdicaoStyle = styled.div`
  @import url("../../css-config/colors.css");

  > div {

    padding-left: 5rem;
    
    .colunas{
      display: inline-block;
    }

    .coluna2 {
      display: flex;
      margin-left: 45%;
      padding-top: 1%;
    }

    img {
      width: 40%;
      height: 40%;
    }

    .superior{
      display: inline-block;
    }

    .coluna1{

      h2{
        color: #03A688;
      }
      h3{
        font-size: 50px;
        color: #03A688;
      }
      p{
        font-size: 25px;
      }
      padding-top: 2rem;
    }

   
  
  }

  .botao{
    display: fixed;
  }

  .botao1{
    display: fixed;
    :hover {
          filter: brightness(0.8);
        }
  }

  .botao2{
    display: fixed;
    :hover {
          filter: brightness(0.8);
        }
  }


  .inferior{
    padding-bottom: 7rem;
    margin-top: 3rem;
   


    h3 {
      
      color: #03A688;
    }
    
  }
`;


  



