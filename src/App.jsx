import { useEffect, useState } from "react";

const App = () => {
    // setting up state
    const [tasks, setTasks] = useState([]);

    // function to fetch the data and assign to state
    const getTasks = async () => {
        const response = await fetch("/api/task/list/");
        const data = await response.json()
        console.log(data);
    };

    // use effect
    useEffect(() => {
        getTasks();
    });

    return (
        <div id="app">
            <p>This is my App</p>
        </div>
    )
}

export default App;