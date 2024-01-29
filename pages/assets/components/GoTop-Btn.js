import React from 'react'
import styled from "@emotion/styled";
function GoTop() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
  return (
    <Scroll onClick={scrollToTop}>
      <div className='text'>
        กลับขึ้นด้านบน
      </div>
      
    </Scroll>
       
      
  )
}

const Scroll = styled.div`
position: relative;
  width: 77px;
  height: 77px;
  margin: 0 auto;
  cursor: pointer;
&::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-t.svg);
  background-repeat: no-repeat;
  background-position: center center;
  box-sizing: border-box;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  background-color: rgb(29, 0, 237);
  z-index: 1;
 }
 .text{
    position: relative;
    color: rgb(29, 0, 237);
    bottom: -92px;
    white-space: nowrap;
    font-size: 14px;
 }
`;

export default GoTop