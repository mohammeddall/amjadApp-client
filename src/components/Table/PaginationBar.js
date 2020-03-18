import React from 'react';
import { Pagination } from 'semantic-ui-react'

const PaginationBar = ({ activePage, totalPages, onPageChange }) => {
    return (
        <div className="container my-2">
            <div className="row justify-content-center">
                <div className="col-6">
                    <Pagination
                        activePage={activePage}
                        totalPages={totalPages}
                        onPageChange={(e, data) => onPageChange(data.activePage)}
                    />
                </div>
            </div>
        </div>
    )
}

export default PaginationBar