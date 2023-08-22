import { styled } from "styled-components"
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
width: 50%;
height:5vh;
display: flex;
border: 1px solid;
`;

const SelectorController = styled.select`
flex: 1;
width: 40px;
border: none;
background-color: #ccc9c95e;
font-family: 'Quicksand', sans-serif;
letter-spacing: 1.5px;

&:hover {
	cursor: pointer;
}

&:focus{
	outline: none;
}
`
const Option = styled.option`
`

const SearchInput = styled.input`
flex: 8;
padding: 8px 16px;
font-family: 'Quicksand', sans-serif;
border: none;
letter-spacing: 1.5px;
font-size: 14px;

&:focus{
	outline: none;
}
`
const SearchButton = styled.button`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
background-color: #39574c;
border: none;
color: #fff;
transition: all 0.25s ease-in;

&:hover {
	cursor: pointer;
	opacity: 0.5;
}
`

const SearchField = () => {
	return (
		<Container>
			<SelectorController>
				<Option>All</Option>
				<Option>For Women</Option>
				<Option>For Men</Option>
				<Option>For Child</Option>
				<Option>For Summer</Option>
				<Option>For Snow</Option>
			</SelectorController>
			<SearchInput placeholder="Search..." />
			<SearchButton><SearchIcon /></SearchButton>
		</Container>
	)
}

export default SearchField