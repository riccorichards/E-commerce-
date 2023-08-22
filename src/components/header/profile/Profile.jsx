import { useState } from "react";
import { styled } from "styled-components"
import UserImage from './UserImage';
import { useSelector } from "react-redux";
import UserSetting from "./UserSetting";
import AdminSetting from "./AdminSettings";

const Container = styled.div`
display: flex;
align-items: center;
gap: 5px;
position: relative;
`;
const ProfileWrapper = styled.div`
cursor: pointer;
`;
const UserName = styled.h3``;


const Profile = () => {
	const [isProfile, setIsProfile] = useState(false)
	const user = useSelector(state => state.login.currentUser)

	const {
		profileUrl,
		username,
		isAdmin,
	} = user

	let firstLetter = username.split("")[0].toUpperCase();
	let theRestLetters = username.slice(1)
	const userName = firstLetter + theRestLetters

	return (
		<Container>
			<ProfileWrapper onClick={() => setIsProfile(prev => !prev)}><UserImage image={profileUrl} /></ProfileWrapper>
			<UserName>{userName}</UserName>
			{isProfile && !isAdmin
				? <UserSetting />
				: <AdminSetting />
			}
		</Container >
	)
}

export default Profile