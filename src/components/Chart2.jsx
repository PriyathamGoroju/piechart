import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Chart2 = ({userData}) => {

  const oldCount = userData.filter((user) => user.dob.age>40).length;
  const youngCount = userData.filter((user) => user.dob.age<=40).length;

  const pieChartData = [
    { title: 'Old', value: oldCount, color: 'darkgray' },
    { title: 'Young', value: youngCount, color: 'black' },
  ];

  return (
    <div className="chart1">
      <h2>EMAIL TYPE</h2>
      <div style={{ maxWidth: '200px', margin: '0px' }}>
        <PieChart
          data={pieChartData}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}% ${dataEntry.title}`}
          labelStyle={{
            fontSize: '8px',
            fontFamily: 'sans-serif',
            fill: '#fff',
          }}
        />
      </div>
      <div>
        <p>TOTAL COUNT = {oldCount + youngCount}</p>
        <p>OLD = {oldCount}</p>
        <p>YOUNG = {youngCount}</p>
      </div>
    </div>
  );
};

export default Chart2;
