import React from 'react';
import Grid from '../templates/Grid';
import IconButton from "../templates/iconButton";

const TodoForm = (props) => {

    const keyHandler = e => {
        if(e.key === 'Enter'){
            e.shiftKey? props.handleSearch() : props.HandleAdd()
        }else if ( e.key === 'Escape') props.handleClean()
    }

    return (
        <div role='form' className='todoForm flex'>

            <Grid cols="12 9 10">
                <input
                    type="text"
                    id="description"
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style={'primary'} icon={'plus'} onclick={props.HandleAdd} />
                <IconButton style={'info'} icon={'search'} onclick={props.handleSearch} />
                <IconButton style={'default'} icon={'close'} onclick={props.handleClean} />
            </Grid>
        </div>
    )
}

export default TodoForm;