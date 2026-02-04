import React from 'react'; 

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section" style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f4f4f4' }}>
        <h1>Welcome to the Store</h1>
        <p></p>
      </section>

      <section className="intro-section" style={{ padding: '2rem' }}>
        <h2>Why Shop with Us?</h2>
        <p>
          We offer a curated selection of high-quality items designed to improve your life. 
          Enjoy fast shipping, 24/7 customer support, and a 30-day money-back guarantee.
        </p>
      </section>
    </div>
  );
}