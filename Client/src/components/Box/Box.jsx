import style from "./Box.module.css";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import sino from "../../img/Image.png";
import pessoa from "../../img/Image1.png";
import email from "../../img/Image3.png";
import carrinho from "../../img/Image4.png";

const Box = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={style.main}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 10 }}
      >
        <Item
          sx={{
            width: "15.51563em",
            height: "9em",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img src={sino} alt="" />
          <div className={style.caixa}>
            <Typography
              sx={{
                color: "#212B36",
                fontFamily: "Public Sans",
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              714k
            </Typography>
            <Typography
              sx={{
                color: "#919EAB",
                fontFamily: "Public Sans",
                fontSize: "0.875em",
                fontWeight: "600",
              }}
            >
              Weekly Sales
            </Typography>
          </div>
        </Item>

        <Item
          sx={{
            width: "15.51563em",
            height: "9em",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img src={pessoa} alt="" />
          <div className={style.caixa}>
            <Typography
              sx={{
                color: "#212B36",
                fontFamily: "Public Sans",
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              1.35m
            </Typography>
            <Typography
              sx={{
                color: "#919EAB",
                fontFamily: "Public Sans",
                fontSize: "0.875em",
                fontWeight: "600",
              }}
            >
              New Users
            </Typography>
          </div>
        </Item>

        <Item
          sx={{
            width: "15.51563em",
            height: "9em",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img src={carrinho} alt="" />
          <div className={style.caixa}>
          <Typography
            sx={{
              color: "#212B36",
              fontFamily: "Public Sans",
              fontSize: "1.5em",
              fontWeight: "700",
            }}
          >
            1.72m
          </Typography>
          <Typography
            sx={{
              color: "#919EAB",
              fontFamily: "Public Sans",
              fontSize: "0.875em",
              fontWeight: "600",
            }}
          >
            Item Orders
          </Typography>
          </div>
        </Item>

        <Item
          sx={{
            width: "15.51563em",
            height: "9em",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img src={email} alt="" />
          <div className={style.caixa}>
          <Typography
            sx={{
              color: "#212B36",
              fontFamily: "Public Sans",
              fontSize: "1.5em",
              fontWeight: "700",
            }}
          >
            234
          </Typography>
          <Typography
            sx={{
              color: "#919EAB",
              fontFamily: "Public Sans",
              fontSize: "0.875em",
              fontWeight: "600",
            }}
          >
            Bug Reports
          </Typography>
          </div>
        </Item>
      </Stack>
    </div>
  );
};

export default Box;
