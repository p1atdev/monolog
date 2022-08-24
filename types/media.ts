export interface Media {
    id: string
    url: string
    type: "image" | "video"
    alt?: string
}

export interface Image extends Media {
    type: "image"
}

export interface Video extends Media {
    type: "video"
}
