const SET_AVATAR = 'authReducer/SET_AVATAR';

let initialState = {
    avatar: null,

};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AVATAR:
            return{
                ...state,
                avatar: action.avatar
            };
        default:
            return state

    }
};

export const setAvatarActionCreator = (avatar) => ({
    type: SET_AVATAR,
    avatar,

});

