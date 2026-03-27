import React from "react";
import { Hero } from "./sections/Hero";
import { Navigation } from "./sections/Navigation";
import { Resume } from "./sections/Resume";
import { NextSteps } from "./sections/NextSteps";
import { Thinking } from "./sections/Thinking";
import { Daily } from "./sections/Daily";
import { Mission } from "./sections/Mission";
import { About } from "./sections/About";
import { ProfileCard } from "./sections/ProfileCard";
import { SocialLinks } from "./sections/SocialLinks";

export const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Navigation
        items={[
          { label: "Home", href: "#" },
          { label: "Resume", href: "#resume" },
          { label: "About", href: "#about" },
        ]}
      />
      <Hero title="麗娟的專案" subtitle="完整 UI 元件與 Sections" />
      <ProfileCard
        name="吳麗娟"
        title="Frontend Developer"
        description="專注於 React + Tailwind 的模組化 UI 開發"
        avatarUrl="https://via.placeholder.com/150"
      />
      <About title="關於我" description="我是一名專注於前端技術與 UI 組件開發的工程師。" />
      <Mission statement="打造完整、可維護、可擴展的 UI 元件庫。" />
      <Daily tasks={["完成 UI 元件", "測試組件", "撰寫文件"]} />
      <Thinking ideas={["新增 Chart 元件", "改善 Drawer 動畫", "補齊 Popover 功能"]} />
      <Resume
        experiences={[
          {
            company: "Tech Corp",
            role: "Frontend Engineer",
            period: "2020 - 2023",
            description: "負責 UI 元件開發與維護。",
          },
        ]}
      />
      <NextSteps steps={["完成剩餘元件", "撰寫 README.md", "部署專案"]} />
      <SocialLinks
        links={[
          { label: "GitHub", href: "https://github.com/" },
          { label: "LinkedIn", href: "https://linkedin.com/" },
        ]}
      />
    </div>
  );
};
