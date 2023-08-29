import { Divider, TableBody, TableContainer, TableCell, Table, TableRow, TableHead, Paper } from "@mui/material";
import moment from "moment"
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components"
import EchartPie from "echarts-for-react";
import React, { useEffect } from "react";
import { fetchAllUsers } from "../redux/Slice/GetUsersSlice";
import GoToHome from '../components/GoToHome';
import { GoToHomeWrapper } from './NewProduct';

const Container = styled.div`
width: 80%;
margin: 0 auto;
padding: 10px;
display: flex;
flex-direction: column;
gap: 20px;
`;

const PageTitle = styled.h1`
font-size: 42px;
`

const MainInfo = styled.div`
height: 100%;
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
	const users = useSelector(state => state.allUsers.allUsers)
	const dispatch = useDispatch()

	useEffect(() => {
		try {
			dispatch(fetchAllUsers())
		} catch (err) {
			console.log(err.message)
		}
	}, [])//eslint-disable-line react-hooks/exhaustive-deps 

	const option = {
		legend: {
			top: 'bottom'
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				dataView: { show: true, readOnly: false },
				restore: { show: true },
				saveAsImage: { show: true }
			}
		},
		series: [
			{
				name: 'Nightingale Chart',
				type: 'pie',
				radius: [30, 180],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 13
				},
				data: [
					{ value: 40, name: 'rose 1' },
					{ value: 38, name: 'rose 2' },
					{ value: 32, name: 'rose 3' },
					{ value: 30, name: 'rose 4' },
					{ value: 28, name: 'rose 5' },
					{ value: 26, name: 'rose 6' },
					{ value: 22, name: 'rose 7' },
					{ value: 18, name: 'rose 8' }
				]
			}
		]
	};

	return (
		<Container>
			<PageTitle>Customers & Stats</PageTitle>
			<GoToHomeWrapper><GoToHome /></GoToHomeWrapper>
			<Divider />
			<MainInfo>
				<TableContainer component={Paper} sx={{
					flex: "2",
					height: "85vh",
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					gap: "5px",
					padding: "5px",
				}}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="left">Profile picture</TableCell>
								<TableCell align="left">Username</TableCell>
								<TableCell align="left">Email</TableCell>
								<TableCell align="left">Create account</TableCell>
								<TableCell align="left">Orders</TableCell>
								<TableCell align="left">Total $</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{users?.map(user => (
								<TableRow
									key={user._id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										<img src={`http://localhost:8080${user.profileUrl}`} alt="profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
									</TableCell>
									<TableCell align="left">{user.username}</TableCell>
									<TableCell align="left">{user.email}</TableCell>
									<TableCell align="left">{moment(user.createdAt).format("MMM Do YY")}</TableCell>
									<TableCell align="left">{user.orders.length}</TableCell>
									<TableCell align="left">Total 4562$</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TopUsers>
					<EchartPie option={option} style={{ height: "100vh", width: "100%" }} />
				</TopUsers>
			</MainInfo>
		</Container >
	)
}

export default GetUsers