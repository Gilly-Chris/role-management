import React from "react";
import './style.scss';
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";

export default function HomePage() {

    const {
        users,
    } = useSelector(state => state.Core)

    return (
        <div className="homepage">
            <div className="container">
                <div className="table-wrapper">
                    <Table striped="columns">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Ip Address</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        {
                            users && (
                                <tbody>
                                    {
                                        users.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.ip_address}</td>
                                                <td><div className="view-btn">view</div></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            )
                        }
                    </Table>
                </div>
            </div>
        </div>
    )
}