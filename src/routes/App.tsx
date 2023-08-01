import Header from '../components/Header'
import Footer from '../components/Footer'
import ExercisePage from '../components/ExercisePage'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <ExercisePage />
        <Footer />
      </Router>
    </>
  )
}

export default App
