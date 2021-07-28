export interface Article {
    id: number;
    title: string;
    image: any;
    caption: string;
    date: Date;
    content: string;
    type: string;
    oldImage?: string;
}