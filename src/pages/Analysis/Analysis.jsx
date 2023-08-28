import { useState } from 'react'
import * as dfd from "danfojs";
import Describe from './components/Describe';
import { Charts } from './components/Charts';
import { Sidebar } from './components/Sidebar';
import { Chart, CategoryScale, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2"
import { AnalysisButtons } from './components/AnalysisButtons';
import Draggable from 'react-draggable';

Chart.register(CategoryScale);
Chart.register(...registerables);

export const Analysis = () => {
  const [dataComp, setDataComp] = useState([])
  const [showDescribe, setShowDescribe] = useState(false)
  const [visualize, setVisualize] = useState(false)
  const [showVisualization, setShowVisualization] = useState(false)
  const [xAxis, setXAxis] = useState("")
  const [yAxis, setYAxis] = useState("")
  const [selectedCharts, setSelectedCharts] = useState([]);
  const [charts, setCharts] = useState([])
  
  const changeHandler = async function (event) {
    setShowDescribe(false)
    const url = URL.createObjectURL(event.target.files[0])
    const df = await dfd.readCSV(url)
    const columns = df.columns
    const values = df.values
    const newDict = {
      columns: columns,
      values: values,
      df: df,
      key: "df" + (dataComp.length + 1)
    };
    setDataComp([newDict]);
    }
      
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
          {visualize && <Sidebar selectedCharts={selectedCharts} setSelectedCharts={setSelectedCharts} setXAxis={setXAxis} xAxis={xAxis} yAxis={yAxis} setYAxis={setYAxis} setShowVisualization={setShowVisualization} setVisualize={setVisualize} dataComp={dataComp}/>}
          <h1>Analysis</h1>
          <form>
            <input type="file" onChange={changeHandler}/>
          </form>
          {dataComp.length > 0 && <AnalysisButtons setShowDescribe={setShowDescribe} setVisualize={setVisualize} />}
          
            {dataComp.length > 0 && 
            <section className='h-auto'>
              <Describe setVisualize={setVisualize} dataComp={dataComp} lastIndex={dataComp[0].df.values.length - 1} showDescribe={showDescribe} setShowDescribe={setShowDescribe}/>
              {showVisualization && <Charts selectedCharts={selectedCharts} setSelectedCharts={setSelectedCharts} lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis}/>}
            </section>
            }
      </main>
    </>
  )
}


