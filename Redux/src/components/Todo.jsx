import { useSelector } from "react-redux"
import {store} from "../state";
import { useState } from "react";
export const Todo = () => {
    const task=useSelector((state) => state.task);
    const [Task, setTask] = useState("");
    console.log("from todo",task);
    const handleDelete=(idx)=>{
        store.dispatch({
            type:"DECREMENT",
            payload:{
                id:idx
            }
        })
        console.log("from todo",store.getState());
    }
    const handleAdd=()=>{
        const taskName=Task;
        setTask("");
        if(taskName===""){
            alert("Please enter a task");
            return;
        }
        if(task.some((item) => item.name === taskName)){
            alert("Task already exists");
            return;
        }

        const taskId=task.length+1;
        store.dispatch({
            type:"INCREMENT",
            payload:{
                id:taskId,
                name:taskName
            }
        })
        console.log("from todo",store.getState());
    }
    return (
        <div className="todo">
            <h1>Todo</h1>
            <div className="todo__container">
                <input type="text" placeholder="Enter your task" value={Task} onChange={(e)=>setTask(e.target.value)} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div className="todo__list">
                <ul>
                    {task.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={(e)=>handleDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}