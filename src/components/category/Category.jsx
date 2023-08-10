import styled from "styled-components";
import { category } from "../../Data"
import ItemsCategory from "./ItemsCategory";
import { mobileDevice } from './../../responsive';

const Container = styled.div`
display: flex;
margin: 160px 0;
height: 100vh;
width: 100%;
justify-content: space-between;
gap: 15px;
padding: 20px;
${mobileDevice({margin: "5px 0px 360px 0", flexDirection: "column"})}
`;
const Category = () => {

	return (
		<Container>
			{category.map(item => (
				<ItemsCategory item={item} key={item.id} />
			))}
		</Container>
	)
}

export default Category;