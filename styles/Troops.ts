import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";

export const ShopContainer = styled.div`
  
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 



}

 display: grid;
  justify-content: center;


width: 100%;

.week{
  display: flex;
  justify-content: center;
  margin:0 320px 70px 0;
}
`;

export const WelcomeHeader1 = styled.div`
  margin-left: -90px;
  margin-right:-90px;
  padding: 1rem 0;
  background: linear-gradient(to right, #5fada9 25%, #b071ce 50%, #5fada9 75%);
  background-size: 400% 400%;
  transition: all 0.25s ease-in-out;
  object-fit: contain;
  object-position: center;
  display: flex;
  flex-direction: row;
  animation: welcome-header-shimmer 2.5s linear infinite;
  align-items: center;
  justify-content: space-between;
  @keyframes welcome-header-shimmer {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 135% 0%;
    }
  }
.divw{
  width: 75%;
  
 
  align-items: center;

}

.flexdiv{
  justify-content: space-between;
  margin-left:30px;
  
  .flex1{
    margin-top:15px ;
    margin-right:30px;
    font-size: 19px;
    color:black;
  } 
  
  .div-item{
    margin-right:50px;
  }
  
  display: flex;
}
 
}
  > div {
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  h1 {
    font-weight: normal;
    text-transform: uppercase;
    font-size: 31px;

    color: black;
    display: flex;
  }


  p {
    font-size: 16px;
    text-transform: uppercase;
    line-height: 1em;
    color: black;
  }
`;

export const WelcomeHeader2 = styled.div`
width: 100%;
max-width: ${PAGE_MAX_WIDTH};
display: flex;
flex-direction: row;

justify-content: center;


.stepbar{
  display: flex;
  flex-direction: row;
 justify-content: center;
 
}
.midle{
  width: 100%;
  display: flex;
  flex-direction: row;
  .flexbox{
    display: grid;
   align-items:center;
   padding-top:1rem;
    grid-template-columns: 0.5fr 1fr ;
  }
  .flexbox1{
    display: grid;
    align-items:start;
    grid-template-columns: 0.5fr 1fr ;
  }
}
.flexitems {
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  .flexitem1{
    display: grid;

    grid-template-columns: 4fr 1fr 1fr ;
  
  


  }
  .flexitems11{
    display: grid;
padding-right:30px;
    grid-template-row: 1fr 1fr ;
    grid-gap:15px;
    
    
  
  }
  .flexitems2{
    display:flex;
    align-items:center;
margin-left:10px;
    height:65px;
  }
  .flexitem4{
    display:grid;
    grid-template-columns: 1fr 1fr ;
    justify-content:  space-between;
    
  }
 
 } 
 
 
`;



export const ShopItemsWrapper = styled.div`
  width: 80%;
  max-width: ${PAGE_MAX_WIDTH};

 
  justify-content: center; 
 

  margin: 0rem auto;
  .header-sec{
    margin-top:6rem;
  }
    .griditems{
     margin-top:5rem;
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center; 
    grid-gap: 60px;
    
    .color{
    color:#1CA1EE;
  }
  .flexbox{
    display:flex;
    justify-content: space-between;
  }
  .flex1{
    display:flex;
  }
 
  }
`;
