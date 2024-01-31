/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import GoTop from "./assets/components/GoTop-Btn";
import { VoteCover1,VoteCover2,VoteCover3 } from "./assets/components/VoteBtn-Index";
import PageIndex from "./PageIndex.json";
function Home({data}) {
 
  const {vote,navigation, section2}= data;
   const VoteComponent = (voteBtn) => {
    switch (voteBtn) {
      case 'VoteCover1':
        return <VoteCover1 />;
      case 'VoteCover2':
        return <VoteCover2 />;
      case 'VoteCover3':
        return <VoteCover3 />;
    
      default:
        return null;
    }
  };
  
  return (
    <TopPage>
      <Navigation>
      <div className="left-nav">
          <a href={navigation.leftNav.link} rel="noreferrer" target="_blank">
            <img
              className="arrow"
              src={navigation.leftNav.imageSrc}
              alt="sanook.com"
            />
            <div className="logo">
              <span>{navigation.leftNav.logo.text}</span>
              <img
                src={navigation.leftNav.logo.imageSrc}
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
            {navigation.navText.map((navItem, index) => (
              <a key={index} className={navItem.active ? 'active' : ''} href={navItem.href}>
                <span>{navItem.text}</span>
              </a>
            ))}
          </nav>
        </div>
      </Navigation>
      <Section2>
        <div className="sanook-sudjad">
          <button className="share-btn">{section2.sanookSudjad.shareBtn}</button>
          <img
            src={section2.sanookSudjad.imageSrc}
            alt="สนุกสุดจัด 2023"
          />
          <div className="btn-2">
            {section2.sanookSudjad.btn2.spans.map((span, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>
        <div className="text">
          <h2>{section2.text.heading}</h2>
          <span>{section2.text.dateInfo}</span>
        </div>
      </Section2>
      <Vote>
      {vote.categories.map((item, index) => (
        <div key={index} className="section">
          <div className={item.href.replace('/', '')}>
            <a title={item.title} href={item.href}>
              <div className="pic">
                <img src={item.imageSrc} alt={item.name} />
              </div>
              {/* <div className="text">
                <span dangerouslySetInnerHTML={{ __html: item.name }} />
              </div> */}
              {VoteComponent(item.voteBtn)}
            </a>
          </div>
        </div>
      ))}
   
      </Vote>
      <GoTop/>
    </TopPage>
  );
}

export async function getServerSideProps() {
  const res = await PageIndex;
  // const data = await res.json()
  console.log(res);
  return { props: { data:res } }
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
    .arrow {
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
      padding-left: 35px img {
        height: 25px;
      }
    }
  }
  .nav-text {
    position: relative;
    display: flex;
    align-items: center;
    right: 0;
    img {
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
  .sanook-sudjad {
    max-width: 250px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px 64px;
    img {
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
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .text {
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
  }
  .share-btn {
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
    background-color: #e7e7e7;
    background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/obj/blink-red.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90% auto;
    border-radius: 50%;
    color: #fff;
  }
  .btn-2 {
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
    span {
      width: 60%;
      height: 2px;
      background-color: #fff;
      display: block;
      margin: 8px auto;
    }
  }
  .share-btn,
  .btn-2 {
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
    img {
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
  /* .btn {
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
  } */

  .imaginecouples {
    .text {
      color: white;
      bottom: 76px;
      left: 20px;
      padding: 0 3px;
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
      padding: 0 3px;
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
      padding: 0 3px;
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
      padding: 0 3px;
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
