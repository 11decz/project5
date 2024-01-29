/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import {VoteBtn1,VoteBtn2,VoteBtn3,VoteBtn4,VoteBtn5,VoteBtn6 }from "./assets/components/VoteBtn";
import GoTop from "./assets/components/GoTop-Btn";
import GoBack from "./assets/components/Back-Btn";
function femalerisingstar() {
  return (
    <Femalerisingstar>
      <GoBack />
      <div className="sanook-sudjad">
        <img
          src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo.svg"
          alt="สนุกสุดจัด 2023"
        />
        <div className="text">
          <h2>
            หมดเขตโหวต <br />
            คนดังดาวรุ่งหญิงแห่งปี
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="frame-1">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/05/cat-05-choice_01.png"
                alt="ฟรีน สโรชา"
              />
            </div>
            <h2>ฟรีน สโรชา</h2>
          </div>
          <div className="section-2">
            <h2>ฟรีน สโรชา</h2>
            <VoteBtn1 />
          </div>
        </div>

        <div className="frame-2">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/05/cat-05-choice_02.png"
                alt="เบคกี้ รีเบคก้า"
              />
            </div>
            <h2>เบคกี้ รีเบคก้า</h2>
          </div>

          <div className="section-2">
            <h2>เบคกี้ รีเบคก้า</h2>
            <VoteBtn2 />
          </div>
        </div>

        <div className="frame-3">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/05/cat-05-choice_03.png"
                alt="อแมนด้า ออบดัม"
              />
            </div>
            <h2>อแมนด้า ออบดัม</h2>
          </div>
          <div className="section-2">
            <h2>อแมนด้า ออบดัม</h2>
            <VoteBtn3 />
          </div>
        </div>

        <div className="frame-4">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/05/cat-05-choice_04.png"
                alt="กานต์ ณัฐชา"
              />
            </div>
            <h2>กานต์ ณัฐชา</h2>
          </div>
          <div className="section-2">
            <h2>กานต์ ณัฐชา</h2>
            <VoteBtn4 />
          </div>
        </div>

        <div className="frame-2">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/05/cat-05-choice_05.png"
                alt="เฌอปราง อารีย์กุล"
              />
            </div>
            <h2>เฌอปราง อารีย์กุล</h2>
          </div>
          <div className="section-2">
            <h2>เฌอปราง อารีย์กุล</h2>
            <VoteBtn5 />
          </div>
        </div>

        <div className="frame-1">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/05/cat-05-choice_06.png"
                alt="มายด์ อาทิตยา"
              />
            </div>
            <h2>มายด์ อาทิตยา</h2>
          </div>
          <div className="section-2">
            <h2>มายด์ อาทิตยา</h2>
            <VoteBtn6 />
          </div>
        </div>
      </div>
      <GoTop />
    </Femalerisingstar>
  );
}

const Femalerisingstar = styled.div`
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
    h2 {
      padding: 7px 10px;
      @media (min-width: 503px) {
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
      @media (max-width: 503px) {
        background: none;
      }
    }
    .frame-2 {
      background: #eb2114;
      .section-1 {
        background: #eb2114;
      }
      @media (max-width: 503px) {
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
      @media (max-width: 503px) {
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
      @media (max-width: 503px) {
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
        @media (max-width: 503px) {
          display: none;
        }
      }

    }
    @media (max-width: 426px) {
      font-size: 10px;
    }
  }
`;

export default femalerisingstar;
