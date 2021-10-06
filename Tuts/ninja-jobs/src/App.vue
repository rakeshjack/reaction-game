<template>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link>
  </div>
  <br>
  <button class="btn btn-primary" @click="redirect" style="margin:5px;">Redirect</button><br>
  <button class="btn btn-success" @click="back" style="margin:5px;">Go Back</button><br>
  <button class="btn btn-default" @click="forward" style="margin:5px;">Go Forward</button><br>


  <router-view/>
</template>
<script>
 export default {
   methods: {
      redirect() {
        this.$router.push({name: 'Home'})
      },
      back() {
        this.$router.go(-1);
      },
      forward() {
        this.$router.go(1);
      }
   }
 }
</script>


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
  text-decoration: none;
  padding:10px;
  border-radius: 10px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
