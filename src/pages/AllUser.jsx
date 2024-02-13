import React, { useEffect, useState } from 'react'
import { DashboardHOC } from '../component/DashboardHOC'
import '../asset/style/pages/AllUser.css'
import axios from 'axios'
function AllUser() {
    const [arr, setarr] = useState([])
    useEffect(() => {
        getContent()
    }, [])

    const getContent = () => {
        axios({
            method:'get',
            url:'https://dashboard-api-one.vercel.app/api/v1/allUsers',
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("toke")}`
            }
        }).then((res) => {
            setarr([...res.data])
        })
    }

    const editData = () =>{

    }

    const deleteData = (id) =>{
        axios({
            method:'delete',
            url:'https://dashboard-api-one.vercel.app/api/v1/deleteUser'+`/${id}` ,
            headers:{
                Authorization:`Bearer ${sessionStorage.getItem("toke")}`
            }
        }).then((res)=>{
            getContent()
        })
    }
    return (
        <>
            <div className="table-contain">
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((x,i)=>{
                                return <tr key={i}>
                                    <td>{x._id}</td>
                                    <td>{x.firstName}</td>
                                    <td>{x.lastName}</td>
                                    <td>{x.mobileNumber}</td>
                                    <td>{x.email}</td>
                                    <td><button className='edit' onClick={editData}>Edit</button><button className='delete' onClick={()=>deleteData(x._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DashboardHOC(AllUser)