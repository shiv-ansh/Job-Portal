const initialState = {
    companyList: [],
    jobList: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_COMPANY":
            return {
                ...state,
                companyList: [...state.companyList, action.payload]
            }
        case "ADD_JOB":
            return {
                ...state,
                jobList: [...state.jobList, action.payload]
            }
        default:
            return state;
    }
}


export default reducer;