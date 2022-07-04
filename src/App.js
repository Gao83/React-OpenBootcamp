import './App.css';
import Greeting from './components/pure/greeting';
import GreetingFunction from './components/pure/greetingFunction';
import ComponenteA from './components/1_Componentes/ComponenteA';
import ComponenteB from './components/1_Componentes/ComponenteB';
import { useState } from 'react'
import TaskListComponent from './components/container/task_list';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name='Martin'  lastName ='Gutierrez'/> */}
        {/* <GreetingFunction name='Martin' lastName='Gutierrez' /> */}
        {/* <ComponenteA name='isaac' lastName='Miralles' email='isaacmiralles@gmail.com' /> */}
        {/* <ComponenteB name='Isaac' lastName='Miralles' email='isaacmiralles@gmail.com' /> */}
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
