import {
  Box,
  Typography,
  Modal,
  Divider,
  InputBase,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdate } from "../../../redux/Slice/UserSlice";
import { ErrorHandler, InputWrapper } from "../../../pages/Login";
import PasswordUpdate from "./PasswordUpdate";
import SetProfileContext from "../../../SetProfileContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  boxShadow: "0 0 1.5px",
  p: "0.5px 10px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
};

const UpdateProfile = ({ open, handleClose }) => {
  const [profileUrl, setProfileUrl] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.login.currentUser);
  const getValues = useContext(SetProfileContext);
  const editProfileRef = getValues.editProfileRef;
  const handlerUpdate = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post(
        "http://localhost:8080/user-upload",
        formData
      );
      setProfileUrl(data.url);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onSubmit = (update) => {
    dispatch(
      fetchUpdate({
        profileUrl: profileUrl,
        userId: _id,
        username: update.username,
        email: update.email,
        password: update.password,
      })
    );
    reset();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={() => handleClose()}
            sx={{
              position: "absolute",
              right: "10px",
              top: "5px",
              cursor: "pointer",

              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          />
          <form ref={editProfileRef} onSubmit={handleSubmit(onSubmit)}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontWeight: "700",
              }}
            >
              Edit your profile
            </Typography>
            <Divider
              sx={{
                mt: "5px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "0 15px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Quicksand, sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Change your Image...
                </Typography>
                <InputBase type="file" onChange={handlerUpdate} />
              </Box>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#39574c",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  "&:hover": {
                    backgroundColor: "#39574c",
                    color: "#fff",
                  },

                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                <DoneIcon />
              </Button>
            </Box>
            <Divider
              sx={{
                mt: "5px",
              }}
            />
            <InputWrapper>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <InputBase
                  sx={{
                    m: "10px 0",
                    fontFamily: "Quicksand, sans-serif",
                    letterSpacing: "1.5px",
                    borderBottom: "1px solid #39574c",
                    p: "2.5px 5px",
                    borderRadius: "15px 0",
                    width: "85%",
                    fontSize: "14px",
                    color: "black",
                  }}
                  placeholder="Username..."
                  {...register("username", {
                    maxLength: {
                      value: 16,
                      message: "Please provide a username (1-16 characters)",
                    },
                  })}
                />
                {errors?.username && (
                  <ErrorHandler>{errors.username.message}</ErrorHandler>
                )}
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#39574c",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    "&:hover": {
                      backgroundColor: "#39574c",
                      color: "#fff",
                    },

                    "&:active": {
                      transform: "scale(0.95)",
                    },
                  }}
                >
                  <DoneIcon />
                </Button>
              </Box>
            </InputWrapper>
            <Divider
              sx={{
                mt: "5px",
              }}
            />
            <InputWrapper>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <InputBase
                  sx={{
                    m: "10px 0",
                    fontFamily: "Quicksand, sans-serif",
                    letterSpacing: "1.5px",
                    borderBottom: "1px solid #39574c",
                    p: "2.5px 5px",
                    borderRadius: "15px 0",
                    width: "85%",
                    fontSize: "14px",
                    color: "black",
                  }}
                  placeholder="Email..."
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors?.email && (
                  <ErrorHandler>{errors.email.message}</ErrorHandler>
                )}
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#39574c",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    "&:hover": {
                      backgroundColor: "#39574c",
                      color: "#fff",
                    },

                    "&:active": {
                      transform: "scale(0.95)",
                    },
                  }}
                >
                  <DoneIcon />
                </Button>
              </Box>
            </InputWrapper>
            <Divider
              sx={{
                mt: "5px",
              }}
            />
            <PasswordUpdate />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateProfile;
