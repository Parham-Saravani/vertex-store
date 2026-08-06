import { Chart } from "chart.js/auto";
const createCharts = () => {
  const salesChart = document.getElementById("salesChart");
  const productsChart = document.getElementById("productsChart");

  new Chart(salesChart, {
    type: "line",
    data: {
      labels: [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه‌شنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه",
      ],
      datasets: [
        {
          label: "فروش",
          data: [12, 19, 3, 5, 0, 19, 80],
          borderColor: "#3b82f6", // خط
          pointBackgroundColor: "#3b82f6",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            font: {
              family: "VazirMatn",
              size: 14,
            },
          },
        },
        y: {
          ticks: {
            font: {
              family: "VazirMatn",
              size: 5,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 14,
              family: "VazirMatn",
            },
          },
        },
      },
    },
  });
  new Chart(productsChart, {
    type: "bar",
    data: {
      labels: ["لپتاپ", "موس", "کیبورد"],
      datasets: [
        {
          label: "فروش",
          data: [50, 20, 10],
          backgroundColor: ["#8b5cf6", "#3b82f6", "#8b5cf6"],
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            font: {
              family: "VazirMatn",
              size: 14,
            },
          },
        },
        y: {
          ticks: {
            font: {
              family: "VazirMatn",
              size: 14,
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 14,
              family: "VazirMatn",
            },
          },
        },
      },
    },
  });
};
export default createCharts;