import { useState, useEffect } from "react";
import Draggable from "react-draggable";


export default function Describe({dataComp, lastIndex, showDescribe, setShowDescribe, setVisualize}) {
  
  const [describeData, setDescribeData] = useState(null)
  
  useEffect(() => {
    if (showDescribe) {
      const cleanData = dataComp[0].df.drop({ index: [lastIndex] });
      const describeDf = cleanData.describe();
      setDescribeData([
        {
          columns: describeDf.columns,
          values: describeDf.values,
          index: describeDf.index,
        },
      ]);
    }
  }, [dataComp, lastIndex, showDescribe]);
  return (
    <> 
    
      {showDescribe && describeData &&
      <Draggable>
      <div className=" resize overflow-auto inline-block ">
      <table className=" w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">Metric</th>
              {describeData[0].columns.map((column, index) => (
                <th key={index} scope="col" className="px-4 py-3">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {describeData[0].index.map((rowLabel, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-4 py-4">{rowLabel}</td>
                {describeData[0].values[rowIndex].map((cellValue, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-4">{cellValue}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>     
        </div>   
        </Draggable>
        }
  
    </>
    )
}

