export const APPLY_DISCOUNT = 'discount/APPLY';

const initialState = {
    isDiscountApplied: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPLY_DISCOUNT:
            return {
                ...state,
                isDiscountApplied: true
            };

        default:
            return state;
    }
}

export const applyDiscount = () => {
    return dispatch => {
        dispatch({
            type: APPLY_DISCOUNT
        });
    };
};