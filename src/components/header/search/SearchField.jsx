import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/Slice/GetProducts";
import { useNavigate, Link } from "react-router-dom";
import { Divider } from "@mui/material";

const Container = styled.div`
  flex: 1.9;
  width: 50%;
  height: 5vh;
  display: flex;
  border: 1px solid;
  position: relative;
`;

const SelectorController = styled.select`
  flex: 1;
  width: fit-content;
  border: none;
  background-color: #ccc9c95e;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 1.5px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;

const SearchInput = styled.input`
  flex: 8;
  padding: 8px 16px;
  font-family: "Quicksand", sans-serif;
  border: none;
  letter-spacing: 1.5px;
  font-size: 14px;
  position: relative;

  &:focus {
    outline: none;
  }
`;
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
`;

const SearchedResultWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 50vh;
  z-index: 10;
  overflow-y: auto;
  gap: 10px;
  border: 1px solid;
  background-color: #fff;
  padding: 5px;
`;

const SearchedResult = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  background-size: cover;
`;
const SearchField = () => {
  const [category, setCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const { getProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenSearchResult, setIsOpenSearchResult] = useState(false);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (category) {
      navigate(`/products/${category}`);
    }
  }, [category]); //eslint-disable-line react-hooks/exhaustive-deps

  const handlerInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputValue !== "") {
      setIsOpenSearchResult(true);
    } else {
      setIsOpenSearchResult(false);
    }
  }, [inputValue]);

  const searchedProduct = getProducts.filter((product) => {
    const title = product.title.toLowerCase();
    return title.includes(inputValue.toLocaleLowerCase());
  });
  return (
    <Container>
      <SelectorController onChange={(e) => setCategory(e.target.value)}>
        <Option>All</Option>
        <Option value="women">For Women</Option>
        <Option value="men">For Men</Option>
        <Option value="child">For Child</Option>
        <Option value="light-jacket">Light Jacket</Option>
        <Option value="winter">For Snow</Option>
      </SelectorController>
      <SearchInput
        placeholder="Search..."
        value={inputValue}
        onChange={handlerInput}
      />
      {isOpenSearchResult && (
        <SearchedResultWrapper>
          {inputValue !== ""
            ? searchedProduct.map((product) => (
                <React.Fragment key={product._id}>
                  <SearchedResult to={`/product/${product._id}`}>
                    <ProductImage
                      src={`http://localhost:8080${product.img}`}
                      alt="product"
                    />
                    <h5>{product.title}</h5>
                  </SearchedResult>
                  <Divider />
                </React.Fragment>
              ))
            : null}
        </SearchedResultWrapper>
      )}
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

export default SearchField;
