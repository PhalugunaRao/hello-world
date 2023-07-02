import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welocme from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">

      <Counter></Counter>

      {/* <Message></Message> */}



      {/* <Greet name="Phalu" heroName="Father">
        <p>This is children props</p>
      </Greet>
      <Greet name="Geethika" heroName="Daughter">
        <button>Action</button>
      </Greet>
      <Welocme name="Phalu" heroName="Father">
        <p>This is children props</p>
      </Welocme>
      <Welocme name="Geethika" heroName="Daughter">
        <button>Action</button>
      </Welocme>
      <Greet/>
      <Welocme/>
      <Hello/> */}

    </div>
  );
}

export default App;
