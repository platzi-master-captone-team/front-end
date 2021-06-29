import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartPanel } from './ProfileChart.styled';

const data = [
  {
    name: 'Abril',
    ingresos: 1025,
    citas: 15,
  },
  {
    name: 'Mayo',
    ingresos: 760,
    citas: 10,
  },
  {
    name: 'Junio',
    ingresos: 980,
    citas: 13,
  },
];

const ProfileChart = ({show}) => {

    return (
      <ChartPanel profile="Experto" $show={show}>
      <ResponsiveContainer width="100%" height={200} aspect={1.5} >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="ingresos" fill="#FF8600" />
          <Bar dataKey="citas" fill="#FFB900" />
        </BarChart>
      </ResponsiveContainer>
      </ChartPanel>
    );
}

export default ProfileChart;
