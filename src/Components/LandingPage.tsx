import React from 'react';
import './LandingPage.css';

type LandingPageProps = {
  onGetStarted: () => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="landing-page-new">
      <div className="hero-glass-container">
        <div className="text-section">
          <h1>
            Conference Expense,<br />
            <span className="highlight">Planner</span>
          </h1>
          <p>
            Plan your next major event with us!
          </p>
          <button className="start-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>

        <div className="info-section">
          <h3>Welcome to <span className="highlight">BudgetEase</span></h3>
          <p>
              Welcome to BudgetEase Solutions your trusted partner in simplfying budget management and financial Solution. At
              BudgetEase, we understand the importance of effective budget planning  and strive to provide intuitive,user-friendly
              solution to meet the diverse need of our clients.

              with a commitment to efficiency and innovation, we empower individuals and business to take control of their finances
              and achieve their goals with ease.

              At BudgetEase Solution, our mission is to make budgeting effortless and accessible for everyone. Whatever you're a small
              business owner, a busy professional, or a individual looking to manage your personal finances, we offered  tailored  solution
               to streamline your budgeting process.
          </p>
          <p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
