
import { Chart, CategoryScale, registerables } from "chart.js";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { ScatterChart } from "./ScatterChart";
import { PieChart } from "./PieChart";
import { Bar, Line } from "react-chartjs-2"
import Draggable from "react-draggable";

Chart.register(CategoryScale);
Chart.register(...registerables);

export const Charts = ({dataComp, xAxis, yAxis, showVisualization, lastIndex, selectedCharts, setSelectedCharts}) => {
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


  const handleDeleteChart = (id) => {
    const updatedCharts = selectedCharts.filter((chart) => chart.id !== id);
    setSelectedCharts(updatedCharts);
  };
  return (
    <>
      
      {selectedCharts.map((chart, index) => (
        <Draggable key={index} handle=".drag-handle" >
        <div data-id={chart.id} key={index} className="resize overflow-hidden block">
          {chart.type === 'bar' && (
            <>
            <BarChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <button onClick={() => handleDeleteChart(chart.id)}>Delete Chart</button>
            </>
          )}
          {chart.type === 'line' && (
            <>
            <LineChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <button onClick={() => handleDeleteChart(chart.id)}>Delete Chart</button>
            </>
          )}
          {chart.type === 'scatter' && (
            <>
            <ScatterChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <button onClick={() => handleDeleteChart(chart.id)}>Delete Chart</button>
            </>

          )}
          {chart.type === 'pie' && (
            <>
            <PieChart lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <button onClick={() => handleDeleteChart(chart.id)}>Delete Chart</button>
            </>

          )}
        </div>
        </Draggable>
      ))} 
        {/* {showVisualization && selectedChart === "bar" && <Bar data={data}/>}
        {showVisualization && selectedChart === "line" && <Line data={data}/>} */}
    </>
  )
}
