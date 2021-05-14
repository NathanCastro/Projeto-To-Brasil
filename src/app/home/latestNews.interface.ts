import { News } from './news.interface';

export interface LatestNews {
    news: Array<News>
    page: number;
    status: string;
}