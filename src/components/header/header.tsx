import { HOMEPAGE } from '@/shared/router/routes'
import { Link } from 'react-router-dom'
import { ModeToggle } from '../theme/mode-toggle-theme'

export const Header = () => {
    return (
        <header className="mx-auto flex w-full flex-row items-center justify-between gap-3 border-b p-4 lg:w-3/5">
            <div className="flex flex-col gap-0">
                <Link to={HOMEPAGE}>
                    <h1 className="font-medium">Total effectivity</h1>
                </Link>
                <p className="note">
                    by <Link to="https://github.com/roso1nik">@roso1nik</Link>
                </p>
            </div>
            <ModeToggle />
        </header>
    )
}
