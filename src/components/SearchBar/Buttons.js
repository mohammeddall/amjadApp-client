import React, { useState} from 'react'


function Buttons({ onClickHandler}){
    const buttonClickedStyle = { backgroundColor: '#6c757d', color: 'white', boxShadow: '0 0 0 0' };
    const [ageButtonStyle, setAgeButtonStyle] = useState(buttonClickedStyle)
    const [bdButtonStyle, setBdButtonStyle]=useState()


    return(
        // <div className="input-group-prepend">
        <div>
            <button type="button" className="btn btn-outline-secondary"
                style={ageButtonStyle}
                onClick={(e)=>{
                    setAgeButtonStyle(buttonClickedStyle);
                    setBdButtonStyle({});
                    onClickHandler(e.target.innerText);
                }}
            >Age</button>

            <button type="button" className="btn btn-outline-secondary mr-2"
                style={bdButtonStyle}
                onClick={(e) => {
                    setAgeButtonStyle({});
                    setBdButtonStyle(buttonClickedStyle);
                    onClickHandler(e.target.innerText);
                }}
            >BD</button>
        </div>
    );
}
export default Buttons