import { useState } from 'react'
import * as dfd from "danfojs";
import Describe from './components/Describe';

export const Analysis = () => {
  const [dataComp, setDataComp] = useState([])
  const [showDescribe, setShowDescribe] = useState(false)
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
    <main className="max-w-screen-xl mx-auto p-4">
        <h1>Analysis</h1>
        <form>
          <input type="file" onChange={changeHandler}/>
          <button className="border border-red-500">Submit</button>
        </form>
         
        <section>
          {dataComp.length > 0 && <Describe dataComp={dataComp} lastIndex={dataComp[0].df.values.length - 1} showDescribe={showDescribe} setShowDescribe={setShowDescribe}/>}   
        </section>
    </main>
  )
}
