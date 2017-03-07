<template>
  <div id="fullpage">
    <home></home>
    <works></works>
    <about></about>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'fullpage.js'
  import Home from './Home'
  import Works from './Works'
  import About from './About'

  export default {
    components: {
      Home,
      Works,
      About
    },
    mounted: function () {
      $('#fullpage').fullpage()
    }
  }
</script>
