import { BrowserRouter, Routes, Route } from "react-router-dom";

import MasterLayout from "../layouts/MasterLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Analytics from "../pages/Analytics/Analytics";
import Wallet from "../pages/Wallet/Wallet";
import Withdrawals from "../pages/Withdrawals/Withdrawals";
import Players from "../pages/Players/Players";

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <MasterLayout>

                            <Dashboard />

                        </MasterLayout>
                    }
                />

                <Route
                    path="/analytics"
                    element={
                        <MasterLayout>

                            <Analytics />

                        </MasterLayout>
                    }
                />

                <Route
                    path="/wallet"
                    element={
                        <MasterLayout>

                            <Wallet />

                        </MasterLayout>
                    }
                />

                <Route
                    path="/withdrawals"
                    element={
                        <MasterLayout>

                            <Withdrawals />

                        </MasterLayout>
                    }
                />

                <Route
                    path="/players"
                    element={
                        <MasterLayout>

                            <Players />

                        </MasterLayout>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

};

export default AppRoutes; 