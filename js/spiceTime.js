class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundListTitle: "Completed Tasks",
            shownListTitle: "To Do"
        };
        this.showOtherList = this.showOtherList.bind(this);
    }
    showOtherList() {
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
                    <List title="To Do" />
                </div>
            </div>
        );
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                // [uniqueNumber, text, isCompleted, isChili, reminder]
                [0, "My First Task", false, false, null],
                [1, "My Second Task", true, false, null],
                [2, "My Third Task", false, true, null],
                [3, "My Fourth Task", true, true, null],
                [4, "", true],
                [4, "", false]
            ]
        }
        this.createListItems = this.createListItems.bind(this);
    }

    createListItems() {
        var showCompletedTasks = (this.props.title === "To Do") ? false : true;
        let itemArr = [];
        for (var itemNr = 0; itemNr < this.state.listData.length; itemNr++) {
            if (this.state.listData[itemNr][2] === showCompletedTasks) {
                let item = (
                    <div className="list-item-container">
                        {/* done button */}
                        <span>{this.state.listData[itemNr][1]}</span>
                        {/* chili button */}
                        {/* hoverButtons */}

                    </div>
                )
                itemArr.push(item);
            }
        }
        return itemArr;
    }

    render() {
        return (
            <div>
                {this.createListItems()}
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