import { BrowserRouter as Router, Route, Routes } from 'react-router';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Headphones } from './pages/Headphones';
import { Speakers } from './pages/Speakers';
import { Earphones } from './pages/Earphones';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
