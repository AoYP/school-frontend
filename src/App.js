import Date from "./components/date";
import PDF from "./components/pdf";
import Announcements from "./components/announcements";
import Currentlesson from "./components/current-lesson";
import Header from "./components/header";
import Holidays from "./components/holidays";
import Photos from "./components/photos";


function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="header"><Header /></div>
        <div class="holidays"><Holidays /></div>
        <div class="currentlesson"><Currentlesson /></div>
        <div class="date"><Date /></div>
        <div class="photos"><Photos /></div>
        <div class="PDF"><PDF /></div>
        <div class="announcements"><Announcements /></div>
     </div>
    </div>
  );
}

export default App;
