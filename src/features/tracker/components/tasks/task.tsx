import { Task } from '@/shared/types'
import { FC } from 'react'

export const TaskComp: FC<Task> = ({ title, effect }) => {
    const getEffectStyle = (effect: string) => {
        switch (effect) {
            case '0.8':
                return 'bg-destructive text-destructive-foreground shadow-sm'
            case '1.0':
                return 'border border-input bg-background shadow-sm'
            case '1.2':
                return 'bg-green-700/90 text-destructive-foreground shadow-sm'
            default:
                return 'text-gray-500 bg-gray-100'
        }
    }

    return (
        <div className="bg-secondary flex w-full flex-row justify-between rounded-md border p-2">
            <h1 className="text-bold text-lg">{title}</h1>
            <p className={`rounded-md px-3 py-1 ${getEffectStyle(effect)}`}>{effect}</p>
        </div>
    )
}
