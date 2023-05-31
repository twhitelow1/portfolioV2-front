<template>
  <div class="project">
    <section class="cta-section theme-bg-light py-5">
		    <div class="container single-col-max-width">
			    <h2 class="heading text-center">Case Study: {{ project.data.attributes.name }}</h2>
			    <div class="project-intro text-center">
					<p class="mb-0 lead">{{ project.data.attributes.shortDescription }}</p>
				</div>
			    
		    </div><!--//container-->
	    </section>
	    <section class="project px-3 py-5 p-md-5">
		    <div class="container">
			    <div class="project-meta media flex-column flex-md-row p-4 theme-bg-light">
					<div class="media-body">
						<img class="project-thumb mb-3 mb-md-0 rounded img-responsive d-md-inline-block" v-bind:src="$apiHostname  + project.data.attributes.mainPhoto.data.attributes.url" alt="">
					    <div class="client-info">
						    <h3 class="client-name font-weight-bold mb-4">Client Name: {{ project.data.attributes.clientName }}</h3>
						    <ul class="client-meta list-unstyled">
							    
							    
							    <li v-if="project.data.attributes.liveDemoLink" class="mb-2"><strong><i class="fas fa-link fa-fw mr-2"></i>Live Link: <a v-bind:href="project.data.attributes.liveDemoLink" target="">{{ project.data.attributes.liveDemoLink }}</a></strong> <a class="theme-link"></a></li>
							    
						    </ul>
						    <!-- <div class="client-bio mb-4">{{ project.data.attributes.shortDescription }}</div> -->
						    </div>				
					</div><!--//media-body-->
				</div><!--//project-meta-->
				<div class="project-sections py-5">
					<div v-if="project.data.attributes.overview" class="project-section mb-5">
					    <h3 class="project-section-title mb-3">Project Overview</h3>
					    <p> {{ project.data.attributes.overview }} </p>
					</div><!--//project-section-->
					
					<div v-if="project.data.attributes.challenge" class="project-section mb-5">
					     <h3 class="project-section-title">The Challenge</h3>
					    <p>{{ project.data.attributes.challenge }}</p>
					     
					</div><!--//project-section-->
					
					<div v-if="project.data.attributes.approach_solutions" class="project-section mb-5">
					     <h3 class="project-section-title">The Approach &amp; Solution</h3>
					    <p>{{ project.data.attributes.approach_solutions }}</p>
					    <div class="row mt-5">
						    <div class="col-12 col-lg-6 mb-5">
							    <img class="img-fluid rounded" src="assets/images/project/project-figure-1.jpg" alt="image">
						    </div>
						    <div class="col-12 col-lg-6 mb-5">
							    <img class="img-fluid rounded" src="assets/images/project/project-figure-2.jpg" alt="image">
						    </div>
					    </div>
						    
					    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </p>
					     
					</div><!--//project-section-->
				</div>
		    </div>
	    </section>
	    
	    <section class="promo-section theme-bg-light py-5 text-center">
		    <div class="container single-col-max-width">
			    <h2 class="title">Want me to help with your project?</h2>
			    <p>If you take on freelance work, you can use this section to prompt any potential clients to get in touch with you with their project requirements.</p>
                <div class="text-center"><a class="btn btn-primary" href="/contact" ><i class="fas fa-paper-plane mr-2"></i>Hire Me</a></div>
		    </div><!--//container-->
	    </section><!--//promo-section-->
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      myInfo: {},
      project: {},
    };
  },
  created: function () {
    this.getMyInfo();
    this.getProject();
  },
  methods: {
    getMyInfo: function () {
      axios.get("/professional?populate=*").then((response) => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getProject: function () {
      axios.get("/projects/" + this.$route.params.id + "?populate=*").then((response) => {
        console.log("project ->", response);
        this.project = response.data;
      });
    },
  },
  name: "Home",
  components: {},
};
</script>
