import { useState } from "react"
import { Bar } from "react-chartjs-2"

export const BarChart = ({dataComp, xAxis, yAxis, lastIndex, cleanData}) => {
  const [xInput, setXInput] = useState(xAxis)
  const [yInput, setYInput] = useState(yAxis)
  const compCols = cleanData.columns
  const compVals = cleanData.values
  const xIndex = compCols.indexOf(xInput)
  const yIndex = compCols.indexOf(yInput)
  const data = {
    labels: compVals.map(vals => vals[xIndex]),
    datasets: [
      {
        label: `${compCols[xIndex]} vs ${compCols[yIndex]}`,
        data: compVals.map(vals => vals[yIndex]),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: `${compCols[xIndex]}`,
        },
      },
      y: {
        title: {
          display: true,
          text: `${compCols[yIndex]}`,
        },
      },
    },
  }
  return (
    <>
        <Bar className="drag-handle" data={data} options={options}/>
    </>
  )
}
