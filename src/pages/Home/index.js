import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./index.css";
import Chart from "../../components/Chart";
import Chart2 from "../../components/Chart2";
import { MyContext } from "../../context/UserStore";

export default function Home() {
    const { userData, setUserData } = useContext(MyContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://randomuser.me/api/?results=100"
                );
                const data = await response.json();
                setUserData(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div id="home">
            <Navbar />
            <div>
                <Sidebar />
                {userData && (
                    <main>
                        <h2>KEY PERFORMANCE INDICATOR</h2>
                        <Chart userData={userData} />
                        <div id="line"></div>
                        <Chart2 userData={userData} />
                    </main>
                )}
            </div>
        </div>
    );
}
