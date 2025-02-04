import { effectType, Task } from '@/shared/types'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card'

interface AddTaskProps {
    setTasks: Dispatch<SetStateAction<Task[]>>
}

export const AddTask: FC<AddTaskProps> = ({ setTasks }) => {
    const [inputValue, setInputValue] = useState('')
    const [isErrorMessage, setIsErrorMessage] = useState(false)
    const [showHint, setShowHint] = useState(false)

    const addTask = (effect: effectType) => {
        if (!inputValue) {
            setIsErrorMessage(true)
            return
        }
        setTasks((prev) => [
            ...prev,
            {
                title: inputValue,
                effect: effect,
            },
        ])
        setIsErrorMessage(false)
        setInputValue('')
    }

    return (
        <div className="flex flex-col gap-3">
            {showHint && (
                <Card className="-mt-4">
                    <CardHeader>
                        <CardTitle>Концепция 0.8 / 1.0 / 1.2</CardTitle>
                        <CardDescription>Подход, который помогает</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Если проанализировать, какие задачи человек выбирает, как он с ними справляется и как
                            относится к срокам выполнения, можно определить его личностный коэффициент. Условно, любое
                            действие можно выполнить на 100%, всего на 80% или даже на 120%. Именно по этому принципу
                            людей и вообще что угодно можно разделить на типы: 0.8, 1.0 и 1.2.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" onClick={() => setShowHint(false)}>
                            Закрыть
                        </Button>
                    </CardFooter>
                </Card>
            )}
            <div className="flex flex-row items-center gap-2">
                <h1 className="text-2xl">Эффективность</h1>
                <p className="note cursor-pointer underline" onClick={() => setShowHint((prev) => !prev)}>
                    Что это?
                </p>
            </div>
            <div className="flex flex-col gap-1">
                <Input
                    placeholder="Закрыл важную таску"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {isErrorMessage && <p className="text-red-700">Введите название задачи</p>}
            </div>
            <div className="flex flex-row gap-2">
                <Button className="p-10 text-2xl" variant="destructive" onClick={() => addTask('0.8')}>
                    0.8
                </Button>
                <Button className="p-10 text-2xl" variant="success" onClick={() => addTask('1.2')}>
                    1.2
                </Button>
                <Button className="p-10 text-2xl" variant="outline" onClick={() => addTask('1.0')}>
                    1.0
                </Button>
            </div>
        </div>
    )
}
