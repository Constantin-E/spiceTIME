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
                <div className="background-list" onClick={this.showOtherList}><h2>{this.state.backgroundListTitle}</h2></div>
                <div className="shown-list">
                    <h2>
                        {this.state.shownListTitle}
                        <span className="add-item-btn"><i class="fas fa-plus"></i></span>
                    </h2>
                    <div className="list-item-container">
                    <input type="text" placeholder="Type new task here" className="add-task-input"/>
                    </div>
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
        this.showListItems = this.showListItems.bind(this);
    }
    // make delete items button  -- this will take uniquenumber and simply do : delete listData[itemindex] 
    //the right item index is the one with listData[itemIndex][0] = uniqueNumber
    showListItems() {
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
                        <span>
                            {<button><i class="fa fa-trash"></i></button>}
                        </span>
                        <span>
                            {<button>Complete Task<i class="fa fa-check"></i></button>}
                        </span>
                            {<button><i class="icofont icofont-pepper"></i></button>}
                        {/* chili button */}
                        <span>
                            {<button><i class="fa fa-bell"></i></button>}
                        </span>
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
                {this.showListItems()}
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


/* function reminderFunction() {
                var currentTime = new Date();
                var h = currentTime.getHours();
                var m = currentTime.getMinutes();
                var s = currentTime.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
                var t = setTimeout(myClock,1000);
                }
    
            function checkTime(i) {
                if (i<10) {i = "0" + i};
                return i;
            }
*/