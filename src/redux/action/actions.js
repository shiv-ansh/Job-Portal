export const addCompany = (payload) => {
    return {
        type: "ADD_COMPANY",
        payload
    }
}

export const addJob = (item) => {
    return {
        type: "ADD_JOB",
        payload: item
    }
}