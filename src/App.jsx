import './App.css'
import NavBar from './components/nav-bar.jsx'
import Hero from './sections/Hero.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[1110px]">
        <Hero/>
      </div>
    </>
  )
}

export default App
