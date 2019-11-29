import React, { Component } from 'react';
import './Cam.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import {
  PieChart, Pie, Cell,
} from 'recharts';


 const data = [
            { name: 'Professeur Violet', value: 400 },
            { name: 'Colonnel Moutarde', value: 300 },
            { name: 'Mlle Rose', value: 300 },
            { name: 'Madame Pervenche', value: 200 },
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
       
       <div className="Camembert" >

            <h4 class="suspect"> Suspects du moment...</h4>
       
     <Row>
         <Col sm="5">  <PieChart class= "camembert" width={400} height={250}>
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
         
    <Col sm="2"></Col>
<Col sm="5"> 
<br></br>
      <Row><p class="suspect1"> Colonnel Moutarde</p> </Row>
      <Row><p class="suspect2"> Professeur Violet</p></Row> 
      <Row><p class="suspect3"> Mademoiselle Rose</p></Row>
      <Row><p class="suspect4"> Madame Pervenche</p></Row>
</Col>
       
      </Row>
        </div>
      );
  }


}

export default Cam;


