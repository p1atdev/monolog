import { Chapter } from "./chapter"
import { Section } from "./section"

export interface Scenario {
    id: string
    title: string
    icon: {
        type: "emoji" | "image"
        emoji?: string
        backgroundColor: string
        image?: string
    }
    chapters: Chapter[]
    sections: Section[]
}
