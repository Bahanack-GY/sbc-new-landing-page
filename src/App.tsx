import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Fake from './pages/Fake'
import Help from './pages/Help'

function App() {
  return (
    <Routes>
      <Route path="/:affiliationCode/:phoneNumber" element={<Home />} />
      <Route path="/fake" element={<Fake />} />
      <Route path="/help" element={<Help />} />
      <Route path="/*" element={<Fake />} />
    </Routes>
  )
}

export default App