import Data from './components/date'
import PDF from './components/pdf'
import Announcements from './components/announcements'
import Currentlesson from './components/current-lesson'
import Header from './components/header'
import Holidays from './components/holidays'
import Photos from './components/photos'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="holidays">
          <Holidays />
        </div>
        <div className="currentlesson">
          <Currentlesson />
        </div>
        <div className="date">
          <Data />
        </div>
        <div className="photos">
          <Photos />
        </div>
        <div className="PDF">
          <PDF />
        </div>
        <div className="announcements">
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default App
