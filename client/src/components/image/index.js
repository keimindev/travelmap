import React, { useState } from 'react'
import styled from 'styled-components'
import SingleImage from '../singleImg';

const Container = styled.div`
  width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: gold;
	padding: 20px 20px;
	border-radius: 10px;
`;

const Images = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(auto-fit, minmax(150px, auto));
`;

const Image = styled.div``

const Close = styled.div`
width: 70px; 
height: 30px;
line-height: 30px;

border: 1px solid #eeeeee;
border-radius: 20px;

position: absolute;
top: -30px; 
right: 0;
cursor: pointer;

`;


const imgList = [
	{id: 1, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 2, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 3, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 4, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 5, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 6, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 7, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 8, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 8, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 8, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 8, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
	{id: 8, img: 'https://bot-log-product.s3.ap-northeast-2.amazonaws.com/product/tving/still/P001647858-%EC%A7%B1%EA%B5%AC%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A422.jpeg'}, 
]

const Shadow = styled.div`
position: fixed;
top: 0;
left:0;

width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.5)

`

const ImageBox = ({setOpen}) => {
	const [openPopup, setOpenPopup] = useState(false)
	const [currentImg, setCurrentImg] = useState("")

  return (
    <>
			<Shadow></Shadow>
        <Container>
					<Close onClick={() => {setOpen(false)}}>close</Close>
            <Images>
							{imgList.map((img) => {
								return(
								<Image key={img.id} 
								style={{
									backgroundImage :`url(${img.img})`,
								  backgroundRepeat: 'no-repeat',
								  backgroundSize: 'cover',
								  }} 
								onClick={() => {
									setOpenPopup(true)
									setCurrentImg(img.img)
								}} />
								)})}
						</Images>
        </Container>
				{openPopup && <SingleImage image={currentImg}/>}
    </>
  )
}


export default ImageBox
