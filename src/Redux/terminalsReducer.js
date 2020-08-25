const ADD_TERMINAL = 'terminalReducer/ADD_TERMINAL';
const REMOVE_TERMINAL = 'terminalReducer/REMOVE_TERMINAL';

let initialState = {
    terminalItems: [
        { id: 1, data: {name: `Terminal`, description: "Example" } },

    ]
};

export const terminalsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TERMINAL:
            return{
                ...state,
                terminalItems: [...state.terminalItems, {id: action.id, data: { name: action.nameTerminal, description: action.description}}]

            };
        case REMOVE_TERMINAL:
                console.log(state)
            return {
                ...state,
                terminalItems: state.terminalItems.filter(el => el.id !== action.idRemove )
            };
        default:
            return state

    }
};

export const addTerminal = (id, nameTerminal, description) => ({
    type: ADD_TERMINAL,
    id, nameTerminal, description
});
export const removeTerminal = (idRemove) => ({
    type: REMOVE_TERMINAL,
    idRemove,
});

