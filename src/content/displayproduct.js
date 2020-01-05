import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

function DisplayProduct(props) {
    const data = props.getProducts
    const categories = data?data.getCategories:[]

    return (
        <div style={{flex:'1'}}>
            <div style={{marginBottom:'1em'}}>DISPLAY:</div>
            <Collapse defaultActiveKey={['1']}>
               {   
                   categories.map((item)=>{
                        const p = item.products.map((prod)=>{
                                    return(
                                        <p key={prod.id}> {prod.name}</p>
                                    )
                                })
                        return (
                            <Panel header={item.name} key={item.id} extra={item.id}>
                                {p}
                            </Panel>
                        )
                   })
                 }
            </Collapse>
        </div>
    )
}

export default DisplayProduct
