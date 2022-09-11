import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';
import {ThemeProvider} from 'styled-components';
import theme from '../../assets/styles/theme';

test('renders header', () => {
    render(
        <ThemeProvider theme={theme}>
            <Header title="My Tasks" />
        </ThemeProvider>
    );
    const linkElement = screen.getByText(/My Test/i);
    expect(linkElement).toBeInTheDocument();
});