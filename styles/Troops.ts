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
  flex-direction:column;
  align-items:center;
  justify-content: center;
  margin:-15px 320px 70px -40px;
  
  h2 {
   font-size:31px;
  }
  p{
    padding:5px;
    color:gray
  }
}
`;

export const WelcomeHeader1 = styled.div`
  width:100%;
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
  width: 73%;
  padding-right: 20px;
  

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
  margin-bottom: 2rem;
  .flexbox{
    display: grid;
   align-items:start;
   padding-top:1rem;
    grid-template-columns: 0.5fr 1fr ;
    
    .content-letter{
      padding:20px 5px;
      
      p {
      font-size: 16px;
      
      }
    }
  }
  .flexbox1{
    display: grid;
    align-items:start;
    grid-template-columns: 0.5fr 1fr ;
  }
}
.flexitems {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  .flexitem1{
    display: grid;

    grid-template-columns: 5fr 2fr 1fr ;
    
  }
  .flexitems11{
    display: grid;
    padding-right:7rem;
    grid-template-row: 1fr 1fr ;
    grid-gap:15px;
    
    
  
  }
  .flexitems2{
    display:flex;
    align-items:center;
    margin-left:10px;
    height:65px;
    
    .num-gray {
      color: rgba(255, 255, 255, 0.35);
      margin-right:10px;
    }
    .white-badge{
      font-weight: 400;
      font-size: 25px;
      line-height: 25px;
      margin-left:10px;
    }
    .blue-badge{
      color: #1DA1F2;
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      margin-left:10px;
      
    }
    p{
    font-size: 28px;

    }
  }
  
  .discord-sec {
    display:flex;
    flex-direction:column;
    align-items:center;
    h2{
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.35);
      padding-bottom:1rem;
    }
  }
  .flexitem4{
    display:grid;
    grid-template-columns: 1fr 1fr ;
    justify-content:  space-between;
    
   .info-net{
     display: flex;
     justify-content: center;
    align-items: center;
   }
    
    h3{
        margin-bottom: 1rem;
    font-size: 20px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.35);

    }
    h1 {
        margin-top: 2rem;
        font-weight: 400;
        font-size: 66px;
        line-height: 66px;
    }
  }
 
 } 
 
 
`;



export const ShopItemsWrapper = styled.div`
  width: 90%;
  max-width: ${PAGE_MAX_WIDTH};
 
  justify-content: center; 
  padding:0 10px;
  margin: 0rem auto;
  .event-sec{
   display: flex;
   padding-bottom:5rem;
   
   h2 {
   font-weight: 400;
    font-size: 26px;
    font-style: normal;

   }
   p{
    color: rgba(255, 255, 255, 0.35);
   }
  }
  
  
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
