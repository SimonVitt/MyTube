export interface VideoOverview {
    author: {"username": string, "email": string},
    thumbnail: File,
    title: string,
    description: string,
    created_at: string,
    id: number
}
