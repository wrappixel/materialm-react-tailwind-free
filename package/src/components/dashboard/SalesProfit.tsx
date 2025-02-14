
import Chart from "react-apexcharts";
import CardBox from "../shared/CardBox";
const SalesProfit = () => {


  const optionexpenses: any = {
    series: [
      {
        name: "This year",
        data: [9, 5, 3, 7, 5, 10, 3],
      },
      {
        name: "Last year ",
        data: [6, 3, 9, 5, 4, 6, 4],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: 350,
      offsetY: 10,
      offsetX: -18,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "rgba(0,0,0,.1)",
    },
    colors: ["var(--color-primary)", "var(--color-secondary)"],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      type: "category",
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1aab2",
        },
      },
      min: 0,
      max: 12,
      tickAmount: 4,
    },

    fill: {
      opacity: 1,
      colors: ["var(--color-primary)", "var(--color-secondary)"],
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },

    responsive: [
      {
        breakpoint: 767,
        options: {
          stroke: {
            show: false,
            width: 5,
            colors: ["transparent"],
          },
        },
      },
    ],
  };


  return (
    <CardBox>
      <div className="flex justify-between items-center">
        <h5 className="card-title">Sales Profit</h5>
      </div>
        <div>
          <Chart
            options={optionexpenses}
            series={optionexpenses.series}
            type="bar"
            height="315px"
            width={"100%"}
          />
        </div>
    </CardBox>
  );
};

export default SalesProfit;
