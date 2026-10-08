import { render, screen, waitFor } from '@testing-library/react';
import type { ReactElement } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResearchProfile from '@/components/Resume/ResearchProfile';
import ResumeHeader from '@/components/Resume/ResumeHeader';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { LanguageProvider } from '@/i18n/LanguageProvider';

function renderChinese(ui: ReactElement) {
  window.localStorage.setItem('site-language', 'zh-CN');
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}

describe('Resume Chinese localization', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('localizes the page header and section navigation', async () => {
    renderChinese(
      <>
        <ResumeHeader />
        <ResumeNav />
      </>,
    );

    expect(
      await screen.findByRole('heading', { name: '颜子竣' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: '学术简历目录' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '代表性项目' })).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(screen.getByRole('link', { name: '教育经历' })).toHaveAttribute(
      'href',
      '#education',
    );
    expect(screen.getByRole('link', { name: '科研方向' })).toHaveAttribute(
      'href',
      '#research',
    );
  });

  it('localizes representative resume sections, entries, and dates', async () => {
    renderChinese(
      <>
        <ResearchProfile />
        <Experience data={work} />
        <Education data={degrees} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
      </>,
    );

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: '代表性项目' }),
      ).toBeInTheDocument();
    });

    expect(screen.getByText('智能电梯协同建模与仿真')).toBeInTheDocument();
    expect(screen.getByText('软件工程与开发工具')).toBeInTheDocument();
    expect(screen.getByText('AI 辅助软件工程')).toBeInTheDocument();
    expect(screen.getByText('算法与可靠系统')).toBeInTheDocument();
    expect(screen.getByText('可投入时间')).toBeInTheDocument();
    expect(screen.queryByText('当前准备')).not.toBeInTheDocument();
    expect(screen.getByText('华东师范大学')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '全部' })).toBeInTheDocument();
    expect(screen.getAllByText('编程语言')).toHaveLength(2);
    expect(
      screen.getByText(/数据结构与算法 · 4.0\/4.0 98\/100/),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/2026年7月/).length).toBeGreaterThan(0);
  });
});
