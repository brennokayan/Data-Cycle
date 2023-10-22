import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/material";
interface props {
  title: string
  width?: string
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export function GraficoLinear({title, width = "40%"}: props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        // weight: 100
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  
  const labels = [
    "Celular",
    "Telvisores",
    "Notebooks",
    "Monitor",
    "placas de video",
    "placas mães",
    "Notebooks",
    "Monitor",
    "placas de video",
    "placas mães",
    "Notebooks",
    "Monitor",
    "placas de video",
    "placas mães",
    "Notebooks",
    "Monitor",
    "placas de video",
    "placas mães",
    "Notebooks",
    "Monitor",
    "placas de video",
    "placas mães",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Produtos",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "Insumos",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(132, 99, 255, 0.8)",
      },
    ],
  };
  
  return (
    <>
        <Box width={width}>
          <Bar options={options} data={data} />
        </Box>
    </>
  );
}
