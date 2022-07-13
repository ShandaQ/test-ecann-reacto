import React from 'react';
import profPic from '../../assets/profPic/headshot.jpg'

function About() {
  return (
    <section className='bio'>
      <h1 id="about">About</h1>
      <img src={profPic} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
      <p>
    A young professional with a long background in the service industry, specifically restaurant 
    and beauty. 15 years experience in said industries has crafted a specialty in working directly
    with customer/client needs, and executing plans and products to guarantee satisfaction.
    With a keen sense of creativity and an artistic eye, moving into the world of web development
    brings hopes of creating aesthically pleasing websites/applications with optimal functionality.
  </p>
</section>
  );
}

export default About;