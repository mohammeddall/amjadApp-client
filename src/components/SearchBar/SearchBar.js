import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateSearchDetails, resetSearchDetails } from '../../store/actions/index'

import AgeInput from './AgeInput';
import FunctionalitySelect from './FunctionalitySelect';
import IsabilitySelect from './IsabilitySelect';
import Search from '../../dataManger/Search'
import MyTable from '../Table/MyTable'
import ModalDescription from './ModalDescription'

import DataForTheDB from '../../dataManger/DataForTheDB'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData:[{id:0,name:'asdasd'}],
            totalServices:0,
            modalDetails:{
                defaultOpen:false,
                service:{}
            },
            searchDetails: {
                age: '',
                functionality: '',
                isability: '',
                clickedButton: 'Age'
            }
        }
    }

    componentDidMount = () => {
        this.onSearch();
    }


    onSearch =()=>{
        let newTableData = Search(this.state.searchDetails)
        newTableData.forEach(service=>{
            service.descriptionToShow=<p style={{cursor: 'pointer'}} 
            onClick={()=>{
                this.setState({modalDetails:{
                    defaultOpen: true,
                    service: service
                }})                
        }}>{service.description.slice(1,130).concat(' . . .')}</p>
        })

        this.setState({ tableData: newTableData,totalServices:newTableData.length})
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
            { value: 'descriptionToShow', valueToShow: 'Description', style: {}, sort: true }
        ],
        tableStyle: {
        style: { borderWidth: "3px", width: '100%' },
        className: "table table-striped table-hover table-bordered border-dark",
    },
        localSort:true,
        pagination:10
    });

    onModalClose=()=>{
        const newModalDetails = { ...this.state.modalDetails, defaultOpen: false}
        this.setState({ modalDetails: newModalDetails})
    }

    onReset=()=>{
        this.setState({
            searchDetails: {
                age: '',
                functionality: '',
                isability: '',
                clickedButton: 'Age'
            }
        }, this.onSearch);
    }

    searchDetailsUpdate=(key,value)=>{
        const newSearchDetails={...this.state.searchDetails,[key]:value}
        this.setState({searchDetails:newSearchDetails})
    }

    render() {

        return (
            <div className="container">
                <ModalDescription modalDetails={this.state.modalDetails} onModalClose={this.onModalClose}/>
                <div className="row justify-content-md-center mt-3">
                    <div className="col-lg-auto col-sm-12">
                        <AgeInput
                            age={this.state.searchDetails.age}
                            clickedButton={this.state.searchDetails.clickedButton}
                            onChange={this.searchDetailsUpdate} />
                    </div>
                    <div className="col-lg col-sm-12">
                        <FunctionalitySelect 
                            value={this.state.searchDetails.functionality} 
                            onChange={this.searchDetailsUpdate} />
                    </div>
                    <div className="col-lg col-sm-12">
                        <IsabilitySelect
                            value={this.state.searchDetails.isability}
                            onChange={this.searchDetailsUpdate} />

                    </div>
                    <div className="col-lg col-sm-12 align-self-end ">
                        <button type="button" class="btn btn-secondary" onClick={this.onSearch}>Search</button>
                        <button type="button" class="btn btn-secondary mx-2" onClick={this.onReset}>Reset</button>
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

export default SearchBar

