import { ClassificationResultDto } from "@/dtos/classificationResults.dto"
import axios from "axios"

export const getClassificationOrderedByScore = async () => {
    const response = await axios(`${process.env["NEXT_PUBLIC_API_URL"]}/classification_results`)
    const data = response.data

    return (data.map((element: {[key: string]: any}) => {
        return ClassificationResultDto.create(element)
    }))

}