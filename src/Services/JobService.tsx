import axios from "axios"
const base_url = "http://localhost:8080/jobs/"

const postJob = async (job: any) => {
    return axios.post(`${base_url}post`, job)
        .then(response => response.data)
        .catch(error => { throw error; })
}

const getAllJobs = async () => {
    return axios.get(`${base_url}getAll`)
        .then(response => response.data)
        .catch(error => { throw error; })
}

const getJob = async (id: any) => {
    return axios.get(`${base_url}get/${id}`)
        .then(response => response.data)
        .catch(error => { throw error; })
}

export { postJob, getAllJobs, getJob }

