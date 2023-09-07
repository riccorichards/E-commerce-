import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../redux/Slice/CartSlice";
import { laptopDevice, largeMobileDevice, tabletDevice } from "../utilities/responsive";

const Container = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  background-color: #cccccc;
  margin-bottom: 160px;
`;

const Title = styled.h1`
  padding: 15px;
`;

const WishlistWrapper = styled.div`
  display: grid;
  gap: 15px;
  padding: 20px;
  grid-template-columns: repeat(4, 1fr);
  ${laptopDevice({gridTemplateColumns: "repeat(3, 1fr)"})}
  ${tabletDevice({gridTemplateColumns: "repeat(2, 1fr)"})}
  ${largeMobileDevice({gridTemplateColumns: "repeat(1, 1fr)"})}
`;

const Info = styled.div`
  width: 250px;
  background-color: #ffffff74;
  opacity: 0;
  transition: all 0.55s ease-in;
  border-radius: 10px;
  transform: translate(0, 0);
`;

const CloseWrapper = styled.span`
  position: absolute;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #0000007e;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const WishlistProduct = styled.div`
  height: 30vh;
  width: 100%;
  transition: all 0.55s ease-in;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    transform: translate(0, -105%);
  }
`;

const Image = styled.img`
  background-size: cover;
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;

const ProductTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 900;

  &:hover {
    text-decoration: underline;
  }
`;
const ProductDesc = styled.p`
  font-size: 14px;
`;
const ProductPrice = styled.pre`
  font-weight: 900;
`;
const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <Container>
      <Title>Wishlist</Title>
      <WishlistWrapper>
        {wishlist?.map((product) => (
          <WishlistProduct key={product._id}>
            <CloseWrapper>
              <CloseIcon onClick={() => handleRemove(product._id)} />
            </CloseWrapper>
            <Image src={`http://localhost:8080${product.img}`} />
            <Info>
              <ProductTitle to={`/product/${product._id}`}>
                {product.title}
              </ProductTitle>
              <ProductDesc>{product.desc}</ProductDesc>
              <ProductPrice>{product.price}$</ProductPrice>
            </Info>
          </WishlistProduct>
        ))}
      </WishlistWrapper>
    </Container>
  );
};

export default Wishlist;
