import { useEffect, useState } from "react";

import "./RequestTable.css";

import { getWithdrawalsData } from "../../api";

import type { WithdrawalRequest } from "../../types";

import StatusBadge from "../StatusBadge/StatusBadge";
import ActionButtons from "../ActionButtons/ActionButtons";

const RequestTable = () => {

    const [requests, setRequests] = useState<WithdrawalRequest[]>([]);

    useEffect(() => {

        loadRequests();

    }, []);

    const loadRequests = async () => {

        const response = await getWithdrawalsData();

        setRequests(response.requests);

    };

    const handleApprove = (id:number) => {

        console.log("Approve :", id);

    };

    const handleReject = (id:number) => {

        console.log("Reject :", id);

    };

    return (

        <div className="request-table">

            <div className="table-header">

                <h2>

                    Pending Withdrawal Requests

                </h2>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Username</th>

                        <th>Amount</th>

                        <th>Balance</th>

                        <th>Requested On</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        requests.map((request)=>(

                            <tr key={request.id}>

                                <td>{request.id}</td>

                                <td>{request.username}</td>

                                <td>

                                    ₹ {request.amount.toLocaleString()}

                                </td>

                                <td>

                                    ₹ {request.balance.toLocaleString()}

                                </td>

                                <td>{request.requestDate}</td>

                                <td>

                                    <StatusBadge

                                        status={request.status}

                                    />

                                </td>

                                <td>

                                    <ActionButtons

                                        onApprove={()=>handleApprove(request.id)}

                                        onReject={()=>handleReject(request.id)}

                                    />

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default RequestTable;