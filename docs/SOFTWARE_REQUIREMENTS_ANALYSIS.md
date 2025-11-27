# COMP 3059 – Capstone Project I
## Software Requirements Analysis and Design

**Project:** GameBoxd – A Social Video Game Journal & Discovery Platform  
**Team:** Team Level Up  
**Date:** November 2025

---

## Table of Contents

1. [Introduction](#10-introduction)
2. [System Overview](#20-system-overview)
3. [Functional Requirements](#30-functional-requirements)
4. [Non-Functional Requirements](#40-non-functional-requirements)
5. [Logical Database Requirements](#50-logical-database-requirements)
6. [Other Requirements](#60-other-requirements)

---

## 1.0 Introduction

### 1.1 Purpose

This document specifies the software requirements for GameBoxd – A Social Video Game Journal & Discovery Platform. It defines what the system must do for its stakeholders and users, independent of implementation details, and provides a basis for analysis, design, verification, and acceptance.

### 1.2 Scope

GameBoxd is a cross-platform web and mobile application that enables gamers to log titles, rate/review games, and discover content via a social activity feed. The system integrates with third-party game databases to retrieve authoritative metadata.

**In scope:**
- Authentication and profiles
- Game logging
- Ratings/reviews
- External API integration
- Social feed (follow/like/comment)
- Basic analytics/gamification

**Out of scope (Capstone I):**
- Monetization
- Commerce
- Console/launcher integrations
- Offline tracking

**Primary objectives:**
- Provide a community-first review and discovery experience
- Enable personal journaling and backlog management
- Use trusted APIs for accurate game data
- Establish a scalable design for implementation in Capstone II

---

## 2.0 System Overview

### 2.1 Project Perspective

The system is a new, self-contained product. It reuses no prior internal systems and relies on external data providers (RAWG/IGDB) and an external auth provider (Firebase).

### 2.2 System Context

**Actors:**
- End users (players)
- Friends/community
- External game data APIs
- Authentication provider (Firebase)

**Context:** Users authenticate, search/fetch game metadata from external APIs, create logs/reviews, and interact socially. The platform persists user-generated data and renders feeds on web and mobile clients.

### 2.3 General Constraints

- Academic schedule and milestones (Capstone I–II)
- External API rate limits and terms of use
- Security and privacy requirements for user accounts and content
- Cross-platform UI conventions (responsive web, iOS/Android)
- Hosting budget (student/free tiers)

### 2.4 Assumptions and Dependencies

**Assumptions:**
- Continuous availability of RAWG/IGDB endpoints
- Reliable internet connectivity for users
- Firebase Authentication supports required auth flows

**Dependencies:**
- RAWG/IGDB APIs for game metadata
- Firebase Authentication for identity and session management
- Cloud hosting/CI for deployment and availability

---

## 3.0 Functional Requirements

### 3.1 High Level Requirements

#### 3.1.1 User Accounts & Profiles (HLR01, Priority: High)

Provide secure registration/login and basic profiles to store user identity and preferences.

**Inputs:**
- Registration data: email, password (and optional display name/avatar)
- Login credentials; profile edits (bio, avatar)

**Processing:**
- Validate credentials via Firebase Authentication
- Create/read/update user profile records in the application datastore
- Maintain session tokens and sign-out

**Outputs:**
- Authenticated session
- Persisted profile with view/edit capability

#### 3.1.2 External Game Data Integration (HLR02, Priority: High)

Fetch authoritative game metadata to ensure accurate cataloging and search.

**Inputs:**
- Search queries, game IDs, pagination parameters

**Processing:**
- Call RAWG/IGDB endpoints; handle rate limits and errors
- Normalize and cache essential fields (title, platforms, genres, release date, cover art)

**Outputs:**
- Structured game objects for UI lists, detail pages, logging flows

#### 3.1.3 Game Logging & Backlog Categories (HLR03, Priority: High)

Allow users to classify games as Playing, Completed, Wishlist, Backlog.

**Inputs:**
- User selections to add/move/remove a game in a category

**Processing:**
- Persist per-user game state; enforce one state per game per user
- Support moves between states; record timestamps

**Outputs:**
- User's personal log views filtered by category; history of changes

#### 3.1.4 Ratings & Reviews (HLR04, Priority: High)

Enable user ratings/reviews and compute community insights.

**Inputs:**
- Rating (e.g., 1–5 or 0.5 increments), review text, edits/deletions

**Processing:**
- Validate content (length, profanity filter baseline)
- Store review; update aggregated rating (e.g., average, count)
- Support edit/delete with audit trail (timestamped)

**Outputs:**
- Review feed per game; user review history; community aggregates

#### 3.1.5 Backlog Management Tools (HLR05, Priority: Medium)

Provide reminders and prioritization suggestions to help reduce backlog.

**Inputs:**
- User preferences, backlog items, optional target dates

**Processing:**
- Generate non-intrusive reminders (in-app; email optional)
- Simple prioritization (e.g., shortest length first, release recency)
- Allow snooze/disable per item

**Outputs:**
- Reminder notifications; prioritized backlog list

#### 3.1.6 Social Features (Follow, Feed, Interactions) (HLR06, Priority: Medium)

Support basic social graph and interactions to enable discovery.

**Inputs:**
- Follow/unfollow actions; like/comment on reviews or log events

**Processing:**
- Persist follow relationships; build activity feed from followed users' actions
- Record likes/comments; moderate simple abuse flags

**Outputs:**
- Personalized feed; engagement counts; comment threads

#### 3.1.7 Analytics & Gamification (HLR07, Priority: Low)

Motivate engagement via badges and personal stats.

**Inputs:**
- User activity (games completed, reviews written, streaks)

**Processing:**
- Compute stats (counts, categories played); evaluate badge rules
- Update badge inventory

**Outputs:**
- Stats dashboard; badge gallery; optional share prompts

### 3.2 Use Cases

#### 3.2.1 Register / Login

**Primary Actor:** User

**Preconditions:** App installed or web reachable; user provides valid credentials

**Main Flow:**
1. User submits email/password
2. System authenticates with Firebase and creates/returns a session
3. User lands on home/log view

**Postconditions:** Valid session; profile created if first time

**Exceptions:** Invalid password; network/API errors → show error/retry

#### 3.2.2 Search & View Game Details

**Actor:** User

**Flow:**
1. User searches a title
2. System queries RAWG/IGDB; shows results
3. User opens a game to view metadata, ratings, and reviews

**Postconditions:** None (read-only)

**Exceptions:** API timeout → fallback message/limited cached data

#### 3.2.3 Add Game to Log / Change Category

**Actor:** User

**Flow:**
1. From a game page, user selects a category (Playing/Completed/etc.)
2. System persists state and timestamp
3. Log view reflects the change immediately

**Exceptions:** Conflict/network error → revert and notify

#### 3.2.4 Write/Edit/Delete Review

**Actor:** User

**Flow:**
1. User writes a rating/review and submits
2. System validates, stores, updates aggregates
3. User may edit or delete; system updates accordingly

**Exceptions:** Validation failure → prompt correction

#### 3.2.5 Follow User & View Feed

**Actor:** User

**Flow:**
1. User follows another user
2. System adds relationship and populates feed with followed user's actions
3. User likes/comments on items

**Exceptions:** Privacy settings/abuse flags → restrict visibility

### 3.3 Data Modelling and Analysis

**Normalized Data Model:**

**Entities:**
- **User:** Stores essential user information including username, email, and profile details
- **Game:** Represents game-related metadata such as title, genre, release date, and publisher
- **Review:** Serves as a junction entity connecting User and Game, containing rating, comment, and review date
- **Favorite:** Implements a many-to-many relationship between users and games
- **Follow:** Enables social interaction, allowing one user to follow another
- **Admin:** Represents elevated privileges within the system

**Relationships:**
- User → Review (one-to-many)
- User → Game via Favorite (many-to-many)
- User → User via Follow (many-to-many, self-referencing)
- User → Admin (one-to-one)
- Game → Review (one-to-many)

**Normalization:**
- **1NF:** All columns store single values
- **2NF:** In Review, attributes depend on the full combination of user_id and game_id
- **3NF:** Non-key data like user profile info is kept separate from review details

### 3.4 Process Modelling

**Data Flow Diagrams:**
- **DFD Level 0:** Context-level data flow showing User, Admin, Database interactions
- **DFD Level 1:** Review subsystem flow with validation, persistence, and rating updates

**Activity Diagrams:**
- Review posting flow: Select game → Enter rating/comment → Validate → Save → Update aggregates

**Sequence Diagrams:**
- Review submission: User → UI → Controller → ReviewService → Database → Confirmation

**UML Class Diagram:**
- Models structural backbone with User, Game, Review, Favorite, Follow, Admin classes and their relationships

---

## 4.0 Non-Functional Requirements

### 4.1 Performance

- 95% of API-backed search requests shall return results within 1.5 seconds under normal load
- 95% of log update actions shall complete within 800 ms (server acknowledgment)
- Feed loading (first screenful) shall render within 1.2 seconds for cached items

### 4.2 Reliability & Availability

- Service uptime target ≥ 99.0% (excluding scheduled maintenance)
- Any single failure shall not corrupt persisted user data (use atomic writes/transactions where applicable)

### 4.3 Security

- Authentication via Firebase Authentication
- Passwords never stored by the application; rely on Firebase credential storage
- Enforce RBAC minimum: authenticated user vs. anonymous; users can modify only their own content
- Input validation and basic content moderation (length limits, profanity filter baseline)
- Protect API keys/secrets in server-side or secure config (never in client bundle)

### 4.4 Maintainability

- Codebase shall include automated linting and unit tests with ≥ 60% coverage for core modules by Beta (Capstone II)
- CI pipeline shall run tests and block merges on failure

### 4.5 Portability & Compatibility

- Responsive web UI (≥ 360px width) across latest Chrome/Edge/Safari/Firefox
- Mobile builds shall support Android 10+ and iOS 15+
- External APIs shall be abstracted behind a service layer to enable provider changes with ≤ 3 person-days of refactor for equivalent fields

### 4.6 Usability

- First-time user can add a game to a log in ≤ 3 clicks/taps from home
- Key tasks (search, add to log, write review) shall be discoverable without tutorial (first-time success rate ≥ 80% in informal hallway testing)

---

## 5.0 Logical Database Requirements

**Entities (logical):**
- User, Profile, Game (external ID, normalized fields)
- UserGameState (userId, gameId, category, notes, timestamps)
- Review (userId, gameId, rating, text, timestamps)
- Follow (followerId, followeeId)
- Like, Comment, Badge, UserBadge

**Keys & Integrity:**
- Primary keys per entity; foreign keys between User→Review, User→UserGameState, User→Follow, Game→(Review, UserGameState)
- Enforce one active UserGameState per (userId,gameId)

**Retention:**
- Soft-delete for reviews/comments; retain edit history timestamps

**Data Quality:**
- Normalize and cache external metadata with source, sourceId, lastSyncedAt

**Scalability:**
- Indexes on (userId,gameId) pairs; text index on game title for local search fallback

---

## 6.0 Other Requirements

**Legal/Compliance:**
- Respect API terms of service; attribute data sources where required
- Provide minimal privacy notice (what data stored and why)

---

## 7.0 Approval

**Project Leader:** Thinh Phan (TP)  
**Date:** 11/05/2025

---

*This document serves as the foundation for GameBoxd development in Capstone I and II.*

