import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Portfolio from './Projects';

jest.mock('axios'); // Mock axios

describe('Portfolio Component', () => {
  it('fetches and displays projects', async () => {
    // Mock API response
    const mockProjects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description of Project 1',
        link: 'https://example.com/project1',
        image: { url: '/uploads/project1.jpg' },
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Description of Project 2',
        link: 'https://example.com/project2',
        image: { url: '/uploads/project2.jpg' },
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockProjects });

    // Render the component
    render(<Portfolio />);

    // Verify loading state or initial UI
    expect(screen.getByText(/my portfolio/i)).toBeInTheDocument();

    // Wait for projects to load
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.getByText('Description of Project 1')).toBeInTheDocument();
      expect(screen.getByText('Project 2')).toBeInTheDocument();
      expect(screen.getByText('Description of Project 2')).toBeInTheDocument();
    });

    // Verify links
    expect(screen.getByText('View Project').closest('a')).toHaveAttribute(
      'href',
      'https://example.com/project1'
    );
  });

  it('handles API errors gracefully', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<Portfolio />);

    // Ensure the portfolio title is still rendered
    expect(screen.getByText(/my portfolio/i)).toBeInTheDocument();

    // Optionally, you could add an error UI to test here if you handle errors visually.
  });
});
