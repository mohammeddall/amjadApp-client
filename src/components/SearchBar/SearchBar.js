import React, { Component } from 'react'

import AgeInput from './AgeInput';
import FunctionalitySelect from './FunctionalitySelect';
import IsabilitySelect from './IsabilitySelect';


export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedButton: 'Age'

        }
        this.details = {
            age: '',
            functionality: '',
            isability: ''
        }
    }

    componentDidMount = () => {
    }

    detailsUpdate =(key,value) =>{
        this.details[key]=value;
    }


    render() {

        return (

            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-auto col-sm-12">
                        <AgeInput ageInputonClick={(age) => this.details.age = age} />

                    </div>
                    <div className="col-lg col-sm-12">
                        <FunctionalitySelect functionalityonClick={functionality => this.detailsUpdate('functionality', functionality)} />
                    </div>
                    <div className="col-lg col-sm-12">
                        <IsabilitySelect isabilitySelectonClick={isability => this.detailsUpdate('isability', isability)} />

                    </div>
                    <div className="col-lg col-sm-12 align-self-end ">

                        <button type="button" class="btn btn-secondary" onClick={() => console.log('details', this.details)}>Search</button>
                    </div>

                </div>
            </div>

        )
    }
}

