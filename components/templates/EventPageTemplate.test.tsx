import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EventPageTemplate from '@/components/templates/EventPageTemplate';

describe('EventPageTemplate', () => {
    it('renders with provided props', () => {
        const props = {
            title: 'Test Event Title',
            description: 'Test Event Description',
            topLabel: <span>Test Prize</span>,
        };

        render(<EventPageTemplate {...props} />);

        // Verify Title using a more precise query if possible, or by role
        // Since ShinyText renders the title, we look for the text content
        expect(screen.getByText('Test Event Title')).toBeInTheDocument();

        // Verify Description
        expect(screen.getByText('Test Event Description')).toBeInTheDocument();

        // Verify Top Label
        expect(screen.getByText('Test Prize')).toBeInTheDocument();
    });
});
