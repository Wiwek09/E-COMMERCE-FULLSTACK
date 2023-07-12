import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjc4MzU0MTQ5MTVmNDlkOGU0M2ZiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzQyNzA1NSwiZXhwIjoxNjc3Njg2MjU1fQ.y9riYQyQVidOjrhk68_ZUVEBBxjC6z-jIV36Hfl2Onk"  

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});

