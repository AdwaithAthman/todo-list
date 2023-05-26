import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {useState,useEffect} from 'react';

const EditTask = ({modal,toggle, updateTask, taskObj}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const {name,value} = e.target
    name === 'taskName' ? setTaskName(value) : setDescription(value)
  }

useEffect(() => {
    setTaskName(taskObj.taskName)
    setDescription(taskObj.description)
},[])

//update button function
const handleUpdate = (e) => {
    let tempObj = {};
    tempObj['taskName'] = taskName;
    tempObj['description'] = description;
    updateTask(tempObj);
}

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form action="">
        <div className="form-group">
        <label>Task Name</label>
          <input name="taskName" type="text" className="form-control" value={taskName} onChange={handleChange} />
        </div>
        <div className="form-group mt-3">
        <label>Description</label>
          <textarea name="description" id="" rows="5" className="form-control" value={description} onChange={handleChange} ></textarea>
        </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
