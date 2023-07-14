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
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      <IntervalHookCounter/>
      {/* <HookMouse></HookMouse> */}

      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}

      {/* <HookCounterThree/> */}
      {/* <HookCounter></HookCounter> */}

    {/* <ClassCounter></ClassCounter> */}



      {/* <Form></Form> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      <Stylesheet primary={true}/>
      <Inline></Inline> */}

      {/* <NameList></NameList> */}
      {/* <UserGreetings></UserGreetings> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <EventBind></EventBind> */}


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
