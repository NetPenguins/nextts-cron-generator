import CrontabGenerator from "./components/CronGenerator"

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CrontabGenerator />
    </main>
  )
}

export default Home