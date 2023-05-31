import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

export function Chart() {
  ChartJS.register(CategoryScale, LinearScale, BarElement);

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        stacked: true,
      },
      x: {
        ticks: {
          callback: (value: any) => `${value * 100}%`,
        },
      },
    },
  };

  const data = {
    labels: ["Sound", "Words", "Sentences"],
    datasets: [
      {
        label: "내 점수", // 내 점수가 30% 라고 했을때
        data: [0.35], //${data.score+5 / 100}
        base: 0.25, // `${data.score-5 / 100}`

        backgroundColor: "rgba(255, 255, 179, 1)",
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 1,
      },
      {
        label: "Dataset",
        data: [0.2, 1, 1],
        backgroundColor: "rgba(0, 0, 179, 1)",
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
