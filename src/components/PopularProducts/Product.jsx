import { styled } from "styled-components";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  updateWishlist,
} from "../../redux/Slice/CartSlice";

const Clickable = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  opacity: 0;
  transform: translate(0, -200%);
  transition: all 0.5s ease-in;
`;

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${Clickable} {
    transition: all 0.5s ease-in;
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 45vh;
  background-size: cover;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

const InfoItems = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid #b4c7a3;
  transition: all 0.35s ease;

  &:hover {
    cursor: pointer;
    background-color: #b4c7a3;
  }
`;
const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;
const Product = ({ item }) => {
  const distpatch = useDispatch();
  const { wishlist } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.login);
  const navigate = useNavigate();
  let existProduct;

  const handlerWishlist = (product) => {
    if (token) {
      distpatch(updateWishlist(product));
      existProduct = wishlist.find((exist) => exist._id === product._id);
      if (existProduct) {
        distpatch(removeFromWishlist(product._id));
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Image src={`http://localhost:8080${item.img}`} />
      <Clickable>
        <InfoItems onClick={() => handlerWishlist(item)}>
          {wishlist.find((el) => el._id === item._id) ? (
            <FavoriteIcon />
          ) : (
            <AiOutlineHeart />
          )}
        </InfoItems>
        <InfoItems>
          <LinkStyle to={`/product/${item._id}`}>
            <AiOutlineSearch />
          </LinkStyle>
        </InfoItems>
      </Clickable>
    </Container>
  );
};

export default Product;
