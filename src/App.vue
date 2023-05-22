<template>
  <div id="app">
    <header class="header text-center">	    
    <div class="force-overflow">
    <h1 class="blog-name pt-lg-4 mb-0"><a href="index-2.html">{{ myInfo.acf.first_name + ' '+ myInfo.acf.last_name }}</a></h1>
    
    <nav class="navbar navbar-expand-lg navbar-dark" >
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div id="navigation" class="collapse navbar-collapse flex-column" >
        <div class="profile-section pt-3 pt-lg-0">
          <img class="profile-image mb-3 rounded-circle mx-auto" v-bind:src="myInfo.acf.headshot1" alt="image" >			
          
          <div class="bio mb-3">{{myInfo.acf.tagline}}</div><!--//bio-->
          <ul class="social-list list-inline py-2 mx-auto">
            <li class="list-inline-item"><a v-bind:href="myInfo.acf.linkedin" alt="Todd Whitelow Jr's LinkedIn"><i class="fab fa-linkedin-in fa-fw" ></i></a></li>
            <li class="list-inline-item"><a v-bind:href="myInfo.acf.github"><i class="fab fa-github-alt fa-fw" alt="Todd Whitelow Jr's Github"></i></a></li>
            <!-- <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow fa-fw"></i></a></li> -->
            <li class="list-inline-item"><a href="#"><i class="fab fa-codepen fa-fw"></i></a></li>
          </ul><!--//social-list-->
          <hr> 
        </div><!--//profile-section-->
        
        <ul class="navbar-nav flex-column text-left">
          <li class="nav-item active">
            <a class="nav-link" href="/"><i class="fas fa-user fa-fw mr-2"></i>About Me<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects"><i class="fas fa-laptop-code fa-fw mr-2"></i>Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html"><i class="fas fa-briefcase fa-fw mr-2"></i>Services &amp; Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/resumes/55"><i class="fas fa-file-alt fa-fw mr-2"></i>Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog"><i class="fas fa-blog fa-fw mr-2"></i>Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact"><i class="fas fa-envelope-open-text fa-fw mr-2"></i>Contact</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-cogs fa-fw mr-2"></i>More Pages
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="project.html">Project Page</a>
              <a class="dropdown-item" href="blog-home.html">Blog Home 1</a>
              <a class="dropdown-item" href="blog-home-alt.html">Blog Home 2</a>
              <a class="dropdown-item" href="blog-post.html">Blog Post</a>
            </div>
          </li>
        </ul>
        
        <div class="my-2">
          <a class="btn btn-primary" href="contact.html" target="_blank"><i class="fas fa-paper-plane mr-2"></i>Hire Me</a>
        </div>
        

        <div class="dark-mode-toggle text-center w-100">
          <hr class="mb-4">
            <h4 class="toggle-name mb-3 "><i class="fas fa-adjust mr-1"></i>Dark Mode</h4>
            
            <input class="toggle" id="darkmode" type="checkbox">
            <label class="toggle-btn mx-auto mb-0" for="darkmode"></label>
            
        </div><!--//dark-mode-toggle-->
        
      </div>
    </nav>
  </div><!--//force-overflow-->
</header>

<div class="main-wrapper">

    <router-view/>

    <footer class="footer text-center py-4">
      <!-- <small class="copyright">Template Copyright &copy; <a href="../../../index.html" target="_blank">3rd Wave Media</a></small> -->
    </footer>
  
  </div><!--//main-wrapper-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function() {
    return {
      myInfo: [],
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
};
</script>


