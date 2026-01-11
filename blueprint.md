
# UIU HealthCare Application Blueprint

## Overview

This document outlines the architecture, features, and design of the UIU HealthCare application. This application is a web-based platform for the students and doctors of United International University (UIU) to manage health services efficiently.

## Project Outline

### Core Technologies

- **Framework**: Next.js (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

### Folder Structure

- **/app**: Contains all the routes and pages.
  - **/app/api**: For API routes.
  - **/app/components**: For reusable React components.
  - **/app/lib**: For utility functions.
- **/public**: For static assets like images.

### Implemented Features

#### 1. Public-Facing Pages

- **Home (`/`)**: A welcoming landing page that provides an overview of the services offered.
- **Emergency (`/emergency`)**: Displays crucial contact information for medical emergencies.
- **Health FAQs (`/faq`)**: A page with answers to frequently asked health questions.
- **Sign In (`/signin`)**: A login portal for students and doctors.

#### 2. Student Role

- **Dashboard (`/student/dashboard`)**: A personalized space for students to view health tips.
- **Doctor's Availability (`/student/doctors`)**: A page where students can check the current availability of doctors.
- **Submit Report (`/student/report`)**: A form for students to upload and submit their medical reports or images.

#### 3. Doctor Role

- **Dashboard (`/doctor/dashboard`)**: A dashboard for doctors to view appointment requests and access student reports.
- **Manage Availability (`/doctor/availability`)**: A page for doctors to update their availability status (Available/Unavailable).

### Design and Styling

- **Theme**: Light and modern.
- **Layout**: Clean and spacious with a focus on readability.
- **Color Palette**: Primarily white background with black text. Accents of a brighter color for interactive elements.
- **Typography**: A clean, modern sans-serif font.
- **Logo**: A simple, solid black icon resembling a container or a pill bottle, placed to the left of the "UIU HealthCare" text.
- **Components**: Reusable components like Navbar and Footer are used to maintain consistency across the application.

## Current Plan: Firebase Integration

- **Firebase Configuration**: The project is configured to use Firebase services.
- **Firebase Initialization**: A `src/lib/firebase.ts` file has been created to initialize the Firebase app.

### Next Steps

1.  **Install Firebase SDK**: Install the `firebase` package using npm.
2.  **Authentication**: Implementing a secure authentication system to differentiate between Student and Doctor roles.
3.  **Database Integration**: Connecting the application to a database to store user data, reports, and doctor availability.
4.  **Dynamic Content**: Making the content dynamic, such as fetching doctor availability from the database.
5.  **Backend Logic**: Implementing the backend logic for report submission and appointment requests.
