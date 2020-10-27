

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/theodore';

const getItems = ()=> {
   return fetch(`${BASE_URL}/items`)
 
}

const createItem = (name) =>{
    let newItem = 
        JSON.stringify({
            name: name
        });

    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: newItem
    });
}

const updateItem = (id , updateData) => {
    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateData)
    });
}



export default {
    getItems,
    createItem,
    updateItem
 };