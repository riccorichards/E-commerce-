import axios from "axios";
import { useSelector } from "react-redux";

const AxiosRequest = () => {
  const BASE_URL = "http://localhost:8080/";
  const { accessToken } = useSelector((state) => state.login.currentUser);

  const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  return (
    <>
      {publicRequest}
      {userRequest}
    </>
  );
};
export default AxiosRequest;
