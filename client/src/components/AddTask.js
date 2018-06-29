import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import classnames from 'classnames'
import CategoryPicker from './CategoryPicker'

require('../static/css/AddTask.css')

/*
Component for adding a new task with a name and a date.
*/
class AddTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            date: new Date(),
            category: ''
        }

        this.updateName = this.updateName.bind(this)
        this.updateTaskList = this.updateTaskList.bind(this)
        this.updateDate = this.updateDate.bind(this)
        this.updateCategory = this.updateCategory.bind(this)
        this.addTaskRequest = this.addTaskRequest.bind(this)
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateCategory(category) {
        this.setState({
            category: category
        })
    }

    updateDate = date => this.setState({ date: date })

    updateTaskList() {
        this.addTaskRequest();
        this.setState(prevState => {
            return {
                name: '',
                date: new Date(),
                category: ''
            }
        })
    }

    addTaskRequest = async () => {
        const request = {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('/api/createtask/', request).then((response) => {
            this.props.refresh();
        });

    }

    render() {
        return (
        //     <div className="row">
        //     <div className="col-sm-8 col-sm-offset-2 text-center">
        //       <form>
        //          <div className="form-group">
        //             <input type="text" className="form-control input-lg text-center" 
        //              style={{marginTop:'50px'}} 
        //              onChange={this.updateName}
        //              value={this.state.name}
        //             autofocus placeholder="I want to buy a puppy that will love me forever"/>
        //           </div>
        //           <button type="submit" className="btn btn-primary btn-lg" 
        //           style={{backgroundColor:'rgb(255, 64, 129) !important',
        //           borderColor:'rgb(255, 64, 129) !important',
        //          color:'#fff !important',
        //          marginTop:'50px'
        //         }}
        //            onClick={this.updateTaskList}>Add</button>
        //       </form>
        //      </div>
        //   </div>
          <div className="row">
          <div className="col-sm-8 col-sm-offset-2 text-center">
            <div className="addTaskBox" style={{  border:'1px solid red !important' }}>
             
            <label className="control-label" style={{fontSize:'2.5rem',fontWeight:'400'}}>Enter Your Task</label>
                <input
                    type="text"
                    className="form-control input-lg text-center"
                    value={this.state.name}
                    onChange={this.updateName}
                    style={{marginTop:'30px'}} 
                     onChange={this.updateName}
                     value={this.state.name}
                    autoFocus placeholder="I want to buy a puppy that will love me forever"
                />
                <br/>
               
                <DatePicker
                    value={this.state.date}
                    onChange={this.updateDate}
                
                />
                <br/>
                {/* <CategoryPicker
                    updateCategory={this.updateCategory}
                /> */}
                <div className={classnames('form-group', 'signupButtons')} >
                <button onClick={this.updateTaskList} 
                className="btn btn-primary btn-lg"
                
                style={{backgroundColor:'rgb(255, 64, 129) !important',
                borderColor:'rgb(255, 64, 129) !important',
                 color:'#fff !important',
                  marginTop:'50px'}}
                > Add Task </button>
                </div>
         
         </div>
         </div>
            </div>
        )
    }
}

export default AddTask;