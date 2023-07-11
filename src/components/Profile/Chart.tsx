import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "Sphere Rating",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: [
        "#7974F5",
        "#7974F5",
        "#7974F5",
        "#7974F5",
        "#7874f530",
        "#7874f530",
        "#7874f530",
        "#7874f530",
        "#7874f530",
        "#7874f530",
      ],
      borderBottom: "5px solid #fff",
      //   borderWidth: 5,
    },
  ],
};

const Chart = () => {
  return (
    <Doughnut
      options={{
        cutout: 115,
      }}
      data={data}
    />
  );
};

export default Chart;
