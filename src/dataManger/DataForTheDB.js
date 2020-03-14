import React from 'react'
import { constants } from './data'

function DataForTheDB(details) {
    const lala='asdasd';
    const servicesData = constants.services.map(serv=> `
        (${serv.index},'${serv.name}',${serv.fromAge},${serv.toAge},'${serv.description}'),
        `);
    // const servicesFuncData = constants.services;
    let servicesFuncData = constants.services.slice(0)
     servicesFuncData.forEach(serv =>{
        let use=[]
        let use2=[]
        serv.functionality=serv.functionality.filter(func=>{
            if (!use.includes(func.value)){
                use.push(func.value)
                return true
            }
            return false
        })
         serv.isability = serv.isability.filter(func=>{
             if (!use2.includes(func.value)){
                 use2.push(func.value)
                return true
            }
            return false
        })

        })
    // console.log('servicesFuncData',servicesFuncData)
    const servicesFuncData2=servicesFuncData.map(serv =>{
            // console.log('serv', serv)
        return(
            // serv
            serv.functionality.map(func => `,(${serv.index},${
                func.value == 'easy'?  1 :
                func.value == 'medium'? 2: 
                func.value == 'difficult'? 3:4
            })`)
        )});
    const servicesIsablityData=servicesFuncData.map(serv =>{
            // console.log('serv', serv)
        return(
            // serv
            serv.isability.map(func => `,(${serv.index},${
                func.value == 'autism'?  1 :
                func.value == 'rehabilitation'? 2:3
            })`)
        )});
    // console.log('servicesFuncData', servicesFuncData, constants.services)
    return (
        <div>
            {/* <div>
                {servicesFuncData2}

            </div>
            <br>
            </br>
            <p>

                {servicesIsablityData}
            </p>
            <br>
            </br>
            <p>

            {servicesData}
            </p> */}

        </div>
    )
}
export default DataForTheDB