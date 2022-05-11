// For Add item to cart

export const addCart = (product) =>{
    return {
        type : "ADDITEM",
        payload : product
    }
}

// For  DELitem to cart

export const delCart = (product) =>{
    return {
        type : "DELITEM",
        payload : product
    }
}