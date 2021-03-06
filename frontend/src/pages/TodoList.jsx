import React from 'react';
import IconButton from "../templates/iconButton";

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map((data) => (
            <tr key={data._id}>
                <td>{data.description}</td>
                <td>{data.done === true ? <span>concluido</span>: <span>Pendente</span>}</td>
                <td>
                    <IconButton style={'success'} icon={'check'}
                                onclick={() => props.handleMarkAsDone(data)} hide={data.done}/>
                    <IconButton style={'warning'} icon={'undo'}
                                onclick={() => props.handleMarkAsPending(data)} hide={!data.done}/>
                    <IconButton style={'danger'} icon={'trash-o'}
                                onclick={() => props.handleRemove(data)}
                                hide={!data.done}/>
                </td>
            </tr>

        ))
    }

    return (
        <table className={'table'}>
            <thead>
                <tr>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList;