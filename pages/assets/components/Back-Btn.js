/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from "@emotion/styled";
import Link from 'next/link';
function GoBack() {
  return (
    <BackBtn>
        <div className="btn-back">
        <Link href="/">
            <span>
              <img src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-l.svg" alt="back" />
              <small>Back</small>
            </span>
        </Link>
      </div>
    </BackBtn>
  )
}
const BackBtn = styled.div`
.btn-back {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    box-sizing: border-box;
    z-index: 2;
    &::before {
      box-sizing: border-box;
      content: "";
      position: absolute;
      height: 100%;
      background-color: #000;
      left: 0;
      right: 0;
      border: 2px solid #fff;
      border-radius: 40px;
      z-index: -1;
    }
    span {
      font-weight: 500;
      font-size: 18px;
      height: 54px;
      width: 130px;
      line-height: 48px;
      padding: 8px 15px;

      @media (max-width: 426px) {
        box-sizing: border-box;
        display: inline-block;
        color: #fff;
        height: 52px;
        width: 52px;
        z-index: 20;
        position: relative;
      }
    }
    img {
      vertical-align: middle;
      margin-top: -2px;
      margin-right: 5px;
      width: 22px;
    }
    small {
      display: inline-block;
      color: #fff;
      @media (max-width: 426px) {
        display: none;
      }
    }
  }
`;
export default GoBack