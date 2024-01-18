import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: gold;
	padding: 20px 20px;
	border-radius: 10px;

  img{
    width: 100%;
  }
`;

const SingleImage = ({image}) => {
  return (
    <div>
      <Container>
        <img src={image} alt="current Img" />
      </Container>
    </div>
  )
}

export default SingleImage