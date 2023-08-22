import { styled } from 'styled-components';
import NavBar from './../components/header/NavBar';
import Announcement from './../components/Announcement';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { mobileDevice } from '../responsive';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publicRequest } from '../publicRequest';
import { useDispatch } from 'react-redux';
import { addProducts } from '../redux/Slice/CartSlice';

const Container = styled.div``;

const Wrapper = styled.div`
display: flex;
padding: 50px;
gap: 20px;

${mobileDevice({ flexDirection: "column", padding: "10px" })}
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0 20px;
display: flex;
flex-direction: column;
gap: 30px;
`;

const Title = styled.h1`
font-size: 45px;
font-weight: 200;

${mobileDevice({ fontSize: "24px" })}
`;

const Desc = styled.p`
font-size: 24px;
font-weight: 400;
${mobileDevice({ fontSize: "16px" })}

`;

const Price = styled.span`
font-size: 45px;
font-weight: 100;
${mobileDevice({ fontSize: "24px" })}
`;

const FilterContainer = styled.div`
margin-top: 30px;
display: flex;
justify-content: space-between;
width: 50%;
align-items: center;
${mobileDevice({ width: "100%" })}

`;
const FilterColor = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const ColorTItle = styled.h3`
font-size: 24px;
font-weight: 500;
`;
const ColorItem = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
border: 0.25px solid;
background-color: ${props => props.color};
cursor: pointer;
`;

const WrapperFilterSize = styled.div`
display: flex;
gap: 15px;
align-items: center;

`;

const TitleFilterSize = styled.h3`
font-size: 24px;
font-weight: 500;
`
const FilterSize = styled.select`
padding: 5px 10px;
font-family: 'Quicksand', sans-serif;
font-weight: 500;
font-size: 14px;

&:focus{
	outline: none;
}
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
margin-top: 30px;
display: flex;
justify-content: space-between;
width: 50%;
align-items: center;
${mobileDevice({ width: "100%" })}

`;
const AmountWrapper = styled.div`
font-size: 24px;
display: flex;
gap: 10px;
align-items: center;
`;
const Amount = styled.span`
border: 1px solid;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
`;
const Pointers = styled.span`
cursor: pointer;
display: flex;
`;
const Button = styled.button`
font-family: 'Quicksand', sans-serif;
font-size: 18px;
font-weight: 400;
background-color: transparent;
padding: 5px 10px;
border: 1px solid;
border-radius: 2px;
letter-spacing: 1.2px;
cursor: pointer;
transition: all .35s ease-in-out;

&:hover {
	background-color: #39574c;
	color: white;
}
`;

const Product = () => {
	const { id } = useParams()
	const [project, setProject] = useState(null)
	const [quantity, setQuantity] = useState(1)
	const [size, setSize] = useState({})
	const [color, setColor] = useState({})
	const dispatch = useDispatch()

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const { data } = await publicRequest.get("/products/" + id)
				setProject(data)
			} catch (err) {
				throw err
			}
		}
		makeRequest()
	}, [id])

	const quantityHandler = (type) => {
		if (type === "dec") {
			quantity > 1 && setQuantity(prev => prev - 1)
		} else {
			setQuantity(prev => prev + 1)
		}
	}

	const handlerAddingProcess = () => {
		dispatch(addProducts({ ...project, size, color, quantity }))
	}


	return (
		<Container>
			<NavBar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src='https://i.pinimg.com/564x/20/55/9a/20559a28f142f5cc307d9697b363d6bc.jpg' />
				</ImgContainer>
				<InfoContainer>
					<Title>{project?.title}</Title>
					<Desc>{project?.desc}</Desc>
					<Price>$ {project?.price}</Price>
					<FilterContainer>
						<FilterColor>
							<ColorTItle>Color:</ColorTItle>
							{project?.color.map(c => (
								<ColorItem color={c} key={c} onClick={() => setColor(c)} />
							))}
						</FilterColor>
						<WrapperFilterSize>
							<TitleFilterSize>Size</TitleFilterSize>
							<FilterSize onChange={(e) => setSize(e.target.value)} >
								{project?.size.map(s => (
									<FilterSizeOption key={s}>{s}</FilterSizeOption>
								))}
							</FilterSize>
						</WrapperFilterSize>
					</FilterContainer>
					<AddContainer>
						<AmountWrapper>
							<Pointers><AiFillMinusCircle onClick={() => quantityHandler("dec")} /></Pointers>
							<Amount>{quantity}</Amount>
							<Pointers><AiFillPlusCircle onClick={() => quantityHandler("inc")} /></Pointers>
						</AmountWrapper>
						<Button onClick={() => handlerAddingProcess()}>Add to Cards</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Product