import { useEffect, useState } from "react";

const App = () => {
    // setting up state
    const [tasks, setTasks] = useState([]);

    // function to fetch the data and assign to state
    const getTasks = async () => {
        try {
            const response = await fetch("api/todo/task/list/", {
                method: "GET",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // console.log("response: " + response);
            const data = await response.json();

            if (response.ok) {
                setTasks(data);
                console.log(response);
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log("error: " + error)
        }
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