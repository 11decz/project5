import React from 'react'
import styled from "@emotion/styled";
function popularvote() {
  return (
    <Popularvote>
    <div className="btn-back" ><span>
   <img src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-l.svg" alt="back"/>
   <small>Back</small>
   </span>
   </div>
 
 <div className="sanook-sudjad">
   <img
     src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo.svg"
     alt="สนุกสุดจัด 2023"
   />
   <div className="text">
     <h2>
       หมดเขตโหวต <br />
       สนุกสุดจัด Popular Vote
     </h2>
   </div>
 </div>
 <div className="section">
   <div className="frame-1">
     <div className="section-1">
       <div className="block">
         <img
           src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/15/cat-15-choice_01.png"
           alt="อิงฟ้า วราหะ"
         />
       </div>
       <h2>อิงฟ้า วราหะ</h2>
     </div>
     <div className="section-2">
       <h2>อิงฟ้า วราหะ</h2>
       <div className="btn">
         <button>
           <span>โหวต</span>
         </button>
       </div>
     </div>
   </div>

   <div className="frame-2">
     <div className="section-1">
       <div className="block">
         <img
           src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/15/cat-15-choice_02.png"
           alt="แพทริค ณัฐวรรธ์"
         />
       </div>
       <h2>แพทริค ณัฐวรรธ์</h2>
     </div>

     <div className="section-2">
       <h2>แพทริค ณัฐวรรธ์</h2>
       <div className="btn">
         <button>
           <span>โหวต</span>
         </button>
       </div>
     </div>
   </div>

   <div className="frame-3">
     <div className="section-1">
       <div className="block">
         <img
           src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/15/cat-15-choice_03.png"
           alt="ปาย ฉัตรนภา"
         />
       </div>
       <h2>ปาย ฉัตรนภา</h2>
     </div>
     <div className="section-2">
       <h2>ปาย ฉัตรนภา</h2>
       <div className="btn">
         <button>
           <span>โหวต</span>
         </button>
       </div>
     </div>
   </div>

   <div className="frame-4">
     <div className="section-1">
       <div className="block">
         <img
           src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/15/cat-15-choice_04.png"
           alt="เป๊ก ผลิตโชค"
         />
       </div>
       <h2>เป๊ก ผลิตโชค</h2>
     </div>
     <div className="section-2">
       <h2>เป๊ก ผลิตโชค</h2>
       <div className="btn">
         <button>
           <span>โหวต</span>
         </button>
       </div>
     </div>
   </div>

   <div className="frame-2">
     <div className="section-1">
       <div className="block">
         <img
           src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/15/cat-15-choice_05.png"
           alt="เฌอปราง อารีย์กุล"
         />
       </div>
       <h2>เฌอปราง อารีย์กุล</h2>
     </div>
     <div className="section-2">
       <h2>เฌอปราง อารีย์กุล</h2>
       <div className="btn">
         <button>
           <span>โหวต</span>
         </button>
       </div>
     </div>
   </div>

   <div className="frame-1">
     <div className="section-1">
       <div className="block">
         <img
           src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/15/cat-15-choice_06.png"
           alt="วิน เมธวิน"
         />
       </div>
       <h2>วิน เมธวิน</h2>
     </div>
     <div className="section-2">
       <h2>วิน เมธวิน</h2>
       <div className="btn">
         <button>
           <span>โหวต</span>
         </button>
       </div>
     </div>
   </div>
 </div>
</Popularvote>
);
}
const Popularvote = styled.div`
margin: auto;
max-width: 1300px;
background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/obj/star-black.svg), url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/obj/star-black.svg);
background-size: 750px auto,760px auto;

background-position: -500px -350px,calc(100% + 480px) calc(100% + 450px);
background-repeat: no-repeat;
padding: 20px 20px 320px;
position: relative;
overflow: hidden;
@media (max-width: 426px) {
 background-position: center -181px,-70px calc(100% - 40px);
background-size: 535px auto,70vw auto;
 }
 .btn-back{
color: #fff;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
position: absolute;
box-sizing: border-box;;
z-index: 2;
&::before{
 box-sizing: border-box;
content: '';
position: absolute;
height: 100%;
background-color: #000;
left: 0;
right: 0;
border: 2px solid #fff;
border-radius: 40px;
z-index: -1;
}
span{
 font-weight: 500;
font-size: 18px;
height: 54px;
width: 130px;
line-height: 59px;
padding: 8px 15px;
@media (max-width: 426px) {
 box-sizing: border-box;
display: inline-block;
color: #fff;
height: 61px;
width: 61px;
z-index: 20;
position: relative;
 }
}
img{
 margin-top: -2px;
margin-right: 5px;
width: 28px
}
small{
 display: inline-block;
 @media (max-width: 426px) {
display: none;
 }
}
 }
.sanook-sudjad {
max-width: 250px;
box-sizing: border-box;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center; 
text-align: center;
margin: 0 auto; 

img {
width: 100%;
position: relative;
z-index: 1;
padding: 55px 0px 0px;
}

.text {
display: flex;
flex-flow: column;
@media (max-width: 426px) {
color: #fff;
}
}
}
.section {
box-sizing: border-box;
margin-bottom: 15px;
min-width: 0;
flex-wrap: wrap;
margin-left: -7px;
margin-right: -7px;
display: flex;
flex-flow: column;
padding: 0 10px;
h2 {
    padding: 7px 10px;
 @media (min-width: 427px) {
   display: none;
 }
}
.frame-1,
.frame-2,
.frame-3,
.frame-4 {
 margin: 5px;
 align-items: center;
 position: relative;
 display: flex;
 
 /* @media (max-width: 426px) {
   .frame-1,
   .frame-2,
   .frame-3,
   .frame-4 {
     background: none;
   }
 } */
}
.frame-1 {
 background: #facf05;
 .section-1 {
   background: #facf05;
 }
 @media (max-width: 426px) {
   background: none;
 }
}
.frame-2 {
 background: #eb2114;
 .section-1 {
   background: #eb2114;
 }
 @media (max-width: 426px) {
   background: none;
 }
}
.frame-3 {
 background: #1d00ed;
 .section-1 {
   background: #1d00ed;
 }
 h2 {
   color: #fff;
 }
 @media (max-width: 426px) {
   background: none;
 }
}
.frame-4 {
 background: #000;
 .section-1 {
   background: #000;
 }
 h2 {
   color: #fff;
 }
 @media (max-width: 426px) {
   background: none;
 }
}
.section-1 {
 flex: 0 0 250px;
 max-width: 190px;

 .block {
   display: block;
   position: relative;
   width: 100%;
   height: auto;
   overflow: hidden;
   aspect-ratio: auto 17/10;
   img {
     width: 100%;
     aspect-ratio: 17/10;
     object-fit: cover;
     top: 0;
   }
 }
}
.section-2 {
 flex: 0 0 calc(100% - 270px);
 max-width: calc(100% - 270px);

 justify-content: space-between;
 display: flex;
 justify-content: center;
 align-items: center;
 @media (max-width: 426px) {
     
     flex: 0 0 50%;
max-width: 35%;
   }
 h2 {
   display: block;
   word-break: break-word;
   font-weight: 600;
   line-height: 1.3;
   padding: 10px 15px;
   text-align: left;
   margin-bottom: 20px;
   white-space: pre-line;
   @media (max-width: 426px) {
     display: none;
  
   }
 }

 .btn {
   opacity: 0.6;
   display: flex;
   align-items: center;
   
  
   position: relative;
   margin-left: auto;
   min-width: 90px;
   span {
     color: #fff;
     font-weight: 600;
     font-size: 20px;
   }
   button {
     outline: none;
     position: absolute;

     width: 100%;
     background-color: #000;
     border: 2px solid #fff;
     border-radius: 40px;
     display: flex;
     align-items: center;
     justify-content: center;
   }
 }
}
@media (max-width: 426px) {
  font-size: 10px;
 }
}
`;

export default popularvote