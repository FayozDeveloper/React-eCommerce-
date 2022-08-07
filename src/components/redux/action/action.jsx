export const AddItem = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

export const RemoveItem = (product) => {
    return{
        type: 'REMOVEITEM',
        payload: product
    }
}