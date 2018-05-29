class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="app-container">
                <div className="header">
                SpiceTime
                </div>
                <div className="background-list">Completed</div>
                <div className="shown-list"></div>
            </div>
        );
    }
}

function show() {
    ReactDOM.render(
        < App />,
        document.getElementById("root")
    );
}

show();