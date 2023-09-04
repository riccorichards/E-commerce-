import {
  TableBody,
  TableContainer,
  TableCell,
  Table,
  TableRow,
  TableHead,
  Paper,
  Typography,
  capitalize,
} from "@mui/material";
import SimgleOrders from "./SimgleOrders";
import { useState } from "react";

const AdminOrders = ({ orders, username }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [userId, setUserId] = useState(null);

  const handlerSpecificUser = (userId) => {
    setUserId(userId);
    setOpen(true);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        flex: "2",
        height: "85vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "5px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Quicksand, sans-serif",
          fontSize: "32px",
          pl: "15px",
          fontWeight: "900",
        }}
      >
        Admin {username}
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
              }}
              align="left"
            >
              UserId
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
              }}
              align="left"
            >
              Address
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
              }}
              align="left"
            >
              Created order
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
              }}
              align="left"
            >
              OrderId
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
              }}
              align="left"
            >
              Total $
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
              }}
              align="left"
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow
              key={order._id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { opacity: 0.7, cursor: "pointer" },
              }}
              onClick={() => handlerSpecificUser(order.userId)}
            >
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                {order.userId}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                {capitalize(order.address)}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                {order.createdAt}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                {order._id}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                {order.amount} $
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                Done
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SimgleOrders
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
        userId={userId}
      />
    </TableContainer>
  );
};

export default AdminOrders;
