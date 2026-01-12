import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import WinningProjectsGrid from '@/components/templates/WinningProjectsGrid';
import { projects } from '@/src/data/scoop-ai-winning-grid';

// Mock ShinyText to verify props
vi.mock('@/components/creative/ShinyText', () => ({
    default: (props: any) => (
        <div data-testid="shiny-text" data-props={JSON.stringify(props)}>
            {props.text}
        </div>
    ),
}));

// Mock BentoCard to ensure it renders children (though likely standard behaviour, explicit is safe)
vi.mock('@/components/creative/BentoCard', () => ({
    default: ({ children, className }: any) => <div className={className}>{children}</div>
}));

describe('WinningProjectsGrid', () => {
    it('renders the exact number of project cards defined in data (Data Integrity)', () => {
        render(<WinningProjectsGrid />);
        // Each project has exactly one ShinyText title
        const projectTitles = screen.getAllByTestId('shiny-text');
        expect(projectTitles).toHaveLength(projects.length);
    });

    it('renders the "News Letter" external card with correct target link (External Link Logic)', () => {
        render(<WinningProjectsGrid />);
        const newsLetterProject = projects.find(p => p.title === "News Letter");
        if (!newsLetterProject) throw new Error("News Letter project not found in data source");

        // The "News Letter" card is an external link.
        // We look for the text "News Letter" (rendered by our mock) and find the closest anchor tag.
        const newsLetterText = screen.getByText("News Letter");
        const link = newsLetterText.closest('a');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', newsLetterProject.link);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('applies the correct theme variants to ShinyText (Theme Application)', () => {
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

    it('grid container maintains the required 3x4 layout structure (Responsive Structure)', () => {
        const { container } = render(<WinningProjectsGrid />);
        // Look for the grid container with the specific classes
        const gridContainer = container.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
        expect(gridContainer).toBeInTheDocument();
        expect(gridContainer).toHaveClass('gap-6');
    });
});
