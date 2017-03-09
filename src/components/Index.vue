<template>
  <div id="fullpage">
    <app-menu></app-menu>
    <home></home>
    <works></works>
    <about></about>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'fullpage.js'
  import AppMenu from './partials/AppMenu'
  import Home from './Home'
  import Works from './Works'
  import About from './About'

  export default {
    components: {
      AppMenu,
      Home,
      Works,
      About
    },
    mounted: function () {
      $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'works', 'about'],
        onLeave: function (index, nextIndex, direction) {
          if (nextIndex === 2) {
            $('#menu ul').addClass('highlight-half').removeClass('highlight')
            $('#menu ul li').removeClass('highlight')
            $('#menu ul').children().slice(0, 2).each(function (index, element) {
              $(element).addClass('highlight')
            })
          } else if (nextIndex === 3) {
            $('#menu ul').addClass('highlight')
            $('#menu ul li').addClass('highlight')
          } else {
            $('#menu ul').removeClass('highlight').removeClass('highlight-half')
            $('#menu ul li').removeClass('highlight')
          }
        }
      })
    }
  }
</script>
