import { styled } from "styled-components"
import { mobileDevice, tabletDevice } from "../utilities/responsive";
const SalesStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #39574c;
color: #fff;
padding: 10px 0;

${tabletDevice({textAlign: "center"})}
${mobileDevice({textAlign: "center"})}
`;

const Announcement = () => {
	return (
		<SalesStyle>
			<h4>🎉 Exciting News! Unleash Your Shopping Fever with Our Spectacular Summer Sale! 🌞</h4>
		</SalesStyle>
	)
}

export default Announcement