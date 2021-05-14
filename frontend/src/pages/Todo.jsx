import React, {Component} from 'react'
import axios from "axios";

import PageHeader from "../templates/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const url = 'http://localhost:3003/api/todos'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            list: []
        }
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = (description = '') => {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${url}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleChange = e => {
        this.setState({...this.state, description: e.target.value})
    }

    //data handlers

    HandleAdd = () => {
        const description = this.state.description;
        axios.post(url,{description: description})
            .then(data => this.refresh())
            .catch(err => console.log(err))
    }

    handleSearch = (e) => {
        this.refresh(this.state.description)
    }

    handleClean = () => {
        this.refresh()
    }

    handleMarkAsDone = (todo) => {
        const done = todo.done
        axios.put(`${url}/${todo._id}`, {...todo, done: true})
            .then( resp => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }

    handleMarkAsPending = (todo) => {
        const done = todo.done
        axios.put(`${url}/${todo._id}`, {...todo, done: false})
            .then( resp => this.refresh(this.state.description))
            .catch(err => console.log(err))
    }

    handleRemove = (todo) => {
        axios.delete(`${url}/${todo._id}`)
            .then(resp => this.refresh(this.state.description) )
            .catch(err => console.log(err))
    }

    render = _ => (
        <div>
            <PageHeader name={'Criação'} small={'Cadastro'}/>
            <TodoForm
                      HandleAdd={this.HandleAdd}
                      handleChange={this.handleChange}
                      handleSearch={this.handleSearch}
                      handleClean={this.handleClean}
            />

            <TodoList list={this.state.list}
                      handleRemove={this.handleRemove}
                      handleMarkAsDone={this.handleMarkAsDone}
                      handleMarkAsPending={this.handleMarkAsPending}/>
        </div>


    )

}

export default Todo