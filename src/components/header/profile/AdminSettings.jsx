import { styled } from "styled-components";
import { Link } from "react-router-dom";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { logout } from "../../../redux/Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import UserImage from "./UserImage";
import { Divider } from "@mui/material";
import { mobileDevice } from '../../../responsive';
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";


const Container = styled.div`
`;

const AdminSettings = styled.div`
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

const LogoutButton = styled.button`
border: none;
background-color: transparent;
transition: all .2s ease-in;

&:hover {
	cursor: pointer;
	color: red;
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

const AdminWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const AdminSetting = () => {
	const dispatch = useDispatch()
	const { username, profileUrl } = useSelector(state => state.login.currentUser)
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
			<AdminSettings>
				<AdminWrapper>
					<UserImage image={profileUrl} />
					<h3>{Username}</h3>
				</AdminWrapper>
				<Divider />
				<SettingsItems>
					<b>Edit Profile</b>
					<Svg><EditIcon onClick={handleOpen} /></Svg>
				</SettingsItems>
				<SettingsItems><b>Status:</b> Admin</SettingsItems>
				<SettingsItems>
					<b>New product:</b>
					<LinkStyle to="/new-product"><AddBoxOutlinedIcon /></LinkStyle>
				</SettingsItems>
				<SettingsItems>
					<b>Show users:</b>
					<LinkStyle to="/users"><PeopleAltOutlinedIcon /></LinkStyle>
				</SettingsItems>
				<SettingsItems>
					<b>Show orders:</b>
					<LinkStyle to="/orders"><ShoppingCartCheckoutIcon /></LinkStyle>
				</SettingsItems>
				<SettingsItems>
					<LogoutButton onClick={() => Logout()}>Log out</LogoutButton>
				</SettingsItems>
			</AdminSettings>
			<UpdateProfile open={open} handleClose={handleClose} />
		</Container>
	)
}

export default AdminSetting