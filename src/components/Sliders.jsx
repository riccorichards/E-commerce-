import { styled } from "styled-components";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { SlideData } from "../utilities/Data";
import { useState } from "react";
import {
  laptopDevice,
  mobileDevice,
  tabletDevice,
} from "./../utilities/responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  ${tabletDevice({ display: "none" })}
  ${mobileDevice({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #39574c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${(props) => (props.direction === "left" ? "10px" : "")};
  right: ${(props) => (props.direction === "right" ? "10px" : "")};
  opacity: 0.85;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${(props) => props.slidercounter * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  width: 500px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  ${laptopDevice({ fontSize: "50px" })}
  ${tabletDevice({ fontSize: "35px" })}
`;
const Desc = styled.p`
  font-size: 30px;
  letter-spacing: 2px;
  margin: 50px 0;
  font-weight: 500;
  ${laptopDevice({ fontSize: "22px" })}
  ${tabletDevice({ fontSize: "14px" })}
`;
const Button = styled.button`
  padding: 20px;
  border: 1px solid;
  background-color: transparent;
  font-size: 24px;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }

  ${laptopDevice({ fontSize: "22px", padding: "15px" })}
  ${tabletDevice({ fontSize: "14px", padding: "8px" })}
`;

const Sliders = () => {
  const [slidercounter, setSlidercounter] = useState(0);
  const navigate = useNavigate();
  const onCLickSlider = (direction) => {
    if (direction === "left") {
      setSlidercounter(slidercounter > 0 ? slidercounter - 1 : 3);
    } else {
      setSlidercounter(slidercounter < 3 ? slidercounter + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => onCLickSlider("left")}>
        <BsFillArrowLeftCircleFill />
      </Arrow>
      <Wrapper slidercounter={slidercounter}>
        {SlideData.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.imgUrl} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={() => navigate("/login")}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => onCLickSlider("right")}>
        <BsFillArrowRightCircleFill />
      </Arrow>
    </Container>
  );
};

export default Sliders;
