import { styled } from "styled-components"
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";

const Container = styled.div`
width: 80%;
margin: 0 auto;
height: 100vh;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
display: flex;
flex-direction: column;
`


const Title = styled.h1`
padding: 25px;
flex: 1;
`;

const Form = styled.form`
flex: 8;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 25px;
`


const Input = styled.input`
padding: 8px 16px;
width: 100%;
align-self: center;
font-family: 'Quicksand', sans-serif;
letter-spacing: 1.5px;
font-size: 16px;

&:focus {
	outline: none;
}
`;

const Button = styled.button`
padding: 8px 16px;
font-family: 'Quicksand', sans-serif;
`;

const InputWrapper = styled.div`
width: 65%;
position: relative;
`;

const ErrorHandler = styled.span`
position: absolute;
top: 100%;
color: red;
left: 0;
font-family: 'Quicksand', sans-serif;
`;

const Recommendation = styled.span`
font-size: 14px;
font-family: 'Quicksand', sans-serif;
position: absolute;
top: 100%;
left: 0;
`

const NewProduct = () => {
	const [getImg, setGetImg] = useState("")

	const accessToken = useSelector(state => state.login.currentUser)
	const { register, formState: { errors, isValid }, handleSubmit } = useForm({
		mode: "onBlur"
	})

	const headers = {
		token: `Bearer ${accessToken?.accessToken}`
	};


	const handlerFile = async e => {
		try {
			const formData = new FormData()
			const file = e.target.files[0]
			formData.append("image", file)
			const { data } = await axios.post("http://localhost:8080/upload", formData, { headers })
			setGetImg(data.url)
		}
		catch (e) {
			throw e
		}
	}
	const onSubmit = async (product) => {
		try {
			if (getImg) {
				const { data } = await axios.post("http://localhost:8080/products", {
					img: getImg,
					title: product.title,
					desc: product.desc,
					category: product.category.split(","),
					color: product.color.split(","),
					size: product.size.split(","),
					price: product.price,
				}, { headers })
				console.log(data)
			} else {
				alert("Choose specific picture")
			}
		} catch (err) {
			throw err
		}
	}
	return (
		<Container>
			<Title>Create a New Product</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input type="file" onChange={handlerFile} />
				<InputWrapper>
					<Input type="text"
						placeholder="Title"
						{...register("title", {
							required: "This field is required!"
						})} />
					{errors?.title && <ErrorHandler>{errors.title.message}</ErrorHandler>}
				</InputWrapper>
				<InputWrapper>
					<Input type="text"
						placeholder="Description"
						{...register("desc", {
							required: "This field is required!"
						})} />
					{errors?.desc && <ErrorHandler>{errors.desc.message}</ErrorHandler>}
				</InputWrapper>
				<InputWrapper>
					<Input type="text"
						placeholder="Categories"
						{...register("category", {
							required: "This field is required!"
						})} />
					{errors?.category ? <ErrorHandler>{errors.category.message}</ErrorHandler> : <Recommendation>Please Separate keywords with ","</Recommendation>}
				</InputWrapper>
				<InputWrapper>
					<Input type="text"
						placeholder="Sizes"
						{...register("size", {
							required: "This field is required!"
						})} />
					{errors?.Sizes ? <ErrorHandler>{errors.Sizes.message}</ErrorHandler> : <Recommendation>Please Separate keywords with ","</Recommendation>}
				</InputWrapper>
				<InputWrapper>
					<Input type="text"
						placeholder="Colors"
						{...register("color", {
							required: "This field is required!"
						})} />
					{errors?.color ? <ErrorHandler>{errors.color.message}</ErrorHandler> : <Recommendation>Please Separate keywords with ","</Recommendation>}
				</InputWrapper>
				<InputWrapper>
					<Input type="number"
						placeholder="Price"
						{...register("price", {
							required: "This field is required!"
						})} />
					{errors?.price && <ErrorHandler>{errors.price.message}</ErrorHandler>}
				</InputWrapper>
				<Button type="submit" disabled={!isValid}>Add new product</Button>
			</Form>
		</Container>
	)
}

export default NewProduct