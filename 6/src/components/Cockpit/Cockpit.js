import React from 'react';

const cockpit = (props) => {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        cursor: 'pointer',
    };
    let classes = [];

    switch (props.persons.length) {
        case 1:
            classes.push('bold')
            break;
        case 2:
            classes.push('red')
            break;
        default:
            style.backgroundColor = "yellow";
            // pseudo selector has to be written in string becaues they start with a colon, they are not supported by javascript
            style[':hover'] = {
                backgroundColor: "pink",
                color: 'black'
            }
            break;
    }


    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
        </div>);
}
export default cockpit;