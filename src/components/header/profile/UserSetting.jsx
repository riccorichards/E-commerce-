import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components"
import { mobileDevice } from '../../../utilities/responsive';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Divider } from "@mui/material"
import { logout } from "../../../redux/Slice/UserSlice";
import { useDispatch } from "react-redux";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import EditIcon from '@mui/icons-material/Edit';
import UserImage from './UserImage';
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";


const Container = styled.div`
`;

const UserSettings = styled.div`
width: 250px;
padding: 8px 16px;
border-radius: 0px 10px 10px 10px;
background-color: #fff;
position: absolute;
top: 100%;
right: 0;
z-index: 10;
box-shadow: 1px 0 5.5px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
gap: 15px;
`;


const SettingsItems = styled.li`
list-style-type: none;
font-size: 21px;
display: flex;
align-items: center;
justify-content: space-between;
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


const Svg = styled.span`
font-size: 24px;
display: flex;
${mobileDevice({ fontSize: "16px" })}
transition: all .25s ease-in;

&:hover {
color: #39574c;
cursor: pointer;
}
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
bottom: 45%;
left: 60%;
background-color: red;
color: #fff;
`


const LogoutButton = styled.button`
border: none;
background-color: transparent;
transition: all .2s ease-in;

&:hover {
	cursor: pointer;
	color: red;
}
`;

const UserWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;



const UserSetting = () => {
	const quantity = useSelector(state => state.cart.quantity)
	const { username, profileUrl } = useSelector(state => state.login.currentUser)
	const { wishlist } = useSelector(state => state.cart)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const Logout = () => {
		dispatch(logout())
	}


	const firstChar = username.charAt(0).toUpperCase()
	const theRest = username.slice(1)
	const Username = firstChar + theRest
	return (
		<Container>
			<UserSettings>
				<UserWrapper>
					<UserImage image={profileUrl} />
					<h3>{Username}</h3>
				</UserWrapper>
				<Divider />
				<SettingsItems>
					<b>Edit Profile</b>
					<Svg><EditIcon onClick={handleOpen} /></Svg>
				</SettingsItems>
				<SettingsItems><b>Status:</b> Customer</SettingsItems>
				<Divider />
				<SettingsItems>
					<b>Shopping Cart:</b>
					<LinkStyle to="/cart">
						<Badge badgeContent={quantity} color="secondary">
							<Svg><AiOutlineShoppingCart /></Svg>
						</Badge>
					</LinkStyle>
				</SettingsItems>
				<Divider />
				<SettingsItems>
					<b>Wishlist:</b>
					<LinkStyle to="/cart">
						<WishListWrapper>
							<Svg><FavoriteBorderSharpIcon /></Svg>
							<WishListPoint>{wishlist.length}</WishListPoint>
						</WishListWrapper>
					</LinkStyle>
				</SettingsItems>
				<Divider />
				<SettingsItems>
					<LogoutButton onClick={() => Logout()}>Log out</LogoutButton>
				</SettingsItems>
			</UserSettings>
			<UpdateProfile open={open} handleClose={handleClose} />
		</Container>
	)
}

export default UserSetting