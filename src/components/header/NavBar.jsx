import { styled } from 'styled-components';
import { mobileDevice } from '../../responsive';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import Logo from './Logo';
import SearchField from './search/SearchField';
import BeforeUser from './BeforeUser';
import Profile from './profile/Profile';

const Container = styled.div`
height: 60px;
margin-bottom: 20px;
`
const Wrapper = styled.div`
display: flex;
padding: 15px;
align-items: center;
${mobileDevice({ padding: "10px", alignItems: "center" })}

`;

const LogoWrapper = styled.div`
flex: 1;
`

const ProfileSide = styled.div`
flex: 1;
display: flex;
gap: 15px;
margin-right: 10px;
justify-content: flex-end;
`

const NavBar = () => {
	const navigate = useNavigate()
	const user = useSelector(state => state.login)

	return (
		<Container>
			<Wrapper>
				<LogoWrapper><Logo onClick={() => navigate("/")} /></LogoWrapper>
				<SearchField />
				<ProfileSide>
					{!user.currentUser
						?
						(<BeforeUser />)
						:
						(<Profile />)
					}
				</ProfileSide>
			</Wrapper>
		</Container >
	)
}

export default NavBar;