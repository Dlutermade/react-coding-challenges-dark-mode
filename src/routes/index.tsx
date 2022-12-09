import React from "react";
import { FC } from "react";
import Home from "./App";

type Page = "Home" | string; // 可以跳出提示字元

type Props = {
  page: Page;
};

const Routes: FC<Props> = ({ page }) => {
  if (page === "Home") {
    return <Home />;
  }

  return <>{"Error404"}</>;
};

export default Routes;
