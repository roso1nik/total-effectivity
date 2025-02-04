export interface Task {
    title: string
    effect: effectType
}

export type effectType = '0.8' | '1.2' | '1.0'
