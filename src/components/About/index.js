import React from 'react';
import profPic from '../../assets/profPic/headshot.jpg'

function About() {
  return (
    <section>
      <h1 id="about">Erika Cannon</h1>
      <img src={profPic} className="my-2" style={{ width: "50%" }} alt="cover" />
</section>
  );
}

export default About;