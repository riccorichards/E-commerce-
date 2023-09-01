import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { mobileDevice } from "../responsive";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../redux/Slice/UserSlice";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorHandler, InputWrapper } from "./Login";
import axios from "axios";

const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 50%;
  ${mobileDevice({ width: "100%" })}
`;
const Title = styled.h1`
  padding: 10px 0px 0px 20px;
  font-size: 32px;
  font-weight: 500;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  ${mobileDevice({ gridTemplateColumns: "100%" })}
`;
const Input = styled.input`
  padding: 8px 16px;
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  width: 100%;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #39574c;
  }
`;

const Agreement = styled.p`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
`;
const Button = styled.button`
  padding: 8px 16px;
  font-family: "Quicksand", sans-serif;
  background-color: #0ce5e5;
  border: none;
  font-size: 18px;
  letter-spacing: 1.5px;
  text-shadow: 0 0 1.5px black;
  font-weight: 600;
  color: #fff;
  width: fit-content;
  transition: all 0.25s ease-in;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileUrl, setProfileUrl] = useState("");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const passRef = useRef(null);
  passRef.current = watch("password", "");

  const uploadProfileUrl = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post(
        "http://localhost:8080/user-upload",
        formData
      );
      setProfileUrl(data.url);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (user) => {
    dispatch(
      fetchRegister({
        profileUrl: profileUrl,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        password: user.password,
      })
    );
    navigate("/login");
  };

  return (
    <Conteiner>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="file" onChange={uploadProfileUrl} />
          <InputWrapper>
            <Input
              placeholder="First Name"
              {...register("firstname", {
                required: "This field is required",
              })}
            />
            {errors?.firstname && (
              <ErrorHandler>{errors.firstname.message}</ErrorHandler>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Last Name"
              {...register("lastname", {
                required: "This field is required",
              })}
            />
            {errors?.lastname && (
              <ErrorHandler>{errors.lastname.message}</ErrorHandler>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Username"
              {...register("username", {
                required: "This field is required",
                maxLength: {
                  value: 16,
                  message: "Please provide a username (1-16 characters)",
                },
              })}
            />
            {errors?.username && (
              <ErrorHandler>{errors.username.message}</ErrorHandler>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email && (
              <ErrorHandler>{errors.email.message}</ErrorHandler>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            {errors?.password && (
              <ErrorHandler>{errors.password.message}</ErrorHandler>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPass", {
                validate: (value) =>
                  value === passRef.current || "The passwords do not match",
              })}
            />
            {errors?.confirmPass && (
              <ErrorHandler>{errors.confirmPass.message}</ErrorHandler>
            )}
          </InputWrapper>
          <Button type="submit" disabled={!isValid}>
            CREATE
          </Button>
        </Form>
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
      </Wrapper>
    </Conteiner>
  );
};

export default Register;
