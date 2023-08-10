import styled from "@emotion/styled";
import { popular } from "../../Data";
import Product from "./Product";
import { mobileDevice } from './../../responsive';

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
margin: 0 auto;
height: 100%;
width: 100%;
padding: 50px;
background-color: #39574c;
${mobileDevice({display: "flex", flexWrap: "wrap"})}
`;

const Products = () => {
	return (
		<Container>
			{popular.map(item => (
				<Product item={item}  key={item.id}/>
			))}
		</Container>
	)
}

export default Products