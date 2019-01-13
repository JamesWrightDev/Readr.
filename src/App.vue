<template>
  <div id="app">
    <!-- <router-link class='pr-3' to="/">HOME</router-link>
    <router-link to="/login">LOGIN</router-link> -->
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from './PageFooter'

export default{
    name: 'App',
    components:{
      PageFooter
    }

}
 
</script>
<style>
</style>
