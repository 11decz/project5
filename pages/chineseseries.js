/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "@emotion/styled";
import VoteBtn from "./assets/components/VoteBtn";
import GoTop from "./assets/components/GoTop-Btn";
import GoBack from "./assets/components/Back-Btn";
function chineseseries() {
  return (
    <Chineseseries>
      <GoBack />
      <div className="sanook-sudjad">
        <img
          src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo.svg"
          alt="สนุกสุดจัด 2023"
        />
        <div className="text">
          <h2>
            หมดเขตโหวต <br />
            ซีรีส์จีนสุดปังแห่งปี
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="frame-1">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/08/cat-08-choice_01.png"
                alt="เหนือเมฆาชะตาลิขิต"
              />
            </div>
            <div className="text">
              <h2>
                เหนือเมฆาชะตาลิขิต <br />
                (My Journey to You)
              </h2>{" "}
              <br />
              <p>iQIYI</p>
            </div>
          </div>
          <div className="section-2">
            <div className="text">
              <h2>
                เหนือเมฆาชะตาลิขิต <br />
                (My Journey to You)
              </h2>{" "}
              <br />
              <p>iQIYI</p>
            </div>
            <VoteBtn />
          </div>
        </div>

        <div className="frame-2">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/08/cat-08-choice_02.png"
                alt="กฎล็อกลิขิตรัก"
              />
            </div>
            <div className="text">
              <h2>
                กฎล็อกลิขิตรัก <br />
                (She and Her Perfect Husband)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
          </div>

          <div className="section-2">
            <div className="text">
              <h2>
                กฎล็อกลิขิตรัก <br />
                (She and Her Perfect Husband)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
            <VoteBtn />
          </div>
        </div>

        <div className="frame-3">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/08/cat-08-choice_03.png"
                alt="เสียงกระซิบบอกว่ารัก"
              />
            </div>
            <div className="text">
              <h2>
                เสียงกระซิบบอกว่ารัก <br />
                (Have a Crush on You)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
          </div>
          <div className="section-2">
            <div className="text">
              <h2>
                เสียงกระซิบบอกว่ารัก <br />
                (Have a Crush on You)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
            <VoteBtn />
          </div>
        </div>

        <div className="frame-4">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/08/cat-08-choice_04.png"
                alt="ลำนำกระดูกหยก"
              />
            </div>
            <div className="text">
              <h2>
                ลำนำกระดูกหยก <br />
                (The Longest Promise)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
          </div>
          <div className="section-2">
            <div className="text">
              <h2>
                ลำนำกระดูกหยก <br />
                (The Longest Promise)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
            <VoteBtn />
          </div>
        </div>

        <div className="frame-2">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/08/cat-08-choice_05.png"
                alt="ห้วงคำนึงดวงใจนิรันดร์"
              />
            </div>
            <div className="text">
              <h2>
                ห้วงคำนึงดวงใจนิรันดร์ <br />
                (Lost You Forever)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
          </div>
          <div className="section-2">
            <div className="text">
              <h2>
                ห้วงคำนึงดวงใจนิรันดร์ <br />
                (Lost You Forever)
              </h2>{" "}
              <br />
              <p>WeTV</p>
            </div>
            <VoteBtn />
          </div>
        </div>

        <div className="frame-1">
          <div className="section-1">
            <div className="block">
              <img
                src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/choice/08/cat-08-choice_06.png"
                alt="กู้ภัยรัก นักดับเพลิง"
              />
            </div>
            <div className="text">
              <h2>
                กู้ภัยรัก นักดับเพลิง <br />
                (Fireworks Of My Heart)
              </h2>{" "}
              <br />
              <p>iQIYI</p>
            </div>
          </div>
          <div className="section-2">
            <div className="text">
              <h2>
                กู้ภัยรัก นักดับเพลิง <br />
                (Fireworks Of My Heart)
              </h2>{" "}
              <br />
              <p>iQIYI</p>
            </div>
            <VoteBtn />
          </div>
        </div>
      </div>
      <GoTop />
    </Chineseseries>
  );
}

const Chineseseries = styled.div`
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

export default chineseseries;
