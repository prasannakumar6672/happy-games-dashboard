import "./MasterLayout.css";

import type { ReactNode } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface MasterLayoutProps {

    children: ReactNode;

}

const MasterLayout = ({

    children

}: MasterLayoutProps) => {

    return (

        <div className="master-layout">

            <Sidebar />

            <div className="master-main">

                {/* <Header/> */}

                <main className="master-content">

                    {children}

                </main>

                <Footer />

            </div>

        </div>

    );

};

export default MasterLayout;