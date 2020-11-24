import { Image } from './image';

export class Speaker {
    id: number;
    name: string;
    title: string;
    company: string;
    events: Event[];
    description: string;
    image_urls: Image;
}
