import styled from "@emotion/styled";
import Product from "./Product";
import { laptopDevice } from "./../../utilities/responsive";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  height: 100%;
  width: 100%;
  gap: 25px 0;
  padding: 50px;
  background-color: #39574c;
  ${laptopDevice({ display: "flex", flexWrap: "wrap" })}
`;

const Products = ({ category, filters, sort }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const { data } = await axios.get(
          category
            ? `http://localhost:8080/products?category=${category}`
            : `http://localhost:8080/products`
        );
        setProjects(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    makeRequest();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProjects(
        projects.filter((project) =>
          Object.entries(filters).every(([key, value]) =>
            project[key].includes(value)
          )
        )
      );
  }, [category, filters, projects]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProjects((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "Price (asc)") {
      setFilteredProjects((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProjects((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProjects?.map((item, index) => (
            <Product item={item} key={index} />
          ))
        : projects?.map((item, index) => <Product item={item} key={index} />)}
    </Container>
  );
};

export default Products;
