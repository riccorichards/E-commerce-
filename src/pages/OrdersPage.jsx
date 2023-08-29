import { TableBody, TableContainer, TableCell, Table, TableRow, TableHead, Paper } from "@mui/material";


const OrdersPage = () => {
	return (
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
					{/*{users?.map(user => (
						<TableRow
							key={user._id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								<img src={`http://localhost:8080${user.profileUrl}`} alt="profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
							</TableCell>
							<TableCell align="left">{user.username}</TableCell>
							<TableCell align="left">{user.email}</TableCell>
							<TableCell align="left">{user.orders.length}</TableCell>
							<TableCell align="left">Total 4562$</TableCell>
						</TableRow>
					))}*/}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default OrdersPage