import "chart.js/auto"
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js/auto";
import "chartjs-adapter-date-fns"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import colors from "tailwindcss/colors";

const Graph = () => {
  const { currentProduct } = useSelector((state: RootState) => state.product);

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM"
          }
        },
        title: {
          display: true,
          text: "Month"
        },
        grid: {
          display: false,
        }

      },
      y: {
        display: false,
      }
    },
  }

  const chartData: ChartData<"line"> = {
    datasets: [
      {
        label: "Retail Sales",
        data: currentProduct?.sales.map((sale) => ({ x: sale.weekEnding, y: sale.retailSales })) as any,
        tension: 1,
        borderColor: colors.blue[400],
        backgroundColor: colors.blue[400]
      },
      {
        label: "Wholesale Sales",
        data: currentProduct?.sales.map((sale) => ({ x: sale.weekEnding, y: sale.wholesaleSales })) as any,
        tension: 1,
        borderColor: colors.gray[400],
        backgroundColor: colors.gray[400]
      },
    ]
  }
  
  return (
    <div className="bg-white shadow p-4 mr-4">
      <div className="text-lg">Retail Sales</div>
      <Line options={options} data={chartData}/>
    </div>
  )

}




export default Graph;