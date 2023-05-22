<template>
  <div>
    <article class="blog-post px-3 py-5 p-md-5">
		    <div class="container single-col-max-width">
			    <header class="blog-post-header">
				    <h2 class="title mb-2">{{ post.title.rendered }}</h2>
				    <!-- <div class="meta mb-3"><span class="date">Published 2 days ago</span><span class="time">5 min read</span><span class="comment"><a href="#">4 comments</a></span></div> -->
			    </header>
			    
			    <div class="blog-post-body">
				    <figure class="blog-banner">
				        <a href="https://made4dev.com/"><img class="img-fluid" src="assets/images/blog/blog-post-banner.jpg" alt="image"></a>
				        <!-- <figcaption class="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com/?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a></figcaption> -->
				    </figure>
				    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
				   
			    </div>
				    
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded-right" href="#">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
				
		    </div><!--//container-->
	    </article>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      myInfo: {},
      post: [],
    };
  },
  created: function() {
    this.getMyInfo();
    this.getPost();
  },
  methods: {
    getMyInfo: function() {
      axios.get("/wp/v2/my-info/89").then(response => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
      });
    },
    getPost: function() {
      axios.get("/wp/v2/posts/" + this.$route.params.id).then(response => {
        console.log("post ->", response);
        this.post = response.data;
      });
    },
  },
  name: 'Home',
  components: {
  }
};
</script>
