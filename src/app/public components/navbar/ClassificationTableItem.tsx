"use client"

import { Button } from "react-bootstrap"

interface classificationTableItemProps {
    username: string
    score: number
    modelName: number
}

export const ClassifactionTableItem = ({ username, score, modelName }: classificationTableItemProps) => {
    return (
        <>
            <tr>
                <td>{username}</td>
                <td>{modelName}</td>
                <td>{Math.fround(score) * 100}%</td>
                <td>
                    <Button variant="dark"> Probar este modelo</Button>
                </td>
            </tr>
        </>
    )
}