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
                    <List title={this.state.shownListTitle} />
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
                [7, "My Fourth Task", true, true, null],
                ["empty", "", false],
                ["empty", "", true], //at least one of these should always be appended to each list in the end. if space beneath is empty (e.g. this.state.listData[itemInted][2]== true for numOfListItems element, and numOfListItems<10, fill up List with 10-numOfListItems empty items. )
            ]
        }
        this.createListItems = this.createListItems.bind(this);
    }
 // make delete items button  -- this will take uniquenumber and simply do : delete listData[itemindex] 
 //the right item index is the one with listData[itemIndex][0] = uniqueNumber
    createListItems() {
        let showCompletedTasks = (this.props.title === "To Do") ? false : true;
        let itemArr = [];
        for (var itemIndex = 0; itemIndex < this.state.listData.length; itemIndex++) {
            if (this.state.listData[itemIndex][2] === showCompletedTasks) {
                let item = (
                    <div className="list-item-container">
                        {/* done button */}
                        <span>{this.state.listData[itemIndex][1]}</span>
                        {/* <div className="mock-buttons-container">
                            <div className="add-spice-button"></div>
                            <div className="delete-task-button" id={"buttonFor" + this.state.listData[itemIndex][0]}></div>
                        </div> */}
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


// make hidden buttons 