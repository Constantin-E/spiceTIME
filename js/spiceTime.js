class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundListTitle: "Completed Tasks",
            shownListTitle: "To Do"
        };
        this.sho...
    }
    showOtherList(){
        //change title pops and rerender List component
        //change innerHTML of background-list
        //---> switch backgroundlisttitle and shownlisttitle in state
    }
    render() {
        return (
            <div className="app-container">
                <div className="header">
                SpiceTime
                </div>
                <div className="background-list" onClick={this.showOtherList}>{this.state.backgroundListTitle}</div>
                <div className="shown-list">
                    <List title={this.state.shownListTitle}/>
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