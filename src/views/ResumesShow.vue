<template>
  <div class="resume">
    <section class="cta-section theme-bg-light py-5">
  <div class="container text-center single-col-max-width">
    <h2 class="heading mb-3">Online Resume</h2>
    <!-- <a class="btn btn-primary" href="../../../resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/index.html" target="_blank"><i class="fas fa-file-pdf mr-2"></i>Download PDF Version</a> -->
    
    
  </div><!--//container-->
    </section>
    <div class="container px-3 px-lg-5">
  <article class="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
    
    <div class="resume-header">
      <div class="row align-items-center">
        <div class="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
          <h2 class="resume-name mb-0 text-uppercase">{{resume.data.attributes.candidateName}}</h2>
          <div class="resume-tagline mb-3 mb-md-0">{{resume.data.attributes.position}}</div>
        </div><!--//resume-title-->
        <div class="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
          <ul class="list-unstyled mb-0">
            <!-- <li class="mb-2"><i class="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a class="resume-link" v-bind:href="'tel:${resume.data.attributes.phone_number}'">{{resume.data.attributes.phone}}</a></li> -->
            <li class="mb-2"><i class="fas fa-envelope-square fa-fw fa-lg mr-2"></i><a class="resume-link" v-bind:href="`mailto:${resume.data.attributes.email}`">{{ resume.data.attributes.email }}</a></li>
            <li class="mb-2"><i class="fas fa-globe fa-fw fa-lg mr-2"></i><a class="resume-link" v-bind:href="`https://${myInfo.data.attributes.website}`"></a>{{  myInfo.data.attributes.website }}</li>
            <li class="mb-0"><i class="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>{{ resume.data.attributes.location }}</li>
          </ul>
        </div><!--//resume-contact-->
      </div><!--//row-->
      
    </div><!--//resume-header-->
    <hr>
    <div class="resume-intro py-3">
      <div class="media flex-column flex-md-row align-items-center">
        <!-- <img class="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" v-bind:src="`http://localhost:1337${myInfo.data.attributes.headshot1.data.attributes.url}`" alt="image"> -->
        <div class="media-body text-left">
          <p class="mb-0">{{ resume.data.attributes.summary }}</p>
        </div><!--//media-body-->
      </div>
    </div><!--//resume-intro-->
    <hr>
    <div class="resume-body">
      <div class="row">
        <div class="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
          <section class="work-section py-3">
            <h3 class="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
            <div v-for="experience in experiences.data" class="item mb-3 text-left">
              <div class="item-heading row align-items-center mb-2">
                <h4 class="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">{{experience.attributes.position}}</h4>
                <div v-if="experience.still_work_here" class="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">{{experience.attributes.company}} | {{ experience.attributes.startDate}} - Present</div>
                <div class="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right" v-else>{{experience.attributes.company}} | {{ experience.attributes.startDate}} - {{experience.attributes.endDate }}</div>
              </div>
              <div class="item-content" v-html="experience.attributes.description" />
            </div><!--//item-->
            
          </section><!--//work-section-->

          <section class="project-section py-3">
            <h3 class="text-uppercase resume-section-heading mb-4">Projects</h3>
            <div class="item mb-3" v-for="project in projects.data">
              <div class="item-heading row align-items-center mb-2">
                <h4 class="item-title col-12 col-md-6 col-lg-6 mb-0 mb-md-0">{{ project.attributes.name }}</h4>
                <div class="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">Open Source</div>
                
              </div>
              <div class="item-content">
                <p> {{ project.attributes.shortDescription }}<br/><a v-bind:href="`/projects/${project.id}`" class="theme-link">View Project</a>.</p>
              </div>
            </div><!--//item-->
          </section><!--//project-section-->	
        </div><!--//resume-main-->
        <aside class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
          <section class="skills-section py-3">
            <h3 class="text-uppercase resume-section-heading mb-4">Skills</h3>
            <div class="item">
              <h4 class="item-title">Technical</h4>
              <ul class="list-unstyled resume-skills-list">
                <li class="mb-2">JavaScript/Angular/React/Vue</li>
                <li class="mb-2">Python/Ruby/PHP<li>
                  <li class="mb-2">Node.js/ASP.NET</li>
                  <li class="mb-2">PostgreSQL/MySQL</li>
                  <li class="mb-2">Object-oriented design</li>
                  <li class="mb-2">Design and implement database structures</li>
                  <li>Lead and deliver complex software systems</li>
                </ul>
              </div><!--//item-->
              <div class="item">
                <h4 class="item-title">Professional</h4>
                <ul class="list-unstyled resume-skills-list">
                  <li class="mb-2">Effective communication</li>
                  <li class="mb-2">Team player<li>
                    <li class="mb-2">Strong problem solver</li>
                    <li>Good time management</li>
                  </ul>
                </div><!--//item-->
              </section><!--//skills-section-->
              <section class="education-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">Education</h3>
                <ul class="list-unstyled resume-education-list">
                  <li v-for="education in educations.data" class="mb-3">
                    <div class="resume-degree-org font-weight-bold">{{ education.attributes.School }}</div>
                    <div class="resume-degree text-muted ">{{ education.attributes.Degree }}<p v-if="!education.attributes.finished">In Progress</p></div>
                  </li>
                </ul>
              </section><!--//education-section-->
              
              <section class="skills-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">Certifications</h3>
                <ul class="list-unstyled resume-lang-list">
                  <li v-for="certification in certifications.data" class="mb-2">{{certification.attributes.name}}</li>
                </ul>
              </section><!--//certificates-section-->
              <section class="skills-section py-3">
                <h3 class="text-uppercase resume-section-heading mb-4">Interests</h3>
                <ul class="list-unstyled resume-interests-list mb-0">
                  <li v-for="interest in interests.data" class="mb-2">{{interest.attributes.name}}</li>
                </ul>
              </section>
              <!--//certificates-section-->
              
            </aside><!--//resume-aside-->
          </div><!--//row-->
        </div><!--//resume-body-->
        <hr>
        <div class="resume-footer text-center">
          <ul class="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
            <li class="list-inline-item mb-lg-0 mr-3"><a class="resume-link" v-bind:href="myInfo.data.attributes.github"><i class="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i><span class="d-none d-lg-inline-block text-muted">github.com/twhitelow1</span></a></li>
            <li class="list-inline-item mb-lg-0 mr-3"><a class="resume-link" v-bind:href="myInfo.data.attributes.linkedin"><i class="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i><span class="d-none d-lg-inline-block text-muted">linkedin.com/in/todd-whitelow</span></a></li>
          </ul>
        </div><!--//resume-footer-->
      </article>
      
    </div><!--//container-->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
  
export default {
  data: function() {
    return {
      myInfo: {},
      resume: {},
      experiences: [],
      interests: [],
      certifications: [],
      educations: [],
      projects: [],
    };
  },
  created: function() {
    this.getMyInfo();
    this.getResume();
    this.getExperiences();
    this.getInterests();
    this.getCertifications();
    this.getEducations();
    this.getProjects();
  },
  methods: {
    getMyInfo: function() {
      axios.get("/professional?populate").then(response => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getResume: function() {
      axios.get("/resumes/" + this.$route.params.id).then(response => {
        console.log("resume ->", response);
        this.resume = response.data;
      });
    },
    getExperiences: function() {
      axios.get("/experiences/").then(response => {
        console.log("experiences ->", response);
        this.experiences = response.data;
      });
    },
    getInterests: function() {
      axios.get("/interests/").then(response => {
        console.log("interests ->", response);
        this.interests = response.data;
      });
    },
    getCertifications: function() {
      axios.get("/certifications/").then(response => {
        console.log("certifications ->", response);
        this.certifications = response.data;
      });
    },
    getEducations: function() {
      axios.get("/educations/").then(response => {
        console.log("educations ->", response);
        this.educations = response.data;
      });
    },
    getProjects: function() {
      axios.get("/projects/").then(response => {
        console.log("projects ->", response);
        this.projects = response.data;
      });
    },
    formatDate: function(dateString) {
      //Extract the individual parts of the date string
      // The date is in YYYYMMDD format and needs to change to MM/YYYY
      var day = dateString.substring(6);
      var month = dateString.substring(4,6);
      var year = dateString.substring(0,4);

      // Construct the new date string with the desired format
      var formattedDate = month + '/' + day + '/' + year;
      return formattedDate;
    }
  },
  name: 'Home',
  components: {
  }
};
</script>
  