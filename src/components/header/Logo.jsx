import { useNavigate } from 'react-router-dom';
import { mobileDevice } from '../../utilities/responsive';
import { styled } from 'styled-components';



const LogoWrapper = styled.h1`
font-size: 35px;
font-weight: bold;
cursor: pointer;
${mobileDevice({ fontSize: "24px" })}
`
const StyleR = styled.span`
color: #39574c;
filter: blur(0.5px);
text-shadow: 0 0 2px black;
`;

const Logo = () => {
	const navigate = useNavigate()
	return (<LogoWrapper onClick={() => navigate("/")}><StyleR>R</StyleR>iccoShopp.</LogoWrapper>)
}

export default Logo