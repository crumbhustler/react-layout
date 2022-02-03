import logo from './logo.svg';
import './App.css';
import Header from './Header'
import SectionMain from './SectionMain'
import Aside from './Aside'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header backColor="green" width="100%">
      </Header>
      <SectionMain></SectionMain>
      <Aside></Aside>
      <Footer></Footer>
    </div>
  );
}

export default App;
