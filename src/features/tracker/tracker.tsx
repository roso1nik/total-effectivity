import dayjs from 'dayjs'
import { AddTask } from './components/tasks/add-task'
import { useCallback, useEffect, useState } from 'react'
import { Task } from '@/shared/types'
import { TaskComp } from './components/tasks/task'
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert'
import { Calendar } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/ui/alert-dialog'
import { Button } from '@/ui/button'

export const Tracker = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks')
        return savedTasks ? JSON.parse(savedTasks) : []
    })

    const [averageEffect, setAverageEffect] = useState(0)
    const [averageEffectStyles, setAverageEffectStyles] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))

        setAverageEffect(
            Number((tasks.reduce((sum, task) => sum + parseFloat(task.effect), 0) / tasks.length || 0).toFixed(2))
        )

        getEfficiencyStyle(averageEffect)
    }, [tasks])

    const getEfficiencyStyle = (efficiency: number) => {
        if (efficiency <= 0.9) {
            setAverageEffectStyles('text-red-500 bg-red-100')
        } else if (efficiency >= 0.9 && efficiency <= 1.19) {
            setAverageEffectStyles('text-white')
        } else {
            setAverageEffectStyles('text-green-500 bg-green-100')
        }
    }

    const deleteTasks = useCallback(() => {
        setTasks([])
    }, [])

    return (
        <div className="flex w-full flex-col gap-5 lg:gap-10">
            <Alert>
                <Calendar className="h-4 w-4" />
                <AlertTitle>
                    Сегодня {dayjs().format('DD.MM.YYYY')} (
                    {((dayjs().diff('01-01-2025', 'days') / 365) * 100).toFixed(2)}% от года или{' '}
                    {dayjs().diff('01-01-2025', 'days')} дней/-я)
                </AlertTitle>
                <AlertDescription>Больше бери - больше сделаешь</AlertDescription>
            </Alert>
            <AddTask setTasks={setTasks} />
            <div className="flex w-full flex-col gap-3 lg:flex-row">
                <div className="flex w-full flex-col gap-1 lg:w-2/4">
                    {tasks.length !== 0 ? (
                        tasks.map((el) => <TaskComp title={el.title} effect={el.effect} />)
                    ) : (
                        <p className="note">Ничего еще не добавлено</p>
                    )}
                </div>
                {tasks.length !== 0 && (
                    <div className="flex w-full flex-col gap-1 lg:w-2/4">
                        <h1 className="text-center text-2xl font-bold">Общая Эффективность</h1>
                        {tasks.length >= 2 ? (
                            <div
                                className={`flex w-full flex-row justify-center rounded-lg p-4 text-4xl font-bold ${averageEffectStyles}`}
                            >
                                {averageEffect}
                            </div>
                        ) : (
                            <p className="note text-center">Добавьте как минимум 2 элемента</p>
                        )}
                    </div>
                )}
            </div>
            {tasks.length !== 0 && (
                <AlertDialog>
                    <AlertDialogTrigger className="w-max">
                        <Button variant="destructive">Удалить всё</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Вы абсолютно уверены?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Это действие нельзя отменить, увы, а ведь было бы классно
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction onClick={deleteTasks}>Удалить</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    )
}
