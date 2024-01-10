import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = ({userData}) => {

    const maleCount = userData.filter((user) => user.gender === "male").length;
    const femaleCount = userData.filter(
        (user) => user.gender === "female"
    ).length;

    const pieChartData = [
        { title: "Male", value: maleCount, color: "darkgray" },
        { title: "Female", value: femaleCount, color: "black" },
    ];

    return (
        <div className="chart1">
            <h2>GENDER</h2>
            <div style={{ maxWidth: "200px", margin: "0px" }}>
                <PieChart
                    data={pieChartData}
                    label={({ dataEntry }) =>
                        `${Math.round(dataEntry.percentage)}%  ${
                            dataEntry.title
                        }`
                    }
                    labelStyle={{
                        fontSize: "8px",
                        fontFamily: "sans-serif",
                        fill: "#fff",
                    }}
                />
            </div>
            <div>
                <p>TOTAL COUNT = {maleCount + femaleCount}</p>
                <p>MALE = {maleCount}</p>
                <p>FEMALE = {femaleCount}</p>
            </div>
        </div>
    );
};

export default Chart;
