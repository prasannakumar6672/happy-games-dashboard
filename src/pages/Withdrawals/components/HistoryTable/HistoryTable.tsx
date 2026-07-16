import { useEffect, useState } from "react";

import "./HistoryTable.css";

import { getWithdrawalsData } from "../../api";

import type { WithdrawalHistory } from "../../types";

import StatusBadge from "../StatusBadge/StatusBadge";

const HistoryTable = () => {

    const [history, setHistory] = useState<WithdrawalHistory[]>([]);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        const response = await getWithdrawalsData();

        setHistory(response.history);

    };

    return (

        <div className="history-table">

            <div className="table-header">

                <h2>

                    Withdrawal History

                </h2>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Username</th>

                        <th>Amount</th>

                        <th>Status</th>

                        <th>Processed Date</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history.map((item)=>(

                            <tr key={item.id}>

                                <td>{item.id}</td>

                                <td>{item.username}</td>

                                <td>

                                    ₹ {item.amount.toLocaleString()}

                                </td>

                                <td>

                                    <StatusBadge

                                        status={item.status}

                                    />

                                </td>

                                <td>

                                    {item.processedDate}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default HistoryTable;