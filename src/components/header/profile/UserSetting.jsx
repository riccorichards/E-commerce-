import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components"
import { mobileDevice } from '../../../responsive';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material"
import { logout } from "../../../redux/Slice/UserSlice";
import { useDispatch } from "react-redux";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

const Container = styled.div`
`;

const UserSettings = styled.div`
padding: 10px 15px 10px 5px;
height: 130px;
border-radius: 0px 10px 10px 10px;
background-color: #fff;
position: absolute;
top: 100%;
left: 0;
z-index: 10;
box-shadow: 1px 0 5.5px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
gap: 10px;
`;


const SettingsItems = styled.li`
list-style-type: none;
font-size: 14px;
display: flex;
align-items: center;
gap: 15px;
`;

const LinkStyle = styled(Link)`
color: black;
text-decoration: none;
transition: all .25s ease-in;

&:hover {
color: #39574c;
transform: scale(1.1);
}
`;


const ShoppingSVG = styled.span`
font-size: 20px;
display: flex;
${mobileDevice({ fontSize: "16px" })}
`;

const WishListWrapper = styled.span`
position: relative;
`;


const WishListPoint = styled.span`
border: 1px solid;
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
font-size: 12px;
position: absolute;
bottom: 80%;
left: 80%;
background-color: red;
color: #fff;
`


const LogputButton = styled.button`
border: none;
background-color: transparent;
transition: all .2s ease-in;

&:hover {
	cursor: pointer;
	color: red;
}
`;
const UserSetting = () => {
	const quantity = useSelector(state => state.cart.quantity)
	const dispatch = useDispatch()

	const Logout = () => {
		dispatch(logout())
	}

	return (
		<Container>
			<UserSettings>
				<SettingsItems><b>Status:</b> Customer</SettingsItems>
				<SettingsItems>
					<b>Shopping Cart:</b>
					<LinkStyle to="/cart">
						<Badge badgeContent={quantity} color="secondary">
							<ShoppingSVG><AiOutlineShoppingCart /></ShoppingSVG>
						</Badge>
					</LinkStyle>
				</SettingsItems>
				<SettingsItems>
					<b>Wishlist:</b>
					<LinkStyle>
						<WishListWrapper>
							<FavoriteBorderSharpIcon />
							<WishListPoint>2</WishListPoint>
						</WishListWrapper>
					</LinkStyle>
				</SettingsItems>
				<SettingsItems>
					<LogputButton onClick={() => Logout()}>Log out</LogputButton>
				</SettingsItems>
			</UserSettings>
		</Container>
	)
}

export default UserSetting