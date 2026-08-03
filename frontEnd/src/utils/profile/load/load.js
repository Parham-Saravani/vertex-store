import { takeUserToken } from "../../cookie";
import { apiRequestHandler } from "../../http";
import createCharts from "../layouts/adminLayouts/chart";
const onPageLoad = () => {
  createCharts();
  const token = takeUserToken();
};

window.addEventListener("load", onPageLoad);
