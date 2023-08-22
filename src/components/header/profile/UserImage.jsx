import { styled } from "styled-components"

const Container = styled.div``;
const Image = styled.img`
border-radius: 50%;
object-fit: cover;
`;
const UserImage = ({ image, size = "40px" }) => {
	return (
		<Container width={size}>
			<Image
				src={image && `http://localhost:8080${image}`}
				width={size}
				height={size}
				alt="profile image"
			/>
		</Container>
	)
}

export default UserImage