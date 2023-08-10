import { styled } from 'styled-components';
import { mobileDevice } from '../responsive';


const Conteiner = styled.div`
width: 100%;
height: 100vh;
background: url("https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
background-color: white;
width: 50%;
${mobileDevice({width: "100%"})}

`;
const Title = styled.h1`
padding: 10px 0px 0px 20px;
font-size: 32px;
font-weight: 500;
`;
const Form = styled.form`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding: 20px;
${mobileDevice({gridTemplateColumns: "100%"})}

`;
const Input = styled.input`
padding: 8px 16px;
font-family: 'Quicksand', sans-serif;
font-size: 18px;

&:focus {
	outline: none;
}

&::placeholder {
	color: #39574c;
}
`;

const Agreement = styled.p`
padding: 10px 20px;
font-size: 16px;
font-weight: 400;
`;
const Button = styled.button`
margin: 10px 0px 10px 20px;
padding: 8px 16px;
font-family: 'Quicksand', sans-serif;
background-color: #0ce5e5;
border: none;
font-size: 18px;
letter-spacing: 1.5px;
text-shadow: 0 0 1.5px black;
font-weight: 600;
color: #fff;
transition: all 0.25s ease-in;

&:hover {
cursor: pointer;
opacity: 0.5;
}
`;

const Register = () => {
	return (
		<Conteiner>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder='First Name' />
					<Input placeholder='Last Name' />
					<Input placeholder='Username' />
					<Input placeholder='Email' />
					<Input placeholder='Password' />
					<Input placeholder='Confirm Password' />
				</Form>
				<Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
				<Button>CREATE</Button>
			</Wrapper>
		</Conteiner>
	)
}

export default Register