import { Location } from './location';
import { Speaker } from './speaker';

export class Event {
    id: number;
    title: string;
    location: Location;
    from: string;
    to: string;
    introduction: string;
    description: string;
    speakers: Speaker[];
}
