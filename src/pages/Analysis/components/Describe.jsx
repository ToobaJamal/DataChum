import { useState, useEffect } from "react";


export default function Describe({dataComp, lastIndex, showDescribe, setShowDescribe}) {
  
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
      <button onClick={() => setShowDescribe(true)}>Describe</button>
      {showDescribe && describeData &&
      <div>
      
      <table className="data-table">
          <thead>
            <tr>
              <th>Metric</th>
              {describeData[0].columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {describeData[0].index.map((rowLabel, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowLabel}</td>
                {describeData[0].values[rowIndex].map((cellValue, cellIndex) => (
                  <td key={cellIndex}>{cellValue}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>        
      </div>}
    </>
    )
}

