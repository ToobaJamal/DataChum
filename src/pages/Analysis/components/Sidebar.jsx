import { useState } from "react";

export const Sidebar = ({setVisualize, xAxis, setXAxis, yAxis, setYAxis, dataComp, setShowVisualization, selectedCharts, setSelectedCharts, downloadImage}) => {
    const [showCol, setShowCol] = useState(false);
    const [showPlot, setShowPlot] = useState(false);
    const [xInput, setXInput] = useState("");
    const [yInput, setYInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const xAxisExists = dataComp[0].columns.find(col => col === xAxis);
        const yAxisExists = dataComp[0].columns.find(col => col === yAxis);

        if (!xAxisExists) {
            console.log("No xaxis found");
        } else if (!yAxisExists) {
            console.log("No yaxis found");
        } else {
            console.log("Axes found");
        }
        
        setShowVisualization(true)
    }

    const handleChartSelect = (chartType) => {
        const newId = generateRandomId();
        setSelectedCharts([...selectedCharts, {type: chartType, id: newId}]);
      };

      const generateRandomId = () => {
        return Math.floor(Math.random() * 1000); 
      };

  return (
    <>
        <div id="drawer-navigation" className="absolute right-0 h-4/5 overflow-y-auto z-40 w-64 p-4 bg-white dark:bg-gray-800" aria-labelledby="drawer-navigation-label">
            <button onClick={() => setVisualize(false)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
            <div className="py-10 overflow-y-auto">
            <div id="accordion-collapse" data-accordion="collapse">
            <h2 className="my-4" id="accordion-collapse-heading-1">
                <button onClick={() => setShowCol(!showCol)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>Columns</span>
                    { !showCol && <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> }
                    { showCol && <svg data-accordion-icon className="rotate-180 w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> } 
                </button>
            </h2>
            { showCol &&
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 ">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between">
                            <label>X: </label>
                            <input className="w-11/12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={xAxis} onChange={(e) => {setXAxis(e.target.value)}}/>
                        </div>
                        <br/>
                        <div className="flex justify-between">
                            <label>Y: </label>
                            <input className="w-11/12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={yAxis} onChange={(e) => {setYAxis(e.target.value)}}/>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded w-3/6">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>}
            <h2 id="accordion-collapse-heading-1">
                <button onClick={() => setShowPlot(!showPlot)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>Plot</span>
                    { !showPlot && <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> }
                    { showPlot && <svg data-accordion-icon className="rotate-180 w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> } 
                </button>
            </h2>
            { showPlot &&
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 flex flex-col justify-between">
                    <button className="py-1" onClick={() => handleChartSelect("scatter")} >Scatter plot</button>
                    <button className="py-1" onClick={() => handleChartSelect("line")}>Line Plot</button>
                    <button className="py-1" onClick={() => handleChartSelect("bar")}>Bar Chart</button>
                    <button className="py-1" onClick={() => handleChartSelect("pie")}>Pie Chart</button>
                </div>
            </div>}
            </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded" onClick={() => downloadImage()}>Download Image</button>
            </div>
        </div>
    </>
  )
}
