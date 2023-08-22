import { styled } from 'styled-components';
import NavBar from './../components/header/NavBar';
import Announcement from './../components/Announcement';
import Products from './../components/PopularProducts/Products';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';
import { mobileDevice } from '../responsive';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Container = styled.div`
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
${mobileDevice({ flexDirection: "column", padding: "5px" })}
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
	const { category } = useParams()
	const [filters, setFilter] = useState({})
	const [sort, serSort] = useState("Newest")

	const filterHendler = e => {
		const { name, value } = e.target
		setFilter(prev => ({ ...prev, [name]: value }))
	}


	return (
		<Container>
			<NavBar />
			<Announcement />
			<Title>{category}</Title>
			<FilterContainer>
				<FilterMethods><FilterMethodsText>Filter Products:</FilterMethodsText>
					<Select name='color' onChange={filterHendler}>
						<Option value="Green">Green</Option>
						<Option value="Blue">Blue</Option>
						<Option value="Red">Red</Option>
						<Option value="Yellow">Yellow</Option>
						<Option value="Orange">Orange</Option>
					</Select>
					<Select name='size' onChange={filterHendler}>
						<Option value="XS">XS</Option>
						<Option value="S">S</Option>
						<Option value="M">M</Option>
						<Option value="L">L</Option>
						<Option value="XL">XL</Option>
					</Select>
				</FilterMethods>
				<SortMethods><SortMethodsText>Sort Products:</SortMethodsText>
					<Select onChange={(e) => serSort(e.target.value)}>
						<Option value="Newest">Newest</Option>
						<Option value="Price (asc)">Price (asc)</Option>
						<Option value="Price (desc)">Price (desc)</Option>
					</Select>
				</SortMethods>
			</FilterContainer>
			<Products category={category} filters={filters} sort={sort} />
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default ProductsLists