import { useState, useRef } from 'react'
import * as dfd from "danfojs";
import Describe from './components/Describe';
import { Charts } from './components/Charts';
import { Sidebar } from './components/Sidebar';
import { Chart, CategoryScale, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2"
import { AnalysisButtons } from './components/AnalysisButtons';
import Draggable from 'react-draggable';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
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

  const domEl = useRef(null);
  const [fileName, setFileName] = useState('report.png');
  
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

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);
    const blob = await (await fetch(dataUrl)).blob();
    saveAs(blob, fileName);
  }
      
  return (
    <>
      <main className="max-w-screen-xl mx-auto">
          {visualize && <Sidebar downloadImage={downloadImage} selectedCharts={selectedCharts} setSelectedCharts={setSelectedCharts} setXAxis={setXAxis} xAxis={xAxis} yAxis={yAxis} setYAxis={setYAxis} setShowVisualization={setShowVisualization} setVisualize={setVisualize} dataComp={dataComp}/>}
          <form className='pt-4'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload CSV file</label>
            <input className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer" id="file_input" type="file" onChange={changeHandler}/>
          </form>
          {dataComp.length > 0 && <AnalysisButtons setShowDescribe={setShowDescribe} setVisualize={setVisualize} />}
            {dataComp.length > 0 && 
            <section className='h-auto bg-background-white pt-5' id="domEl" ref={domEl}>
              <Describe setVisualize={setVisualize} dataComp={dataComp} lastIndex={dataComp[0].df.values.length - 1} showDescribe={showDescribe} setShowDescribe={setShowDescribe}/>
              {showVisualization && <Charts selectedCharts={selectedCharts} setSelectedCharts={setSelectedCharts} lastIndex={dataComp[0].df.values.length - 1} showVisualization={showVisualization} dataComp={dataComp} xAxis={xAxis} yAxis={yAxis}/>}
            </section>
            }
      </main>
    </>
  )
}


