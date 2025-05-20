import axios from "axios"
const base_url = "https://polarisjobportal.onrender.com/profiles/"

const getProfile = async (id: any) => {
    return axios.get(`${base_url}get/${id}`)
        .then(response => response.data)
        .catch(error => { throw error; })
}

const updateProfile = async (profile: any) => {
    return axios.put(`${base_url}update`, profile)
        .then(response => response.data)
        .catch(error => { throw error; })
}

const getAllProfiles = async () => {
    return axios.get(`${base_url}getAll`)
        .then(response => response.data)
        .catch(error => { throw error; })
}

export { getProfile, updateProfile, getAllProfiles }

