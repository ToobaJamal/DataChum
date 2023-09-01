import { Pie } from "react-chartjs-2"

export const PieChart = ({dataComp, xAxis, yAxis, lastIndex, cleanData}) => {
  const xInput = xAxis
  const yInput = yAxis
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
      },
    ],
  };

  const options= {
    responsive: true,
    maintainAspectRatio: false,
  }
  return (
    <>
        <Pie className="drag-handle" data={data} options={options}/>
    </>
  )
}
