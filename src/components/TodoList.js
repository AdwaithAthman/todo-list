import '../App.css';
import CreateTask from '../modals/CreateTask'; 
import {useState,useEffect} from 'react';
import Card from './Card';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //array to store all tasks created
  const [taskList, setTaskList] = useState([]);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    //we want to save taskList in localstorage
    localStorage.setItem('taskList',JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  }

  useEffect(() => {
    let arr = localStorage.getItem('taskList');
    //if obj is present in localstorage then only we want to setTaskList
    if(arr){
      let arrOfObjs = JSON.parse(arr);
      setTaskList(arrOfObjs);
    }
  },[])

  // Delete Task
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index,1);
    localStorage.setItem('taskList',JSON.stringify(tempList));
    setTaskList(tempList)
    window.location.reload();
  };

  //update list Array
  const updateListArray = (obj,index) => {
    let tempList = taskList;
    tempList[index] = obj;
    setTaskList(tempList);
    localStorage.setItem('taskList',JSON.stringify(tempList))
    window.location.reload();
  }

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
      </div>
      <div className="task-container">
      {/* after task is saved using saveTask function(createTask button) we want to show that saved tasks in container */}
      {taskList && taskList.map((obj,index) => {
        return (
          <Card taskObj={obj} key={index} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
        )
      })}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
