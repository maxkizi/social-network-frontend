import axios from "axios";

const HOST = 'http://localhost:8080'
const BASE_URL = `${HOST}/api/v1`

const baseApiAxios = axios.create({
        withCredentials: true,
        baseURL: BASE_URL
    }
);

const authApiAxios = axios.create({
        withCredentials: true,
        baseURL: HOST,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json, text/plain, */*'
        }
    }
);

export const authApi = {
    meRequest() {
        return authApiAxios.get('/api/v1/auth/me').then(resp => {
            return resp
        })
    },
    loginRequest(data) {
        return authApiAxios.post('/login', data).then(resp => {
                return resp
            }
        )
    },
    logoutRequest() {
        return authApiAxios.get('/logout')
    }

}

export const usersApi = {
    getUsersRequest(pageNumber, pageSize) {
        const searchParams = new URLSearchParams();
        searchParams.append('size', pageSize)
        searchParams.append('page', (pageNumber - 1).toString())

        return baseApiAxios.get(`/users?${searchParams.toString()}`)
            .then(response => {
                return response.data
            })
    },
    followRequest(id) {
        return baseApiAxios.post(`/follow/${id}`, null)
    },
    unfollowRequest(id) {
        return baseApiAxios.delete(`/follow/${id}`)
    }
}

export const profileApi = {
    getProfileRequest(id) {
        return baseApiAxios.get(`/profile/${id}`).then(response => {
            return response.data
        })
    },
    updateProfileRequest(profileData) {
        return baseApiAxios.put(`/profile`, profileData).then(response => {
            return response.data
        })
    }

}


