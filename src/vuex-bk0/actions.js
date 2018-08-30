// import { ADD_ITEM, DELETE_ITEM } from './store'
import { ADD_ITEM, DELETE_ITEM } from './mutations-type'
import * as vuex  from './store'
// import {  } from "module";
export const addItem = ({ dispatch, store }, item ) => {
    dispatch('ADD_ITEM', item);
}

export const deleteItem = ({ dispatch, store }) => {
    dispatch('DELETE_ITEM');
}

// export const getDataFromServer = ({ dispatch, store }) => {
//     $.ajax({
//         url: '/api/data',
//         success: function(data){
//             dispatch('FETCH_DATA', data);
//         }
//     })
// }
