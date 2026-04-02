// -------------------------------Start: 34_8 ---------------------------------------
// (1) st rsc+enter
import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

// (4)  MarksChart = (marksPromise)
const MarksChart = ({marksPromise}) => {
    // (5) st use+enter
    // const marksData = use(marksPromise);
    // console.log(marksData);
    // (5) en
    // (6) commit (5) and edit (6)
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // (6) en

    // data processing for the chart
    // (7)st
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        // (8) st
        const avg =(student.physics + student.chemistry + student.math) /3;
        student.avg = avg;
        // (8) en
        return student;
    })
    console.log(marksChartData);
    
    // (7)en

    return (
        <div>
            {/* (9)st */}
            <BarChart width={500} height ={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>

            </BarChart>
            {/* (9)en */}
            
        </div>
    );
};

export default MarksChart;
// (1) en then in App.jsx file


// -------------------------------End:34_8-(1) to () ---------------------------------------