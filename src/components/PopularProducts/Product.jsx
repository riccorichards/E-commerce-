import { styled } from "styled-components"
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"


const Info = styled.div`
display: flex;
gap: 10px;
position: absolute;
opacity: 0;
transition: all 0.35s ease-in;
`;

const Container = styled.div`
width: 350px;
margin: 0 auto;
position: relative;
display: flex;
justify-content: center;
align-items: center;

&:hover ${Info} {
	opacity: 1;
}
`;

const Image = styled.img`
width: 100%;
height: 80%;
border: 1px solid gray;
border-radius: 15px;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

const InfoItems = styled.span`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
border: 1px solid #b4c7a3;
transition: all 0.35s ease;

&:hover {
	cursor: pointer;
	background-color: #b4c7a3;
}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<InfoItems><AiOutlineHeart /></InfoItems>
				<InfoItems><AiOutlineSearch /></InfoItems>
				<InfoItems><AiOutlineShoppingCart /></InfoItems>
			</Info>
		</Container>
	)
}

export default Product