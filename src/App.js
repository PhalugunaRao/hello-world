import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welocme from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionCLick from './components/FunctionCLick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">

      <EventBind></EventBind>


      {/* <FunctionCLick>

      </FunctionCLick>
      <ClassClick>

      </ClassClick> */}

      {/* <Counter></Counter> */}

      {/* <Message></Message> */}

      {/* <Greet name="Geethika" heroName="Daughter">
      </Greet> */}

      {/* <Welocme name="Phalu" heroName="Father">
        <p>This is children props</p>
      </Welocme> */}

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
