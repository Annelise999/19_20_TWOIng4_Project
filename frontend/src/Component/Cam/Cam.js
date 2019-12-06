import React, { Component } from 'react';
import '../Widget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import {
  PieChart, Pie, Cell,
} from 'recharts';


 const data = [
            { name: 'Azote (N2)', value: 800 },
            { name: 'Dioxygène (02)', value: 150 },
            { name: 'Dioxyde de carbone (C02)', value: 30 },
            { name: 'Autres gazs', value: 20 },
          ];
          
          const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
          
          const RADIAN = Math.PI / 180;
          const renderCustomizedLabel = ({
            cx, cy, midAngle, innerRadius, outerRadius, percent, index,
          }) => {
             const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
          
            return (
              <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          };
          

class Cam extends Component{
     
          render () {
      
      return (
       
       <div className="widget" >

            <h4 class="air"> QUALITE DE L'AIR</h4>
       
     <Row>
         <Col md= "12" lg="5">  <PieChart class= "camembert" width={350} height={250}>
        <Pie
          data={data}
          cx={160}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart> </Col>
         
      <Col lg="2" className="d-none d-lg-block"></Col>
   
    <Col lg="5" className="d-none d-lg-block">
<br></br>
      <Row><p class="air1"> - Azote (N2)</p> </Row>
      <Row><p class="air2"> - Dioxygène (02)</p></Row> 
      <Row><p class="air3"> - Dioxyde de carbone (C02)</p></Row>
      <Row><p class="air4"> - Autres gazs</p></Row>
</Col>

       
      </Row>
        </div>
      );
  }


}

export default Cam;


