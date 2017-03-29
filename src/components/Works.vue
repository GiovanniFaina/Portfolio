<template>
  <div class="section works">
    <div class="works-container">
      <v-touch
              class="works-arrows works-prev"
              v-on:tap="onPrevArrowTap"
      >
        <img src="/static/images/arrow.png">
      </v-touch>
      <v-touch
              class="works-arrows works-next"
              v-on:tap="onNextArrowTap"
      >
        <img src="/static/images/arrow.png">
      </v-touch>
      <ul class="works-list">
        <v-touch
            tag="li"
            v-for="(work, index) in works"
            class="works-list-container"
            v-on:swipeleft="onSwipeLeft"
            v-on:swiperight="onSwipeRight"
            :key="index"
            :data-index="index + 1"
        >
          <div class="works-list-wrapper">
            <router-link :to="{ name: 'work', params: { id: work.id } }">
              <p class="index semi-bold">0{{ work.id }}</p>
              <p class="title semi-bold">{{ work.title }}</p>
              <p class="type">{{ work.type }}</p>
            </router-link>
            <div class="cover-container">
              <img :src="work.cover">
            </div>
          </div>
        </v-touch>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { works } from '../utils/globals.js'

  export default {
    name: 'works',
    data: function () {
      return {
        works: [],
        isSmallScreen: false
      }
    },
    mounted: function () {
      $('.works-prev img').hide()
      works.query().then(response => {
        this.works = response.data
      })
    },
    updated: function () {
      $('.works-list-container').first().addClass('active')
    },
    methods: {
      onSwipeLeft: function (event) {
        let windowWidth = window.innerWidth
        let factor = $(event.target).data('index')
        $('.works-list-container').removeClass('active')
        $(event.target).next().addClass('active')
        if (factor < 5) {
          this.slideLeft(windowWidth, factor)
        }
        if (factor === 1) {
          $('.works-prev img').show()
        }
        if (factor === 4) {
          $('.works-next img').hide()
        }
      },
      onSwipeRight: function (event) {
        let windowWidth = window.innerWidth
        let factor = $(event.target).data('index')
        $('.works-list-container').removeClass('active')
        $(event.target).prev().addClass('active')
        if (factor > 1) {
          this.slideRight(windowWidth, factor)
        }
        if (factor === 2) {
          $('.works-prev img').hide()
        }
        if (factor === 5) {
          $('.works-next img').show()
        }
      },
      onPrevArrowTap: function (event) {
        let windowWidth = window.innerWidth
        let active = $('.works-list-container.active')
        let factor = active.data('index')
        $('.works-list-container').removeClass('active')
        active.prev().addClass('active')
        if (factor > 1) {
          this.slideRight(windowWidth, factor)
        }
        if (factor === 2) {
          $(event.target).hide()
        }
        if (factor === 5) {
          $('.works-next img').show()
        }
      },
      onNextArrowTap: function (event) {
        let windowWidth = window.innerWidth
        let active = $('.works-list-container.active')
        let factor = active.data('index')
        $('.works-list-container').removeClass('active')
        active.next().addClass('active')
        if (factor < 5) {
          this.slideLeft(windowWidth, factor)
        }
        if (factor === 4) {
          $(event.target).hide()
        }
        if (factor === 1) {
          $('.works-prev img').show()
        }
      },
      slideLeft: function (windowWidth, factor) {
        $('.works-list').css({
          'transform': 'translate3d(-' + windowWidth * factor + 'px, 0, 0)'
        })
      },
      slideRight: function (windowWidth, factor) {
        $('.works-list').css({
          'transform': 'translate3d(-' + windowWidth * (factor - 2) + 'px, 0, 0)'
        })
      }
    }
  }
</script>
