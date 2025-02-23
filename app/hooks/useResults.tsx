import { useState } from 'react';
import { YelpSearchInfo, Business } from '../types/yelpInfo';
import yelp from '../api/yelp';

export default (): [
    (searchTerm: string, location?: string | undefined) => Promise<void>,
    Business[],
    string
] => {
    const [results, setResults] = useState<Business[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const searchApi = async (
        searchTerm: string,
        location?: string | undefined
    ) => {
        try {
            const response = await yelp.get<YelpSearchInfo>('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: location || 'grimstad'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            console.error(error);
            setErrorMessage('Something went wrong.');
        }
    };

    return [searchApi, results, errorMessage];
};
