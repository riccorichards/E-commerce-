import { styled } from "styled-components";
import { mobileDevice } from "./../utilities/responsive";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../redux/Slice/apiCalled";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobileDevice({ width: "100%" })}
`;

const Wrapper = styled.div`
  background-color: white;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  ${mobileDevice({ width: "95%" })}
`;
const Title = styled.h1`
  padding: 10px 0px 0px 20px;
  font-size: 40px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
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
  transition: all 0.25s ease-in;
  width: fit-content;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const NavigateToRegister = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const LinkStyle = styled(Link)`
  margin-left: ${(props) => (props.not ? "" : "20px")};
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const ErrorHandler = styled.p`
  position: absolute;
  color: red;
  font-size: 14px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.login);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (userData) => {
    try {
      dispatch(fetchLogin(userData));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <Conteiner>
      <Wrapper>
        <Title>Log In</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit" disabled={!isValid}>
            Log In
          </Button>
        </Form>
        <LinkStyle to="/register">Forgot Password?</LinkStyle>
        <NavigateToRegister>
          New here?{" "}
          <LinkStyle not="not" to="/register">
            Register Now!
          </LinkStyle>
        </NavigateToRegister>
      </Wrapper>
    </Conteiner>
  );
};

export default Login;
