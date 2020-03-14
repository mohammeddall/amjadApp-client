import React from 'react';
import { Pagination } from 'semantic-ui-react'

const PaginationBar = (props) => (
    <div className="container my-2">
        <div className="row justify-content-center">
            <div className="col-6">
                <Pagination 
                    defaultActivePage={props.activePage} 
                    totalPages={props.totalPages}
                    onPageChange={(e, data) => props.onPageChange(data)}
                />
            </div>
        </div>
    </div>
)

export default PaginationBar