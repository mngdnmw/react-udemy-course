import React from 'react';

const validation = (props) => {

    let enough = null;

    if (props.inputLen > 4) {
        enough = (
            <div>
                <p>Text long enough</p>
            </div>
        );
    } else {
        enough = (
            <div>
                <p>Text too short</p>
            </div>
        );
    }

    return (
        <div className="Validation">
            {enough}
        </div>
    )
};
export default validation;