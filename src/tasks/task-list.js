import { FirebaseList } from 'src/firebase';
import { taskActions } from './actions';
import { Task } from './task';



export class taskList {
    _arr = [];

    onAdd = taskActions.createTaskFulfilled
    onChange = taskActions.updateTaskFulfilled
    onLoad = taskActions.loadTasksFulfilled
    onRemove = taskActions.removeTaskFulfilled
    
    push(item) {

        console.log('taskList onAdd invoked')
        this._arr.push(item)
    }
}
// export const taskList = new FirebaseList({
//   onAdd: taskActions.createTaskFulfilled,
//   onChange: taskActions.updateTaskFulfilled,
//   onLoad: taskActions.loadTasksFulfilled,
//   onRemove: taskActions.removeTaskFulfilled
// }, Task);

// export const taskList = {
//   onAdd: ()=>{
//       console.log('taskList onAdd invoked')
//       taskActions.createTaskFulfilled
//   },
//   onChange: taskActions.updateTaskFulfilled,
//   onLoad: taskActions.loadTasksFulfilled,
//   onRemove: taskActions.removeTaskFulfilled
// };
