import logo from './logo.svg';
import './App.css';
import * as ReactDOM from 'react-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Due from './pages/Due';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Appointment from './pages/Appointment';
import Calc from './pages/Calc';
import Feedback from './pages/Feedback';
import News from './pages/News';
import Services from './pages/Services';
import Upload from './pages/Upload';
import Download from './pages/Download';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
    <b>
      hare krishna
      </b>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Due" element={<Due />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Aboutus" element={< Aboutus />} />
        <Route path="Appointment" element={<Appointment />} />
        <Route path="Calc" element={<Calc />} />
        <Route path="Feedback" element={<Feedback />} />
        <Route path="News" element={<News />} />
        <Route path="Services" element={<Services />} />
        <Route path="Upload" element={<Upload />} />
        <Route path="Download" element={<Download />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);