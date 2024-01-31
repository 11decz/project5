import React from 'react'
import styled from "@emotion/styled";
function VoteCover1() {
  return (
    <VoteCover>
        <div className="btn">
    <button className="vote-btn1">โหวต</button>
  </div>
    </VoteCover>
    
  )
}
function VoteCover2() {
    return (
        <VoteCover>
           <div className="btn">
      <button className="vote-btn2">โหวต</button>
    </div> 
        </VoteCover>
      
    )
  }
  function VoteCover3() {
    return (
        <VoteCover>
           <div className="btn">
      <button className="vote-btn3">โหวต</button>
    </div> 
        </VoteCover>
      
    )
  }
  
const VoteCover = styled.div`
    position: relative;
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
    .vote-btn1 {
      position: absolute;
      bottom: 3px;
      width: 100%;
      left: 0;
      overflow: hidden;
      color: white;
      border: none;
      background: #c0c0c0;
      padding: 10px 10px;
      width: 100%;
      font-size: 30px;
    }
    .vote-btn2 {
      position: absolute;
      bottom: 6px;
      left: 0;
      width: 100%;
      overflow: hidden;
      color: white;
      border: none;
      line-height: 30px;
      background: #c0c0c0;
      padding: 10px 10px;
      width: 100%;
      border-radius: 0 0 75px 75px;
      font-size: 30px;
      box-sizing: border-box;
    }
    .vote-btn3 {
        left: 0;
      position: absolute;
      bottom: 3px;
      width: 100%;
      overflow: hidden;
      color: white;
      border: none;
      background: #c0c0c0;
      padding: 10px 10px;
      width: 100%;
      border-radius: 0 0 75px 0;
      font-size: 30px;
    }
    .vote-btn1::after,
    .vote-btn2::after,
    .vote-btn3::after {
      content: " > ";
      color: white;
      transform: translateY(-50%);
    }
  

`;
export {VoteCover1,VoteCover2,VoteCover3}