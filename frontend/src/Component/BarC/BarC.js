import React, { Component } from 'react';
import {
  ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import '../Widget.css';
import axios from 'axios';


class Charte extends Component {

  state = {
    data: [

      {
        name: 'Mai', Température: 18,
      },
      {
        name: 'Juin', Température: 19,
      },
      {
        name: 'Juil', Température: 21,
      },
      {
        name: 'Aou', Température: 22,
      },
      {
        name: 'Sep', Température: 25,
      },
      {
        name: 'Oct', Température: 30,
      },
      {
        name: 'Nov', Température: 29,
      },
      {
        name: 'Dec', Température: 29,
      }
    ]
  }

  constructor(props) {
    super(props);

    const ID= props.ID
    var data = [];
    var self = this;
   

    axios.get('http://localhost:3000/api/sensor/temperature', {
      params: {
        userId: props.ID
      }
    })
      .then(function (response) {
          data = [{
          'name': "Jan",
          'Température': response.data.Janvier
        },
        {
          'name': "Fev",
          'Température': response.data.Fevrier
        },
        {
          'name': "Mar",
          'Température': response.data.Mars
        },
        {
          'name': "Avr",
          'Température': response.data.Avril
        },
        {
          'name': "Mai",
          'Température': response.data.Mai
        },
        {
          'name': "Juin",
          'Température': response.data.Juin
        },
        {
          'name': "Juil",
          'Température': response.data.Juillet
        },
        {
          'name': "Juin",
          'Température': response.data.Juin
        },
        {
          'name': "Juil",
          'Température': response.data.Juillet
        },
        {
          'name': "Aou",
          'Température': response.data.Aout
        },
        {
          'name': "Sep",
          'Température': response.data.Septembre
        },
        {
          'name': "Oct",
          'Température': response.data.Octobre
        },
        {
          'name': "Nov",
          'Température': response.data.Novembre
        },
        {
          'name': "Dec",
          'Température': response.data.Decembre
        }
        ]

      }).then(function () {
        console.log(data);
        self.setState({ data: data });

      })
      .catch(function (error) {
        console.log(error);
      })

  }
  render() {
    return (
      <div className="widget droite" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={this.state.data}
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Température" barSize={20} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Charte;