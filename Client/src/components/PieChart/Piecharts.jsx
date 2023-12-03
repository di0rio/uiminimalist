import styles from "./PieCharts.module.css";

import { PieChart, Pie, Tooltip } from "recharts";

const Piecharts = () => {
  const data = [
    { name: "Facebook", value: "20000" },
    { name: "instagram", value: "10000" },
    { name: "TikTok", value: "50000" },
    { name: "Neymar", value: "10001" },
  ];

  return (
    <div className={styles.container}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Piecharts;
