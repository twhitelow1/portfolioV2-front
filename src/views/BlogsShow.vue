<template>
  <div>
    <article class="blog-post px-3 py-5 p-md-5">
		    <div class="container single-col-max-width">
			    <header class="blog-post-header">
				    <h2 class="title mb-2">{{ blog.data.attributes.title }}</h2>
				    <div class="meta mb-3">
              <span class="date">{{ getPublishedDaysAgo(blog.data.attributes.updatedAt) }}</span>
              <!-- <span class="time">5 min read</span> -->
              <!-- <span class="comment"><a href="#">4 comments</a></span> -->
            </div>
			    </header>
			    
			    <div class="blog-post-body">
				    <figure class="blog-banner">
				        <!-- <a href="https://made4dev.com/"><img class="img-fluid" src="assets/images/blog/blog-post-banner.jpg" alt="image"></a> -->
				        <!-- <figcaption class="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com/?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption> -->
				    </figure>
				    <p v-html="blog.data.attributes.content"></p>
				   
			    </div>
				    
			    <!-- <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded-right" href="#">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav> -->
				
				
		    </div><!--//container-->
	    </article>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      blog: {},
    };
  },
  created: function () {
    this.getBlog();
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
    getBlog: function () {
      axios.get("/blogs/" + this.$route.params.id).then((response) => {
        console.log("blog ->", response);
        this.blog = response.data;
      });
    },
  },
  name: "Home",
  components: {},
};
</script>
