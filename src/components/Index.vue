<template>
  <div id="fullpage">
    <logo></logo>
    <app-menu></app-menu>
    <home></home>
    <works-responsive v-if="isSmallScreen"></works-responsive>
    <works v-else></works>
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
  import WorksResponsive from './WorksResponsive'
  import About from './About'

  export default {
    name: 'index',
    components: {
      Logo,
      AppMenu,
      Home,
      Works,
      WorksResponsive,
      About
    },
    data: function () {
      return {
        isSmallScreen: false
      }
    },
    beforeMount: function () {
      let windowWidth = window.innerWidth
      let windowHeight = window.innerHeight
      this.isSmallScreen = windowWidth / windowHeight < 1.34 || windowWidth <= 800
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
            $('#menu ul').children().slice(0, 2).each(function (index, element) {
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
        },
        afterResize: function () {
          let windowWidth = window.innerWidth
          let windowHeight = window.innerHeight
          this.isSmallScreen = windowWidth / windowHeight < 1.34 || windowWidth <= 800
        }
      })
    },
    destroyed: function () {
      $.fn.fullpage.destroy('all')
    }
  }
</script>
