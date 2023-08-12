import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", earned: 200 },
  { name: "Feb", earned: 147 },
  { name: "Mar", earned: 130 },
  { name: "Apr", earned: 90 },
  { name: "May", earned: 30 },
  { name: "Jun", earned: 120 },
  { name: "Jul", earned: 190 },
  { name: "Aug", earned: 60 },
  { name: "Sep", earned: 52 },
  { name: "Oct", earned: 87 },
  { name: "Nov", earned: 91 },
  { name: "Dec", earned: 65 },
];

const yAxisData = (value) => `$${value}`;

const Charts = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart
        // width={400}
        // height={300}
        data={data}
        // margin={{ top: 20,, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={yAxisData} />
        <Tooltip />
        <Bar dataKey="earned" fill="#ff3f62ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
