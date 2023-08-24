import { Scatter } from 'react-chartjs-2';
import { useState } from 'react';

export const ScatterChart = ({dataComp, xAxis, yAxis, lastIndex}) => {
  const [xInput, setXInput] = useState(xAxis)
  const [yInput, setYInput] = useState(yAxis)
    const cleanData = dataComp[0].df.drop({ index: [lastIndex] });
  const compCols = cleanData.columns
  const compVals = cleanData.values
  const xIndex = compCols.indexOf(xInput)
  const yIndex = compCols.indexOf(yInput)

    const data = {
        datasets: [
          {
            label: 'A dataset',
            data: compVals.map(vals => ({
                x: vals[xIndex],
                y: vals[yIndex],
              })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };
    console.log(data)
  return (
    <>
        <Scatter data={data}/>
    </>
  )
}
