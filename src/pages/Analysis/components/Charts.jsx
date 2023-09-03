import { Chart, CategoryScale, registerables } from "chart.js";
import Draggable from "react-draggable";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { ScatterChart } from "./ScatterChart";
import { PieChart } from "./PieChart";
import { DeleteButton } from "./DeleteButton";

Chart.register(CategoryScale);
Chart.register(...registerables);

export const Charts = ({dataComp, xAxis, yAxis, showVisualization, selectedCharts, setSelectedCharts}) => {
  const lastIndex = dataComp[0].df.values.length - 1;
  const cleanData = dataComp[0].df.drop({ index: [lastIndex] });

  const handleDeleteChart = (id) => {
    const updatedCharts = selectedCharts.filter((chart) => chart.id !== id);
    setSelectedCharts(updatedCharts);
  };

  return (
    <>
      {selectedCharts.map((chart) => (
        <Draggable key={chart.id} handle=".drag-handle" >
        <div data-id={chart.id} className="resize z-0 overflow-hidden block relative group">
          {chart.type === 'bar' && (
            <>
            <BarChart cleanData={cleanData} lastIndex={lastIndex} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <DeleteButton deleteFunction={() => handleDeleteChart(chart.id)}/>
            </>
          )}
          {chart.type === 'line' && (
            <>
            <LineChart cleanData={cleanData} lastIndex={lastIndex} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <DeleteButton deleteFunction={() => handleDeleteChart(chart.id)}/>
            </>
          )}
          {chart.type === 'scatter' && (
            <>
            <ScatterChart cleanData={cleanData} lastIndex={lastIndex} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <DeleteButton deleteFunction={() => handleDeleteChart(chart.id)}/>
            </>

          )}
          {chart.type === 'pie' && (
            <>
            <PieChart cleanData={cleanData} lastIndex={lastIndex} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis} />
            <DeleteButton deleteFunction={() => handleDeleteChart(chart.id)}/>
            </>

          )}
        </div>
        </Draggable>
      ))} 
    </>
  )
}
