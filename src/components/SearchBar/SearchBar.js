import React, { Component } from 'react'

import AgeInput from './AgeInput';
import FunctionalitySelect from './FunctionalitySelect';
import IsabilitySelect from './IsabilitySelect';
import Search from '../../dataManger/Search'
import MyTable from '../Table/MyTable'

import DataForTheDB from '../../dataManger/DataForTheDB'

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
        this.onSearch();
    }

    detailsUpdate =(key,value) =>{
        console.log('detailsUpdate', key, value)
        this.details[key]=value;
    }
    onSearch =()=>{

        let newTableData=Search(this.details)
        this.setState({ tableData: newTableData,totalServices:newTableData.length})
        console.log('tableData', newTableData,this.state.tableData)
    }
    dataToTable = () => ({
        tableData: this.state.tableData,
        tableHeader: [
            { value: 'index', valueToShow: 'ID', style: {width: '5%'}, sort: true },
            { value: 'name', valueToShow: 'Name', style: { width: '10%'}, sort: true },
            { value: 'fromAge', valueToShow: 'F ', style: { width: '5%'}, sort: true },
            { value: 'toAge', valueToShow: 'T ', style: { width: '5%'}, sort: true },
            { value: 'functionality', valueToShow: 'Functionality', style: { width: '15%'}, sort: true },
            { value: 'isability', valueToShow: 'Isability', style: { width: '15%'}, sort: true },
            { value: 'description', valueToShow: 'Description', style: {}, sort: true }
        ],
        tableStyle: {
        style: { borderWidth: "3px", width: '100%' },
        className: "table table-striped table-hover table-bordered border-dark",
        localSort:true
        },
        pagination:10
    })


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
                <div className="row">
                    {DataForTheDB()}
                </div>
                <div className="row justify-content-md-center mt-3">
                    <div className="col-lg-auto col-sm-12">
                        <MyTable data={this.dataToTable()} sortOn={()=>console.log('sort')}/>
                    </div>
                </div>

            </div>

        )
    }
}

