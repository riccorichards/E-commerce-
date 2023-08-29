import { useState } from "react";
import { styled } from "styled-components"
import UserImage from './UserImage';
import { useSelector } from "react-redux";
import UserSetting from "./UserSetting";
import AdminSetting from "./AdminSettings";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Container = styled.div`
display: flex;
align-items: center;
width: 150px;
gap: 5px;
position: relative;
`;

const Wrapper = styled.div`
display: flex;
gap: 10px;
align-items: center;
`;
const ProfileWrapper = styled.div`
&:hover{
	cursor: pointer;
}
&:active  {
	transform: scale(0.95);
}
`;

const ComponentsWrapper = styled.div`
width: 37px;
height: 37px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-color: #39574c;
border: none;
color: #fff;

&:hover{
	cursor: pointer;
}
&:active  {
	transform: scale(0.95);
}
`;

const Profile = () => {
	const [isProfile, setIsProfile] = useState(false)
	const user = useSelector(state => state.login.currentUser)

	const {
		profileUrl,
		isAdmin,
	} = user


	return (
		<Container>
			<Wrapper>
				<ComponentsWrapper><NotificationsNoneIcon /></ComponentsWrapper>
				<ComponentsWrapper><ReceiptLongIcon /></ComponentsWrapper>
				<ProfileWrapper onClick={() => setIsProfile(prev => !prev)}><UserImage image={profileUrl} /></ProfileWrapper>
			</Wrapper>
			{isProfile &&
				(isAdmin
					? <AdminSetting user={user} />
					: <UserSetting user={user} />)
			}
		</Container >
	)
}

export default Profile