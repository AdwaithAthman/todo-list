import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {useState} from 'react';

const CreateTask = ({modal,toggle,save}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const {name,value} = e.target
    name === 'taskName' ? setTaskName(value) : setDescription(value)
  }

  const handleSave = () => {
    const taskObj = {};
    taskObj['taskName'] = taskName;
    taskObj['description'] = description;
    save(taskObj);
    setTaskName('');
    setDescription('');
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
