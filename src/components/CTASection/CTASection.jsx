import React from 'react';
import styles from './CTASection.module.css';

function CTASection() {
  return (
    <section className={styles.ourReachSection}>
      <div className={styles.container}>
        <h2 className={styles.reachTitle}>Our Reach</h2>
        
        <div className={styles.reachContent}>
          <div className={styles.worldMapContainer}>
            <div className={styles.mapImageWrapper}>
              <img 
                src="https://www.notion.so/image/attachment%3Aca1f0355-6603-4b0b-b5b3-0cb00715372b%3AGWY_CONF_INDIA.png?table=block&id=2ded8cf9-6e75-8008-8cac-ca870b1f92cc&spaceId=ed3c5042-1ff5-40df-936f-6a222ed4453a&width=2000&userId=&cache=v2"
                alt="Our Reach - Global Presence Map"
                className={styles.reachMapImage}
              />
              <div className={styles.mapOverlay}></div>
              <div className={styles.mapShine}></div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className={styles.reachStats}>
            <div className={`${styles.reachStat} ${styles.statLeftTop}`}>
              <span className={`${styles.statIcon} ${styles.statIconGreen}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#4CAF50"/>
                </svg>
              </span>
              <div className={styles.statContent}>
                <span className={styles.statLabel}>Total Reach</span>
                <span className={styles.statValue}>2M+</span>
              </div>
            </div>
            
            <div className={`${styles.reachStat} ${styles.statLeftBottom}`}>
              <span className={`${styles.statIcon} ${styles.statIconYellow}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFC107"/>
                </svg>
              </span>
              <div className={styles.statContent}>
                <span className={styles.statLabel}>Community Size</span>
                <span className={styles.statValue}>40,000+</span>
              </div>
            </div>
            
            <div className={`${styles.reachStat} ${styles.statRightTop}`}>
              <span className={`${styles.statIcon} ${styles.statIconPink}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#E91E63"/>
                </svg>
              </span>
              <div className={styles.statContent}>
                <span className={styles.statLabel}>Institutions Partners</span>
                <span className={styles.statValue}>280+ global</span>
              </div>
            </div>
            
            <div className={`${styles.reachStat} ${styles.statRightBottom}`}>
              <span className={`${styles.statIcon} ${styles.statIconPurple}`}>✦</span>
              <div className={styles.statContent}>
                <span className={styles.statLabel}>Operating in</span>
                <span className={styles.statValue}>15+ countries and 20+ languages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
