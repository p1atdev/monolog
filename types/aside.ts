export interface Aside {
    id: string
    content: {
        text?: string
        media?: {
            type: "image"
            image?: string
        }[]
    }
    createdAt: string
    updatedAt: string
}
