import { Aside } from "./aside"

export interface Section {
    id: string
    title: string
    asides: Aside[]
    chapterId: string
}
