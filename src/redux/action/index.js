// For Adding Item to card
export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload:product
    }
}

// For Deleteing Item to card
export const delCart = (product) => {
    return{
        type:"DELITEM",
        payload:product
    }
}