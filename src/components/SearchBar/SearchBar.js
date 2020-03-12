import React, { Component } from 'react'

import AgeInput from './AgeInput';
import FunctionalitySelect from './FunctionalitySelect';
import IsabilitySelect from './IsabilitySelect';
import Search from '../../dataManger/Search'
import MyTable from '../Table/MyTable'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedButton: 'Age',
            tableData:[{id:0,name:'asdasd'}],
            totalServices:0
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
        console.log('detailsUpdate', key, value)
        this.details[key]=value;
    }
    onSearch =()=>{
        console.log('details', this.details)
        // let newTableData = constants.services.filter(service=>
        //    service.fromAge < this.details.age && 
        //    service.toAge > this.details.age 

        // )
        // newTableData.map(serv=>{
        //     serv.functionality = serv.functionality.map(functionality => functionality.value).join(' / ');
        //     serv.isability = serv.isability.map(isability => isability.value).join(' / ');
        //     return serv
        // })
        let newTableData=Search(this.details)
        this.setState({ tableData: newTableData,totalServices:newTableData.length})
        console.log('tableData', newTableData,this.state.tableData)
        // this.setState({tableData:[{id:222,name:"asdasdxzlolll"}]})
    }


    render() {

        return (

            <div className="container">
                <div className="row justify-content-md-center mt-3">
                    <div className="col-lg-auto col-sm-12">
                        <AgeInput ageInputonClick={(age) => this.detailsUpdate('age', age)} />

                    </div>
                    <div className="col-lg col-sm-12">
                        <FunctionalitySelect functionalityonClick={functionality => this.detailsUpdate('functionality', functionality)} />
                    </div>
                    <div className="col-lg col-sm-12">
                        <IsabilitySelect isabilitySelectonClick={isability => this.detailsUpdate('isability', isability)} />

                    </div>
                    <div className="col-lg col-sm-12 align-self-end ">
                        <button type="button" class="btn btn-secondary" onClick={this.onSearch}>Search</button>
                        <label>{`(total:${this.state.totalServices})`}</label>
                    </div>

                </div>
                <div className="row justify-content-md-center mt-3">
                    <div className="col-lg-auto col-sm-12">
                    <MyTable data={{ 
                        tableData: this.state.tableData, 
                        tableStyle: { 
                            style:{ borderWidth: "3px", width: '100%' },
                            className:"table table-striped table-hover table-bordered border-dark"
                        }
                        }} sortOn={()=>console.log('sort clicked')}/>
                    </div>
                </div>
            </div>

        )
    }
}

