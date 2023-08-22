import axios from "axios";


const BASE_URL = "http://localhost:8080/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDdiZDg5YjRmNTI1NTNkMmIwNjJkOSIsImlhdCI6MTY5MjE4ODE2MCwiZXhwIjoxNjkyNjIwMTYwfQ.xqXM_ygvKlGpid8vHbTC1MlD7_R70rh-74GqeDZPEOc"


export const publicRequest = axios.create({
	baseURL: BASE_URL
})


export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: `Bearer ${TOKEN}`
})

