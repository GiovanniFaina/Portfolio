<template>
  <div id="fullpage">
    <logo></logo>
    <app-menu></app-menu>
    <home></home>
    <works></works>
    <about></about>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'fullpage.js'
  import Logo from './partials/Logo'
  import AppMenu from './partials/AppMenu'
  import Home from './Home'
  import Works from './Works'
  import About from './About'

  export default {
    name: 'index',
    components: {
      Logo,
      AppMenu,
      Home,
      Works,
      About
    },
    mounted: function () {
      $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'works', 'about'],
        fixedElements: '.logo-container',
        onLeave: function (index, nextIndex, direction) {
          if (nextIndex === 2) {
            $('.logo-container a').removeClass('active')
            $('.animated-name').addClass('hidden')
            $('#menu ul').addClass('highlight-half').removeClass('highlight')
            $('#menu ul li').removeClass('highlight')
            $('#menu ul').children().slice(0, 2).each(function (index, element) {
              $(element).addClass('highlight')
            })
          } else if (nextIndex === 3) {
            $('.logo-container a').removeClass('active')
            $('.animated-name').addClass('hidden')
            $('#menu ul').addClass('highlight')
            $('#menu ul li').addClass('highlight')
          } else {
            $('.logo-container a').addClass('active')
            $('.animated-name').removeClass('hidden')
            $('#menu ul').removeClass('highlight').removeClass('highlight-half')
            $('#menu ul li').removeClass('highlight')
          }
        }
      })
    },
    destroyed: function () {
      $.fn.fullpage.destroy('all')
    }
  }
</script>
