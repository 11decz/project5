import React from "react";
import styled from "@emotion/styled";
function Home() {
    return (
      <TopPage>
        <Navigation>
          <div >
          <a href="https://www.sanook.com/" rel="noreferrer" target="_blank" class="css-1a8eloq">
            
              
                <img src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/icon/arrow-l.svg" alt=""/>
                
                <img src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo-sanook-m.svg" alt="sanook.com" class="css-xie516"/>
                
                
                  <span class="css-171r0df">กลับไปเว็บไซต์
                  <img src="https://s.isanook.com/an/0/topoftheyear/static/image/2023/logo-sanook-d.svg" alt="sanook.com" class="css-1oysr8r"/>
                  </span></a>
          </div>
        </Navigation>
      </TopPage>
    );
}

const TopPage = styled.div`
max-width: 1300px;
background: rgb(255, 255, 255);
    height: 100%;
    padding-top: 0px;
`;
const Navigation = styled.div`
top: 0px;
    padding-top: 20px;
    position: relative;
    height: 83px;

`;
export default Home;