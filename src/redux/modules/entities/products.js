export const schema = {
    name: 'products',
    id: 'id'
}

const reducer = (state = {}, action) => {
    if (action.response && action.response.products) {
        //  合并数据
        return {
            ...state,
            ...action.response.products
        }
    }
    return state;
}

export default reducer;
