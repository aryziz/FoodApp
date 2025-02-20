import React, { useState, useEffect } from 'react';
import { YelpSearchInfo, Business } from "../types/yelpInfo";
import yelp from '../api/yelp';

export default (): [(searchTerm: string) => Promise<void>, Business[], string] => {
    const [results, setResults] = useState<Business[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const searchApi = async (searchTerm: string, location: string | null) => {
        try {
            const response = await yelp.get<YelpSearchInfo>('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: location || 'oslo'
                }
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Something went wrong.');
        }
    }

    useEffect(() => {
        const requestInterceptor = yelp.interceptors.request.use(
            (config) => {
                console.log("Request being sent:", {
                    method: config.method,
                    url: config.url,
                    baseURL: config.baseURL,
                    headers: config.headers,
                    params: config.params,
                    data: config.data
                });
                return config;
            },
            (error) => Promise.reject(error)
        );

        return () => {
            yelp.interceptors.request.eject(requestInterceptor);
        };
    }, []);

    return [searchApi, results, errorMessage];
}