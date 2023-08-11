import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 200 },
  { name: "Feb", value: 147 },
  { name: "Mar", value: 130 },
  { name: "Apr", value: 90 },
  { name: "May", value: 30 },
  { name: "Jun", value: 120 },
  { name: "Jul", value: 190 },
  { name: "Aug", value: 60 },
  { name: "Sep", value: 52 },
  { name: "Oct", value: 87 },
  { name: "Nov", value: 91 },
  { name: "Dec", value: 65 },
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
        <Bar dataKey="value" fill="#ff3f62ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
