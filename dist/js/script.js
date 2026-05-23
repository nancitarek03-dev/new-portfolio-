const mobileBtn = document.querySelector("#mobile-btn")
const mobileMenu = document.querySelector("#mobile-menu")

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

})


 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});






function displaySkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  if (!skillsContainer) return;
  
  skillsContainer.innerHTML = "";
  
  
  const frontendSkills = ["HTML", "CSS", "Tailwind CSS", "Basic JavaScript"];
  const coreSkills = ["Responsive Design", "UI Development", "Clean Layouts"];
  const courses = ["CS50", "HTML & CSS", "Tailwind CSS", "JavaScript Basics"];
  
  const skillsHtml = `

    <div class="flex flex-col lg:flex-row items-center justify-center gap-12">
        <img src="./imags/undraw_online-stats_d57c (2).png" class="md:w-1/2" alt="skills illustration">


    <div class="space-y-6 drop-shadow-lg">
      <div class="bg-slate-800 text-slate-50 p-[1rem] text-xl rounded-[1rem] max-w-[21rem] h-auto min-h-[9rem] text-left">
        <h3 class="font-bold mb-2">Frontend</h3>
        <div class="flex flex-wrap text-2xl gap-2">
          ${frontendSkills.map(skill => `<span class="bg-slate-400 text-slate-50 px-3 py-2 rounded-full text-sm hover:bg-slate-900 transition">${skill}</span>`).join('')}
        </div>
      </div>
      <div class="bg-slate-800 text-slate-50 p-[1rem] rounded-[1rem] max-w-[21rem] h-auto min-h-[9rem] text-left">
        <h3 class="font-bold text-2xl mb-2">Core Skills</h3>
        <div class="flex flex-wrap gap-2">
          ${coreSkills.map(skill => `<span class="bg-slate-400 text-slate-50 px-3 py-2 rounded-full text-sm hover:bg-slate-900 transition">${skill}</span>`).join('')}
        </div>
      </div>
      <div class="bg-slate-800 text-slate-50 p-[1rem] rounded-[1rem] max-w-[21rem] h-auto min-h-[9rem] text-left">
        <h3 class="font-bold text-2xl mb-2">Courses</h3>
        <div class="flex flex-wrap gap-2">
          ${courses.map(course => `<span class="bg-slate-400 text-slate-50 px-3 py-2 rounded-full text-sm hover:bg-slate-900 transition">${course}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  
  skillsContainer.innerHTML = skillsHtml;
}


function addProject(title, description, imagesArray, technologies) {
  const newProject = {
    id: projectsArray.length + 1,
    title: title,
    description: description,
    images: imagesArray,
    technologies: technologies
  };
  
  projectsArray.push(newProject);
  displayProjects();
  
}



let projectsArray = [
  {
    id: 1,
    title: "Skincare Landing Page",
    description: "Complete skincare website including hero, product and about sections with clean modern UI",
    images: ["./imags/2026.png", "./imags/Sc22png.png", "./imags/Scr99.png"],
    technologies: ["HTML", "CSS"]
  }
 //add any new project
];


function displayProjects() {
  const projectsContainer = document.getElementById("projectsContainer");
  if (!projectsContainer) return;
  
  projectsContainer.innerHTML = "";
  
  projectsArray.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-card w-full md:w-[50%] lg:w-[40%] bg-slate-800 rounded-[2rem] overflow-hidden ml-0 mr-auto shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-8";
    

    const imagesDiv = document.createElement("div");
    imagesDiv.className = "images flex gap-1 mt-2 overflow-hidden";
    
    let imagesHtml = "";
    project.images.forEach(img => {
      imagesHtml += `<img src="${img}" class="w-1/2 md:w-1/2 h-52 object-cover transition-all duration-200 hover:w-full hover:scale-110 hover:z-10" alt="project image">`;
    });
    imagesDiv.innerHTML = imagesHtml;
    
   
    const textDiv = document.createElement("div");
    textDiv.className = "p-5 text-left";
    textDiv.innerHTML = `
      <h3 class="text-slate-50 text-2xl font-bold mb-2">
        ${project.title}
      </h3>
      <p class="text-slate-50 text-lg leading-7 mb-4">
        ${project.description}
      </p>
      <div class="flex gap-3 flex-wrap">
        ${project.technologies.map(tech => `
          <span class="px-4 py-2 rounded-full bg-slate-400 text-slate-50 text-lg transition hover:bg-slate-900 duration-300 hover:scale-125">
            ${tech}
          </span>
        `).join('')}
      </div>
    `;
    
    projectDiv.appendChild(imagesDiv);
    projectDiv.appendChild(textDiv);
    projectsContainer.appendChild(projectDiv);
  });
}



document.addEventListener("DOMContentLoaded", function() {
  displayProjects();
  displaySkills();
});







