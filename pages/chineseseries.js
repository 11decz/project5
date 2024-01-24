import React from 'react'
import styled from "@emotion/styled";
function chineseseries() {
  return (
    <Chineseseries>
   
</Chineseseries>
);
}
const Chineseseries = styled.div`
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
   
`;
export default chineseseries