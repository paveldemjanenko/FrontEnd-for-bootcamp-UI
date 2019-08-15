const getComments = (state = [], action) => {
    if(action.type === 'GET_COMMENT') {
        return action.payload;
    }
    return state;
};

export default getComments;