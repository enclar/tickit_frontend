import { useEffect, useState } from "react";

const App = () => {
    // setting up state
    const [tasks, setTasks] = useState([]);

    // function to fetch the data and assign to state
    const getTasks = async () => {
        const response = await fetch("/api/todo/task/list/");
        const data = await response.json();
        setTasks(data);
    };

    // use effect
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div id="app">
            <p>This is my App</p>
            {
                tasks?.map((task, index) => {
                    return (
                        <p key={index}>{task?.description}</p>
                    )
                })
            }
        </div>
    )
}

export default App;