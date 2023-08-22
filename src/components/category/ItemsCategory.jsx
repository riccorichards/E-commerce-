import { styled } from "styled-components";
import { mobileDevice } from './../../responsive';
import { Link } from "react-router-dom";

const Container = styled.div`
flex: 1;
position: relative;
margin: auto 0;
display: flex;
justify-content: center;
align-items: center;
`;

const Image = styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
${mobileDevice({ height: "40vh" })}
`;

const Info = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

const Title = styled.h1`
font-size: 55px;
font-weight: 900;
color: white;
text-shadow: 0 0 4.5px black;
${mobileDevice({ textAlign: "center" })}

`;
const Button = styled.button`
padding: 10px;
cursor: pointer;
`;

const LinkStyle = styled(Link)`
text-decoration: none;
font-size: 20px;
letter-spacing: 2px;
cursor: pointer;
color: gray;
`;
const ItemsCategory = ({ item }) => {
	return (
		<Container>
			<Image src={item.imgUrl} />
			<Info>
				<Title>{item.title}</Title>
				<Button><LinkStyle to={`products/${item.category}`}>SHOP NOW</LinkStyle></Button>
			</Info>
		</Container>
	)
}

export default ItemsCategory;