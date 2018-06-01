class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundListTitle: "Completed Tasks",
            shownListTitle: "To Do",
            newItemFieldShown: false,
            newInputText: null
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
    addNewItem(textInput) {
        console.log(textInput + " was found in App");

        // this.state.newItemFieldShown = false;
        this.setState({
            newItemFieldShown: false,
            newInputText: textInput
        })
        //add text input to state
        // pass that new state value as props neItemText to List
        //in List, create and unshift new item and re render
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
                    <List title={this.state.shownListTitle} newItemText={this.state.newInputText} />
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
        console.log(this.textInput.value + " was found in newItemField");
        this.props.newItem(this.textInput.value);
    }

    render() {
        return (
            <div className={"list-item-container " + this.showClass()}>
                <input type="text" placeholder="Type new task here" className="add-task-input" ref={(input) => { this.textInput = input }} />
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
                [2, "My First Done Task", true, false, null],
                [1, "My Second Task", false, true, null],
                [0, "My Second Done Task", true, true, null],
            ],
        }
        this.showListItems = this.showListItems.bind(this);
        this.markAsDone = this.markAsDone.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.markAsChili = this.markAsChili.bind(this);
    }
    // make delete items button  -- this will take uniquenumber and simply do : delete listData[itemindex] 
    //the right item index is the one with listData[itemIndex][0] = uniqueNumber

    componentWillReceiveProps(nextProps) {
        console.log("check to update listadata fires");
        if (nextProps.newItemText != this.state.listData[0][1] && nextProps.newItemText != null) {
            let currentListData = this.state.listData;
            let lastItemId = currentListData[0][0];
            let newItemArr = [lastItemId + 1, nextProps.newItemText, false, false, null];
            currentListData.unshift(newItemArr);
            this.state.listData = currentListData;
        }
    }

    markAsDone(e) {
        let itemIndex = parseInt(e.target.parentElement.attributes[0].nodeValue);
        let currentItem = this.state.listData[itemIndex];
        currentItem[2] = !currentItem[2];
        let currentList = this.state.listData;
        currentList[itemIndex] = currentItem;
        this.setState({
            listData: currentList
        });
    }
    deleteItem(e) {
        let itemIndex = parseInt(e.target.parentElement.attributes[0].nodeValue);
        let currentList = this.state.listData;
        currentList.splice(itemIndex, 1);
        this.setState({
            listData: currentList
        });
    }
    markAsChili(e) {
        let itemIndex = parseInt(e.target.attributes[0].nodeValue);
        let currentItem = this.state.listData[itemIndex];
        let currentList = this.state.listData;
        currentItem[3] = !currentItem[3];
        currentList.splice(itemIndex, 1);
        currentList.unshift(currentItem);
        this.setState({
            listData: currentList,
        });
    }

    showListItems() {
        let showCompletedTasks = (this.props.title === "Completed Tasks");
        let itemArr = [];
        for (var itemIndex = 0; itemIndex < this.state.listData.length; itemIndex++) {
            if (this.state.listData[itemIndex][2] === showCompletedTasks) {
                let item = (
                    <div className="list-item-container">
                        <button onClick={this.markAsDone} listIndex={itemIndex}><i class="fa fa-check"></i></button>
                        <span>{this.state.listData[itemIndex][1]}</span>
                        <div className="mock-buttons-container">
                            <button onClick={this.deleteItem} listIndex={itemIndex}><i class="fa fa-trash"></i></button>
                            <button onClick={this.markAsChili} listIndex={itemIndex}>Spice it up!</button>
                            <button><i class="fa fa-bell"></i></button>
                        </div>
                    </div>
                )
                itemArr.push(item);
            }
        }
        return itemArr;
    }

    render() {
        let itemArr = this.showListItems();
        return (
            <div>
                {itemArr}
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