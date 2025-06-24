import { useState } from 'react'
import LandingPage from './components/LandingPage'
import TicketForm from './components/TicketForm'

function App() {
  const [currentView, setCurrentView] = useState('landing')

  const handleGetStarted = () => {
    setCurrentView('form')
  }

  const handleBackToLanding = () => {
    setCurrentView('landing')
  }

  return (
    <div className="App">
      {currentView === 'landing' ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <TicketForm onBack={handleBackToLanding} />
      )}
    </div>
  )
}

export default App