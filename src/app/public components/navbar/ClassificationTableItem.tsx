"use client"

import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap"

interface classificationTableItemProps {
    username: string
    score: number
    modelName: number
}

export const ClassifactionTableItem = ({ username, score, modelName }: classificationTableItemProps) => {
    const router = useRouter()
    
    const handleOnClick = () => {
        router.push(`/prueba?username=${username}&algorithm=${modelName}`)
    }

    return (
        <>
            <tr>
                <td>{username}</td>
                <td>{modelName}</td>
                <td>{Math.ceil(score * 100)}%</td>
                <td>
                    <Button variant="dark" onClick={handleOnClick}> Probar este modelo</Button>
                </td>
            </tr>
        </>
    )
}