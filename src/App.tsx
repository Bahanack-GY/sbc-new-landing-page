import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fake from './pages/Fake'

function App() {
  return (
    <Routes>
      <Route path="/:affiliationCode/:phoneNumber" element={<Home />} />
      <Route path="/fake" element={<Fake />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App