import React from 'react';

const TableItem = () => {
    return (
        <div className='app w-50 mx-auto'>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Programming language</th>
                    <th>Stack</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>JavaScript</td>
                    <td>Mern Stack</td>
                    <td>
                        <button className='btn btn-outline-danger'>delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableItem;