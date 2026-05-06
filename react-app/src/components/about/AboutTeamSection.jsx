import React from 'react';
import team1Image from '../../assets/home/ownwer-img/avinash-shende-clear-bg.png';
import team2Image from '../../assets/home/ownwer-img/sachin-pande-clear-bg.png';
import logoImage from '../../assets/home/ownwer-img/vg-logo.png';

// Import VGIL Team Members
import alhadImg from '../../assets/home/ownwer-img/Alhad_Hardas.jpg';
import anilImg from '../../assets/home/ownwer-img/Anil_Katwale.jpg';
import bharatImg from '../../assets/home/ownwer-img/bharat-zade.jpg';
import harshjitImg from '../../assets/home/ownwer-img/harshjit-deshmukh.jpg';
import ninadImg from '../../assets/home/ownwer-img/ninad-mairal.jpg';
import nitendraImg from '../../assets/home/ownwer-img/Nitendra_Bisen.jpg';
import sachinBImg from '../../assets/home/ownwer-img/sachin_burghate.jpg';
import satishImg from '../../assets/home/ownwer-img/Satish_Kukde.jpg';

function AboutTeamSection() {
  const vgilTeam = [
    { name: 'Nitendra Bisen', role: 'Principal Service Strategist', img: nitendraImg },
    { name: 'Anil Katwale', role: 'Principal Solution Architect', img: anilImg },
    { name: 'Satish Kukde', role: 'Principal Database Architect', img: satishImg },
    { name: 'Sachin Burghate', role: 'Director - Technical (BFSI)', img: sachinBImg },
    { name: 'Ninad Mairal', role: 'Director - International Business Development', img: ninadImg },
    { name: 'Alhad Hardas', role: 'Director - Banking Domain Services', img: alhadImg },
    { name: 'Bharat Zade', role: 'Director - Operations & Digital Transformation', img: bharatImg },
    { name: 'Harshjit Deshmukh', role: 'Director - Domestic Business Development', img: harshjitImg }
  ];

  return (
    <div className="section-team flat-spacing" style={{ backgroundColor: '#000', padding: '100px 0' }}>
      <div className="container">
        {/* Founders Section */}
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Our Leadership</div>
          <div className="heading-title text-white effectFade fadeRotateX">
            The Visionaries Behind <br /> Virtual Galaxy
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-start flex-nowrap mb-120" style={{ maxWidth: '1100px', margin: '0 auto', gap: '40px' }}>
          
          {/* Left Side - Avinash Shende */}
          <div style={{ flex: '0 0 420px' }}>
            <div className="team-item effectFade fadeUp" style={{ background: '#121214', border: '1px solid #27272a', borderRadius: '32px', padding: '40px 30px', textAlign: 'center' }}>
              <div className="image" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', marginBottom: '25px' }}>
                <img src={team1Image} alt="Avinash Shende" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h5 className="name fw-semibold" style={{ color: '#fff', marginBottom: '5px' }}>Avinash Shende</h5>
              <div className="sub" style={{ color: '#ff4d00', fontWeight: '600' }}>Founder & CEO</div>
            </div>
          </div>

          {/* Center Logo */}
          <div style={{ flex: '0 0 120px', paddingTop: '150px' }} className="d-flex justify-content-center effectFade fadeUp">
            <div className="center-logo-wrap">
              <img src={logoImage} alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>

          {/* Right Side - Sachin Pande */}
          <div style={{ flex: '0 0 420px' }}>
            <div className="team-item effectFade fadeUp" style={{ background: '#121214', border: '1px solid #27272a', borderRadius: '32px', padding: '40px 30px', textAlign: 'center' }}>
              <div className="image" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden', marginBottom: '25px' }}>
                <img src={team2Image} alt="Sachin Pande" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h5 className="name fw-semibold" style={{ color: '#fff', marginBottom: '5px' }}>Sachin Pande</h5>
              <div className="sub" style={{ color: '#ff4d00', fontWeight: '600' }}>Co-Founder & CTO</div>
            </div>
          </div>
        </div>

        {/* VGIL Standalone Section */}
        <div className="vgil-standalone-section" style={{ marginTop: '160px' }}>
          <div className="heading-section center mb-80">
            <h4 className="text-white effectFade fadeUp" style={{ 
              fontSize: '36px', 
              fontWeight: '700',
              letterSpacing: '1px'
            }}>
              VGIL is not about co-founders
            </h4>
            <div style={{ width: '80px', height: '4px', background: '#ff4d00', margin: '20px auto 0', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '60px 30px', 
            maxWidth: '1300px', 
            margin: '0 auto' 
          }}>
            {vgilTeam.map((member, i) => (
              <div key={i} className="effectFade fadeUp" style={{ textAlign: 'center' }}>
                <div className="vgil-card-unique" style={{ 
                  background: '#0a0a0b', 
                  border: '1px solid #1f1f23',
                  borderRadius: '30px',
                  height: '280px', 
                  width: '280px',
                  margin: '0 auto 25px',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain', 
                      padding: '20px',
                      transition: 'all 0.6s ease'
                    }} 
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="card-overlay" style={{
                    position: 'absolute',
                    bottom: '-100%',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px',
                    transition: 'all 0.5s ease',
                    zIndex: 3
                  }}>
                    <h6 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{member.name}</h6>
                    <p style={{ color: '#ff4d00', fontSize: '13px', fontWeight: '500', lineHeight: '1.4' }}>{member.role}</p>
                  </div>
                </div>
                {/* Default Visible Name & Role */}
                <div className="member-info-static">
                  <h6 style={{ color: '#fff', fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>{member.name}</h6>
                  <p style={{ color: '#a1a1aa', fontSize: '13px', fontWeight: '500', maxWidth: '240px', margin: '0 auto' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .vgil-card-unique:hover {
            transform: translateY(-20px) rotateX(10deg);
            border-color: #ff4d00 !important;
            box-shadow: 0 40px 80px rgba(255, 77, 0, 0.15);
          }
          .vgil-card-unique:hover img {
            transform: scale(1.1) translateY(-10px);
            opacity: 0.3;
          }
          .vgil-card-unique:hover .card-overlay {
            bottom: 0;
          }
          .vgil-standalone-section .effectFade {
            animation-duration: 1s;
          }
        `}</style>

        {/* Adding global hover styles for the boxes */}
        <style>{`
          .vgil-img-box:hover {
            transform: translateY(-10px) scale(1.03);
            border-color: #ff4d00 !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          }
          .vgil-img-box:hover img {
            transform: scale(1.08);
          }
          .vgil-img-box:hover .hover-overlay {
            opacity: 1 !important;
          }
        `}</style>

      </div>
    </div>
  );
}

export default AboutTeamSection;
