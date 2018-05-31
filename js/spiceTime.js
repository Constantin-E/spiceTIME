class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundListTitle: "Completed Tasks",
            shownListTitle: "To Do",
            newItemFieldShown: false,
            newItemText: null,
        };
        this.showOtherList = this.showOtherList.bind(this);
        this.showNewItemField = this.showNewItemField.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }
    showOtherList() {
        this.setState({
            shownListTitle: this.state.backgroundListTitle,
            backgroundListTitle: this.state.shownListTitle

        })
    }
    showNewItemField() {
        this.setState({
            newItemFieldShown: !this.state.newItemFieldShown
        });
    }
    addNewItem(newItemText) {
        this.setState({
            newItemText: newItemText,
            newItemFieldShown: false
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
                        <span className="add-chili-btn" onClick={this.showNewItemField}><i class="fas fa-plus"></i></span>
                    </h2>
                    <NewItemField isShown={this.state.newItemFieldShown} newItem={this.addNewItem} />
                    <List title={this.state.shownListTitle} newItemText={this.state.newItemText} />
                </div>
            </div>
        );
    }
}
class NewItemField extends React.Component {
    constructor(props) {
        super(props);
        this.showClass = this.showClass.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    showClass() {
        return this.props.isShown ? null : "not-displayed";
    }
    addItem() {
        let newItemText = this.newItemTextField.value;
        this.props.newItem(newItemText);
        this.newItemTextField.value = null;
    }

    render() {
        return (
            <div className={"list-item-container " + this.showClass()}>
                <input type="text" placeholder="Type new task here" className="add-task-input" ref={x => (this.newItemTextField = x)} />
                <button class="add-btn" onClick={this.addItem}>Add!</button>
            </div>
        )
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                // [uniqueNumber, text, isCompleted, isChili, reminder]
                [3, "My First Task", false, false, null],
                [2, "My Second Task", true, false, null],
                [1, "My Third Task", false, true, null],
                [0, "My Fourth Task", true, true, null],
                ["empty", "", false],
                ["empty", "", true], //at least one of these should always be appended to each list in the end. if space beneath is empty (e.g. this.state.listData[itemInted][2]== true for numOfListItems element, and numOfListItems<10, fill up List with 10-numOfListItems empty items. )
            ],
            listIsUpdated: true
        }
        this.showListItems = this.showListItems.bind(this);
        this.importNewItem = this.importNewItem.bind(this);
    }
    // make delete items button  -- this will take uniquenumber and simply do : delete listData[itemindex] 
    //the right item index is the one with listData[itemIndex][0] = uniqueNumber
    importNewItem() {
        let currentListData = this.state.listData;
        let lastItemId = currentListData[0][0];
        let newItemArr = [lastItemId + 1, this.props.newItemText, false, false, null];
        currentListData.unshift(newItemArr)
        this.state.listData = currentListData
        
    }
    // deleteTask() {
    //     let currentListData = this.state.listData;
    //     let lastItemId = currentListData[0][0];
    //     let =
    // }
    showListItems() {
        console.log("list received new item: " + this.props.newItemText);
        (this.props.newItemText && this.state.listIsUpdated) ? this.importNewItem() : null;
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