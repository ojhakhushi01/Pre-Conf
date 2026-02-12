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
              <span className={`${styles.statIcon} ${styles.statIconGreen}`}>✦</span>
              <div className={styles.statContent}>
                <span className={styles.statLabel}>Total Reach</span>
                <span className={styles.statValue}>2M+</span>
              </div>
            </div>
            
            <div className={`${styles.reachStat} ${styles.statLeftBottom}`}>
              <span className={`${styles.statIcon} ${styles.statIconYellow}`}>✦</span>
              <div className={styles.statContent}>
                <span className={styles.statLabel}>Community Size</span>
                <span className={styles.statValue}>40,000+</span>
              </div>
            </div>
            
            <div className={`${styles.reachStat} ${styles.statRightTop}`}>
              <span className={`${styles.statIcon} ${styles.statIconPink}`}>✦</span>
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
