export interface VideoDetail {
    author: {"username": string, "email": string},
    thumbnail: File,
    title: string,
    description: string,
    created_at: string,
    id: number,
    video_file_480p: File,
    video_file_720p: File,
    video_file_1080p: File
}
