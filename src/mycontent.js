import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import {CATEGORIES_PRODUCT} from './query';
import ChangeProduct from './content/changeproduct'
import DisplayProduct from './content/displayproduct'

export default function(){
    const {data}=useQuery(CATEGORIES_PRODUCT);
   
    return (<div style={{display:"flex"}}>
    <ChangeProduct ></ChangeProduct>
    <DisplayProduct getProducts = {data}> </DisplayProduct>
    </div>)
}