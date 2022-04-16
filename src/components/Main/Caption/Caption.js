import React from 'react';
import './Caption.css';

function Caption(props) {
    return (
        <div className="caption">
            <h2 className="caption__header">{props.name}</h2>
        </div>
    )
}

export default Caption;