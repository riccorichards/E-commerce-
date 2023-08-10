import { styled } from "styled-components"
import { IoSend } from "react-icons/io5"
import { mobileDevice } from './../responsive';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 70vh;
gap: 15px;
`;
const Title = styled.div`
font-size: 75px;
font-weight: 900;
${mobileDevice({fontSize: "45px"})}

`;
const Desc = styled.div`
font-size: 35px;
${mobileDevice({fontSize: "18px", textAlign: "center"})}
`;
const SubmitStyle = styled.div`
display: flex;
gap: 5px;
margin-top: 20px;
width: 35%;
${mobileDevice({margin: "5px", width: "80%"})}
`;

const Input = styled.input`
flex: 8;
font-family: 'Quicksand', sans-serif;
letter-spacing: 1.5px;
font-size: 18px;
padding: 7px 10px;


&:focus {
	outline: none;
}

&::placeholder{
	color: #39574c;
}
`;

const Button = styled.button`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
padding: 5px 7.5px;
background-color: #39574c;
border: none;
color: white;

&:hover {
	cursor: pointer;
}
`

const NewsLetter = () => {
	return (
		<Container>
			<Title>NewsLetters</Title>
			<Desc>Get Timely updates from your favorite products</Desc>
			<SubmitStyle>
				<Input placeholder="Your Email"/>
				<Button><IoSend/></Button>
			</SubmitStyle>
		</Container>
	)
}

export default NewsLetter