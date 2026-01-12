import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import WinningProjectsGrid from '@/components/templates/WinningProjectsGrid';
import { projects, THEMES } from '@/src/data/scoop-ai-winning-grid';

// Mock ShinyText to verify props
vi.mock('@/components/creative/ShinyText', () => ({
    default: (props: any) => (
        <div data-testid="shiny-text" data-props={JSON.stringify(props)}>
            {props.text}
        </div>
    ),
}));

// Mock BentoCard to ensure it renders children AND allows verifying props like glowColor
vi.mock('@/components/creative/BentoCard', () => ({
    // We render a div with a data-attribute for the glowColor so we can assert on it
    default: ({ children, className, glowColor }: any) => (
        <div
            data-testid="bento-card"
            className={className}
            data-glow-color={glowColor}
        >
            {children}
        </div>
    )
}));

describe('WinningProjectsGrid', () => {
    it('verifies Grid Structure & Gap Consistency', () => {
        const { container } = render(<WinningProjectsGrid />);
        // Look for the grid container with the specific classes
        // Note: The class list order in the component must match or use a more robust class check (using toHaveClass multiple times)
        // Here we query by the specific expected structure.
        const gridContainer = container.querySelector('.grid');

        expect(gridContainer).toBeInTheDocument();
        expect(gridContainer).toHaveClass('grid-cols-1');
        expect(gridContainer).toHaveClass('md:grid-cols-2');
        expect(gridContainer).toHaveClass('lg:grid-cols-3');
        expect(gridContainer).toHaveClass('gap-6');
    });

    it('verifies Data Integrity', () => {
        render(<WinningProjectsGrid />);
        // Each project has exactly one ShinyText title
        const projectTitles = screen.getAllByTestId('shiny-text');
        expect(projectTitles).toHaveLength(projects.length);
    });

    it('verifies Theme-to-Prop Mapping (Style Contract)', () => {
        render(<WinningProjectsGrid />);
        const shinyTextElements = screen.getAllByTestId('shiny-text');

        projects.forEach((project, index) => {
            const element = shinyTextElements[index];
            const props = JSON.parse(element.getAttribute('data-props') || '{}');

            expect(props.text).toBe(project.title);
            expect(props.speed).toBe(project.theme.speed);
            expect(props.spread).toBe(project.theme.spread);
            expect(props.shineColor).toBe(project.theme.color);
        });
    });

    it('verifies External Card Identity (News Letter Logic)', () => {
        render(<WinningProjectsGrid />);

        // Find the "News Letter" project in data to get expected values
        const newsLetterData = projects.find(p => p.title === "News Letter");
        if (!newsLetterData) throw new Error("News Letter project not found in data source");

        // 1. Verify Link Structure
        const newsLetterText = screen.getByText("News Letter");
        const link = newsLetterText.closest('a');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', newsLetterData.link);
        expect(link).toHaveAttribute('target', '_blank');

        // 2. Verify Visual Identity (Glow Color)
        // Climb up to the mocked BentoCard
        const card = newsLetterText.closest('[data-testid="bento-card"]');
        expect(card).toBeInTheDocument();
        // The News Letter uses THEMES.BLUE
        expect(card).toHaveAttribute('data-glow-color', THEMES.BLUE.color);
    });
});
