import React from "react";
import styled from "@emotion/styled";
import Popup from "reactjs-popup";
import VoteData from "../../VoteData.json";


function VoteBtn() {
  const { vote, text } = VoteData;
  const sortedVote = vote.sort((a, b) => parseInt(b.point) - parseInt(a.point));
  const top3Users = sortedVote.slice(0, 3);
  return (
    <CustomPopup
      trigger={
        <Btn>
          <button>
            <span>โหวต</span>
          </button>
        </Btn>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <div dangerouslySetInnerHTML={{ __html: text?.text }} />
            {top3Users.map((item, index) => (
              <div key={index}>
                {item && (
                  <div>
                    <p>{item.user}</p>
                    <ProgressBar progress={parseInt(item.point)} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </CustomPopup>
  );
}

const ProgressBar = styled.div`
  background-color: #ddd;
  height: 17px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 5px;
  width: 100%;

  &::before {
    content: "${(props) => (props.progress ? props.progress + "%" : "")}";
    display: block;
    width: ${(props) => props.progress}%;
    height: 100%;
    background-color: rgb(29, 0, 237);
    text-align: center;
    line-height: 17px;
    color: #ddd;
    font-size: 10px;
    animation: progressBarAnimation 1s ease-out;
    @keyframes progressBarAnimation {
  from {
    width: 0;
  }
  to {
    width: ${(props) => props.progress}%;
  }
}
  }
`;

const CustomPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  &-content {
    background: #fff;
    padding: 26px 63px;
    border-radius: 8px;

    margin: 20px auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    .close {
      position: absolute;
      top: 4px;
      right: 10px;
      width: 30px;
      height: 30px;
      line-height: 0;
      font-size: 32px;
      border-radius: 50px;
      cursor: pointer;
      color: #fff;
      background: #ff0000;
    }

    .content {
      margin-top: 10px;
      h3{
        margin-bottom: 10px;
      }
      h4 {
        justify-content: center;
        text-align: center;
        margin-bottom: 5px;
        
      }

      p {
        margin-bottom: -3px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
const Btn = styled.div`
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
    cursor: pointer;
    width: 100%;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default VoteBtn;
