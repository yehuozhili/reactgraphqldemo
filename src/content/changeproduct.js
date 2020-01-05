import React from 'react'
import Addcategory from './addcategory';
import Addproduct from './addproduct';
import Deleteproduct from './deleteproduct'

function ChangeProduct(props) {
    return (
        <div style={{flex:'1'}} >
            <Addproduct></Addproduct>
            <Addcategory></Addcategory>
            <Deleteproduct></Deleteproduct>
        </div>
    )
}


export default ChangeProduct