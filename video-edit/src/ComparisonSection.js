import React, { useState } from 'react';
import './ComparisonSection.css';

const ComparisonSection = () => {
  const [isPositive, setIsPositive] = useState(false);

  const toggleState = () => {
    setIsPositive(!isPositive);
  };

  const negativeItems = [
    { icon: '👎', title: 'Generic Edits', description: 'Using basic, uninspiring edits that fail to capture the unique essence of the project.' },
    { icon: '🚫', title: 'Poor Collaboration', description: 'Teams not communicating effectively, leading to mismatches in project goals.' },
    { icon: '😕', title: 'Low Engagement', description: 'Content fails to engage the audience, resulting in low viewer retention and satisfaction.' },
    { icon: '🐌', title: 'Delayed Deliveries', description: 'Inconsistent project timelines, causing late deliveries and client dissatisfaction.' },
    { icon: '💸', title: 'Over Budget', description: 'Frequent overspending due to poor resource management and planning.' },
    { icon: '🤦', title: 'Limited Creativity', description: 'Lack of creative direction, resulting in bland and unremarkable videos.' },
    { icon: '😤', title: 'Technical Issues', description: 'Frequent technical glitches during editing that delay project completion.' }
  ];
  

  const positiveItems = [
    { icon: '🌟', title: 'Creative Storytelling', description: 'Crafting compelling narratives that resonate with audiences and enhance brand messaging.' },
    { icon: '📱', title: 'High Engagement', description: 'Producing high-engagement content that captures and retains viewer attention.' },
    { icon: '🚀', title: 'Quick Turnaround', description: 'Efficient editing processes that ensure timely delivery without compromising on quality.' },
    { icon: '👁️', title: 'Advanced Techniques', description: 'Utilizing cutting-edge video editing techniques and technology to create visually stunning videos.' },
    { icon: '💬', title: 'Excellent Communication', description: 'Maintaining open lines of communication throughout the project to ensure alignment with client visions.' },
    { icon: '💡', title: 'Innovative Solutions', description: 'Providing creative solutions and ideas to enhance video content and achieve marketing goals.' },
    { icon: '🛠️', title: 'Post-Production Support', description: 'Offering comprehensive post-production services including color grading, sound mixing, and visual effects.' }
  ];
 

  const items = isPositive ? positiveItems : negativeItems;

  
    return (
        <section className="comparison-section">
          <div className="header-container">
            <h2>
              When people<br></br>
              <span className={isPositive ? 'positive' : 'negative'}>
                {isPositive ? 'do' : "don't"}
                <button className="toggle-button" onClick={toggleState}>
                   <div className={`slider ${isPositive ? 'active' : ''}`}></div>
                </button>
              </span>
              work with us.
            </h2>
            
            <button className="cta-button">Let's build something</button>
          </div>
          <div className="items-grid">
            {items.map((item, index) => (
              <div key={index} className="item">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
};

export default ComparisonSection;