export interface GameResponse {
    results: Results[];
}

export interface Results {
    name:string,
    background_image:string;
}

export interface SingleGame {
    name: string,
    description: string,
    released: string,
    background_image: string,
    background_image_additional: string
}

export interface SearchResponse {
    results: SingleGame[]
}
