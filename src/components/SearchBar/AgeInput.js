import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buttons from './Buttons'

function AgeInput({ age, clickedButton, onChange }) {
    const DateToAge = date => (
        Number((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(2)
    )
    const AgeToDate = age => (
        new Date() - age * 1000 * 60 * 60 * 24 * 365.25
    )

    return (
        <div>
            <Buttons
                clickedButton={clickedButton}
                onClickHandler={onChange} />
            <div className="input-group">
                {clickedButton == 'Age' ?
                    <div>
                        <input type="number"
                            className="form-control"
                            value={age}
                            onChange={(e) => onChange('age', e.target.value)} />
                    </div>
                    :
                    <DatePicker
                        className="form-control"
                        selected={AgeToDate(age)}
                        placeholderText="Click to select a date"
                        dateFormat="dd/MM/yyyy"
                        isClearable
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        onChange={date => {
                            if (date) onChange('age', DateToAge(date))
                        }} />
                }
            </div>
        </div>
    );
}

export default AgeInput