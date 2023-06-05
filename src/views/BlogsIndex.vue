<template>
  <div class="project">
    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center">
			    <h2 class="heading">A Blog About My Journey In Software Engineering</h2>
			    <!-- <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div> -->
			    <!-- <form class="signup-form form-inline justify-content-center pt-3"> -->
                    <!-- <div class="form-group">
                        <label class="sr-only" for="semail">Your email</label>
                        <input type="email" id="semail" name="semail1" class="form-control mr-md-1 semail" placeholder="Enter email">
                    </div>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form> -->
		    </div><!--//container-->
	    </section>
	    <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">
			    <div class="row">
					<div class="col-md-4 mb-3" v-for="blog in blogs.data">
						<div class="card blog-post-card">
							<!-- <img class="card-img-top" v-bind:src="blog.attributes.previewPhoto" alt="image" /> -->
							<div class="card-body">
								<h5 class="card-title"><a class="theme-link" v-bind:href="`/blogs/${blog.id}`">{{ blog.attributes.title }}</a></h5>
								<p class="card-text" v-html="blog.attributes.snippet"></p>
								<p class="mb-0"><a class="more-link" v-bind:href="`/blogs/${blog.id}`">Read more &rarr;</a></p>
								
							</div>
							<div class="card-footer"> 
								<small class="text-muted">{{ getPublishedDaysAgo(blog.attributes.updatedAt) }}</small>
							</div>
						</div><!--//card-->
					</div><!--//col-->
				</div><!--//row-->
			    
			    
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded" href="#">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
		    </div>
	    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      myInfo: {},
      blogs: [],
    };
  },
  created: function () {
    this.getMyInfo();
    this.getBlogs();
  },
  methods: {
    getPublishedDaysAgo(updatedAt) {
      const today = new Date();
      const updatedDate = new Date(updatedAt);
      const timeDiff = Math.abs(today.getTime() - updatedDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      if (diffDays === 1) {
        return "Published 1 day ago";
      } else {
        return `Published ${diffDays} days ago`;
      }
    },
    getMyInfo: function () {
      axios.get("my-info/1").then((response) => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getBlogs: function () {
      axios.get("blogs").then((response) => {
        console.log("blogs ->", response);
        this.blogs = response.data;
      });
    },
  },
  name: "Home",
  components: {},
};
</script>
