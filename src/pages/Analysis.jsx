export const Analysis = () => {
  return (
    <main className="max-w-screen-xl mx-auto p-4">
        <h1>Analysis</h1>
        <p>See summary statistics of your csv data</p>
        <form>
          <input type="file" />
          <button className="border border-red-500">Submit</button>
        </form>
    </main>
  )
}
