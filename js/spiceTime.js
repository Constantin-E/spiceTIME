class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoListData: [
                {
                    text: "my first task",
                    isChili: false,
                    reminder: null
                },
                {
                    text: "my second task",
                    isChili: false,
                    reminder: null
                }
            ],
            completedListData: [
                {
                    text: "my third task",
                    isChili: false,
                    reminder: null
                },
                {
                    text: "my fourth task",
                    isChili: false,
                    reminder: null
                }
            ],
        }
    }

    render() {
        return (
            <div>
                <ToDoList />
                <CompletedList />
            </div>
        )
    }
}
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul className="todo-list">
                    <li> To Do</li>
                </ul>
            </div>
        )
    }
}

class CompletedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul className="completed-list">
                    <li> Complete</li>
                </ul>
            </div>
        )
    }
}
function show() {
    ReactDOM.render(
        < App />,
        document.getElementById("root")
    );
}

show();