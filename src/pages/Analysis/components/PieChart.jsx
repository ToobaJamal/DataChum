import { Pie } from "react-chartjs-2"
import { useState } from "react"

export const PieChart = ({dataComp, xAxis, yAxis, lastIndex}) => {
  const [xInput, setXInput] = useState(xAxis)
  const [yInput, setYInput] = useState(yAxis)

    const cleanData = dataComp[0].df.drop({ index: [lastIndex] });
  const compCols = cleanData.columns
  const compVals = cleanData.values
  const xIndex = compCols.indexOf(xInput)
  const yIndex = compCols.indexOf(yInput)
  const data = {
    labels: compVals.map(vals => vals[xIndex]),
    datasets: [
      {
        data: compVals.map(vals => vals[yIndex]),
      },
    ],
  };
  return (
    <>
        <Pie className="drag-handle" data={data}/>
    </>
  )
}
