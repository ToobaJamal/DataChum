export const AnalysisButtons = ({setShowDescribe, setVisualize}) => {
  return (
    <div>
        <button onClick={() => setShowDescribe(true)}>Show Summary Statistics</button>
        <button onClick={() => setVisualize(true)}>Visualize your data</button>
    </div>
  )
}
