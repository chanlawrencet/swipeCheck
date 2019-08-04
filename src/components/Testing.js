// import React from "react";
// import {LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';
//
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 800, pv: 28400, amt: 29400}];
//
// const divStyle = {
//     textAlign : 'center',
//     marginTop: '20vh',
//     margin : '0 auto'
// };
//
// const renderLineChart = (
//     <LineChart width={400} height={400} data={data} style={divStyle}>
//         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//         <CartesianGrid stroke='%ccc'/>
//         <XAxis dataKey='name' />
//         <YAxis />
//     </LineChart>
// );
//
//
// class Testing extends React.Component{
//
//     render() {
//         return (
//             <div style={divStyle}>
//                 {renderLineChart}
//             </div>
//         )
//
//     }
// }
//
// export default Testing;