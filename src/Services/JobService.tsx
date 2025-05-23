import axios from "axios"
const base_url = "https://polarisjobportal.onrender.com/jobs/"

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

const applyJob = async (id: any, applicant: any) => {
    return axios.post(`${base_url}apply/${id}`, applicant)
        .then(response => response.data)
        .catch(error => { throw error; })
}

const getJobPostedBy = async (id: any) => {
    return axios.get(`${base_url}postedBy/${id}`)
        .then(response => response.data)
        .catch(error => { throw error; })
}

const changeAppStatus = async (application: any) => {
    return axios.post(`${base_url}changeApplyStatus`, application)
        .then(response => response.data)
        .catch(error => { throw error; })
}

export { postJob, getAllJobs, getJob, applyJob, getJobPostedBy, changeAppStatus }
