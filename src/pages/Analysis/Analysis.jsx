import { readCSVBrowser } from 'danfojs/dist/danfojs-base/io/browser'
import { useState } from 'react'
import * as dfd from "danfojs";
import Draggable from 'react-draggable';

export const Analysis = () => {

  const [dataComp, setDataComp] = useState([])
  const [compIndex, setCompIndex] = useState()

  const changeHandler = async function (event) {
    console.log("File selected")
    console.log(event.target.files[0])
    const url = URL.createObjectURL(event.target.files[0])
    const df = await dfd.readCSV(url)
    const columns = df.columns
    const values = df.values
    setDataComp(prev => {
        let new_data = prev.slice()
        let key = new_data.length + 1
        let dict = {
          columns: columns,
          values: values,
          df: df,
          keys: "df" + key
        }
        new_data.push(dict)
        return new_data
      })
      }
  return (
    <main className="max-w-screen-xl mx-auto p-4">
        <h1>Analysis</h1>
        <p>See summary statistics of your csv data</p>
        <form>
          <input type="file" onChange={changeHandler}/>
          <button className="border border-red-500">Submit</button>
        </form>
        <Draggable>

        
        </Draggable>
        
    </main>
  )
}
