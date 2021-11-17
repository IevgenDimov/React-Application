import {useState} from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";



function Todo(props){
  // useState always returns an array with 2 elements. The first element is the (current state) snapchat, the second element is a function that allows you
  // to change the element value.
const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler(){
       setModalIsOpen(true);
    }
    function closeModalHandler(){
      setModalIsOpen(false)
    }
    return(
        <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      </div>
    );
}

export default Todo;