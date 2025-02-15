import './App.css'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import './index.css'

function App() {

  return (
    <div className="container flex h-[90vh] w-[90vw] shadow-lg rounded-[20px] backdrop-blur-[19px] backdrop-saturate-[180%]">
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App
