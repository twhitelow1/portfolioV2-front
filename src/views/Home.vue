<template>
  <div class="home">
    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
    <div class="container">
      <div class="profile-teaser media flex-column flex-lg-row">
        
        <div class="media-body">
          <h2 class="name font-weight-bold mb-1" v-animate-on-scroll="{ animation: 'bounceInDown', speed: '1s' }">{{myInfo.data.attributes.FirstName + ' ' + myInfo.data.attributes.LastName}}</h2>
          <div class="tagline mb-3" v-animate-on-scroll="{ animation: 'fadeIn', speed: '4s' }">{{ myInfo.data.attributes.position }}</div>
          <div class="bio mb-4" v-animate-on-scroll="{ animation: 'fadeIn', speed: '4s' }">{{ myInfo.data.attributes.ElevatorPitch }}. Want to know how I may help your project? Check out my project <a class="link-on-bg" href="/projects">portfolio</a> and <a class="link-on-bg" href="/resumes/1">online resume</a>.
          </div><!--//bio-->
          <div class="mb-4">
            <a class="btn btn-primary mr-2 mb-3" href="/projects" v-animate-on-scroll="{ animation: 'fadeIn', speed: '4s' }"><i class="fas fa-arrow-alt-circle-right mr-2"></i><span class="d-none d-md-inline">View</span> Portfolio</a>
            <a class="btn btn-secondary mb-3" href="/resumes/1" v-animate-on-scroll="{ animation: 'fadeIn', speed: '4s' }"><i class="fas fa-file-alt mr-2"></i><span class="d-none d-md-inline">View</span> Resume</a>
          </div>
        </div><!--//media-body-->
        <img class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" v-bind:src="$apiHostname + myInfo.data.attributes.headshot2.data.attributes.url" alt="Todd Whitelow's Headshot
        ">
      </div>
    </div>
  </section><!--//about-me-section-->
  <section class="overview-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">My Current Certifications</h2>
      <div class="row">
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><img style="max-width:100px; max-height:100px;" src="/assets/certs/comptia-a-ce-certification.1.png"/></div>
            <h3 class="item-title">CompTIA A+</h3>
            <div class="item-desc">This certifies my expertise in mobile devices, networking technology, hardware, virtualization, cloud computing, network troubleshootin, installing and configuring operating systems, expanded security, software troubleshooting and operational procedures</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><img style="max-width:100px; max-height:100px;" src="/assets/certs/actualize-logo.png" /></div>
            <h3 class="item-title"> Actualize Bootcamp Software Engineering</h3>
            <div class="item-desc">Attending this bootcamp I learned how to think like a software engineer. I used ruby on rails and VueJS to create full stack applications. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon" ><img style="max-width:100px; max-height:100px;" src="/assets/certs/google-it-support-certificate-2023.png" /></div>
            <h3 class="item-title">Google IT Support Professional Certificate</h3>
            <div class="item-desc">Gained a solid foundation in various skills and knowledge areas within the IT support field. Here are some of the skills I gained:
Troubleshooting and problem-solving,Networking, Operating systems, System administration, IT security and privacy,Customer service, IT automation, Hardware and software troubleshooting,  </div>
          </div><!--//item-inner-->
        </div><!--//item-->
      </div><!--//row-->

    </div><!--//container-->
  </section>
  
  <section class="overview-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">What I do</h2>
      <div class="section-intro mb-5">I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a href="/resumes/1">online resume</a> and <a href="/projects">project portfolio</a>.</div>
      <div class="row">
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-js-square"></i></div>
            <h3 class="item-title">Vanilla JavaScript</h3>
            <div class="item-desc"> I wield the power of Vanilla JavaScript to craft interactive and dynamic website components, breathing life into web applications.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-react mr-2"></i><i class="fab fa-vuejs"></i></div>
            <h3 class="item-title"> React &amp;  Vue</h3>
            <div class="item-desc">I harness the capabilities of React and Vue, two powerful JavaScript frameworks that empower me to build robust and scalable web applications using a component-based approach.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-node-js"></i></div>
            <h3 class="item-title">Node.js</h3>
            <div class="item-desc">Leveraging the power of Node.js, I develop efficient and scalable server-side applications, unlocking the ability to handle large volumes of network requests and deliver optimal performance. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-python"></i></div>
            <h3 class="item-title">Python &amp; Django</h3>
            <div class="item-desc">Armed with Python and Django, I create dynamic web applications with ease. Python's versatility and Django's high-level framework simplify the development process, resulting in secure and feature-rich web solutions. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-php"></i></div>
            <h3 class="item-title">PHP</h3>
            <div class="item-desc">Utilizing PHP, I develop dynamic web pages and applications, harnessing its extensive capabilities for seamless backend processing and server-side scripting.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-npm mr-2"></i><i class="fab fa-gulp mr-2"></i><i class="fab fa-grunt"></i></div>
            <h3 class="item-title">npm, Gulp &amp; Grunt</h3>
            <div class="item-desc">I rely on npm, Gulp, and Grunt to streamline my development workflow. These tools automate repetitive tasks, such as package management and build processes, empowering me to focus on crafting exceptional web experiences. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-html5 mr-2"></i><i class="fab fa-css3-alt"></i></div>
            <h3 class="item-title">HTML &amp; CSS</h3>
            <div class="item-desc">With HTML and CSS as my artistic palette, I weave captivating and visually stunning web pages, ensuring a seamless user experience and captivating design.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fa fa-user-secret mr-2"></i></div>
            <h3 class="item-title">Cybersecurity</h3>
            <div class="item-desc">Committed to maintaining a secure IT environment, I stay abreast of the latest cybersecurity threats and best practices, implementing measures to protect systems, networks, and sensitive data.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fa fa-toolbox mr-2"></i></div>
            <h3 class="item-title">Troubleshooting & Problem Solving</h3>
            <div class="item-desc">Armed with an analytical mindset and deep technical knowledge, I tackle complex IT issues head-on, unraveling challenges to keep systems running smoothly.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fa-solid fa-people-group mr-2"></i></div>
            <h3 class="item-title">Collaboration & Communication</h3>
            <div class="item-desc">I foster effective teamwork and communicate technical concepts to both technical and non-technical stakeholders, facilitating smooth collaboration and ensuring clarity in IT-related discussions</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fa-solid fa-database mr-2"></i></div>
            <h3 class="item-title">Data Backup & Recovery</h3>
            <div class="item-desc">With a focus on data integrity, I implement robust backup strategies and execute efficient data recovery procedures, safeguarding critical information from loss or corruption.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3" v-animate-on-scroll="{ animation: 'bounceInUp', speed: '2s' }">
          <div class="item-inner">
            <div class="item-icon"><i class="fa-solid fa-gears mr-2"></i></div>
            <h3 class="item-title">System Maintenance & Upgrades</h3>
            <div class="item-desc">Proactively managing system updates and upgrades, I ensure that IT systems remain up-to-date, secure, and compatible with evolving business needs.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
      </div><!--//row-->
      <!-- <div class="text-center py-3"><a href="services.html" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>Services &amp; Pricing</a></div> -->
      
    </div><!--//container-->
  </section>
  
  <div class="container"><hr></div>
  
  <section class="featured-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
      <div class="row">
        <!-- Apply the directive to the container element that wraps the project cards -->
        <div v-for="project in projects.data" class="col-md-6 mb-5" v-bind:key="project.id">
          <div class="card project-card" v-fade-in>
            <div class="row no-gutters">
              <div class="col-lg-12">
                <div class="card-body">
                  <img v-bind:src="$apiHostname + project.attributes.mainPhoto.data.attributes.url" class="card-img" alt="image">
                  <h5 class="card-title"><a v-bind:href="`/projects/${project.id}`" class="theme-link"> {{ project.attributes.name }}</a></h5>
                  <p class="card-text">{{ project.attributes.summary }}</p>
                  <p class="card-text"><small class="text-muted">Client: {{ project.attributes.clientName }}</small></p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <a class="link-mask-link" v-bind:href="`projects/${project.id}`"></a>
              <div class="link-mask-text">
                <button class="btn btn-secondary" v-on:click="showProject(project.attributes)">
                  <i class="fas fa-eye mr-2"></i>More info
                </button>
              </div>
            </div><!--//link-mask-->
            <dialog id="project-details">
              <form method="dialog">
                <h1>Project </h1>
                <p>Name: {{ currentProject.name }}</p>
                <p>Description: {{ currentProject.summary }}</p>
                <button>Close</button>
              </form>
            </dialog>
          </div><!--//card-->
        </div><!--//col-->        
      </div><!--//row-->
      <div class="text-center py-3"><a href="/projects" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
      
    </div><!--//container-->
  </section><!--//featured-section-->
  
  <div class="container"><hr></div>
  
  
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      myInfo: {},
      projects: [],
      currentProject: {},
    };
  },
  created: function () {
    this.getMyInfo();
    this.getProjects();
  },
  methods: {
    showProject: function (project) {
      this.currentProject = project;
      document.querySelector("#project-details").showModal();
    },
    getMyInfo: function () {
      axios.get("/professional?populate=*").then((response) => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getProjects: function () {
      axios.get("/projects?populate=*").then((response) => {
        console.log("projects ->", response);
        this.projects = response.data;
        console.log("projects updated ->", this.projects.data);
      });
    },
  },
  directives: {
    animateOnScroll: {
      inserted: function (el, binding) {
        el.style.opacity = 0;
        let observer = new IntersectionObserver(function (entries) {
          let entry = entries[0];
          if (entry.isIntersecting) {
            el.style.opacity = 1;
            el.classList.add("animate__animated", `animate__${binding.value.animation}`);
            el.style.animationDuration = binding.value.speed;
            observer.unobserve(el);
          }
        });
        observer.observe(el);
      },
    },
    fadeIn: {
      inserted: function (el) {
        el.style.opacity = 0;
        let observer = new IntersectionObserver(function (entries) {
          let entry = entries[0];
          if (entry.isIntersecting) {
            el.style.opacity = 1;
            el.classList.add("animate__animated", "animate__fadeInLeft");
            observer.unobserve(el);
          }
        });
        observer.observe(el);
      },
    },
  },
  name: "Home",
  components: {},
};
</script>
