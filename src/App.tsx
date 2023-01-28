import './main.css'
import Contacts from './sections/Contacts'
import Header from './sections/Header'
import Main from './sections/Main'
import Messages from './sections/Messages'
import Sidebar from './sections/Sidebar'

function App() {
  return (
    <div className="border-box bg-fb-bg min-h-screen relative -z-20">
      <Header></Header>
      <Sidebar></Sidebar>
      {/* <Main></Main> */}
      {/* <Messages></Messages> */}
      {/* <Contacts></Contacts> */}

    </div>
  )
}

export default App
