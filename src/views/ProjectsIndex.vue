<template>
  <div class="project">
    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center single-col-max-width">
			    <h2 class="heading">Portfolio</h2>
			    <div class="intro">
			    <p>Welcome to my online portfolio.</p>
			    
			    </div>
			    <a class="btn btn-primary" href="/contact" target="_blank"><i class="fas fa-paper-plane mr-2"></i>Hire Me</a>
			    
			    
		    </div><!--//container-->
	    </section>
	    <section class="projects-list px-3 py-5 p-md-5">
		    <div class="container">
			    <!-- <div class="text-center"> -->
				    <!-- <ul id="filters" class="filters mb-5 mx-auto pl-0"> -->
		                <!-- <li class="type active mb-3 mb-lg-0" data-filter="*">All</li> -->
		                <!-- <li class="type  mb-3 mb-lg-0" data-filter=".webapp">We App</li> -->
		                <!-- <li class="type  mb-3 mb-lg-0" data-filter=".mobileapp">Mobile App</li> -->
		                <!-- <li class="type  mb-3 mb-lg-0" data-filter=".frontend">Frontend</li> -->
		                <!-- <li class="type  mb-3 mb-lg-0" data-filter=".backend">Backend</li> -->
		            <!-- </ul> -->
								<!--//filters-->
			    <!-- </div> -->
	            
			    <div class="project-cards row isotope">
					
          <div v-for="project in projects.data" class="isotope-item col-md-6 mb-5 mobileapp frontend">
						<div class="card project-card">
							<div class="row no-gutters">
								<div class="col-lg-12 card-img-holder">
									<img v-bind:src="$apiHostname  + project.attributes.mainPhoto.data.attributes.url" class="card-img" alt="image">
								</div>
							</div>
							<div class="row no-gutters">
								<div class="col-lg-12">
									<div class="card-body">
										<h5 class="card-title"><a v-bind:href="`/projects/${project.id}`" class="theme-link">{{ project.attributes.projectName }}</a></h5>
										<p class="card-text">{{ project.attributes.shortDescription }}</p>
										<p class="card-text"><small class="text-muted">Client: {{project.attributes.clientName}}</small></p>
									</div>
								</div>
							</div>
							<div class="link-mask">
								<a class="link-mask-link" v-bind:href="`/projects/${project.id}`"></a>
								<div class="link-mask-text">
									<a class="btn btn-secondary" v-bind:href="`/projects/${project.id}`">
										<i class="fas fa-eye mr-2"></i>View Case Study
									</a>
								</div>
							</div><!--//link-mask-->
						</div><!--//card-->
					</div><!--//col-->


					
				</div><!--//row-->
			
		    </div>
	    </section>
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
      axios.get("/professional?populate=*").then(response => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getProjects: function() {
      axios.get("/projects?populate=*").then(response => {
        console.log("resume ->", response);
        this.projects = response.data;
      });
    },
  },
  name: 'Home',
  components: {
  }
};
</script>
