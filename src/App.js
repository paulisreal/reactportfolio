import Aboutpage from './components/Aboutpage';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Workpage from './components/Workpage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Body/>
     <Workpage/>
     <Aboutpage/>
     <Socials/>
    </div>
  );
}

export default App;
