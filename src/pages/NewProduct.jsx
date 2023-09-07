import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import GoToHome from "./../components/GoToHome";
import { tabletDevice } from "../utilities/responsive";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding: 25px;
  flex: 1;
`;

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  align-self: center;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 1.5px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  font-family: "Quicksand", sans-serif;
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
  font-family: "Quicksand", sans-serif;
`;

const Recommendation = styled.span`
  font-size: 14px;
  font-family: "Quicksand", sans-serif;
  position: absolute;
  top: 100%;
  left: 0;
`;

export const GoToHomeWrapper = styled.div`
  align-self: flex-end;
  margin: 25px;
`;

const Main = styled.main`
  display: flex;
  gap: 15px;
  padding: 0 10px;
  ${tabletDevice({ display: "flex", flexDirection: "column" })}
`;

const Image = styled.img`
  flex: 2.5;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.26);
  ${tabletDevice({ width: "100%" })}
`;

const Form = styled.form`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 25px;
`;

const AddImage = styled.span`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 16px;
  background-color: #60adad;
  letter-spacing: 1px;
  border-radius: 2.5px;
  font-weight: 800;
  color: #fff;
  transition: all 0.25s ease-in;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;
const NewProduct = () => {
  const [getImg, setGetImg] = useState("");
  const { token } = useSelector((state) => state.login);
  const imageRef = useRef(null);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const headers = {
    token: `Bearer ${token}`,
  };

  const handlerFile = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post(
        "http://localhost:8080/upload",
        formData,
        { headers }
      );
      setGetImg(data.url);
    } catch (e) {
      throw e;
    }
  };
  const onSubmit = async (product) => {
    try {
      if (getImg) {
        const { data } = await axios.post(
          "http://localhost:8080/products",
          {
            img: getImg,
            title: product.title,
            desc: product.desc,
            category: product.category.split(","),
            color: product.color.split(","),
            size: product.size.split(","),
            price: product.price,
          },
          { headers }
        );
        console.log(data);
      } else {
        alert("Choose specific picture");
      }
      alert("Product Successfully added...");
      reset();
      setGetImg(null);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Title>Create a New Product</Title>
      <Main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="file" onChange={handlerFile} hidden ref={imageRef} />
          <AddImage onClick={() => imageRef.current.click()}>
            Add Image Here...
          </AddImage>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Title"
              {...register("title", {
                required: "This field is required!",
              })}
            />
            {errors?.title && (
              <ErrorHandler>{errors.title.message}</ErrorHandler>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Description"
              {...register("desc", {
                required: "This field is required!",
              })}
            />
            {errors?.desc && <ErrorHandler>{errors.desc.message}</ErrorHandler>}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Categories"
              {...register("category", {
                required: "This field is required!",
              })}
            />
            {errors?.category ? (
              <ErrorHandler>{errors.category.message}</ErrorHandler>
            ) : (
              <Recommendation>Please Separate keywords with ","</Recommendation>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Sizes"
              {...register("size", {
                required: "This field is required!",
              })}
            />
            {errors?.Sizes ? (
              <ErrorHandler>{errors.Sizes.message}</ErrorHandler>
            ) : (
              <Recommendation>Please Separate keywords with ","</Recommendation>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Colors"
              {...register("color", {
                required: "This field is required!",
              })}
            />
            {errors?.color ? (
              <ErrorHandler>{errors.color.message}</ErrorHandler>
            ) : (
              <Recommendation>Please Separate keywords with ","</Recommendation>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="number"
              placeholder="Price"
              {...register("price", {
                required: "This field is required!",
              })}
            />
            {errors?.price && (
              <ErrorHandler>{errors.price.message}</ErrorHandler>
            )}
          </InputWrapper>
          <Button type="submit" disabled={!isValid}>
            Add new product
          </Button>
        </Form>
        {getImg ? (
          <ImageWrapper>
            <Image src={`http://localhost:8080${getImg}`} alt="new product" />
            <CloseIcon
              sx={{
                position: "absolute",
                bottom: "92%",
                right: "5px",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                color: "#ffffff",
                backgroundColor: "#df0505df",

                "&:active": {
                  transform: "scale(0.95)",
                },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                setGetImg(null);
                reset();
              }}
            />
          </ImageWrapper>
        ) : null}
      </Main>
      <GoToHomeWrapper>
        <GoToHome />
      </GoToHomeWrapper>
    </Container>
  );
};

export default NewProduct;
