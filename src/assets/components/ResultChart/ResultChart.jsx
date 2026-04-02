// -------------------------------Start: 34_7 ---------------------------------------
// (20)st rsc+enter
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
// (3) from AI
const resultData = [
    {
      "student_id": 1,
      "name": "Mithu",
      "physics": 85,
      "chemistry": 90,
      "math": 88
    },
    {
      "student_id": 2,
      "name": "Nabhan",
      "physics": 92,
      "chemistry": 85,
      "math": 91
    },
    {
      "student_id": 3,
      "name": "Shema",
      "physics": 78,
      "chemistry": 82,
      "math": 80
    },
    {
      "student_id": 4,
      "name": "Fariha",
      "physics": 88,
      "chemistry": 86,
      "math": 92
    },
    {
      "student_id": 5,
      "name": "Meem",
      "physics": 95,
      "chemistry": 91,
      "math": 93
    },
    {
      "student_id": 6,
      "name": "Shimul",
      "physics": 80,
      "chemistry": 78,
      "math": 85
    },
    {
      "student_id": 7,
      "name": "Rauf",
      "physics": 91,
      "chemistry": 94,
      "math": 90
    },
    {
      "student_id": 8,
      "name": "Hank",
      "physics": 70,
      "chemistry": 72,
      "math": 75
    },
    {
      "student_id": 9,
      "name": "Ivy",
      "physics": 77,
      "chemistry": 80,
      "math": 78
    },
    {
      "student_id": 10,
      "name": "Jack",
      "physics": 89,
      "chemistry": 87,
      "math": 90
    }
  ]

const ResultChart = () => {
    return (
        <div>
            {/* (2)st<LineChart+enter */}
            {/* (4)data={resultData}
 */}
            <LineChart width={500} height={500} data={resultData}>
            {/* (6)st XAxis+enter */}
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            {/* (6)en then run in terminal npm install axios then create marksData.json in public folder then create MarksChart.jsx in MarksChart folder in component folder */}

             {/* (5)st <Line+enter*/}
            <Line dataKey="math"></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
              {/* (5)en */}

            </LineChart>
            {/* (2)en */}

        </div>
    );
};

export default ResultChart;
// (20)en then in App.jsx


// -------------------------------End:34_7-(1) to () ---------------------------------------