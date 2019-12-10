import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Barchart' };

export const withText = () => <Button>Hello Button</Button>;

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





export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);   

