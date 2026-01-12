import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EventPageTemplate from '@/components/templates/EventPageTemplate';

// Mock ShinyText for consistent rendering and stable DOM querying
vi.mock('@/components/creative/ShinyText', () => ({
    default: ({ text }: { text: string }) => <div data-testid="shiny-title">{text}</div>
}));

// Mock LightRays to avoid canvas/animation complexity in JSDOM
vi.mock('@/components/creative/LightRays', () => ({
    default: () => <div data-testid="light-rays" />
}));

describe('EventPageTemplate', () => {
    const defaultProps = {
        title: 'Test Event Title',
        description: 'Test Event Description',
        topLabel: <span data-testid="top-label">Test Prize</span>,
    };

    it('renders with provided props', () => {
        render(<EventPageTemplate {...defaultProps} />);
        expect(screen.getByText('Test Event Title')).toBeInTheDocument();
        expect(screen.getByText('Test Event Description')).toBeInTheDocument();
        expect(screen.getByText('Test Prize')).toBeInTheDocument();
    });

    it('verifies Slot Ordering: TopLabel appears BEFORE Title (Architectural Contract)', () => {
        render(<EventPageTemplate {...defaultProps} />);

        const topLabel = screen.getByTestId('top-label');
        const title = screen.getByTestId('shiny-title');

        // Node.DOCUMENT_POSITION_FOLLOWING (4) means the second node (title) follows the reference node (topLabel)
        // If topLabel comes before title, then compareDocumentPosition(title) should return 4 (plus potentially other bits)
        // eslint-disable-next-line no-bitwise
        expect(topLabel.compareDocumentPosition(title) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });

    it('verifies Triptych Layout: Centered 2-up (Left Poster + Video)', () => {
        const props = {
            ...defaultProps,
            posterLeftSrc: '/left.jpg',
            videoUrl: 'https://youtube.com/watch?v=12345678901',
            // No right poster
        };
        render(<EventPageTemplate {...props} />);

        const leftPoster = screen.getByAltText('Event Poster Left');
        const videoFrame = screen.getByTitle('Event Video');

        expect(leftPoster).toBeInTheDocument();
        expect(videoFrame).toBeInTheDocument();
        expect(screen.queryByAltText('Event Poster Right')).not.toBeInTheDocument();

        // Verify centering: exact implementation detail allows generic matching or class check
        const mediaContainer = leftPoster.closest('div.flex');
        // We expect 'justify-center' to be applied when videoId is present
        expect(mediaContainer).toHaveClass('justify-center');
    });

    it('verifies Triptych Layout: Full 3-up (Left + Video + Right)', () => {
        const props = {
            ...defaultProps,
            posterLeftSrc: '/left.jpg',
            posterRightSrc: '/right.jpg',
            videoUrl: 'https://youtube.com/watch?v=12345678901',
        };
        render(<EventPageTemplate {...props} />);

        expect(screen.getByAltText('Event Poster Left')).toBeInTheDocument();
        expect(screen.getByTitle('Event Video')).toBeInTheDocument();
        expect(screen.getByAltText('Event Poster Right')).toBeInTheDocument();
    });

    it('verifies Media Embed Attributes Logic', () => {
        const props = {
            ...defaultProps,
            posterLeftSrc: '/test-poster.jpg',
            videoUrl: 'https://youtube.com/watch?v=ABCDEFGHIJK',
        };
        render(<EventPageTemplate {...props} />);

        const videoFrame = screen.getByTitle('Event Video');
        // The component extracts ID and constructs embed URL
        expect(videoFrame).toHaveAttribute('src', 'https://www.youtube.com/embed/ABCDEFGHIJK');

        const leftPoster = screen.getByAltText('Event Poster Left');
        expect(leftPoster).toHaveAttribute('src', '/test-poster.jpg');
    });
});
