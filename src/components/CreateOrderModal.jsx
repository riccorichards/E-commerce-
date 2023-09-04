import {
  Box,
  Typography,
  Modal,
  Divider,
  Button,
  InputBase,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./header/Logo";
import React, { useState } from "react";
import axios from "axios";
import { reset } from "../redux/Slice/CartSlice";
import { useNavigate } from "react-router-dom";

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

const initial = {
  amount: "",
  address: "",
};
const CreateOrderModal = ({
  isOrderModal,
  handleClose,
  createdCart = null,
}) => {
  const { products, total, quantity } = useSelector((state) => state.cart);
  const { accessToken, _id, profileUrl } = useSelector(
    (state) => state.login.currentUser
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [additionalOrderData, setAdditionalOrderData] = useState(initial);
  const [openError, setOpenError] = useState(false);
  const handleErrorClose = () => setOpenError(false);
  const handlerCancel = async () => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:8080/carts/${createdCart._id}`,
        headers: {
          token: `Bearer ${accessToken}`,
        },
      });
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handlerInputs = (e) => {
    const { name, value } = e.target;
    setAdditionalOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handlerOrder = async () => {
    const forOrder = {
      userId: _id,
      cartId: createdCart._id,
      amount: additionalOrderData.amount,
      address: additionalOrderData.address,
    };
    try {
      await axios({
        method: "post",
        url: "http://localhost:8080/orders",
        headers: {
          token: `Bearer ${accessToken}`,
        },
        data: forOrder,
      });
      console.log(additionalOrderData.amount);
      console.log(additionalOrderData.address);
      if (
        additionalOrderData.amount === total.toString() &&
        additionalOrderData.address !== ""
      ) {
        handleClose();
        dispatch(reset());
        navigate(`/orders`);
      } else {
        setOpenError(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box>
      <Modal open={isOrderModal} onClose={handleClose}>
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
            onClick={() => handlerCancel()}
          >
            <Typography
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "18px",
                textShadow: "0 0 1.5px black",
                fontWeight: "900",
                color: "#fff",
                transition: "all .25s ease-in",
                "&:hover": {
                  color: "darkred",
                },
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
              src={`http://localhost:8080${profileUrl}`}
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
              gap: "5px",
              overflowY: "auto",
              mt: "35px",
              p: "5px",
            }}
          >
            {products?.map((product) => (
              <React.Fragment key={product._id}>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <img
                    src={`http://localhost:8080${product.img}`}
                    alt="productImage"
                    width="40px"
                    height="40px"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        fontFamily: "Quicksand, sans-serif",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      ID: {product._id}
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>
                      Price: {product.price} $
                    </Typography>
                  </Box>
                </Box>
                <Divider />
              </React.Fragment>
            ))}
          </Box>
          <Box
            sx={{
              alignSelf: "flex-end",
              pr: "5px",
              display: "flex",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "900",
                fontFamily: "Quicksand, sans-serif",
              }}
            >
              Total: {total} $
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "900",
                fontFamily: "Quicksand, sans-serif",
              }}
            >
              Products: {quantity}
            </Typography>
          </Box>
          <Box
            sx={{
              p: "5px",
              mt: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <InputBase
              placeholder="Country, state, street"
              name="address"
              value={additionalOrderData.address}
              onChange={handlerInputs}
              sx={{
                fontFamily: "Quicksand, sans-serif",
                border: "1px solid",
                pl: "5px",
                width: "100%",
                borderRadius: "5px",
              }}
            />
            <InputBase
              placeholder="Payment"
              name="amount"
              value={additionalOrderData.amount}
              onChange={handlerInputs}
              type="number"
              sx={{
                fontFamily: "Quicksand, sans-serif",
                border: "1px solid",
                pl: "5px",
                width: "fit-content",
                borderRadius: "5px",
                mt: "10px",
              }}
            />
            <Button
              sx={{
                fontFamily: "Quicksand, sans-serif",
                borderBottom: "1px solid",
                color: "#fff",
                backgroundColor: "#39574c",
                mt: "10px",
              }}
              onClick={() => handlerOrder()}
            >
              Order
            </Button>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Invalid Order Information..!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateOrderModal;
