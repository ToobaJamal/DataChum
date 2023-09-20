import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Draggable from "react-draggable";
import { DeleteButton } from "./DeleteButton";

export default function Describe({dataComp, showDescribe, setShowDescribe}) {
  
  const [describeData, setDescribeData] = useState(null)
  const lastIndex = dataComp[0].df.values.length - 1

  const findMixedTypeColumns = (data) => {
    const columns = data.columns;
    const mixedTypeColumns = [];
    console.log(columns)
    for (const columnName of columns) {
      if (columns.includes(columnName)) {
        const values = data.values.map((row) => row[columns.indexOf(columnName)]);
        if (values.some((value) => typeof value !== "number")) {
          mixedTypeColumns.push(columnName);
        }
      }
    }
    return mixedTypeColumns;
  };

  function findNumericColumns(df) {
    const mixedTypeColumns = findMixedTypeColumns(df)
    let numericColumns = [];
    for (const column of df.columns) {
      if (!mixedTypeColumns.includes(column)) {
        if (df.dtypes[df.columns.indexOf(column)] === "float32" || df.dtypes[df.columns.indexOf(column)] === "int") {
          numericColumns.push(column);
        }
      }
    }
    return numericColumns;
  }
  
  useEffect(() => {
    if (showDescribe) {
      const cleanData = dataComp[0].df.drop({ index: [lastIndex] });
      const numericColumns = findNumericColumns(cleanData);
      if (numericColumns.length === 0) {
        toast.error('Error: Dataset has no numeric column.', {
          position: toast.POSITION.TOP_RIGHT
        });
      }else {
        const describeDf = cleanData.describe(numericColumns);
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
