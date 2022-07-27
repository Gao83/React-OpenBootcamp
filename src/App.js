import './App.css';
import Greeting from './components/pure/greeting';
import GreetingFunction from './components/pure/greetingFunction';
import { useState } from 'react'
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/Father.jsx'
import OptionalRender from './components/pure/OptionalRender';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {



  return (
    <div className="App">
        {/* <Greeting name='Martin'  lastName ='Gutierrez'/> */}
        {/* <GreetingFunction name='Martin' lastName='Gutierrez' /> */}
        {/* <ComponenteA name='isaac' lastName='Miralles' email='isaacmiralles@gmail.com' /> */}
        {/* <ComponenteB name='Isaac' lastName='Miralles' email='isaacmiralles@gmail.com' /> */}
        {/* <TaskListComponent /> */}
        {/* <GreetingStyled name='Martin' /> */}
        {/* <Father /> */}
        {/* <OptionalRender /> */}
        {/* <LoginFormik /> */}
        {/* <RegisterFormik /> */}
    </div>
  );
}

export default App;
