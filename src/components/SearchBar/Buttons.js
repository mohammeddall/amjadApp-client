import React from 'react';

function Buttons({ clickedButton, onClickHandler }) {
    const buttonClickedStyle = { backgroundColor: '#6c757d', color: 'white', boxShadow: '0 0 0 0' };

    return (
        <div>
            <button type="button" className="btn btn-outline-secondary"
                style={clickedButton == 'Age' ? buttonClickedStyle : null}
                onClick={() => onClickHandler('clickedButton', 'Age')}
            >Age</button>

            <button type="button" className="btn btn-outline-secondary mr-2"
                style={clickedButton == 'BD' ? buttonClickedStyle : null}
                onClick={() => onClickHandler('clickedButton', 'BD')}
            >BD</button>
        </div>
    );
}

export default Buttons