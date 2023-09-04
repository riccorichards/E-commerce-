import moment from "moment";
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

const CustomerOrders = ({ username, orders }) => {
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
        Customer {username}
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
              Username
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
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <TableRow
              key={order._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  fontFamily: "Quicksand, sans-serif",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                align="left"
              >
                {username}
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
                {moment(order.createdAt).format("MMM Do YY")}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerOrders;
