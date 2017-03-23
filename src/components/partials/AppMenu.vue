<template>
  <div class="app-menu">
    <div
      class="hamburger"
      :class="{ active: isHamburgerActive }"
      @click="onHamburgerClick"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <nav id="menu">
      <ul class="medium">
        <div class="menu-list-container">
          <li>
            <a
                    href="#home"
                    data-menuanchor="home"
                    class="active"
                    @click="onLinksClick"
            >
              Home
            </a>
          </li>
          <li>
            <a
                    href="#works"
                    data-menuanchor="works"
                    @click="onLinksClick"
            >
              Works
            </a>
          </li>
          <li>
            <a
                    href="#about"
                    data-menuanchor="about"
                    @click="onLinksClick"
            >
              About
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'menu',
    data: function () {
      return {
        isHamburgerActive: false
      }
    },
    methods: {
      onHamburgerClick: function (event) {
        if (this.isHamburgerActive) {
          this.isHamburgerActive = false
          $('#menu').fadeOut()
        } else {
          this.isHamburgerActive = true
          $('#menu').fadeIn().css('display', 'flex')
        }
      },
      onLinksClick: function () {
        if (window.innerWidth < 1024) {
          this.isHamburgerActive = false
          $('#menu').fadeOut()
        }
      }
    }
  }
</script>
