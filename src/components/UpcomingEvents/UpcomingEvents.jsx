import React from 'react';
import { motion } from 'framer-motion';
import styles from './UpcomingEvents.module.css';

const events = [
  {
    title: 'GWY NIGHT CAMP DELHI EDITION',
    date: 'THU, 15 MAY 2026',
    speaker: 'Sarah Martinez',
    role: 'Engineering Lead',
  },
  {
    title: 'GWY NIGHT CAMP PUNE EDITION',
    date: 'FRI, 20 MAY 2026',
    speaker: 'Alex Johnson',
    role: 'Indie Maker',
  },
  {
    title: 'GWY NIGHT CAMP BANGALORE EDITION',
    date: 'SAT, 25 MAY 2026',
    speaker: 'Priya Singh',
    role: 'VC Partner',
  },
];

function UpcomingEvents() {
  return (
    <section className={styles.upcomingEvents} id="events">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleMain}>UPCOMING</span>
            <span className={styles.titleSub}>EVENTS</span>
          </h2>
          
          <div className={styles.headerActions}>
            <button 
              className={styles.viewAllBtn}
              onClick={() => window.location.href = '/events.html'}
            >
              👁 View All Events
            </button>
          </div>
        </div>
        
        <div className={styles.eventGrid}>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={styles.eventCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDate}>{event.date}</p>
              
              <div className={styles.speakerInfo}>
                <div className={styles.speakerAvatar}>
                  <img 
                    src="/Screenshot 2026-02-11 182005.png" 
                    alt={event.speaker}
                  />
                </div>
                <div>
                  <div className={styles.speakerName}>{event.speaker}</div>
                  <div className={styles.speakerRole}>{event.role}</div>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>
        
        <div className={styles.description}>
          <p>A community-led, online night meetup where conversations happen naturally and everyone belongs.</p>
          <a 
            href="https://forms.gle/EuvvDT5iEcdyAfRM9" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.hostBtn}
          >
            Become a host →
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
