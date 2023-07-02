import { React , useState } from 'react'

function Mainpage() {
    const [getTodo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const toggleCompleted = (id) => {
        setTodos(prevTodos =>
          prevTodos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            }
            return todo;
          })
        );
      };

    function handleClick(event) {
        event.preventDefault();
        const newItem = {
            id : todos.length,
            item : getTodo,
            completed: false
        }
        if(getTodo !== ""){
            setTodos(prevTodos => [...prevTodos, newItem]);
        }
        console.log(todos);
    }

    function removeElement(todoId) {
        setTodos(todos.filter(todo => todo.id !== todoId));
    }
  return (
    <div className="container">
        <div className="middle">
            <div className="main_add_todo">
                <input onChange={(e)=>setTodo(e.target.value)} value={getTodo} className="main_input"type="text" />
                <button onClick={handleClick} className="main_button" type="submit">Add Todo </button>
            </div>
            <div className="show_details">
                {todos.map((item,id) => (
                    <div className="display_elements">
                        <h2 key={item.id}
                            style={{
                            textDecoration: item.completed ? 'line-through' : 'none'
                            }}>{item.item}</h2>
                        <div className="dis_elements">
                            <button className="main_button" onClick={() => toggleCompleted(item.id)}>Done</button>
                            <button className="main_button" onClick={()=> removeElement(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Mainpage