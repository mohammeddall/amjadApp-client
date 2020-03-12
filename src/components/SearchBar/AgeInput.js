import React, { useState, useEffect} from 'react'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buttons from './Buttons'

function AgeInput({ageInputonClick}){
    const [startDate, setStartDate] = useState(new Date());
    const [age, setAge] = useState();
    const [clickedButton, setClickedButton]=useState('Age');
    const dateCalc = date =>{
        return Number((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2);
    }
    useEffect(() => {
        ageInputonClick(age)
    },[age] )

    return (
        // <div onClick={() => 
        // ageInputonClick(age)
        // }>
        <div>
        <Buttons onClickHandler={clickedButton => {setClickedButton( clickedButton )}}/>
        <div className="input-group">
            {clickedButton == 'Age' ?
            <div>
                <input type="number" 
                    className="form-control" 
                    // placeholder="Click to select a age"
                    defaultValue={age} 
                    onChange={(e)=>{
                    setAge(e.target.value);
                    setStartDate(new Date()-e.target.value*1000*60*60*24*365.25);
                    }}/>
            </div>
            :
            <DatePicker
                className="form-control"
                selected={startDate}
                placeholderText="Click to select a date"
                dateFormat="dd/MM/yyyy"
                isClearable
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                onChange={date =>{
                    if (date) setAge(dateCalc(date))
                    setStartDate(date);
                    }}/>
            }
        </div>

        </div>
    );
}

export default AgeInput