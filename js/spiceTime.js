class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundListTitle: "Completed Tasks",
            shownListTitle: "To Do"
        };
        this.showOtherList = this.showOtherList.bind(this);
    }
    showOtherList(){
        
        this.setState({
            shownListTitle: this.state.backgroundListTitle,
            backgroundListTitle: this.state.shownListTitle

        })
    }
    render() {
        return (
            <div className="app-container">
                <div className="header">
                SpiceTime
                </div>
                <div className="background-list" onClick={this.showOtherList}>{this.state.backgroundListTitle}</div>
                <div className="shown-list" onClick={this.showOtherList}>{this.state.shownListTitle}
                    <div className="mock-buttons-container">
                        <div className="add-spice-button"></div>
                        <div className="delete-task-button"></div>
                    </div>
                    {/* <List title={this.state.shownListTitle}/> */}
                </div>
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


// make hidden buttons 