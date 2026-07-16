import { useEffect, useState } from "react";

import "./RecentTransactions.css";

import { getWalletData } from "../../api";

import type { RecentTransaction } from "../../types";

const RecentTransactions = () => {

    const [transactions, setTransactions] = useState<RecentTransaction[]>([]);

    useEffect(() => {

        loadTransactions();

    }, []);

    const loadTransactions = async () => {

        const response = await getWalletData();

        setTransactions(response.recentTransactions);

    };

    return (

        <div className="recent-transactions">

            <div className="table-header">

                <h2>

                    Recent Transactions

                </h2>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Transaction ID</th>

                        <th>User</th>

                        <th>Type</th>

                        <th>Amount</th>

                        <th>Status</th>

                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transactions.map((item)=>(

                            <tr key={item.id}>

                                <td>{item.transactionId}</td>

                                <td>{item.user}</td>

                                <td>{item.type}</td>

                                <td>

                                    ₹ {item.amount.toLocaleString()}

                                </td>

                                <td>

                                    <span

                                        className={`status ${item.status.toLowerCase()}`}

                                    >

                                        {item.status}

                                    </span>

                                </td>

                                <td>{item.date}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default RecentTransactions;