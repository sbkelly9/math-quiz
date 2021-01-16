import React from 'react';

const DisplayQuestion = ({ choices, handleClick, question }) => {
    let listOptions = choices.map((choice, i) => (
        <button onClick={handleClick} key={i}>
            {choice}
        </button>
    ))
    return (
        <div>
            <p>{question}</p>
            {listOptions}
            <br />
            <br />
            <button>Next</button>
        </div>
    )
};

export default DisplayQuestion;