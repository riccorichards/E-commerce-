import React, { useContext, useRef, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useForm } from "react-hook-form";
import { fetchUpdate } from "../../../redux/Slice/apiCalled";
import { useDispatch, useSelector } from "react-redux";
import { ErrorHandler, InputWrapper } from "../../../pages/Login";
import SetProfileContext from "../../../utilities/SetProfileContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: "0 0 1.5px black",
  borderRadius: "5px",
  pt: 1,
  px: 1.5,
  pb: 1,
};

const PasswordUpdate = () => {
  const dispatch = useDispatch();
  const { token, currentUser } = useSelector((state) => state.login);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const getValues = useContext(SetProfileContext);
  const editPasswordRef = getValues.editPasswordRef;
  const passRef = useRef(null);
  passRef.current = watch("password", "");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (update) => {
    const updateObj = {
      userId: currentUser._id,
      password: update.password,
    };
    try {
      dispatch(fetchUpdate({ updateObj, token }));
      reset();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Update Password</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 250 }}>
          <h2 id="child-modal-title">Password</h2>
          <form ref={editPasswordRef} onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <InputBase
                placeholder="Your password"
                type="password"
                sx={{
                  border: "1px solid",
                  mt: "25px",
                  fontFamily: "Quicksand, sans-serif",
                  letterSpacing: "1.5px",
                  pl: "5px",
                  width: "100%",
                }}
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
              <InputBase
                placeholder="Confirm password"
                type="password"
                sx={{
                  border: "1px solid",
                  mt: "25px",
                  fontFamily: "Quicksand, sans-serif",
                  letterSpacing: "1.5px",
                  pl: "5px",
                  width: "100%",
                }}
                {...register("confirmPass", {
                  validate: (value) =>
                    value === passRef.current || "The passwords do not match",
                })}
              />
              {errors?.confirmPass && (
                <ErrorHandler>{errors.confirmPass.message}</ErrorHandler>
              )}
            </InputWrapper>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#39574c",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "25px",

                "&:hover": {
                  backgroundColor: "#39574c",
                  color: "#fff",
                },

                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
              disabled={!isValid}
            >
              <DoneIcon />
            </Button>
          </form>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default PasswordUpdate;
