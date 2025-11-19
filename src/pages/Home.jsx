import React from 'react';
import { Play, Calendar, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* HERO SECTION */}
      <section style={{ 
        minHeight: '90vh', display: 'flex', alignItems: 'center', 
        position: 'relative', overflow: 'hidden', padding: '40px 0' 
      }}>
        
        {/* Background Decorative Lotus (CSS Circle for now) */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, var(--blush-nude) 0%, rgba(255,255,255,0) 70%)',
          opacity: 0.6, zIndex: -1
        }}></div>

        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Text Content */}
          <div style={{ flex: '1 1 500px', zIndex: 2 }}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1.1', marginBottom: '20px' }}>
              <span style={{ display: 'block', fontStyle: 'italic', fontWeight: '400', color: 'var(--deep-burgundy)', fontSize: '0.6em' }}>
                Move, Heal & Transform
              </span>
              With Abhyaas<br />Yoga Studio
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#555', maxWidth: '500px' }}>
              Based in science, rooted in tradition. Join us for offline classes, online programs, and corporate wellness.
            </p>
            
            {/* Petal Navigation Row */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Link to="/schedule" className="petal-card" style={{ textDecoration: 'none', color: 'var(--primary-maroon)' }}>
                <Calendar size={32} style={{marginBottom: '10px'}} />
                <h3>Studio Classes</h3>
              </Link>
              <Link to="/online" className="petal-card" style={{ textDecoration: 'none', color: 'var(--primary-maroon)' }}>
                <Play size={32} style={{marginBottom: '10px'}} />
                <h3>Online Video</h3>
              </Link>
              <Link to="/corporate" className="petal-card" style={{ textDecoration: 'none', color: 'var(--primary-maroon)' }}>
                <Building size={32} style={{marginBottom: '10px'}} />
                <h3>Corporate</h3>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
             {/* REPLACE SRC WITH YOUR ACTUAL IMAGE PATH */}
            <img 
              src="https://placehold.co/400x600/E8A7B4/7A2030?text=Your+Yoga+Photo" 
              alt="Yoga Pose" 
              className="float-anim"
              style={{ 
                borderRadius: '200px 200px 0 0', /* Arch Shape */
                width: '100%', maxWidth: '400px', boxShadow: 'var(--shadow-soft)' 
              }} 
            />
          </div>
        </div>
      </section>

      {/* BRIEF ABOUT STRIP */}
      <section style={{ background: 'white', padding: '60px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center' }}>
          {[
            { title: "9 Years", desc: "Experience" },
            { title: "BSc Yoga", desc: "Scientific Approach" },
            { title: "Mindful", desc: "Bharatnatyam Roots" }
          ].map((item, idx) => (
             <div key={idx}>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>{item.title}</h2>
               <p style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>{item.desc}</p>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;