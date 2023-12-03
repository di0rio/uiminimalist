import style from "./Home.module.css";

import Box from "../../components/Box/Box";
import Piecharts from "../../components/PieChart/PieCharts";

const Home = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>
        <h1>Hi, Welcome back 👋</h1>
      </div>
      <div>
        <Box></Box>
      </div>
      <div>
        <Piecharts />
      </div>
    </div>
  );
};

export default Home;
