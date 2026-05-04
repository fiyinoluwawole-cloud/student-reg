import React, {useState} from 'react'
import{toast, ToastContainer} from 'react-toastify'

export const Todo = () => {
    const [todo, setTodo] = useState("")
    const [todoArray, setTodoArray] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const Addtodo = () => {
        if(!todo)
            return toast.error("Kindly input a todo")

        if(editIndex !== null){
            const newArray = [...todoArray]
            newArray.splice(editIndex, 1, todo)
            setTodoArray(newArray)
            setTodo("")
            setIsEditing(false)
            toast.success("todo updated!!")
        }
        else{
        setTodoArray([...todoArray, todo])
        console.log(todoArray);
        setTodo("")
        toast.success("Todo added!!")
        }
        
    };

    const handleDelete = (index) => {
    const newArray = [...todoArray]

    todoArray.splice(index,1)

    setTodoArray(newArray)
    }

    const deleteWithFilter = (index) => {
        console.log(index);

        setTodoArray(todoArray.filter((_, i) => i !== index))
    }

    const handleEdit = (index) => {
        setIsEditing(true)
        console.log(index);
        setTodo(todoArray[index]);
        setEditIndex(index);
    }

  return (
    <> 
    <div>Todo</div>
    <h1>What are you doing today?</h1>
    <input onChange={(e) => setTodo(e.target.value)} placeholder='Enter Todo' type="text" value={todo} />
    <button onClick={Addtodo}>{isEditing? "Update Todo" : "Add to do"}</button>
    {
        todoArray.map((todo, index)=>(
            <div key={index}>
                <h1>{todo}</h1>
                <button onClick={() => {handleEdit(index)}}>Edit</button>
                {/* <button onClick={ () => {handleDelete(index)}}>Delete</button> */}
                <button onClick={ () => {deleteWithFilter(index)}}>Delete</button>

            </div>
        ))}

    <ToastContainer/>
    </>
  )
}

{/* export default todo */}
