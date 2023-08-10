import { styled } from 'styled-components';
import { mobileDevice } from './../responsive';

const Conteiner = styled.div`
width: 100%;
height: 100vh;
background: url("https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
${mobileDevice({width: "100%"})}
`;

const Wrapper = styled.div`
background-color: white;
width: 25%;
display: flex;
flex-direction: column;
${mobileDevice({width: "95%"})}

`;
const Title = styled.h1`
padding: 10px 0px 0px 20px;
font-size: 40px;
font-weight: 500;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
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
width: fit-content;

&:hover {
cursor: pointer;
opacity: 0.5;
}
`;

const NavigateToRegister = styled.p`
font-size: 14px;
font-weight: 400;
margin-left: 20px;
`;

const Link = styled.a`
margin-left: ${props => props.not ? "" : "20px"};
font-size: 14px;
font-weight: 400;
text-decoration: underline;
margin-bottom: 10px;
cursor: pointer;
`;

const Login = () => {
	return (
		<Conteiner>
			<Wrapper>
				<Title>Log In</Title>
				<Form>
					<Input placeholder='Email' />
					<Input placeholder='Password' />
				</Form>
				<Link>Forgot Password?</Link>
				<NavigateToRegister>New here <Link not="not">Register Now!</Link></NavigateToRegister>
				<Button>Log In</Button>
			</Wrapper>
		</Conteiner>
	)
}

export default Login