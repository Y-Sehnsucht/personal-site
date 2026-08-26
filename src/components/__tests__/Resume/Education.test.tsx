import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Education from '../../Resume/Education';
import Degree from '../../Resume/Education/Degree';

const mockDegrees = [
  {
    school: 'East China Normal University',
    degree: 'M.S. Computer Science',
    link: 'https://www.ecnu.edu.cn/',
    year: 2020,
  },
  {
    school: 'Shanghai Jiao Tong University',
    degree: 'B.S. Computer Science',
    link: 'https://www.sjtu.edu.cn/',
    year: 2016,
  },
];

describe('Education', () => {
  it('renders the education section with title', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();
  });

  it('renders all degrees', () => {
    render(<Education data={mockDegrees} />);

    expect(screen.getByText('M.S. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('B.S. Computer Science')).toBeInTheDocument();
  });

  it('renders school links', () => {
    render(<Education data={mockDegrees} />);

    const ecnuLink = screen.getByRole('link', {
      name: /east china normal university/i,
    });
    expect(ecnuLink).toHaveAttribute('href', 'https://www.ecnu.edu.cn/');

    const sjtuLink = screen.getByRole('link', {
      name: /shanghai jiao tong university/i,
    });
    expect(sjtuLink).toHaveAttribute('href', 'https://www.sjtu.edu.cn/');
  });
});

describe('Degree', () => {
  const mockDegree = {
    school: 'East China Normal University',
    degree: 'M.S. Computer Science',
    link: 'https://www.ecnu.edu.cn/',
    year: 2020,
  };

  it('renders degree title', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'M.S. Computer Science',
    );
  });

  it('renders school name with link', () => {
    render(<Degree data={mockDegree} />);

    const link = screen.getByRole('link', {
      name: /east china normal university/i,
    });
    expect(link).toHaveAttribute('href', 'https://www.ecnu.edu.cn/');
  });

  it('displays year', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByText(/2020/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Degree data={mockDegree} />);

    const article = document.querySelector('article.degree-container');
    expect(article).toBeInTheDocument();
  });
});
