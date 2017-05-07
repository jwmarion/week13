import $ from 'jquery';
const MW_APP_ID = '0e6fa2ff3ecfd4ffdfc857609c6c2585';

export function typeText(event) {
  return { type: 'typeText', searchValue: event.target.value };
}
export function search(typeText){
  return function(dispatch){
    method: 'GET',
    url://
    data:{
      api_key: MW_APP_ID,
      query: typeText
    }
  }
}
// export function searchButton(){
//   return { type: 'searchButton', }
// }
