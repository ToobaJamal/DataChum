import { Scatter } from 'react-chartjs-2';

export const ScatterChart = ({dataComp, xAxis, yAxis, lastIndex, cleanData}) => {
  const xInput = xAxis
  const yInput = yAxis
  const compCols = cleanData.columns
  const compVals = cleanData.values
  const xIndex = compCols.indexOf(xInput)
  const yIndex = compCols.indexOf(yInput)

  const data = {
      datasets: [
        {
          label: `${compCols[xIndex]} vs ${compCols[yIndex]}`,
          data: compVals.map(vals => ({
              x: vals[xIndex],
              y: vals[yIndex],
            })),
          backgroundColor: 'rgba(171, 4, 255, 1)',
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
        <Scatter className="drag-handle" data={data} options={options}/>
    </>
  )
}
