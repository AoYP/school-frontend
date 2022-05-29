import Data from './components/date'
import PDF from './components/pdf'
import Announcements from './components/announcements'
import Currentlesson from './components/current-lesson'
import Header from './components/header'
import Holidays from './components/holidays'
import Photos from './components/photos'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='cell header'>
          <Header />
        </div>

        <div className='cell holidays'>
          <Holidays />
        </div>

        <div className='cell currentlesson'>
          <Currentlesson />
        </div>

        <div className='cell date'>
          <Data />
        </div>

        <div className='cell photos'>
          <Photos />
        </div>

        <div className='cell PDF'>
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
