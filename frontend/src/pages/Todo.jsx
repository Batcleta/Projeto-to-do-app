import React, {useEffect} from 'react'
import axios from "axios";
import {connect} from 'react-redux'

import PageHeader from "../templates/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {alterarDescrição} from "../store/actions/descriptionAction";
import {atualizarLista} from "../store/actions/listAction";

const url = 'http://localhost:3003/api/todos'

const Todo = props => {

    const {description, alteradesc, alteraList} = props;

    const refresh = (description = '') => {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${url}?sort=-createdAt${search}`)
            .then(resp => alteraList(resp.data))
    }

    useEffect(() => {
        refresh();
    })

 //data form handlers
    const HandleAdd = () => {
        axios.post(url, {description: description})
            .then(data => refresh())
            .then(resp => alteradesc('') )
            .catch(err => console.log(err))
    }

    const handleSearch = (e) => {
        refresh(description)
    }

    const handleClean = () => {
       refresh()
    }

    //Data List handlers
    const handleMarkAsDone = (todo) => {
        const done = todo.done
        axios.put(`${url}/${todo._id}`, {...todo, done: true})
            .then(resp => refresh(description))
            .catch(err => console.log(err))
    }

    const handleMarkAsPending = (todo) => {
        const done = todo.done
        axios.put(`${url}/${todo._id}`, {...todo, done: false})
            .then(resp => refresh(description))
            .catch(err => console.log(err))
    }

    const handleRemove = (todo) => {
        axios.delete(`${url}/${todo._id}`)
            .then(resp => refresh(description))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <PageHeader name={'Criação'} small={'Cadastro'}/>
            <TodoForm
                HandleAdd={HandleAdd}
                handleSearch={handleSearch}
                handleClean={handleClean}
            />
            {/*todo importar referencia da lista na função refresh*/}
            <TodoList
                handleRemove={handleRemove}
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        description: state.description.description
    }
}

const mapDispatchToProp = dispatch => {
    return {
        alteradesc(novaDescrição) {
            //    action creator -> action
            const action = alterarDescrição(novaDescrição)
            dispatch(action)
        },
        alteraList (novaLista){
            //    action creator -> action
            const action = atualizarLista(novaLista)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Todo);