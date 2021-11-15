import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
 import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
     <Todo text='learn react'/>
     <Todo text='learn javascript'/>
     <Todo text='learn next.js'/>
     <Todo text='learn gatsby.js'/>
     <Modal />
     <Backdrop />
    </div>
  );
}

export default App;
