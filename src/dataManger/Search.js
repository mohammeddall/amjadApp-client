import { constants } from './data'

function Search(details) {
    const services = constants.services
    const searchFunctionality = details.functionality?true:false;
    const searchIsability = details.isability?true:false;
    const searchAge=details.age>0?true:false;
    console.log('search details', services)

    let newTableData = constants.services.filter(service =>
        (service.fromAge <= details.age && service.toAge >= details.age || !searchAge) &&
        service.functionality.find(func =>{
            return func.value == details.functionality||!searchFunctionality
            })&&
            service.isability.find(isability =>{
                return isability.value == details.isability||!searchIsability
            })
    )
    // newTableData.map(serv => {
    //     serv.functionality = serv.functionality.map(functionality => functionality.value).join(' / ');
    //     serv.isability = serv.isability.map(isability => isability.value).join(' / ');
    //     return serv
    // })
    return newTableData.map(serv => {
        const temp= {...serv};
        temp.functionality = serv.functionality.map(functionality => functionality.value).join(' / ');
        temp.isability = serv.isability.map(isability => isability.value).join(' / ');
        return temp
    });
}
export default Search