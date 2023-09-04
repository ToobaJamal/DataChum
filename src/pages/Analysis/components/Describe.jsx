import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Draggable from "react-draggable";
import { DeleteButton } from "./DeleteButton";

export default function Describe({dataComp, showDescribe, setShowDescribe}) {
  
  const [describeData, setDescribeData] = useState(null)
  const lastIndex = dataComp[0].df.values.length - 1
  useEffect(() => {
    if (showDescribe) {
      const cleanData = dataComp[0].df.drop({ index: [lastIndex] });
      if (cleanData.dtypes.every(type => type === "string")) {
        toast.error('Error: Dataset has no numeric column.', {
          position: toast.POSITION.TOP_RIGHT
        });
      }else {
        const describeDf = cleanData.describe();
        setDescribeData([
          {
            columns: describeDf.columns,
            values: describeDf.values,
            index: describeDf.index,
          },
        ]);
      }
      }
  }, [dataComp, lastIndex, showDescribe]);

  function handleDeleteDescribe() {
    setDescribeData(null)
    setShowDescribe(false)
  }
  return (
    <> 
      {showDescribe && describeData &&
      <Draggable handle=".drag-handle">
      <div className="relative resize overflow-auto inline-block group">
        <table className="z-9 w-full h-full text-sm text-left text-gray-500 drag-handle">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
          <DeleteButton deleteFunction={handleDeleteDescribe}/>
        </div>   
        </Draggable>
        }
    </>
    )
}
