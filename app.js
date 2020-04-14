document.querySelector('.skills-block').addEventListener('click', logger);

function logger(e){
  if(e.target.className==="skill-btn"){
    if(e.target.name==="Front-End"){
      document.querySelector('.skill-description').innerHTML=
      `<ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Bootstrap 4</li>
      </ul>`;
    }
    else if(e.target.name==="Back-End"){
      document.querySelector('.skill-description').innerHTML=
      `<ul>
        <li>Python</li>
        <li>Django</li>
      </ul>`;
    }
    else if(e.target.name==="Databases"){
      document.querySelector('.skill-description').innerHTML=
      `<ul>
        <li>MySQL</li>
        <li>Oracle</li>
        <li>PostgreSQL</li>
        <li>SQLite</li>
        <li>MongoDB</li>
      </ul>`;
    }
    else{
      document.querySelector('.skill-description').innerHTML=
      `<ul>
        <li>Git</li>
        <li>GitHub</li>
      </ul>`;
    }
  }
  else if(e.target.className==="skill-description" || e.target.tagName==="LI"){
    console.log("Hello");
  }
  else{
    document.querySelector('.skill-description').innerHTML="";
  }
}
