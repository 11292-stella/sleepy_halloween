import MyFooter from "./components/MyFooter"
import MyNav from "./components/MyNav"
import SpiritBoard from "./components/SpiritBoard"

function App() {
  return (
    <>
      <div className="mt-5">
        <MyNav />
      </div>
      <SpiritBoard />
      <div className="mt-0">
        {" "}
        <MyFooter />
      </div>
    </>
  )
}

export default App
