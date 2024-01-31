import React from "react";
import styled from "@emotion/styled";
import {VoteBtn1,VoteBtn2,VoteBtn3,VoteBtn4,VoteBtn5,VoteBtn6} from "../assets/components/VoteBtn";
import GoTop from "../assets/components/GoTop-Btn";
import GoBack from "../assets/components/Back-Btn";
import PageData from "../PageData.json";
function GroupIndex({ data }) {
  return (
    <Bestdrama>
    <GoBack />

    <div className="sanook-sudjad">
      <img
        src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo.svg"
        alt="สนุกสุดจัด 2023"
      />
      <div className="text">
        <h2>
          หมดเขตโหวต
        </h2>
      </div>
    </div>
    <div className="section">
      {data.map((item, index) => (
        <div className={`frame-${index % 2 === 0 ? 1 : 2}`} key={index}>
          <div className="section-1">
            <div className="block">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="text">
              <h2>{item.name}</h2> <br />
              <p>{item.ch}</p>
            </div>
            <div className="btn">
              {item.VoteBtn === "VoteBtn1" && <VoteBtn1 />}
              {item.VoteBtn === "VoteBtn2" && <VoteBtn2 />}
              {item.VoteBtn === "VoteBtn3" && <VoteBtn3 />}
              {item.VoteBtn === "VoteBtn4" && <VoteBtn4 />}
              {item.VoteBtn === "VoteBtn5" && <VoteBtn5 />}
              {item.VoteBtn === "VoteBtn6" && <VoteBtn6 />}
            </div>
          </div>
          <div className="section-2">
            <div className="text">
              <h2>{item.name}<br />{item.name_eng}</h2> <br />
              <p>{item.ch}</p>
            </div>
            <div className="btn">
              {item.VoteBtn === "VoteBtn1" && <VoteBtn1 />}
              {item.VoteBtn === "VoteBtn2" && <VoteBtn2 />}
              {item.VoteBtn === "VoteBtn3" && <VoteBtn3 />}
              {item.VoteBtn === "VoteBtn4" && <VoteBtn4 />}
              {item.VoteBtn === "VoteBtn5" && <VoteBtn5 />}
              {item.VoteBtn === "VoteBtn6" && <VoteBtn6 />}
            </div>
          </div>
        </div>
      ))}
    </div>
    <GoTop />
  </Bestdrama>
  );
}
export async function getServerSideProps({ req, res,query }) {
  const resData = await PageData;
  return { props: { data:resData[query.cid]} }
}

const Bestdrama = styled.div`
  margin: auto;
  max-width: 1300px;
  background-image: url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/obj/star-black.svg),
    url(https://s.isanook.com/an/0/topoftheyear/static/image/2023/obj/star-black.svg);
  background-size: 750px auto, 760px auto;

  background-position: -500px -350px, calc(100% + 480px) calc(100% + 450px);
  background-repeat: no-repeat;
  padding: 20px 20px 320px;
  position: relative;
  overflow: hidden;
  @media (max-width: 426px) {
    background-position: center -181px, -70px calc(100% - 40px);
    background-size: 535px auto, 70vw auto;
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
    .text {
      padding: 7px 10px;
      @media (min-width: 503px) {
        display: none;
      }
    }
    .frame-1,
    .frame-2{
      margin: 5px;
      align-items: center;
      position: relative;
      display: flex;

      @media (max-width: 503px) {
        background: none;
        position: relative;
        margin: auto;
        margin-bottom: 15px;
      }
    }
    .frame-1 {
      background: #facf05;
      .section-1 {
        background: #facf05;
      }
    }
    .frame-2 {
      background: #eb2114;
      .section-1 {
        background: #eb2114;
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

        @media (min-width: 503px) {
          overflow: hidden;
          aspect-ratio: auto 17/10;
        }
        img {
          width: 100%;
          aspect-ratio: 17/10;
          object-fit: cover;
          top: 0;
        }
      }
      .btn {
       
        @media (min-width: 503px) {
          display: none;
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
      .text {
        display: block;
        word-break: break-word;
        margin-right: auto;
        line-height: 1.3;
        padding: 10px 15px;
        text-align: left;
        margin-bottom: 20px;
        white-space: pre-line;
        font-size: 15px;
        @media (max-width: 503px) {
          display: none;
        }
      }
      .btn {
        @media (max-width: 503px) {
          display: none;
        }
      }
    }
    @media (max-width: 503px) {
      font-size: 10px;
    }
  }
`;

export default GroupIndex;
