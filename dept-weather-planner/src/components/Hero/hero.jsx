"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [collapsed, setCollapsed] = useState(false);
  const moreId = "hero-more";

  return (
    <header className="hero">
      <Image
        className="dept__logo"
        src="https://dept-frontend-case.deptagency.com/logo/dept.svg"
        alt="Dept logo"
        width={96}
        height={32}
        priority
      />

      <h1 className="hero__title">
        DEPT® weather
        <br />
        planner
      </h1>

      <p className="hero__text">
        Picture this: an application that doesnt just tell you the weather,
        but also helps you plan your activities around it. Imagine knowing exactly
        the perfect day to plan that hike, or when to avoid the outdoor concert due
        to an unexpected shower. Thats exactly what the Dept Weather Planner
        offers you.
      </p>

      <div
        id={moreId}
        className={`hero__more ${collapsed ? "is-collapsed" : ""}`}
        role="region"
      >
        <p className="hero__text">
          Built with cutting-edge technologies, our weather planner brings you
          accurate, real-time weather data with a slick and user-friendly interface.
          But its not just a weather app; its an intuitive daily planner
          that syncs with the weather. With a range of activities to choose from,
          it suggests the best options based on current and forecasted weather
          conditions.
        </p>
      </div>

      <button
  className="hero__toggle"
  type="button"
  onClick={() => setCollapsed(!collapsed)}
>
  {collapsed ? "Read more" : "Read less"}
</button>

    </header>
  );
}
