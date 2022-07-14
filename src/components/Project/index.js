import React from 'react';
import budget_tracker from '../../assets/projects/budget_tracker.gif'
import group_project_2 from '../../assets/projects/group_project_2.png'
import run_buddy from '../../assets/projects/run_buddy.jpg'
import nightin from '../../assets/projects/nightin.jpg'
import weatherdboard from '../../assets/projects/weatherdboard.jpg'

function Project() {
  return (
    <section className="projectScreenshot"> 
    <h1>Projects</h1>
        
      <img src={budget_tracker} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
      <img src={group_project_2} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
      <img src={run_buddy} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
      <img src={nightin} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
      <img src={weatherdboard} className="my-2" style={{ height: "30%", width: "30%" }} alt="cover" />
   
</section>
  );
}

export default Project;
