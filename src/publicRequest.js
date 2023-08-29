import axios from "axios";


const BASE_URL = "http://localhost:8080/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTRkYjA0NTZlMjgwNGRkNWM5ODkxMCIsImlhdCI6MTY5MzI1NzM4NSwiZXhwIjoxNjkzNjg5Mzg1fQ.Hmv8SOcpDz3GvlkYnx9AhBihFRjBOmbLyGOrCfgbsck"


export const publicRequest = axios.create({
	baseURL: BASE_URL
})


export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		token: `Bearer ${TOKEN}`,
		"Content-Type": "application/json",
	}
})

