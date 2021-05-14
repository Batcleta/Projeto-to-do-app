import React from 'react';
import {connect} from 'react-redux'

import Grid from '../templates/Grid';
import IconButton from "../templates/iconButton";
import {alterarDescrição} from "../store/actions/descriptionAction";

const TodoForm = (props) => {
    const {description, alteradesc} = props;
    ;

    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.HandleAdd()
        } else if (e.key === 'Escape') props.handleClean()
    }

    return (
        <div role='form' className='todoForm flex'>

            <Grid cols="12 9 10">
                <input
                    type="text"
                    id="description"
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={description}
                    onChange={e=> alteradesc(e.target.value)}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style={'primary'} icon={'plus'} onclick={props.HandleAdd}/>
                <IconButton style={'info'} icon={'search'} onclick={props.handleSearch}/>
                <IconButton style={'default'} icon={'close'} onclick={props.handleClean}/>
            </Grid>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(TodoForm);