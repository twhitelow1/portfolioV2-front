<template>
  <div class="home">
    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
    <div class="container">
      <div class="profile-teaser media flex-column flex-lg-row">
        
        <div class="media-body">
          <h2 class="name font-weight-bold mb-1">{{myInfo.acf.first_name + ' ' + myInfo.acf.last_name}}</h2>
          <div class="tagline mb-3">{{ myInfo.acf.position }}</div>
          <div class="bio mb-4">{{ myInfo.acf.elevator_pitch }}. Want to know how I may help your project? Check out my project <a class="link-on-bg" href="projects.html">portfolio</a> and <a class="link-on-bg" href="resume.html">online resume</a>.
          </div><!--//bio-->
          <div class="mb-4">
            <a class="btn btn-primary mr-2 mb-3" href="/projects"><i class="fas fa-arrow-alt-circle-right mr-2"></i><span class="d-none d-md-inline">View</span> Portfolio</a>
            <a class="btn btn-secondary mb-3" href="/resume"><i class="fas fa-file-alt mr-2"></i><span class="d-none d-md-inline">View</span> Resume</a>
          </div>
        </div><!--//media-body-->
        <img class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" v-bind:src="myInfo.acf.headshot2" alt="Todd Whitelow's Headshot
        ">
      </div>
    </div>
  </section><!--//about-me-section-->
  
  <section class="overview-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-3">What I do</h2>
      <div class="section-intro mb-5">I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a href="resume.html">online resume</a> and <a href="portfolio.html">project portfolio</a>.</div>
      <div class="row">
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-js-square"></i></div>
            <h3 class="item-title">Vanilla JavaScript</h3>
            <div class="item-desc"> I wield the power of Vanilla JavaScript to craft interactive and dynamic website components, breathing life into web applications.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-react mr-2"></i><i class="fab fa-vuejs"></i></div>
            <h3 class="item-title"> React &amp;  Vue</h3>
            <div class="item-desc">I harness the capabilities of React and Vue, two powerful JavaScript frameworks that empower me to build robust and scalable web applications using a component-based approach.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-node-js"></i></div>
            <h3 class="item-title">Node.js</h3>
            <div class="item-desc">Leveraging the power of Node.js, I develop efficient and scalable server-side applications, unlocking the ability to handle large volumes of network requests and deliver optimal performance. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-python"></i></div>
            <h3 class="item-title">Python &amp; Django</h3>
            <div class="item-desc">Armed with Python and Django, I create dynamic web applications with ease. Python's versatility and Django's high-level framework simplify the development process, resulting in secure and feature-rich web solutions. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-php"></i></div>
            <h3 class="item-title">PHP</h3>
            <div class="item-desc">Utilizing PHP, I develop dynamic web pages and applications, harnessing its extensive capabilities for seamless backend processing and server-side scripting.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-npm mr-2"></i><i class="fab fa-gulp mr-2"></i><i class="fab fa-grunt"></i></div>
            <h3 class="item-title">npm, Gulp &amp; Grunt</h3>
            <div class="item-desc">I rely on npm, Gulp, and Grunt to streamline my development workflow. These tools automate repetitive tasks, such as package management and build processes, empowering me to focus on crafting exceptional web experiences. </div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-html5 mr-2"></i><i class="fab fa-css3-alt"></i></div>
            <h3 class="item-title">HTML &amp; CSS</h3>
            <div class="item-desc">With HTML and CSS as my artistic palette, I weave captivating and visually stunning web pages, ensuring a seamless user experience and captivating design.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fa fa-user-secret mr-2"></i></div>
            <h3 class="item-title">Cybersecurity</h3>
            <div class="item-desc">Committed to maintaining a secure IT environment, I stay abreast of the latest cybersecurity threats and best practices, implementing measures to protect systems, networks, and sensitive data.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fa fa-toolbox mr-2"></i></div>
            <h3 class="item-title">Troubleshooting & Problem Solving</h3>
            <div class="item-desc">Armed with an analytical mindset and deep technical knowledge, I tackle complex IT issues head-on, unraveling challenges to keep systems running smoothly.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-screen-users mr-2"></i></div>
            <h3 class="item-title">Collaboration & Communication</h3>
            <div class="item-desc">I foster effective teamwork and communicate technical concepts to both technical and non-technical stakeholders, facilitating smooth collaboration and ensuring clarity in IT-related discussions</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fa-solid fa-database mr-2"></i></div>
            <h3 class="item-title">Data Backup & Recovery</h3>
            <div class="item-desc">With a focus on data integrity, I implement robust backup strategies and execute efficient data recovery procedures, safeguarding critical information from loss or corruption.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fa-solid fa-computer mr-2"></i></div>
            <h3 class="item-title">System Maintenance & Upgrades</h3>
            <div class="item-desc">Proactively managing system updates and upgrades, I ensure that IT systems remain up-to-date, secure, and compatible with evolving business needs.</div>
          </div><!--//item-inner-->
        </div><!--//item-->
        <div class="item col-6 col-lg-3">
          <div class="item-inner">
            <div class="item-icon"><i class="fab fa-screen-users mr-2"></i></div>
            <h3 class="item-title"></h3>
            <div class="item-desc"></div>
          </div><!--//item-inner-->
        </div><!--//item-->
      </div><!--//row-->
      <div class="text-center py-3"><a href="services.html" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>Services &amp; Pricing
        
      </a></div>
      
    </div><!--//container-->
  </section>
  
  <div class="container"><hr></div>
  
  <section class="featured-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>
      <div class="row">
        
        <div v-for="project in projects" class="col-md-6 mb-5">
          <div class="card project-card">
            <div class="row no-gutters">
              <div class="col-lg-12">
                <div class="card-body">
                  <img v-bind:src="project.acf.main_photo" class="card-img" alt="image">
                  <h5 class="card-title"><a href="project.html" class="theme-link"> {{ project.acf.project_name }}</a></h5>
                  <p class="card-text">{{ project.acf.short_description }}</p>
                  <p class="card-text"><small class="text-muted">Client: {{ project.acf.client_name }}</small></p>
                </div>
              </div>
            </div>
            <div class="link-mask">
              <a class="link-mask-link" v-bind:href="`projects/${project.id}`"></a>
              <div class="link-mask-text">
                <a class="btn btn-secondary" v-bind:href="`projects/${project.id}`">
                  <i class="fas fa-eye mr-2"></i>View Case Study
                </a>
              </div>
            </div><!--//link-mask-->
          </div><!--//card-->
        </div><!--//col-->        
      </div><!--//row-->
      <div class="text-center py-3"><a href="portfolio.html" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio</a></div>
      
    </div><!--//container-->
  </section><!--//featured-section-->
  
  <div class="container"><hr></div>
  
  <section class="latest-blog-section p-3 p-lg-5">
    <div class="container">
      <h2 class="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="card blog-post-card">
            <img class="card-img-top" src="assets/images/blog/blog-post-thumb-card-1.jpg" alt="image">
            <div class="card-body">
              <h5 class="card-title"><a class="theme-link" href="blog-post.html">Top 3 JavaScript Frameworks</a></h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
              <p class="mb-0"><a class="more-link" href="blog-post.html">Read more &rarr;</a></p>
              
            </div>
            <div class="card-footer">
              <small class="text-muted">Published 2 days ago</small>
            </div>
          </div><!--//card-->
        </div><!--//col-->
        <div class="col-md-4 mb-5">
          <div class="card blog-post-card">
            <img class="card-img-top" src="assets/images/blog/blog-post-thumb-card-2.jpg" alt="image">
            <div class="card-body">
              <h5 class="card-title"><a class="theme-link" href="blog-post.html">About Remote Working</a></h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
              <p class="mb-0"><a class="more-link" href="blog-post.html">Read more &rarr;</a></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Published a week ago</small>
              
            </div>
          </div><!--//card-->
        </div><!--//col-->
        <div class="col-md-4 mb-5">
          <div class="card blog-post-card">
            <img class="card-img-top" src="assets/images/blog/blog-post-thumb-card-3.jpg" alt="image">
            <div class="card-body">
              <h5 class="card-title"><a class="theme-link" href="blog-post.html">A Guide to Becoming a Full-Stack Developer</a></h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
              <p class="mb-0"><a class="more-link" href="blog-post.html">Read more &rarr;</a></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Published 3 weeks ago</small>
            </div>
          </div><!--//card-->
        </div><!--//col-->
      </div><!--//row-->
      <div class="text-center py-3"><a href="blog-home.html" class="btn btn-primary"><i class="fas fa-arrow-alt-circle-right mr-2"></i>View Blog</a></div>
    </div><!--//container-->
    
  </section><!--//latest-blog-section-->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function() {
    return {
      myInfo: {},
      projects: [],
    };
  },
  created: function() {
    this.getMyInfo();
    this.getProjects();
  },
  methods: {
    getMyInfo: function() {
      axios.get("/wp/v2/my-info/89").then(response => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getProjects: function() {
      axios.get("/wp/v2/projects").then(response => {
        console.log("projects ->", response);
        this.projects = response.data;
      });
    },
  },
  name: 'Home',
  components: {
  }
};
</script>
