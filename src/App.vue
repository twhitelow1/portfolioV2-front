<template>
  <div id="app">
    <header class="header text-center">	    
    <div class="force-overflow">
    <h1 class="blog-name pt-lg-4 mb-0"><a href="/">{{ myInfo.data.attributes.FirstName + ' '+ myInfo.data.attributes.LastName }}</a></h1>
    
    <nav class="navbar navbar-expand-lg navbar-dark" >
      
      <button class="navbar-toggler" type="button" @click="toggleNavigation" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div id="navigation" :class="{ 'collapse': !isActive, 'navbar-collapse': true, 'flex-column': true }">
        <div class="profile-section pt-3 pt-lg-0">
          <a href="/"><img class="profile-image mb-3 rounded-circle mx-auto" v-bind:src="$apiHostname + myInfo.data.attributes.headshot1.data.attributes.url" alt="image" ></a>			
          
          <div class="bio mb-3">{{myInfo.data.attributes.tagline}}</div><!--//bio-->
          <ul class="social-list list-inline py-2 mx-auto">
            <li class="list-inline-item"><a v-bind:href="myInfo.data.attributes.linkedin" alt="Todd Whitelow Jr's LinkedIn"><i class="fab fa-linkedin-in fa-fw" ></i></a></li>
            <li class="list-inline-item"><a v-bind:href="myInfo.data.attributes.github"><i class="fab fa-github-alt fa-fw" alt="Todd Whitelow Jr's Github"></i></a></li>
            <!-- <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow fa-fw"></i></a></li> -->
            <li class="list-inline-item"><a v-bind:href="myInfo.data.attributes.codepen"><i class="fab fa-codepen fa-fw"></i></a></li>
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
          <!-- <li class="nav-item">
            <a class="nav-link" href="services.html"><i class="fas fa-briefcase fa-fw mr-2"></i>Services &amp; Pricing</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="/resumes/1"><i class="fas fa-file-alt fa-fw mr-2"></i>Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blogs"><i class="fas fa-blog fa-fw mr-2"></i>Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact"><i class="fas fa-envelope-open-text fa-fw mr-2"></i>Contact</a>
          </li>
        </ul>
        
        <div class="my-2">
          <a class="btn btn-primary" href="/contact"><i class="fas fa-paper-plane mr-2"></i>Hire Me</a>
        </div>
        
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
  data: function () {
    return {
      myInfo: {},
      isActive: false,
    };
  },
  created: function () {
    this.getMyInfo();
  },
  methods: {
    getMyInfo: function () {
      axios.get("/professional?populate=*").then((response) => {
        console.log("my-info ->", response);
        this.myInfo = response.data;
        console.log("Console professional->", this.myInfo);
      });
    },
    toggleNavigation() {
      this.isActive = !this.isActive;
    },
  },
};
</script>


