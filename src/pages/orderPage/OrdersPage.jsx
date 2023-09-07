import { Box, capitalize } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CustomerOrders from "./CustomerOrders";
import AdminOrders from "./AdminOrders";
import GoToHome from "./../../components/GoToHome";
import { styled } from "styled-components";

const GoToHomeWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 5%;
  margin-top: 5px;
`;

const OrdersPage = () => {
  const { isAdmin, _id, username } = useSelector(
    (state) => state.login.currentUser
  );
  const { token } = useSelector((state) => state.login);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const makeRequest = async () => {
        const { data } = await axios({
          method: "get",
          url: isAdmin
            ? "http://localhost:8080/orders"
            : `http://localhost:8080/orders/user`,
          headers: isAdmin
            ? {
                token: `Bearer ${token}`,
              }
            : {
                token: `Bearer ${token}`,
                Userid: `${_id}`,
              },
        });
        setOrders(data);
      };
      makeRequest();
    } catch (err) {
      console.log(err.message);
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Box sx={{ position: "relative" }}>
      <GoToHomeWrapper>
        <GoToHome />
      </GoToHomeWrapper>
      {isAdmin ? (
        <AdminOrders
          username={capitalize(username)}
          orders={orders}
          _id={_id}
        />
      ) : (
        <CustomerOrders username={capitalize(username)} orders={orders} />
      )}
    </Box>
  );
};

export default OrdersPage;
