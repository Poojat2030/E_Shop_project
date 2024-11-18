// Function to set fixed height for all charts
const setChartHeight = (elementId) => {
  const chartElement = document.getElementById(elementId);
  chartElement.style.height = "300px"; // Adjust the height here
};

// Orders Chart
const ordersCtx = document.getElementById("ordersChart").getContext("2d");
setChartHeight("ordersChart");

const ordersData = {
  labels: ["Pending", "Processing", "Completed", "Cancelled"],
  datasets: [
    {
      label: "Orders",
      data: [20, 15, 50, 5], // Example data
      backgroundColor: ["#ffc107", "#17a2b8", "#28a745", "#dc3545"],
    },
  ],
};

new Chart(ordersCtx, {
  type: "bar", // Change to bar chart
  data: ordersData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Revenue Chart
const revenueCtx = document.getElementById("revenueChart").getContext("2d");
setChartHeight("revenueChart");

const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue (in $)",
      data: [5000, 7000, 4000, 8000, 6000, 9000], // Example data
      backgroundColor: "rgba(40, 167, 69, 0.5)",
      borderColor: "#28a745",
      borderWidth: 2,
      fill: true,
    },
  ],
};

new Chart(revenueCtx, {
  type: "line", // Line chart
  data: revenueData,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Revenue (in $)",
        },
        beginAtZero: true,
      },
    },
  },
});

// Sales Chart
const salesCtx = document.getElementById("salesChart").getContext("2d");
setChartHeight("salesChart");

const salesData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Sales (in units)",
      data: [150, 200, 180, 220], // Example data
      backgroundColor: "rgba(23, 162, 184, 0.5)",
      borderColor: "#17a2b8",
      borderWidth: 2,
      fill: true,
    },
  ],
};

new Chart(salesCtx, {
  type: "line", // Line chart
  data: salesData,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Quarters",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales (in units)",
        },
        beginAtZero: true,
      },
    },
  },
});

// Customer Growth Chart
const customerCtx = document.getElementById("customerChart").getContext("2d");
setChartHeight("customerChart");

const customerData = {
  labels: ["2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Customer Growth",
      data: [200, 250, 300, 350, 400], // Example data
      backgroundColor: "rgba(23, 162, 184, 0.5)",
      borderColor: "#17a2b8",
      borderWidth: 2,
      fill: true,
    },
  ],
};

new Chart(customerCtx, {
  type: "line", // Line chart
  data: customerData,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Customers",
        },
        beginAtZero: true,
      },
    },
  },
});
