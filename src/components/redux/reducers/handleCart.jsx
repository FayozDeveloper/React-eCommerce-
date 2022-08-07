const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case 'ADDITEM':
            const exist = state.find((x) => x.id === product.id);
            if (exist){
                return state.map((x) => x.id === product.id ? {...x, quantity: x.quantity + 1} : x )
            } else {
                const product = action.payload
                return  [...state, {...product, quantity: 1}]
            }

            break;

        case 'REMOVEITEM':
            const exist2 = state.find((x) => x.id === product.id);
            if (exist2.quantity === 1){
                return state.filter((x) => x.id !== exist2.id);
            } else {
                return state.map((x) => x.id === product.id ? {...x, quantity: x.quantity -1 } : x)
            }
            break;

        default: return state;
        break;
    }
}

export default handleCart;