import axios from 'axios';

const API_URL = 'https://fet.app.fsd.rs/api'

export const apiCall = (method, url) => {
    return axios[method](`${API_URL}${url}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjM2ODEwMzIsImV4cCI6MTY2NDU0NTAzMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoic2xhdmtvdi5tb2JAZ21haWwuY29tIn0.sKIjCQwbphQ9a-0wv-LAaC2e-kzRkxeUwzjO5YpUD4CYCeeq2TMnlApdutRm3oEkeG1Y_c3kLj_Sp-J8RvbzhawUWkTqGSg3f-apx7aQIgu7q5slwT37rTu4CyRxyWYKeeFDfNBTXNrkNuYTYaebpScsi6GGyX8dSYnTxG_ObPAeLWdiG3boMjMHyAwIvNJhZLTmrcM_Wxs47Q7FusB3goGCQ2WyPP0yoBFmqrc-jLZev4YVrIXkAY4u7PEuGYQ2dhXNjzqDQLxiCCCeu1_7aUC1cjOfTupR7tkClpYbNMPHRs8T3QNJL27KZr31qHUI4Ik2jaZh4WkAsO3B55yYHQ`
                },
            })
}