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
        fixedElements: '.logo-container, .hamburger',
        afterLoad: function (anchorLink, index) {
          if (anchorLink === 'works') {
            $('.works-list-container').addClass('visible')
          } else if (anchorLink === 'home' || index === 1) {
            $('.pulse-container').addClass('visible')
          }
        },
        onLeave: function (index, nextIndex, direction) {
          if (nextIndex === 2) {
            $('.pulse-container').removeClass('visible')
            $('.logo-container a').removeClass('active')
            $('.animated-name').addClass('hidden')
            $('#menu ul').addClass('highlight-half').removeClass('highlight')
            $('#menu ul li').removeClass('highlight')
            $('#menu ul .menu-list-container').children().slice(0, 2).each(function (index, element) {
              $(element).addClass('highlight')
            })
            $('.works-list .works-list-container').addClass('visible')
          } else if (nextIndex === 3) {
            $('.pulse-container').removeClass('visible')
            $('.logo-container a').removeClass('active')
            $('.animated-name').addClass('hidden')
            $('#menu ul').addClass('highlight')
            $('#menu ul li').addClass('highlight')
          } else {
            $('.pulse-container').addClass('visible')
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

