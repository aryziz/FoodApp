import { Business } from './yelpInfo';

export default interface BusinessDetails extends Business {
    photos: string[];
}
