import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './Login.css'

const Login = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [APIData, setAPIData] = useState([]);

    const handleBtnClick=()=>{
        // console.log(firstName,lastName)
        axios.get(`https://638f20cf9cbdb0dbe31dd4f8.mockapi.io/mockData`)
        
            .then((res) => {
                setAPIData(res.data);  
            })
          //  verifyLogin();
    }

    // const verifyLogin = ()=>{
    //      console.log('in verify login')
    //      console.log(firstName,lastName)
    //     //  APIData.map(item=>{
    //     //     return(
    //     //     )
    //     //  })
       
    // }

    

    return (
        <div className='login'>
            <div className='loginContainer'>
                <h1 className='loginHeading'>Login Page</h1>
                <Form className="create-form">
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                    </Form.Field>
                    <div className='loginBtn'>
                        <Button type='submit' onClick={handleBtnClick}>Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login