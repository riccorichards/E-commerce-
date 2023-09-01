import { styled } from 'styled-components';
import NavBar from './../components/header/NavBar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { mobileDevice } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react"
import Wishlist from './../components/Wishlist';
import { removeProduct, reset } from '../redux/Slice/CartSlice';
import { Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import { fetchOrders } from '../redux/Slice/OrderSlice';


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
${mobileDevice({ padding: "8px 4px" })}

&:hover {
cursor: pointer;
opacity: .5;
}
`;

const HeaderTexts = styled.div`
display: flex;
gap: 15px;
${mobileDevice({ display: "none" })}
`;
const HeaderText = styled.p`
font-size: 18px;
text-decoration: underline;
`;

const CartBody = styled.div`
display: flex;
width: 100%;
/*height: 80vh;*/
margin-bottom: 80px;
padding: 50px;
${mobileDevice({ flexDirection: "column", gap: "55px", padding: "10px", marginBottom: "660px" })}

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
${mobileDevice({ flexWrap: "wrap" })}
position: relative;
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

const ProductPrice = styled.span`
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

const ProductTotalPrice = styled.div`
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

const CloseWrapper = styled.span`
position: absolute;
right: 15px;
cursor: pointer;

&:active{
	transform: scale(0.95)
}
`;

const Cart = () => {
	let { products, total, wishlist } = useSelector(state => state.cart)
	//let { accessToken, _id } = useSelector(state => state.login.currentUser)
  const dispatch = useDispatch()
	const amount = parseFloat(total).toFixed(2)
	const [openSuccess, setOpenSuccess] = useState(false);
	const handleSuccessClose = () => setOpenSuccess(false);
	const [openError, setOpenError] = useState(false);
	const handleErrorClose = () => setOpenError(false);
	const navigate = useNavigate()
	
	const removeProductFromCart = (productId) => {
		dispatch(removeProduct(productId))
	}
	const buyNow = () => {
		if (products.length > 0) {
			setOpenSuccess(true)
			dispatch(reset())
		} else {
			setOpenError(true)
		}
	}
	return (
		<Container>
			<NavBar />
			<Announcement />
			<Wrapper>
				<CartHeader>
					<HeaderTitle>YOUR BAG</HeaderTitle>
					<CartHeaderWrapper>
						<HeaderButtons color='white' onClick={() => navigate("/")}>CONTINUE SHOPPING</HeaderButtons>
						<HeaderTexts>
							<HeaderText>Shopping bag ({products.length})</HeaderText>
							<HeaderText>Your Wishlist ({wishlist.length})</HeaderText>
						</HeaderTexts>
						<HeaderButtons onClick={() => buyNow()}>CHECKOUT NOW</HeaderButtons>
					</CartHeaderWrapper>
				</CartHeader>
				<CartBody>
					<CartProductSpace>
						{products?.map(product => (
							<React.Fragment key={product._id}>
								<ProductWrapper key={product.title}>
									<CloseWrapper><CloseIcon onClick={() => removeProductFromCart(product._id)} /></CloseWrapper>
									<ProductImg src={`http://localhost:8080${product.img}`} />
									<ProductDetails>
										<ProductTitle><b>Product:</b>{product.title}</ProductTitle>
										<ProductID><b>ID:</b>{product._id}</ProductID>
										<ProductPrice><b>Price:</b> {product.price}$</ProductPrice>
										<ProductColor bgcolor={product.color} />
										<ProductSIze><b>Size:</b>{product.size}</ProductSIze>
									</ProductDetails>
									<ProductTotalPrice>
									<AmountWapper>
                   <AmountMinus>
                     <AiFillMinusCircle/>
                   </AmountMinus>
                   <Amount>{product.quantity}</Amount>
                   <Amountaplus>
                     <AiFillPlusCircle />
                   </Amountaplus>
                 </AmountWapper>
										<ItemPrice>${parseFloat(product.price * product.quantity).toFixed(2)}</ItemPrice>
									</ProductTotalPrice>
								</ProductWrapper>
								<Hr />
							</React.Fragment>
						))}
					</CartProductSpace>
					<CartSummeryWrapper>
						<CartSummeryTitle>ORDER SUMMERY</CartSummeryTitle>
						<CartSummeryDetails>
							<CartSummeryDetailsItems>
								<CartSummeryDetailsInfo>SubTotal</CartSummeryDetailsInfo>
								<CartSummeryDetailsInfo>${amount}</CartSummeryDetailsInfo>
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
								<CartSummeryDetailsInfo><b>${amount}</b></CartSummeryDetailsInfo>
							</CartSummeryDetailsItems>
						</CartSummeryDetails>
						<CartSummeryButton onClick={() => buyNow()}>BUY NOW</CartSummeryButton>
					</CartSummeryWrapper>
				</CartBody>
			</Wrapper>
			{wishlist.length > 0
				? <Wishlist />
			  : null	
	   	}
			<Footer />
			<Snackbar open={openError} autoHideDuration={6000} onClose={handleErrorClose}>
				<Alert onClose={handleErrorClose} severity="error" variant="filled" sx={{ width: '100%' }}>
					For buying something, first you have to add product in the cart..!
				</Alert>
			</Snackbar>
			<Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleSuccessClose}>
				<Alert onClose={handleSuccessClose} severity="success" variant="filled" sx={{ width: '100%' }}>
					Order successfully added...
				</Alert>
			</Snackbar>
		</Container>
	)
}

export default Cart