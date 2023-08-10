import { styled } from 'styled-components';
import NavBar from './../components/NavBar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { mobileDevice } from '../responsive';

const Container = styled.div`
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;
const CartHeader = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
`;
const HeaderTitle = styled.h1`
font-size: 45px;
font-weight: 600;
`;
const CartHeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
width: 100%;
`;
const HeaderButtons = styled.button`
padding: 8px 16px;
font-family: 'Quicksand', sans-serif;
border: 1px solid;
letter-spacing: 1.5px;
background-color: ${props => props.color === "white" ? "#fff" : "#39574c"};
color: ${props => props.color === "white" ? "#39574c" : "#fff"};
transition: all 0.25s ease-in;
${mobileDevice({padding: "8px 4px"})}

&:hover {
cursor: pointer;
opacity: .5;
}
`;

const HeaderTexts = styled.div`
display: flex;
gap: 15px;
${mobileDevice({display: "none"})}
`;
const HeaderText = styled.p`
font-size: 18px;
text-decoration: underline;
`;

const CartBody = styled.div`
display: flex;
width: 100%;
height: 80vh;
margin-bottom: 160px;
padding: 50px;
${mobileDevice({flexDirection: "column", gap: "55px", padding: "10px", marginBottom: "660px"})}

`;

const CartProductSpace = styled.div`
flex: 4;
display: flex;
flex-direction: column;
gap: 25px;
`;

const ProductWrapper = styled.div`
display: flex;
gap: 15px;
${mobileDevice({flexWrap: "wrap"})}
`;

const ProductImg = styled.img`
flex: 2;
max-width: 200px;
max-height: 200px;
object-fit: cover;

`;

const ProductDetails = styled.div`
flex: 4;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const ProductTitle = styled.p`
font-size: 24px;
`;

const ProductID = styled.span`
font-size: 24px;
`;

const ProductColor = styled.div`
width: 20px;
height: 20px;
background-color: ${props => props.bgcolor};
border-radius: 50%;
`;

const ProductSIze = styled.span`
font-size: 24px;
`;

const ProductPrice = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;


const AmountWapper = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;

const AmountMinus = styled.div`
cursor: pointer;
font-size: 24px;
display: flex;
justify-content: center;
align-items: center;
`;
const Amount = styled.span`
font-size: 32px;
`;
const Amountaplus = styled.div`
cursor: pointer;
font-size: 24px;
display: flex;
justify-content: center;
align-items: center;
`;

const ItemPrice = styled.span`
font-size: 32px;
font-weight: 700;
`;

const Hr = styled.hr`
border: 1px solid rgba(187, 186, 186, 0.6);
`;


const CartSummeryWrapper = styled.div`
flex: 2;
border: 1px solid rgba(187, 186, 186, 0.6);
border-radius: 7px;
display: flex;
flex-direction: column;
`;

const CartSummeryTitle = styled.h1`
flex: 1;
padding: 8px 0px 0px 16px;
font-size: 45px;
font-weight: 300;
color: black;
`;

const CartSummeryDetails = styled.div`
flex: 7;
display: flex;
justify-content: space-evenly;
flex-direction: column;
padding: 20px;
`;

const CartSummeryDetailsInfo = styled.span`
font-size: 24px;
font-weight: 500;
`;
const CartSummeryDetailsItems = styled.div`
display: flex;
justify-content: space-between;
`;

const CartSummeryButton = styled.button`
flex: 1;
background-color: #39574c;
margin: 15px;
padding: 10px;
font-size: 24px;
border: none;
font-weight: 600;
color: #fff;
font-family: 'Quicksand', sans-serif;
transition: all .25s ease;

&:hover {
	cursor: pointer;
  opacity: 0.5;
}
`;

const Cart = () => {
	return (
		<Container>
			<NavBar />
			<Announcement />
			<Wrapper>
				<CartHeader>
					<HeaderTitle>YOUR BAG</HeaderTitle>
					<CartHeaderWrapper>
						<HeaderButtons color='white'>CONTINUE SHOPPING</HeaderButtons>
						<HeaderTexts>
							<HeaderText>Shopping bag (2)</HeaderText>
							<HeaderText>Your Wishlist (0)</HeaderText>
						</HeaderTexts>
						<HeaderButtons>CHECKOUT NOW</HeaderButtons>
					</CartHeaderWrapper>
				</CartHeader>
				<CartBody>
					<CartProductSpace>
						<ProductWrapper>
							<ProductImg src='https://i.pinimg.com/564x/59/0e/d9/590ed9d10e61a4b7400360e694eed9ca.jpg' />
							<ProductDetails>
								<ProductTitle><b>Product:</b> Men Drop Shoulder Solid Tee</ProductTitle>
								<ProductID><b>ID:</b> 12354895613</ProductID>
								<ProductColor bgcolor="gray" />
								<ProductSIze><b>Size:</b> S</ProductSIze>
							</ProductDetails>
							<ProductPrice>
								<AmountWapper>
									<AmountMinus><AiFillMinusCircle /></AmountMinus>
									<Amount>1</Amount>
									<Amountaplus><AiFillPlusCircle /></Amountaplus>
								</AmountWapper>
								<ItemPrice>$30</ItemPrice>
							</ProductPrice>
						</ProductWrapper>
						<Hr />
						<ProductWrapper>
							<ProductImg src='https://i.pinimg.com/564x/d0/56/8b/d0568b1c58b2fe9d56415b04e85339c6.jpg' />
							<ProductDetails>
								<ProductTitle><b>Product:</b> CPH686 - vitello - black/black</ProductTitle>
								<ProductID><b>ID:</b> 15868643216</ProductID>
								<ProductColor bgcolor="black" />
								<ProductSIze><b>Size:</b> 9.5</ProductSIze>
							</ProductDetails>
							<ProductPrice>
								<AmountWapper>
									<AmountMinus><AiFillMinusCircle /></AmountMinus>
									<Amount>1</Amount>
									<Amountaplus><AiFillPlusCircle /></Amountaplus>
								</AmountWapper>
								<ItemPrice>$30</ItemPrice>
							</ProductPrice>
						</ProductWrapper>
					</CartProductSpace>
					<CartSummeryWrapper>
						<CartSummeryTitle>ORDER SUMMERY</CartSummeryTitle>
						<CartSummeryDetails>
							<CartSummeryDetailsItems>
								<CartSummeryDetailsInfo>SubTotal</CartSummeryDetailsInfo>
								<CartSummeryDetailsInfo>$80</CartSummeryDetailsInfo>
							</CartSummeryDetailsItems>
							<CartSummeryDetailsItems>
								<CartSummeryDetailsInfo>Etimating Shipping</CartSummeryDetailsInfo>
								<CartSummeryDetailsInfo>$ 5.90</CartSummeryDetailsInfo>
							</CartSummeryDetailsItems>
							<CartSummeryDetailsItems>
								<CartSummeryDetailsInfo>Shipping discount</CartSummeryDetailsInfo>
								<CartSummeryDetailsInfo>$ -5.90</CartSummeryDetailsInfo>
							</CartSummeryDetailsItems>
							<CartSummeryDetailsItems>
								<CartSummeryDetailsInfo><b>Total</b></CartSummeryDetailsInfo>
								<CartSummeryDetailsInfo><b>$ 80</b></CartSummeryDetailsInfo>
							</CartSummeryDetailsItems>
						</CartSummeryDetails>
						<CartSummeryButton>BUY NOW</CartSummeryButton>
					</CartSummeryWrapper>
				</CartBody>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default Cart