import Papa from 'papaparse'
import validateEquipment from './validation/validateEquipment';
import equipmentMap from './validation/equipmentMap';

export async function getErrors() {
  
  let errors = [];
  await fetch( './equipment_list.csv' )
  .then( response => response.text() )
  .then( responseText => {
      var jsonArray = Papa.parse(responseText, {header: true}).data;
      validateEquipment(jsonArray, equipmentMap, errors);
      // console.log(errors);
  })

  return errors;
}