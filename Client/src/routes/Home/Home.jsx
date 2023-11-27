import style from "./Home.module.css";

import Box from "../../components/Box/Box";

const Home = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>
        <h1>Hi, Welcome back 👋</h1>
      </div>
      <div>
        <Box></Box>
      </div>
    </div>
  );
};

export default Home;
