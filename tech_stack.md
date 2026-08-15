# MSAJCE Website Tech Stack Specification

This document details the final selected technology stack for the modern, high-performance **M.S.A.J. College of Engineering (MSAJCE)** website and admin dashboard.

---

## 1. Frontend: Next.js (React Framework)
*   **Why**: It is the industry standard for modern, search-engine-optimized (SEO) web applications.
*   **Key Strengths**:
    *   **Server-Side Rendering (SSR)**: Renders pages on the server first, ensuring lightning-fast initial load times and maximum SEO scanning compatibility.
    *   **Single Codebase**: Houses both the public website and the database admin panel in one project, simplifying deployment and server maintenance for the IT department.
    *   **Future Proof**: React is widely taught, making it easy for college IT staff or computer science students to maintain and extend in the future.

## 2. Backend & CMS: Payload CMS (Self-Hosted)
*   **Why**: It is a developer-first headless CMS that embeds natively into Next.js.
*   **Key Strengths**:
    *   **Auto-Generated Admin UI**: Gives college administrators a clean, modern interface to post news, letters, circulars, and manage media without coding.
    *   **Free & Open Source**: Zero subscription fees or licensing costs; it runs entirely on your institutional servers.
    *   **Type-Safe Database Integration**: Natively maps to our database, preventing code-level bugs when saving and reading data.

## 3. Database: PostgreSQL (Relational Database)
*   **Why**: A highly secure, enterprise-grade open-source relational database.
*   **Key Strengths**:
    *   **Data Integrity**: Perfect for storing structured college records, announcements, categories, departments, and user roles.
    *   **High Performance**: Handles heavy read and write traffic easily without degradation.
    *   **Self-Host Friendly**: Can be set up in minutes on institutional Linux/Windows servers.

## 4. Styling & Animations: Tailwind CSS + Framer Motion
*   **Why**: Ensures optimized page layouts and fluid transitions.
*   **Key Strengths**:
    *   **Tailwind CSS**: Utility-first styling that compiles down to tiny CSS file sizes, preventing layout lag.
    *   **Framer Motion / Motion One**: Hardware-accelerated animations that run on a separate browser thread to deliver smooth, Apple-style transitions without stutters.

## 5. Analytics: Umami Analytics (Self-Hosted)
*   **Why**: A lightweight, privacy-focused open-source alternative to Google Analytics.
*   **Key Strengths**:
    *   **Zero Cookie Popups Required**: Privacy-friendly, meaning we do not need annoying consent banners.
    *   **Performant**: Does not slow down the client side like heavy Google scripts do.
    *   **Dashboard Integration**: Charts can be rendered directly inside the custom Next.js admin dashboard.
