let initialState = {
    buyersArr: [
        {id: 1, name: `Дмитрий`, averageCheck: 2000, totalItem: 3, total: 6000},
        {id: 2, name: `Дмитрий`, averageCheck: 22000, totalItem: 31, total: 62000},
        {id: 3, name: `Анастасия`, averageCheck: 1000, totalItem: 6, total: 4000},
        {id: 4, name: `Иван`, averageCheck: 4000, totalItem: 2, total: 5000},
        {id: 5, name: `Олег`, averageCheck: 5000, totalItem: 3, total: 6000},
        {id: 6, name: `Игорь`, averageCheck: 6000, totalItem: 5, total: 8000},
        {id: 7, name: `Николай`, averageCheck: 2000, totalItem: 7, total: 10000},
        {id: 8, name: `Фёдор`, averageCheck: 3000, totalItem: 8, total: 12000},
        {id: 9, name: `Мария`, averageCheck: 5000, totalItem: 5, total: 45000},
        {id: 10, name: `Марина`, averageCheck: 7000, totalItem: 7, total: 6000},
        {id: 11, name: `Григорий`, averageCheck: 500, totalItem: 2, total: 1000},
        {id: 12, name: `Татьяна`, averageCheck: 2200, totalItem: 7, total: 5000},
        {id: 13, name: `Дарья`, averageCheck: 21000, totalItem: 42, total: 777000},
        {id: 14, name: `Ольга`, averageCheck: 7000, totalItem: 8, total: 24000},
        {id: 15, name: `Валентина`, averageCheck: 5000, totalItem: 5, total: 16000},
    ]
};

export const buyersReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
};
