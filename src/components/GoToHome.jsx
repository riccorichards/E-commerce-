import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

const Button = styled.button`
padding: 8px 16px;
background-color: transparent;
border: 0.5px solid #39574c;
color: #39574c;
transition: all .25s ease-in;
border-radius: 5px;

&:hover {
	cursor: pointer;
	background-color: #39574c;
	color: #fff;
}
`;

const GoToHome = () => {
	const navigate = useNavigate();
	return (
		<Button onClick={() => navigate("/")}>
			Go To Home
		</Button>
	)
}

export default GoToHome