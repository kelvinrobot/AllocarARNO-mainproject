# Allocarno

Allocarno is an AI-powered scheduling system designed to bring order and transparency to Nigeria’s chaotic university timetables — built on Cardano using Aiken and Lucid.

##  Problem

University students often face:
- Clashing lecture schedules
- Sudden unannounced timetable edits
- Overloaded weeks and wasted days
- Zero visibility or trust in what’s final

These problems delay graduations, cause resits, and create needless stress in already broken systems.

##  Solution

Allocarno combines AI-powered timetable generation with Cardano smart contracts to deliver:
- Balanced, clash-free schedules
- Immutable, verifiable proof of what was officially released
- Public visibility with private flexibility
- Transparent change logs — no more hidden edits

Once a schedule is finalized, it is hashed and minted on-chain via a smart contract. Institutions and students can always verify the original — even if someone tries to change it later.

##  Features

-  AI model for intelligent schedule creation
-  Aiken smart contract to mint & store timetable hashes
-  Lucid off-chain logic to interact with Cardano from TypeScript
-  User roles for admin, student (read-only)
-  Simple frontend UI (WIP)

##  Tech Stack

| Component     | Technology        |
|---------------|-------------------|
| AI Scheduling | Python (Reinforcement Learning) |
| Smart Contracts | Aiken (Cardano) |
| Off-Chain Logic | Lucid (TypeScript) |
| Backend       | FastAPI / Node.js |
| Database      | PostgreSQL |
| Frontend      | React.js          |
| Wallet        | Nami or Eternl (Testnet) |

##  How It Works

1. Admin submits course data to backend
2. AI model generates a clash-free schedule
3. Schedule is hashed
4. Lucid script sends hash to Aiken smart contract
5. Hash is stored on Cardano testnet for verification

> 🛠 If a schedule changes, the new version is also hashed and recorded. No old version is ever overwritten.

##  Project Progress

| Component         | Status     |
|------------------|------------|
| AI Scheduling     |   Ready (hash output) |
| Backend API       | In Progress |
| Lucid Integration | In Progress |
| Aiken Contract    |  Written, testing ongoing |
| Frontend UI       |   Basic components built |
| Documentation     |  You're reading it |

## Team

- Project Manager & Founder: [Your Name]
- AI Engineer: [Name]
- Backend Developer: [Name]
- Product Designer: [Name]

## 💭 What’s Next?

- Finalize off-chain logic (Lucid)
- Link smart contract to backend
- Finish frontend demo UI
- Record full demo
- Prepare post-hackathon launch
