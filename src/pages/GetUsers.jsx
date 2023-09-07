import {
  Divider,
  TableBody,
  TableContainer,
  TableCell,
  Table,
  TableRow,
  TableHead,
  Paper,
  Pagination,
  Stack,
  capitalize,
} from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import EchartPie from "echarts-for-react";
import React, { useEffect, useState } from "react";
import GoToHome from "../components/GoToHome";
import { GoToHomeWrapper } from "./NewProduct";
import axios from "axios";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PageTitle = styled.h1`
  font-size: 42px;
`;

const MainInfo = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  padding: 10px;
`;

const TopUsers = styled.div`
  flex: 1.5;
  height: 100%;
`;
const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const { token } = useSelector((state) => state.login);
  const [page, setPage] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(null);
  const [usersLength, setUsersLength] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    try {
      const makeRequest = async () => {
        const { data } = await axios({
          method: "get",
          url: `http://localhost:8080/user?page=${page}`,
          headers: {
            token: `Bearer ${token}`,
          },
        });
        setUsers(data.users);
        setUsersLength(data.allUsers.length);
        setUsersPerPage(data.usersPerPage);
        setAllUsers(data.allUsers);
      };
      makeRequest();
    } catch (err) {
      console.log(err.message);
    }
  }, [page]); //eslint-disable-line react-hooks/exhaustive-deps

  const amount = Math.ceil(usersLength / usersPerPage) || 1;

  const topUsers = allUsers
    .map((user) => ({
      value: user.orders.length,
      name: user.username,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const option = {
    legend: {
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [30, 180],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 13,
        },
        data: topUsers,
      },
    ],
  };

  return (
    <Container>
      <PageTitle>Customers & Stats</PageTitle>
      <GoToHomeWrapper>
        <GoToHome />
      </GoToHomeWrapper>
      <Divider />
      <MainInfo>
        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "5px",
            height: "470px",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "900",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "24px",
                  }}
                  align="left"
                >
                  Profile picture
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "900",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "24px",
                  }}
                  align="left"
                >
                  Username
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "900",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "24px",
                  }}
                  align="left"
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "900",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "24px",
                  }}
                  align="left"
                >
                  Create account
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "900",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "24px",
                  }}
                  align="left"
                >
                  Orders
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={`http://localhost:8080${user.profileUrl}`}
                      alt="profile"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "18px",
                    }}
                    align="left"
                  >
                    {capitalize(user.username)}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "18px",
                    }}
                    align="left"
                  >
                    {capitalize(user.email)}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "18px",
                    }}
                    align="left"
                  >
                    {moment(user.createdAt).format("MMM Do YY")}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "18px",
                    }}
                    align="left"
                  >
                    {user.orders.length}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2}>
          <Pagination
            count={amount}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={(_, num) => setPage(num)}
          />
        </Stack>
        <TopUsers>
          <EchartPie
            option={option}
            style={{
              height: "100vh",
              width: "100%",
            }}
          />
        </TopUsers>
      </MainInfo>
    </Container>
  );
};

export default GetUsers;
