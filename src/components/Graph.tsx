import "chart.js/auto"
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions, Chart } from "chart.js/auto";
import "chartjs-adapter-date-fns"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Graph = () => {
  const { currentProduct } = useSelector((state: RootState) => state.product);

  const options: ChartOptions<"line"> = {
    responsive: true,
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

      },
    },
  }

  const chartData: ChartData<"line"> = {
    datasets: [
      {
        label: "Data set 1",
        data: currentProduct?.sales.map((sale) => ({ x: sale.weekEnding, y: sale.retailSales })) as any,
        tension: 1,
      }
    ]
  }
  
  return (
    <div className="bg-white shadow mr-4">
      <Line options={options} data={chartData}/>
    </div>
  )

}




export default Graph;