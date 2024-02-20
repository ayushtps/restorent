import React, { useState } from 'react'
import { DashboardHOC } from '../component/DashboardHOC'
import '../asset/style/pages/AllUser.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteApi, editDataUser } from '../redux/action/action'
function AllUser() {
    const [popUpShow, setpopUpShow] = useState(false)
    let [editObj, seteditObj] = useState({})


    const state = useSelector(state => state.api)
    const dispatch = useDispatch()

    const onEnter = (e) => {
        if (e.key == 'Enter') {
            editData();
        }
    }

    const [registerForm, setregisterForm] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: '',
        mobileNumber: '',
        confirmPassword: '',
        profileImage: ''
    })

    const handleChange = (name, value) => {
        setregisterForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const editData = (user) => {
        setpopUpShow(true)
        seteditObj({ ...user })
        setregisterForm({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobileNumber: user.mobileNumber,
            profileImage: user.profileImage || ''
        });
    }

    const submitData = () => {
        dispatch(editDataUser(registerForm, editObj))
        document.querySelector('form').reset();
        setregisterForm({
            firstName: "",
            lastName: "",
            password: "",
            email: '',
            mobileNumber: '',
            confirmPassword: '',
            profileImage: ''
        })
    }

    const deleteData = (id) => {
        dispatch(deleteApi(id))
    }

    return (
        <>
            <div className="form-container" style={{ display: popUpShow ? 'block' : 'none', width: '50%', margin: '10px auto' }}>
                <h2>Edit User</h2>
                <hr />
                <form action="">
                    <div className="input-group" style={{ display: 'flex' }}>
                        <div className="inside" style={{ marginRight: '10px' }}>
                            <label htmlFor="">FirstName:-</label> <br />
                            <input type="text" name='firstName' placeholder='firstName' value={registerForm.firstName}
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                        <div className="inside">
                            <label htmlFor="">LastName:-</label> <br />
                            <input type="text" name='lastName' placeholder='lastName' value={registerForm.lastName}
                                onKeyDown={onEnter}
                                onChange={(e) => handleChange(e.target.name, e.target.value)} />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">MobileNo</label> <br />
                        <input type="text" name='mobileNumber' placeholder='mobileNumber' value={registerForm.mobileNumber}
                            onKeyDown={onEnter}
                            onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">E-mail:-</label> <br />
                        <input type="email" name='email' placeholder='E-mail' value={registerForm.email}
                            onKeyDown={onEnter}
                            onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">ProfileUrl:-</label> <br />
                        <input type="text" name='profileImage' placeholder='profileImage' value={registerForm.profileImage}
                            onKeyDown={onEnter}
                            onChange={(e) => handleChange(e.target.name, e.target.value)} />
                    </div>
                    <div className="input-group">
                        <button type='button' onClick={submitData}>Edit</button>
                    </div>
                </form>
            </div>
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
                            state?.map((x, i) => {
                                return <tr key={i}>
                                    <td>{x._id}</td>
                                    <td>{x.firstName}</td>
                                    <td>{x.lastName}</td>
                                    <td>{x.mobileNumber}</td>
                                    <td>{x.email}</td>
                                    <td><button className='edit' onClick={() => editData(x)}>Edit</button><button className='delete' onClick={() => deleteData(x._id)}>Delete</button></td>
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