<template>
  <div class="project">
    
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
