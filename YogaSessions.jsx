import React from "react";

const YogaSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP YOGA SESSION</h1>
        <p>
        Find Your Flow: Explore our diverse yoga sessions, designed for all levels. 
        From gentle stretches to invigorating flows, discover the perfect practice for your body and mind.
        </p>
        <img src="/img1.jpg" alt="yoga" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Deepen your practice with our focused yoga intensives. 
        These sessions offer concentrated periods of practice, 
        allowing you to rapidly advance your skills and explore specific styles 
        </p>
        <div className="bootcamps">
          <div>
            <h4>Yoga Nidra: Journey to Inner Peace</h4>
            <p>
            Experience the profound relaxation of Yoga Nidra. This guided meditation takes you on a journey through the layers of consciousness,
            leading to deep rest and rejuvenation. Release stress, improve sleep, and cultivate inner peace. 
            </p>
          </div>
          <div>
            <h4>Hatha Yoga: Foundational Flow</h4>
            <p>
            Explore the roots of yoga with our Hatha sessions. We focus on fundamental poses, breathwork, and alignment, creating a strong foundation for your practice. 
            Perfect for beginners and those seeking a mindful, slower-paced class.
            </p>
          </div>
          <div>
            <h4>Vinyasa Flow: Energize Your Practice</h4>
            <p>
            Experience the dynamic flow of Vinyasa Yoga. We seamlessly link breath and movement, creating a fluid and invigorating practice.
            Build strength, flexibility, and stamina while finding your inner rhythm.
            </p>
          </div>
          <div>
            <h4>Restorative Yoga: Find Tranquility</h4>
            <p>
            Unwind and release tension with our Restorative Yoga sessions. We use props to support the body in gentle poses, allowing for deep relaxation and stress relief.
            Perfect for all levels, especially those seeking a calming experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSessions;
