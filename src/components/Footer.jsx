import { styled } from "styled-components"
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiOutlineMail } from "react-icons/ai"
import { BiMap, BiPhoneCall } from "react-icons/bi"
import { mobileDevice } from './../responsive';

const Container = styled.div`
display: flex;
width: 100%;
height: 50vh;
background-color: #39574c;

${mobileDevice({flexDirection: "column", height: "100%"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 15px;
padding: 20px;
`;

const Logo = styled.h1`
font-size: 35px;
color: while;
text-shadow: 0 0 1.2px white;
`;

const Desc = styled.p`
font-size: 18px;
letter-spacing: 1.5px;
`;

const SocialWrapper = styled.div`
display: flex;
gap: 25px;
`;

const Social = styled.span`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
gap: 25px;

${mobileDevice({display: "none"})}
`;

const Title = styled.h1`
font-size: 32px;
text-shadow: 0 0 1.2px white;
`;

const LinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 25px;
`;

const LinksItem = styled.span`
font-size: 18px;
letter-spacing: 1.5px;
`;


const Right = styled.div`
flex: 1;
padding: 20px;
`;

const Contact = styled.h1`
font-size: 32px;
text-shadow: 0 0 1.2px white;
`;

const Street = styled.div`
display: flex;
align-items: center;
font-size: 18px;
`;
const Phone = styled.div`
display: flex;
align-items: center;
font-size: 18px;
`;
const Email = styled.div`
display: flex;
align-items: center;
font-size: 18px;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>RiccoShop.</Logo>
				<Desc>I'm a self-taught software developer with a strong passion for creating elegant and efficient solutions. My skills span from front-end technologies like HTML, CSS, and React to server-side tools such as Node.js, Express, and databases like MySQL and MongoDB. I'm committed to continuous learning, adaptable, and eager to contribute to impactful projects.</Desc>
				<SocialWrapper>
					<Social><AiFillLinkedin /></Social>
					<Social><AiFillGithub /></Social>
					<Social><AiFillFacebook /></Social>
				</SocialWrapper>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<LinksWrapper>
					<LinksItem>Home</LinksItem>
					<LinksItem>Whitelist</LinksItem>
					<LinksItem>Cards</LinksItem>
					<LinksItem>My Account</LinksItem>
					<LinksItem>About</LinksItem>
					<LinksItem>Old Tracking</LinksItem>
					<LinksItem>Men Fashion</LinksItem>
					<LinksItem>Women Fashion</LinksItem>
					<LinksItem>Support</LinksItem>
					<LinksItem>Terms</LinksItem>
				</LinksWrapper>
			</Center>
			<Right>
				<Contact>Contact</Contact>
				<Street>
					<BiMap />
					Georgia, Tbilisi
				</Street>
				<Phone>
					<BiPhoneCall />
					+995 568 81 42 23
				</Phone>
				<Email>
					<AiOutlineMail />
					Tr.Riccorichards@gmail.com
				</Email>
			</Right>
		</Container>
	)
}

export default Footer