import React, { Component } from 'react';
import '../Widget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import axios from 'axios';


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


class Cam extends Component {


  state = {
    data: [
      { name: 'Air Pollution', value: 300 },
      { name: 'Air pur', value: 150 }
    ]
  }

  constructor(props) {
    super(props);

    var data = [];
    var self = this;

    axios.get('http://localhost:3000/api/sensor/pollution', {
      params: {
        userId: "5ddb94c6fc13ae640c000016"
      }
    })
      .then(function (response) {
        console.log(response)
        data = [{
          'name': response.data.type,
          'value': response.data.value
        },
        {
          'name': "Air pur",
          'value': (100 - response.data.value)
        }
        ]

      })
      .then(function () {
        console.log(data);
        self.setState({ data: data });

      })
      .catch(function (error) {
        console.log(error);
      })

  }


  render() {

    return (

      <div className="widget" >

        <h4 class="air"> QUALITE DE L'AIR</h4>

        <Row>
          <Col md="12" lg="5">  <PieChart class="camembert" width={350} height={250}>
            <Pie
              data={this.state.data}
              cx={160}
              cy={100}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {
                this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
          </PieChart> </Col>

          <Col lg="2" className="d-none d-lg-block"></Col>

          <Col lg="5" className="d-none d-lg-block">
            <br></br>
            <Row><p class="air1"> - Air Pollution</p> </Row>
            <Row><p class="air2"> - Air pure</p></Row>

          </Col>


        </Row>
      </div>
    );
  }


}

export default Cam;


