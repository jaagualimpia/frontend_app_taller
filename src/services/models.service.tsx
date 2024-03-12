import axios from "axios"

export const postRandomForestClassifierInfo = async (username: string, maxDepth: number, criterion: string) => {
    
    const response = axios.post(`${process.env["NEXT_PUBLIC_API_URL"]}/random_forest_classifier`, {
        username: username,
        max_depth: maxDepth,
        criterion: criterion
    })

    return response
}

export const postAdaBoostClassifierInfo = async (username: string, learningRate: number, nEstimators: number) => {
    const response = axios.post(`${process.env["NEXT_PUBLIC_API_URL"]}/ada_boost_classifier`, {
        username: username,
        learning_rate: learningRate,
        n_estimators: nEstimators
    })

    return response
}

export const postDecisionTreeClassifierInfo = async (username: string, maxDepth: number, criterion: string) => {
    const response = axios.post(`${process.env["NEXT_PUBLIC_API_URL"]}/decision_tree_classifier`, {
        username: username,
        max_depth: maxDepth,
        criterion: criterion
    })

    return response
}

export const postXGBoostClassifierInfo = async (
    username: string,
    loss: string = "gini", 
    nEstimators: number, 
    learningRate: number
    ) => {

    const response = axios.post(`${process.env["NEXT_PUBLIC_API_URL"]}/gradient_boost_classifier`, {
        username: username,
        loss: loss,
        n_estimators: nEstimators,
        learning_rate: learningRate
    })

    return response
}