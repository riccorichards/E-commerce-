import { styled } from 'styled-components';
import NavBar from './../components/NavBar';
import Announcement from './../components/Announcement';
import Products from './../components/PopularProducts/Products';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';
import { mobileDevice } from '../responsive';

const Container = styled.div`
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
${mobileDevice({flexDirection: "column", padding: "5px"})}
`;

const Title = styled.h1`
margin: 20px;
font-size: 45px;
font-weight: 700;
`;
const FilterMethods = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;

const FilterMethodsText = styled.h3`
font-size: 24px;
font-weight: 600;
`
const SortMethods = styled.div`
display: flex;
align-items: center;
gap: 15px;
`;

const SortMethodsText = styled.h3`
font-size: 24px;
font-weight: 600;
`;
const Select = styled.select`
padding: 10px;
font-size: 14px;
font-family: 'Quicksand', sans-serif;
letter-spacing: 1.5px;
margin-bottom: 10px;

&:focus {
	outline: none;
}
`;
const Option = styled.option`
`;

const ProductsLists = () => {
	return (
		<Container>
			<NavBar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>
				<FilterMethods><FilterMethodsText>Filter Products:</FilterMethodsText>
					<Select>
						<Option disabled selected>Color</Option>
						<Option>Green</Option>
						<Option>Blue</Option>
						<Option>Red</Option>
						<Option>Yellow</Option>
						<Option>Orange</Option>
					</Select>
					<Select>
						<Option disabled selected>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</FilterMethods>
				<SortMethods><SortMethodsText>Sort Products:</SortMethodsText>
					<Select>
						<Option>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</SortMethods>
			</FilterContainer>
			<Products />
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default ProductsLists