import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartPanel } from './ProfileChart.styled';

const data = [
  {
    name: 'Enero',
    ingresos: 240,
    citas: 5,
  },
  {
    name: 'Febrero',
    ingresos: 500,
    citas: 7,
  },
  {
    name: 'Marzo',
    ingresos: 139,
    citas: 2,
  },
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
      <ResponsiveContainer width={500} aspect={2.5} >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
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
