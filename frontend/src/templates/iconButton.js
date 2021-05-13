import React from 'react';
import If from "../helpers/if";

const IconButton = ({hide, icon, onclick, style}) => {
    return <If test={hide}>
        <button
            className={'btn btn-' + style}
            onClick={onclick}
        >
            <i className={'fa fa-' + icon}/>
        </button>
    </If>;
}

export default IconButton;