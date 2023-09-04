import { useContext } from "react";
import { styled } from "styled-components";
import UserImage from "./UserImage";
import { useSelector } from "react-redux";
import UserSetting from "./UserSetting";
import AdminSetting from "./AdminSettings";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useNavigate } from "react-router-dom";
import SetProfileContext from "../../../SetProfileContext";

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
  &:hover {
    cursor: pointer;
  }
  &:active {
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

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Profile = () => {
  const user = useSelector((state) => state.login.currentUser);
  const navigate = useNavigate();
  const getContenxt = useContext(SetProfileContext);
  const setIsProfile = getContenxt.setIsProfile;
  const isProfile = getContenxt.isProfile;
  const profileRef = getContenxt.profileRef;
  const profileComponentRef = getContenxt.profileComponentRef;
  const { profileUrl, isAdmin } = user;

  return (
    <Container>
      <Wrapper>
        <ComponentsWrapper>
          <NotificationsNoneIcon />
        </ComponentsWrapper>
        <ComponentsWrapper>
          <ReceiptLongIcon onClick={() => navigate(`/orders`)} />
        </ComponentsWrapper>
        <ProfileWrapper
          ref={profileRef}
          onClick={() => setIsProfile((prev) => !prev)}
        >
          <UserImage image={profileUrl} />
        </ProfileWrapper>
      </Wrapper>
      <div ref={profileComponentRef}>
        {isProfile &&
          (isAdmin ? (
            <AdminSetting user={user} />
          ) : (
            <UserSetting user={user} />
          ))}
      </div>
    </Container>
  );
};

export default Profile;
