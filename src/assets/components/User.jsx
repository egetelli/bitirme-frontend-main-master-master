import React, { useState, useEffect } from 'react'
import axios from 'axios'


const getAllUsers = (users) => {
    return users;
}



export const getUser = (email) => {
    users.map((user, index) => {
        if (user.email == email) {
            return user
        }
        else {
            console.log("no user with specified email")
        }
    })
}
const User = (props) => {

    const [users, setUsers] = useState([])



    useEffect(() => {
        axios.get('http://localhost:3000/api/user')
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])
    getAllUsers(users);
    //console.log("users ",  users)


    return (

        <div>
            <ul>
                {
                    // users.map((user,index)=> <li key={index}>{user.fullName}</li>)
                    // console.log("props", props.email)
                    users.map((user, index) => {
                        {
                            let userData = " "
                            userData = users[index].email;
                            // console.log("email", users[index].email,"propmail" , props.email)

                            if (userData == props.email) {
                                console.log("userdata", userData);
                                console.log("propmail", props.email)
                                return (
                                    <div>
                                        <h1>
                                            {user.email}
                                        </h1>
                                        <h3>{user.fullName}</h3>
                                        
                                    </div>
                                )

                            }
                            else {
                                console.log("no user with specified email",)
                            }
                        }

                    })
                }



            </ul>


        </div>
    )
}
export default User;