import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import SearchBar from '../SearchBar';

jest.mock('expo-font');

describe('SearchBar', () => {
    it('renders correctly with placeholder text', async () => {
        const { getByPlaceholderText, getByTestId } = render(
            <SearchBar
                term=""
                onTermChange={() => {}}
                onTermSubmit={() => {}}
            />
        );

        await waitFor(() => {
            expect(getByPlaceholderText('Search')).toBeTruthy();
        });
        expect(getByTestId).toBeTruthy();
    });

    it('calls onTermChange when text is entered', async () => {
        const mockOnTermChange = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchBar
                term=""
                onTermChange={mockOnTermChange}
                onTermSubmit={() => {}}
            />
        );

        const input = getByPlaceholderText('Search');
        fireEvent.changeText(input, 'Pizza');

        await waitFor(() => {
            expect(mockOnTermChange).toHaveBeenCalledWith('Pizza');
        });
    });

    it('should match JSON-yfied snapshot', () => {
        const tree = render(
            <SearchBar
                term=""
                onTermChange={() => {}}
                onTermSubmit={() => {}}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
