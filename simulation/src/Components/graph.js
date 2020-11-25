import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Week 1', diet: 100, kg: 50, 
  },
  {
    name: 'Week 2', diet: 0, kg: 52, 
  },
  {
    name: 'Week 3', diet: 0, kg: 51, 
  },
  {
    name: 'Week 4', diet: 100, kg: 50, 
  },
  {
    name: 'Week 5', diet: 100, kg: 50, 
  },
  {
    name: 'Week 6', diet: 100, kg: 49, 
  },
  {
    name: 'Week 7', diet: 100, kg: 49, 
  },
  {
    name: 'Week 8', diet: 100, kg: 49, 
  },
  {
    name: 'Week 9', diet: 100, kg: 49, 
  },
  {
    name: 'Week 10', diet: 100, kg: 49, 
  },
  {
    name: 'Week 11', diet: 100, kg: 49, 
  },
  {
    name: 'Week 12', diet: 100, kg: 49, 
  },
  {
    name: 'Week 13', diet: 100, kg: 49, 
  },
  {
    name: 'Week 14', diet: 100, kg: 49, 
  },
  {
    name: 'Week 15', diet: 100, kg: 49, 
  },
  {
    name: 'Week 16', diet: 100, kg: 49, 
  },
  {
    name: 'Week 17', diet: 100, kg: 49, 
  },
  {
    name: 'Week 18', diet: 0, kg: 49, 
  },

  {
    name: 'Week 19', diet: 0, kg: 49, 
  },

  {
    name: 'Week 20', diet: 100, kg: 49, 
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q5atk5jr/';

  render() {
    return (
      <ComposedChart
        width={800}
        height={450}
        data={data}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" label={{ value: '', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Weight', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="kg" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="diet" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}

