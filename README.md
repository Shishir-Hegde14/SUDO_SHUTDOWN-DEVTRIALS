# SUDO_SHUTDOWN-DEVTRAILS
Team: Sudo Shutdown


### Lastmile — an AI-Powered Parametric Income Protection for Quick-Commerce Riders

Lastmile is a mobile-first parametric insurance platform that protects quick-commerce delivery riders from income loss caused by verified external disruptions.

### Problem Statement:  
Quick-commerce delivery riders are an essential part of urban delivery ecosystem. Their earnings depend on continuous order flow, active working hours, and access to operational delivery zones. 
However, external disruptions such as heavy rain, flooding, waterlogging, severe AQI, heatwaves, dark-store shutdowns, and platform outages can sharply reduce their ability to work and earn.

These disruptions are outside the rider’s control, yet they directly impact short-term income. 
Existing insurance systems do not address this specific problem well, because they are generally designed around health, life, accident, or asset protection rather than real-time, disruption-linked income loss.

This creates a gap in protection for gig workers whose income is volatile, weekly in nature, and highly sensitive to external operating conditions.


## Persona Selection

1) What is our chosen persona?:  
Our chosen persona is quick-commerce delivery riders working with platforms like Blinkit, Zepto, and Swiggy Instamart.

2) Why did we choose this persona?:  
We chose this group because they seem like the best fit for the kind of product we want to build.
Their work is very time-sensitive and depends on constant order flow within a small delivery area.
If something goes wrong in that area, like heavy rain, flooding, bad AQI, a dark store shutting down, or even a platform issue, their earnings can drop almost immediately.
That makes this problem much easier to identify, measure, and solve through a weekly income-protection model.

3) What is the estimated user base?:  
Exact rider-only numbers are not always publicly available. But the overall scale of the quick-commerce workforce is already very large.
ET Retail reported in November 2024, citing TeamLease Services, that Blinkit, Zepto, and Swiggy Instamart were expected to collectively employ more than 4 lakh people by March 2025 as they expanded their dark store operations.
Even though this includes broader workforce numbers and not just riders, it still shows how large this ecosystem already is.

4) What is the market opportunity?:  
The market itself is growing fast, which makes this a strong long-term opportunity.
BCG reported in 2025 that rapid commerce in India could become a $20+ billion GMV opportunity by 2030, supported by a $2+ billion logistics market. Mordor Intelligence also estimates that the India quick-commerce market will grow from $3.65 billion in 2026 to $6.64 billion by 2031.
This tells us that the sector is not only growing, but also creating room for support systems and financial protection products built specifically for workers in this space.

5) What shows that this segment will keep growing?:  
There are already strong signs of rapid growth. Bain reported that quick-commerce GMV in India grew four times between 2022 and 2024. BCG also pointed out that the category is expected to grow at more than 45% annually.
That kind of expansion means more riders, more delivery density, and more dependence on this workforce, which also means stronger need for income protection solutions.

6) Why is this persona the best fit for our product?:  
For our use case, this persona makes the most sense. The rider works in a defined area, the earning loss happens quickly when disruptions occur, and the events affecting them can be tracked in a more reliable way.
That makes it easier for us to build a product that is simple to explain, practical to use, and realistic to automate. It also makes fraud checks more manageable because we can match claims against location, activity, and actual disruption events.


## Proposed Solution
![rider flowchart](https://i.ibb.co/CKCbWhbG/1.png)

## Frontend and Mobile App Flow

The product is designed as a **mobile-first app** for quick-commerce delivery riders. The frontend focuses on a simple rider journey: onboarding, policy selection, coverage visibility, claims tracking, and payout status.

We plan to build the app using **React Native with Expo and TypeScript**. This gives us a clean cross-platform mobile setup while keeping the code structured and scalable. For navigation, we plan to use **React Navigation** or **Expo Router** depending on the final screen structure. Sensitive session data such as login tokens will be stored securely using **Expo SecureStore**.

### Core App Flow

#### 1. Authentication
The entry flow handles first-time and returning users.

**Screens:**
- Splash Screen
- Welcome Screen
- Login
- OTP Verification

**Purpose:**
- allow secure rider login
- restore session for returning users

#### 2. Rider Onboarding
After login, the rider is guided through onboarding and work setup.

**Screens:**
- Personal Details
- Work Profile
- Verification / Documents
- Delivery Zone Selection

**Key data collected during onboarding:**
- full name
- phone number
- city and state
- platform used (Blinkit / Zepto / Instamart)
- vehicle type
- average working hours
- average weekly earnings
- primary delivery zone
- store / hub mapping
- optional verification details

This data helps the backend generate pricing, map the rider to an operating zone, and support claim eligibility checks.

#### 3. Quote and Plan Selection
Once onboarding is complete, the rider is shown available weekly protection plans.

**Screens:**
- Quote Generation
- Plan Selection
- Policy Confirmation

**Purpose:**
- show weekly premium
- allow plan comparison
- activate a suitable protection plan

The rider will be able to view:
- premium amount
- coverage period
- covered events
- protection value

#### 4. Main Dashboard
After policy activation, the rider enters the main dashboard.

**Screens:**
- Home Dashboard
- Coverage Summary
- Policy Details

**Purpose:**
- show active coverage
- display policy details
- provide quick access to claims, payouts, and profile information

#### 5. Claims and Payouts
This section gives visibility into the claim and payout process.

**Screens:**
- Claims Overview
- Claim Details
- Claim Status Timeline
- Wallet / Payouts
- Payout History

**Possible claim states:**
- under review
- validated
- approved
- flagged
- payout initiated
- payout completed

#### 6. Profile and Settings
This section allows the rider to review and manage account details.

**Screens:**
- Rider Profile
- Work Profile Review
- Settings
- Logout / Account Switch

### Main Navigation
After onboarding, the app will use a simple main navigation structure:

- Home
- Coverage
- Claims
- Payouts
- Profile

### Frontend Responsibility
The frontend is mainly responsible for:
- collecting rider information
- managing the user journey
- displaying quotes, policies, claims, and payouts
- maintaining session state
- sending user actions to the backend
- rendering backend-calculated results

Heavy logic such as pricing, risk scoring, fraud checks, and claim decisioning will remain on the server side.
