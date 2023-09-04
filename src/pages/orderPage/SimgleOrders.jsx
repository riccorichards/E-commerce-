import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Box, Typography, Modal } from "@mui/material";
import Logo from "../../components/header/Logo";
import moment from "moment";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: "0 0 1.5px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
};

const SimgleOrders = ({ open, handleClose, setOpen, userId = undefined }) => {
  const { accessToken } = useSelector((state) => state.login.currentUser);
  const [user, setUser] = useState({});
  const [usersOrders, setUsersOrders] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `http://localhost:8080/user/find/${userId}`,
          headers: {
            token: `Bearer ${accessToken}`,
          },
        });
        setUser(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    userId && makeRequest();
  }, [userId]); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `http://localhost:8080/orders/user/`,
          headers: {
            token: `Bearer ${accessToken}`,
            userid: `${user?._id}`,
          },
        });
        setUsersOrders(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    userId && makeRequest();
  }, [userId, user]); //eslint-disable-line react-hooks/exhaustive-deps

  const totalSum =
    usersOrders?.reduce((acc, curr) => acc + curr.amount, 0) || 0;
  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            sx={{
              position: "absolute",
              bottom: "100%",
              right: "0",
              display: "flex",
              gap: "10px",
              cursor: "pointer",

              "&:active": {
                transform: "scale(0.95)",
              },
            }}
            onClick={() => setOpen(!open)}
          >
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "18px",
              }}
            >
              Cancel Order
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "black",
              height: "15vh",
              padding: 0,
              borderRadius: "8px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontWeight: "900",
                textAlign: "center",
                fontSize: "32px",
              }}
            >
              <Logo />
            </Box>
            <img
              src={`http://localhost:8080${user.profileUrl}`}
              alt="profile"
              width="70px"
              height="70px"
              style={{ borderRadius: "50%", margin: "0 auto" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "5px",
              alignItems: "center",
              mt: "30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>First Name:</b> {user?.firstname}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>Last Name:</b> {user?.lastname}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>Username:</b> {user?.username}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>Email:</b>
              {user?.email}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>Amount of Orders:</b> {user?.orders?.length}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>Create accaunt:</b>{" "}
              {moment(user?.createdAt).format("MMM Do YY")}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              <b>Total:</b> {totalSum} $
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default SimgleOrders;
