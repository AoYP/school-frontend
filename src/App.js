import PDF from './components/pdf'
import Announcements from './components/announcements'
import Header from './components/header'
import Holidays from './components/holidays'
import Weather from './components/weather'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='cell header'>
          <Header />
        </div>

        <div className='cell card1'>
          <Holidays />
        </div>

        <div className='cell card2'>
          <Weather />
        </div>

        <div className='cell pdf'>
          <PDF />
        </div>

        <div className='cell announcements'>
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default App
