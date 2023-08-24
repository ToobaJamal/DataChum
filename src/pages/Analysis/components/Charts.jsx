
import { Chart, CategoryScale, registerables } from "chart.js";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { ScatterChart } from "./ScatterChart";
import { Bar, Line } from "react-chartjs-2"

Chart.register(CategoryScale);
Chart.register(...registerables);

export const Charts = ({dataComp, xAxis, yAxis, showVisualization, lastIndex, selectedCharts, setSelectedChart}) => {
  const cleanData = dataComp[0].df.drop({ index: [lastIndex] });
  const compCols = cleanData.columns
  const compVals = cleanData.values
  const xIndex = compCols.indexOf(xAxis)
  const yIndex = compCols.indexOf(yAxis)
  const data = {
    labels: compVals.map(vals => vals[xIndex]),
    datasets: [
      {
        data: compVals.map(vals => vals[yIndex]),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <>
      
      {selectedCharts.map((chartType, index) => (
        <div key={index}>
          {chartType === 'bar' && (
            <BarChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
          )}
          {chartType === 'line' && (
            <LineChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />

          )}
          {chartType === 'scatter' && (
            <ScatterChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />

          )}
        </div>
      ))} 
        {/* {showVisualization && selectedChart === "bar" && <Bar data={data}/>}
        {showVisualization && selectedChart === "line" && <Line data={data}/>} */}
    </>
  )
}
