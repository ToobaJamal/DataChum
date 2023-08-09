import { Hero } from "./components/Hero"

export const HomePage = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 dark:bg-gray-900 mx-auto">
        <Hero />
    </main>
  )
}
