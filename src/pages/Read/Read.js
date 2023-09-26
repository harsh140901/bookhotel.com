import './Read.css'
import { Table } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    
    const [APIData, setAPIData] = useState([]);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }


    useEffect(() => {
        axios.get(`https://638f20cf9cbdb0dbe31dd4f8.mockapi.io/mockData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const onDelete = (id) => {
        axios.delete(`https://638f20cf9cbdb0dbe31dd4f8.mockapi.io/mockData/${id}`, )
        .then(() => {
            getData();
        })
        
    }
    const getData = () => {
        axios.get(`https://638f20cf9cbdb0dbe31dd4f8.mockapi.io/mockData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    return (
        <div className='readContainer'>
            <h1 className='readheading'>Signup data</h1>
            <Table singleLine >
                <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/signup/update'>
                                    <Table.Cell>
                                        <button onClick={() => setData(data)}>Update</button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}