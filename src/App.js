import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text : "Drawing the Picasso special",
      day: "Feb 16th at 20:00pm",
      reminder: true
    },
    {
      id: 2,
      text : "Picking kids from school",
      day: "Mar 17th at 13:00pm",
      reminder: true
    },
    {
      id: 3,
      text : "Grociery Shopping",
      day: "Feb 17th at 18:00",
      reminder: false
    }
  ])
  const deleteTask =(id)=>{
      setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleReminder = (id) =>{
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  const addTask =(task)=>{
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header title= "Task Tracker" onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>No tasks to show</h3>}
    </div>
  );
}

export default App;
