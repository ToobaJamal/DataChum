import { Line } from "react-chartjs-2"

export const LineChart = ({dataComp, xAxis, yAxis, lastIndex, cleanData}) => {
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
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        <Line className="drag-handle" data={data} options={options}/>
    </>
  )
}
