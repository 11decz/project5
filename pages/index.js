/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";

function Home() {
  return (
    <TopPage>
      <Navigation>
        <div className="left-nav">
          <a href="https://www.sanook.com/" rel="noreferrer" target="_blank">
          <img className="arrow"
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-rb.svg"
                alt="sanook.com"
              />
            <div className="logo">
              
              <span>กลับไปเว็บไซต์</span>
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo-sanook-d.svg"
                alt="sanook.com"
              />
            </div>
          </a>
        </div>
        <div>
          <nav className="nav-text">
          <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-rr.svg"
                alt="sanook.com"
              />
            <a className="active">
              <span>ร่วมโหวตสนุกสุดจัด</span>
            </a>
            <a href="/topoftheyear/sanookchoice/">
              <span>Sanook Choice</span>
            </a>
            <a href="/topoftheyear/articles/">
              <span>รวมที่สุดแห่งปี 2023</span>
            </a>
            <a href="/topoftheyear/termsandconditions/">
              <span>กติกาและเงื่อนไขกิจกรรม</span>
            </a>
          </nav>
        </div>
      </Navigation>
      <Section2>
        <div className="sanook-sudjad">
        <button className="share-btn">แชร์</button>
        <img src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo.svg" alt="สนุกสุดจัด 2023"/>
        <div className="btn-2"><span></span><span></span><span></span></div>
        </div>
        <div className="text">
          <h2>หมดเขตโหวต ติดตามรายชื่อผู้ชนะได้ในวันที่</h2>
          <span>1 กุมภาพันธ์ 2567 ทาง Facebook, Twitter และ เว็บไซต์ sanook.com</span>
          </div>
      </Section2>
      <Vote>
        <div className="section">
          <div className="imaginecouples">
            <a title="คู่จิ้นที่สุดแห่งปี" href="/imaginecouples/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-03.png"
                  alt="คู่จิ้นที่สุดแห่งปี"
                />
              </div>
              <p className="text">
                <span>คู่จิ้นที่สุดแห่งปี</span>
              </p>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="topactor">
            <a title="นักแสดงชาย,ยอดนิยมแห่งปี" href="/topactor/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-02.png"
                  alt="นักแสดงชาย,ยอดนิยมแห่งปี"
                />
              </div>
              <p className="text">
                <span>
                  นักแสดงชาย
                  <br />
                  ยอดนิยมแห่งปี
                </span>
              </p>
              <div>
                <div className="btn">
                  <button className="vote-btn-2">โหวต</button>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="topactress">
            <a
              title="นักแสดงหญิง,ยอดนิยมแห่งปี"
              href="/topactress/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-03.png"
                  alt="นักแสดงหญิง,ยอดนิยมแห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  นักแสดงหญิง <br /> ยอดนิยมแห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="malerisingstar">
            <a
              title="คนดังดาวรุ่งชาย,แห่งปี"
              href="/malerisingstar/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-04.png"
                  alt="คนดังดาวรุ่งชาย,แห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  คนดังดาวรุ่งชาย <br /> แห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn-3">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="femalerisingstar">
            <a
              title="คนดังดาวรุ่งหญิง,แห่งปี"
              href="/femalerisingstar/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-05.png"
                  alt="คนดังดาวรุ่งหญิง,แห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  คนดังดาวรุ่งหญิง <br /> แห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="bestseries">
            <a title="ซีรีส์ที่สุดแห่งปี" href="/bestseries/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-06.png"
                  alt="ซีรีส์ที่สุดแห่งปี"
                />
              </div>
              <div className="text">
                <span>ซีรีส์ที่สุดแห่งปี</span>
              </div>
              <div className="btn">
                <button className="vote-btn-2">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="bestdrama">
            <a title="ละครไทยที่สุดแห่งปี" href="/bestdrama/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-07.png"
                  alt="ละครไทยที่สุดแห่งปี"
                />
              </div>
              <div className="text">
                <span>ละครไทยที่สุดแห่งปี</span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="chineseseries">
            <a
              title="ซีรีส์จีนสุดปังแห่งปี"
              href="/chineseseries/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-08.png"
                  alt="ซีรีส์จีนสุดปังแห่งปี"
                />
              </div>
              <div className="text">
                <span>ซีรีส์จีนสุดปังแห่งปี</span>
              </div>
              <div className="btn">
                <button className="vote-btn-3">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="bestmovies">
            <a
              title="ภาพยนตร์ไทย,ที่สุดแห่งปี"
              href="/bestmovies/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-09.png"
                  alt="ภาพยนตร์ไทย,ที่สุดแห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  ภาพยนตร์ไทย <br /> ที่สุดแห่งปี{" "}
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="hitsong">
            <a title="เพลงไทยมาแรง,แห่งปี" href="/hitsong/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-10.png"
                  alt="เพลงไทยมาแรง,แห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  เพลงไทยมาแรง <br /> แห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn-2">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="bestsong">
            <a title="เพลงไทยยอดเยี่ยม,แห่งปี" href="/bestsong/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-11.png"
                  alt="เพลงไทยยอดเยี่ยม,แห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  
                  เพลงไทยยอดเยี่ยม <br /> แห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="topartist">
            <a title="ศิลปินดาวรุ่งแห่งปี" href="/topartist/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-12.png"
                  alt="ศิลปินดาวรุ่งแห่งปี"
                />
              </div>
              <div className="text">
                <span>ศิลปินดาวรุ่งแห่งปี</span>
              </div>
              <div className="btn">
                <button className="vote-btn-3">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="tpopartist">
            <a title="ศิลปินเพลง T-POP,แห่งปี" href="/tpopartist/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-13.png"
                  alt="ศิลปินเพลง T-POP,แห่งปี"
                />
              </div>
              <div className="text">
                <span>
                
                  ศิลปินเพลง T-POP <br /> แห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="empoweringwoman">
            <a
              title="นางงาม,แรงบันดาลใจแห่งปี"
              href="/empoweringwoman/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-14.png"
                  alt="นางงาม,แรงบันดาลใจแห่งปี"
                />
              </div>
              <div className="text">
                <span>
                  นางงาม <br /> แรงบันดาลใจแห่งปี
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn-2">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="popularvote">
            <a
              title="สนุกสุดจัด,Popular Vote"
              href="/popularvote/"
            >
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-15.png"
                  alt="สนุกสุดจัด,Popular Vote"
                />
              </div>
              <div className="text">
                <span>
           
                  สนุกสุดจัด <br /> Popular Vote
                </span>
              </div>
              <div className="btn">
                <button className="vote-btn">โหวต</button>
              </div>
            </a>
          </div>
        </div>
        <div className="section">
          <div className="thaifolksong">
            <a title="นักร้องลูกทุ่งยอดนิยม" href="/thaifolksong/">
              <div className="pic">
                <img
                  src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/cate/cat-16.png"
                  alt="นักร้องลูกทุ่งยอดนิยม"
                />
              </div>
              <div className="text">
                <span>นักร้องลูกทุ่งยอดนิยม</span>
              </div>
              <div className="btn">
                <button className="vote-btn-3">โหวต</button>
              </div>
            </a>
          </div>
        </div>
      </Vote>
    </TopPage>
  );
}

const TopPage = styled.div`
  font-size: 14px;
 max-width: 1300px;
  margin: auto;
  background: rgb(255, 255, 255);
`;
const Navigation = styled.div`
  color: #000;
  box-sizing: border-box;
  width: 100%;
  z-index: 999;
  top: 0;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width: 100%; 
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  .left-nav {
    display: block;
    height: 100%;
    left: 0;
    .arrow{
      transform: rotate(-180deg) translateY(50%);
      top: 50%;
      left: 0;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      position: sticky;
    }
    /* .logo::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 30px;
      height: 30px;
      background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-rb.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transform: rotate(-180deg) translateY(50%);
    } */
    .logo {
      display: inline-block;
      position: relative;
      color: #000;
      padding-left: 35px
       img {
        height: 25px;
      }
    }
  }
  .nav-text {
    position: relative;
    display: flex;
    align-items: center;
    right: 0;
    img{
      margin-right: 5px;
      width: 15px;
    }
    a {
      margin-right: 15px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      
      &:hover {
        color: #eb2114;
      }
    }
    .active {
      color: #eb2114;
      
      /* background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-rr.svg);
      background-repeat: no-repeat;
      background-position: 3px center;
      background-size: auto 15px; */
    }
  }
  @media (max-width: 426px) {
     display: none;
     }
`;
const Section2 = styled.div`
  display: flex;
 flex-flow: row;
 justify-content: space-between;
 padding: 20px;
  .sanook-sudjad{
    max-width: 250px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  margin: 0 auto; 
    img{
      width: 100%;
    position: relative;
    z-index: 1;
    &::after {
        content: "";
        position: absolute;
        top: -3px;
        right: 13px;
        width: 45px;
        height: 45px;
        background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo-s.svg);
        background-repeat: no-repeat;
        background-size: cover;
        animation: spin 1s infinite linear;
      }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  }
  .text{
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  }
  .share-btn{
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 55px;
    left: 10px;
    z-index: 11;
    border: 0;
    outline: 0;
    background-color: #E7E7E7;
    background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/obj/blink-red.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90% auto;
    border-radius: 50%;
    color: #fff;
  }
  .btn-2{
    display: block;
    background-color: #000;
    text-transform: uppercase;
    width: 50px;
    height: 50px;
    padding: 0;
    border-radius: 50%;
    position: absolute;
    top: 55px;
    right: 10px;
    z-index: 11;
    user-select: none;
    padding-top: 4px;
    border: 2px solid #fff;
    box-sizing: border-box;
    span{
      width: 60%;
    height: 2px;
    background-color: #fff;
    display: block;
    margin: 8px auto;
    }
  }
  .share-btn,
  .btn-2{
    @media (min-width: 426px) {
    display: none;
     
  }
  }
  @media (max-width: 426px) {
    flex-flow: column;
     
  }
  `;
const Vote = styled.div`
  position: relative;
  display: flex;
        flex-wrap: wrap;
        justify-content: center;
  box-sizing: border-box;
  .section {
    position: relative;
   padding: 10px;
    column-gap: 10px;
    box-sizing: border-box;
    transition: transform 0.3s ease;
   
    &:hover {
      animation: bounce2 2s ease infinite;
     
      @keyframes bounce2 {
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-30px);
        }
      }
    }
    }
    
    .pic {   
      position: relative;
      img{
         width: 100%;
          max-width: 260px;
      }  
    }

    .text {
      text-decoration: none;
      font-weight: 600;
      font-size: 20px;
      position: absolute;
      width: 100%;
      overflow: hidden;
    }
    .btn {
      position: relative;
      .vote-btn {
        position: absolute;
        bottom: 3px;
        width: 100%;
        overflow: hidden;
        color: white;
        border: none;
        background: #c0c0c0;
        padding: 10px 10px;
        width: 100%;
        font-size: 30px;
      }
      .vote-btn-2 {
        position: absolute;
        bottom: 6px;
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
      .vote-btn-3 {
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
      .vote-btn::after,
      .vote-btn-2::after,
      .vote-btn-3::after {
        content: " > ";
        color: white;
        transform: translateY(-50%);
      }
    }

    .imaginecouples {
      .text {
        color: white;
        bottom: 76px;
        left: 20px;
        padding: 0 3px
      }
    }
    .topactor {
      .text {
        top: 7px;
        left: 60px;
        padding: 0 3px;
        color: black;
      }
    }
    .malerisingstar {
      .text {
        color: white;

        top: 10px;
        left: 20px;
      }
    }
    .topactress {
      .text {
        color: white;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .femalerisingstar {
      .text {
        color: white;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .bestseries {
      .text {
        color: white;
        top: 20px;
        left: 60px;
        padding: 0 3px
      }
    }
    .bestdrama {
      .text {
        color: black;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .chineseseries {
      .text {
        color: white;
        top: 10px;
        left: 20px;
      }
    }
    .bestmovies {
      .text {
        color: white;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .hitsong {
      .text {
        color: white;
        top: 10px;
        left: 60px;
        padding: 0 3px
      }
    }
    .bestsong {
      .text {
        color: white;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .topartist {
      .text {
        color: black;
        top: 10px;
        left: 20px;
      }
    }
    .tpopartist {
      .text {
        color: black;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .empoweringwoman {
      .text {
        color: white;
        top: 10px;
        left: 60px;
        padding: 0 3px
      }
    }
    .popularvote {
      .text {
        color: white;
        bottom: 75px;
        padding: 0 30px;
      }
    }
    .thaifolksong {
      .text {
        color: white;
        top: 10px;
        left: 20px;
      }
    }
  
`;

export default Home;
