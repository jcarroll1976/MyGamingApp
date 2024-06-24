export interface GameResponse {
    results: Results[];
}

export interface Results {
    slug: string,
    name:string,
    background_image:string;
}

export interface SingleGame {
    slug: string,
    name: string,
    description: string,
    released: string,
    background_image: string,
    background_image_additional: string
    parent_platforms: {
        platform: {
            id: number,
            name: string,
            slug: string
        }
    }[]
}

export interface Platform {
    
}

export interface SinglePlatform {
    id: number;
    name: string
}

export interface SearchResponse {
    results: SingleGame[]
}

export interface ReleaseResponse {
    results: Game[]
}

export interface Game {
    id: number,
    name: string
    background_image: string
    slug: string
}