import Data from './Data'
import { Provider } from 'react-redux'
import './App.css'
import { myStore } from './Redux/store'

function App() {
  return (
    <>
     <Provider store = {myStore} >
      <Data/>
     </Provider>
    </>
  )
}

export default App
