import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  Filler,
  LineElement, //line
  Legend,
} from "chart.js";

import { Bar, Line, Radar } from "react-chartjs-2";

type ChartProps = {
  type: string;
};
export function Chart(props: ChartProps) {
  if (props.type === "bar") {
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
          base: 0.25, //${data.score-5 / 100}

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
  if (props.type === "line") {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Legend
    );
    const options = {
      responsive: true,
      elements: {
        point: {
          radius: 0,
        },
      },
      plugins: {
        legend: {
          position: "bottom" as const,
          labels: {
            boxHeight: 5,
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            stepSize: 20,
          },
          min: 0,
          max: 100,
        },
      },
    };
    const data = {
      labels: [
        "Chapter1",
        "Chapter2",
        "Chapter3",
        "Chapter4",
        "Chapter5",
        "Chapter6",
        "Chapter7",
        "Chapter8",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [70, 90, 50, 100],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: [87, 68, 98, 56],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    return <Line options={options} data={data} />;
  }
  if (props.type === "radar") {
    ChartJS.register(
      CategoryScale,
      RadialLinearScale,
      PointElement,
      LineElement,
      Filler
    );
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          borderWidth: 10, // 선의 두께 설정
        },
      },
      scales: {
        r: {
          grid: {
            color: "rgba(0, 0, 0, 0.1)", // 그리드 라인 색상을 투명하게 설정
          },
          angleLines: {
            display: false,
          },
          ticks: {
            stepSize: 50, // 눈금 간격
            callback: (value: any) => {
              if (value === 0) {
                return "0%"; // 0일 때 표시할 라벨
              } else if (value === 50) {
                return "50%"; // 50%일 때 표시할 라벨
              } else if (value === 100) {
                return "100%"; // 100%일 때 표시할 라벨
              } else {
                return ""; // 나머지 눈금은 표시하지 않음
              }
            },
          },
        },
      },
      fill: false,
    };

    const data = {
      labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5"],
      datasets: [
        {
          label: "",
          data: [77, 50, 78, 49, 49],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 10,
        },
      ],
    };
    return <Radar data={data} options={options} />;
  }
  return <div></div>;
}
