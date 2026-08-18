/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ProjectCaseStudy } from './data/portfolioData';
import { cyberAudio } from './utils/soundEngine';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Monitor scroll for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'experience', 'skills', 'certifications', 'github', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop subtle mouse glow follower
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    const targetMap: Record<string, string> = {
      hero: 'hero',
      about: 'about',
      work: 'work',
      projects: 'work',
      experience: 'experience',
      skills: 'skills',
      certifications: 'certifications',
      github: 'github',
      contact: 'contact',
    };

    const targetId = targetMap[sectionId] || sectionId;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleToggleMute = useCallback(() => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    cyberAudio.setMuted(nextMuted);
    if (!nextMuted) {
      cyberAudio.playKeyClick();
    }
  }, [isMuted]);

  return (
    <div className="relative min-h-screen bg-[#0B0A0A] text-[#120D0E] selection:bg-[#6E2634] selection:text-white font-body overflow-x-hidden">
      
      {/* Subtle Desktop Mouse Radial Glow Layer */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(214,180,122,0.06)_0%,rgba(110,38,52,0.03)_40%,transparent_70%)] pointer-events-none z-50 transition-transform duration-75 ease-out will-change-transform"
      />

      {/* 1. Global Floating Luxury Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* 2. Main Sections matching the master design sheet */}
      <main className="w-full">
        
        {/* Section 1: Hero Section (Dark Luxury Cinematic) */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Section 2: About Me Section (Light Editorial + Deep Wine 4-Pillars + Journey) */}
        <AboutSection />

        {/* Section 3: Skills / Toolkit (Light Editorial + Interactive Radar Constellation) */}
        <SkillsSection />

        {/* Section 4: Selected Work (Light Editorial + Curved Dark Showcase) */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* Section 5: Experience (Light Editorial + Arched Architectural Frame) */}
        <ExperienceSection />

        {/* Section 6: Certifications (Light Editorial + Verified Gold Badge Cards) */}
        <CertificationsSection />

        {/* Section 7: Code. Build. Ship. (Light Editorial + Open Source Repositories) */}
        <GitHubSection />

        {/* Section 8: Let's Build What's Next + Master Luxury Wine Footer */}
        <ContactSection onNavigate={handleNavigate} />

      </main>

      {/* 3. Detailed Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
