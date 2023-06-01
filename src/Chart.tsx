import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Legend,
} from "chart.js";

import { Bar, Line, Radar } from "react-chartjs-2";

type ChartProps = {
  type: "bar" | "line" | "radar" | "5radar";
};
type ChartData = {
  labels: string[];
  datasets: {
    data: number[];
    label?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    base?: number;
  }[];
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

    const data: ChartData = {
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
    const data: ChartData = {
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
      Legend
    );

    const data: ChartData = {
      labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4"],
      datasets: [
        {
          label: "지플럼",
          data: [50, 90, 33, 46],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 10,
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          position: "top" as const,
          labels: {
            boxHeight: 2,
          },
        },
      },
      elements: {
        line: {
          borderWidth: 10,
        },
        point: {
          radius: 0,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 100,
          angleLines: {
            display: false,
          },
          ticks: {
            stepSize: 50,
            callback: (value: number | string) => {
              switch (value) {
                case 0:
                  return "0%";
                case 50:
                  return "50%";
                case 100:
                  return "100%";
                default:
                  return "";
              }
            },
          },
        },
      },
      fill: false,
    };
    return <Radar data={data} options={options} />;
  }
  if (props.type === "5radar") {
    const gradeToNumber = (grade: string): number => {
      switch (grade) {
        case "A":
          return 5;
        case "B":
          return 4;
        case "C":
          return 3;
        case "D":
          return 2;
        case "E":
          return 1;
        default:
          return 0;
      }
    };
    ChartJS.register(
      CategoryScale,
      RadialLinearScale,
      PointElement,
      LineElement
    );

    const data: ChartData = {
      labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5"],
      datasets: [
        {
          label: "",
          data: [gradeToNumber("A"), 1, 3, 1, 1],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 10,
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          borderWidth: 10,
        },
        point: {
          radius: 0,
        },
      },
      scales: {
        r: {
          min: 0,
          max: 5,
          angleLines: {
            display: false,
          },
          ticks: {
            stepSize: 1,
            callback: (value: number | string) => {
              switch (value) {
                case 1:
                  return "1";
                case 2:
                  return "2";
                case 3:
                  return "3";
                case 4:
                  return "4";
                case 5:
                  return "5";
                default:
                  return "";
              }
            },
          },
        },
      },
      fill: false,
    };
    return <Radar data={data} options={options} />;
  }

  return <div></div>;
}
