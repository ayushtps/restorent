import axios from "axios"
import { GET, LOGIN, REGISTRATION } from "../type/type"
import Notify from "../../Notify"

export const GetData = () => {
    return (dispatch) => axios({
        method: 'get',
        url: 'https://dashboard-api-one.vercel.app/api/v1/allUsers',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("toke")}`
        }
    }).then((res) => {
        dispatch({ type: GET, data: res.data })
    }).catch((error) => {
        Notify("error", "Something went wrong")
    })
}

export const deleteApi = (id) => {
    return (dispatch) => axios({
        method: 'delete',
        url: 'https://dashboard-api-one.vercel.app/api/v1/deleteUser' + `/${id}`,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("toke")}`,
        }
    }).then(() => {
        dispatch(GetData())
        Notify("success", "Delete successfully")
    }).catch((error) => {
        Notify("error", "Something went wrong")
    })
}

export const editDataUser = (registerForm, editObj) => {
    const { firstName, lastName, mobileNumber } = registerForm
    return (dispatch) => axios({
        method: 'put',
        url: "https://dashboard-api-one.vercel.app/api/v1/updateUser/" + `${editObj._id}`,
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("toke")}`
        },
        data: { firstName: firstName, lastName: lastName, mobileNumber: mobileNumber }
    }).then((res) => {
        dispatch(GetData())
        Notify("success", "Edit successfully")
    }).catch((error) => {
        Notify("error", "Something went wrong")
    })
}

// export const LoginUser = (registerForm) => {
//     const { password, email } = registerForm
//     return (dispatch) => axios({
//         method: 'post',
//         url: 'https://dashboard-api-one.vercel.app/api/v1/login',
//         data: {
//             email: email,
//             password: password
//         }
//     }).then((response) => {
//         dispatch({ type: LOGIN })
//         saveSession(response.data)
//     }).catch((error) => {
//         console.log(error)
//     })
// }

// export const RegisterUser = (registerForm) => {
//     return (dispatch) => axios({
//         method: 'post',
//         url: 'https://dashboard-api-one.vercel.app/api/v1/register',
//         data: registerForm
//     }).then((response) => {
//         return dispatch({ type: REGISTRATION, data: response.data })
//     }).catch((error) => {
//         console.log(error);
//     })

// }