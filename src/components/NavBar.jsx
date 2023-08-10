import { styled } from 'styled-components';
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material"
import { mobileDevice } from './../responsive';

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 15px;
align-items: center;
${mobileDevice({padding: "10px", alignItems: "center"})}

`;

const SearchSide = styled.div`
flex: 1;
display: flex;
align-items: center;
gap: 15px;
${mobileDevice({display: "none"})}

`

const Language = styled.div`
font-size: 16px;

${mobileDevice({display: "none"})}
`;

const SearchWrapper = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
padding: 5px;
margin-left: 25px;

`;

const Input = styled.input`
border: none;
&:focus {
	outline: none;
}
`;


const LogoWrapper = styled.div`
flex: 1;

`

const Logo = styled.h1`
font-size: 35px;
font-weight: bold;
text-align: center;
${mobileDevice({fontSize: "24px"})}

`

const ProfileSide = styled.div`
flex: 1;
display: flex;
gap: 15px;
margin-right: 10px;
justify-content: flex-end;
`

const MenuItems = styled.span`
font-size: 18px;
${mobileDevice({fontSize: "14px"})}

`;

const ShoppingSVG = styled.span`
font-size: 20px;
${mobileDevice({fontSize: "16px"})}
`;

const NavBar = () => {
	return (
		<Container>
			<Wrapper>
				<SearchSide>
					<Language>EN</Language>
					<SearchWrapper>
						<Input />
						<AiOutlineSearch />
					</SearchWrapper>
				</SearchSide>
				<LogoWrapper><Logo>RiccoShop.</Logo></LogoWrapper>
				<ProfileSide>
					<MenuItems>REGISTER</MenuItems>
					<MenuItems>SIGN IN</MenuItems>
					<MenuItems>
						<Badge badgeContent={3} color="secondary">
							<ShoppingSVG><AiOutlineShoppingCart /></ShoppingSVG>
						</Badge>
					</MenuItems>
				</ProfileSide>
			</Wrapper>
		</Container>
	)
}

export default NavBar;