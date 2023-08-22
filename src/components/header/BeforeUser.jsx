import { styled } from "styled-components"
import { Link } from "react-router-dom";
const Container = styled.div`

`;

const LoginBtn = styled.button`
padding: 8px 14px;
border: none;
letter-spacing: 1.5px;
font-family: 'Quicksand', sans-serif;
transition: all .25s ease-in;
background-color: transparent;
font-weight: 900;
text-decoration: underline;

&:hover {
	cursor: pointer;
	color: #39574c;

}
`
const RegisterBtn = styled.button`
padding: 8px 14px;
border: none;
letter-spacing: 1.5px;
background-color: transparent;
font-family: 'Quicksand', sans-serif;
box-shadow: 0 2.5px 2.5px;
border-radius: 15.5px 0 15.5px 0;
transition: all .25s ease-in;

&:hover {
	cursor: pointer;
	background-color: #39574c;
	color: #fff;
}
`
const LinkStyle = styled(Link)`
color: black;
text-decoration: none;
transition: all .25s ease-in;

&:hover {
color: #39574c;
transform: scale(1.1);
}
`;

const BeforeUser = () => {
	return (
		<Container>
			<LinkStyle to="/login">
				<LoginBtn>SIGN IN</LoginBtn>
			</LinkStyle>
			<LinkStyle to="/register">
				<RegisterBtn>REGISTER</RegisterBtn>
			</LinkStyle>
		</Container>
	)
}

export default BeforeUser