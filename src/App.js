import Navbar from './components/Navbar'
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
   <>
   <CssBaseline/>
   <Navbar />
   <About />
   <Work/>
   <Contact/>
   </>
  );
}

export default App;
