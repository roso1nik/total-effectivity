import { Button } from '@/ui/button'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorBoundaryPage = () => {
    const navigate = useNavigate()

    const gotoBack = useCallback(() => navigate(0), [navigate])

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-bold">Упс!</h1>
            <p className="text-3xl">Произошла ошибка, повторите попытку позднее.</p>
            <p className="text-2xl">Ничего не найдено</p>
            <Button variant="default" onClick={gotoBack}>
                Вернуться назад
            </Button>
        </div>
    )
}
