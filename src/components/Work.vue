<template>
  <div class="work">
    <div class="work-wrapper">
      <div class="back-button">
        <router-link :to="{ name: 'index', hash: '#works' }">
          <img src="/static/images/arrow.png"> Back
        </router-link>
      </div>
      <div class="work-description-container">
        <div class="work-description-wrapper">
          <h1 class="semi-bold">{{ work.title }}</h1>
          <div class="separator"></div>
          <div class="content">
            <p v-for="paragraph in work.description">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="images-list-container">
        <ul>
            <li class="half-width" v-for="image in work.images">
              <img class="work-images" v-lazy="image">
            </li>
        </ul>
    </div>
    <div class="navigation medium">
      <div class="arrows-container prev">
        <router-link
                v-if="isFirstWork"
                :to="{ name: 'work', params: { id: work.id - 1 } }"
                class="arrows"
        >
          <p>{{ works[work.id - 2].title }}</p>
          <span class="hover-line"></span>
        </router-link>
      </div>
      <div class="arrows-container next">
        <router-link
                v-if="isLastWork"
                :to="{ name: 'work', params: { id: work.id + 1 } }"
                class="arrows"
        >
          <p>{{ works[work.id].title }}</p>
          <span class="hover-line"></span>
        </router-link>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { works } from '../utils/globals.js'
  import AppFooter from './partials/AppFooter'

  export default {
    name: 'work',
    components: {
      AppFooter
    },
    data: function () {
      return {
        works: [],
        work: {},
        isFirstWork: false,
        isLastWork: false
      }
    },
    mounted: function () {
      $('nav, .logo-container').remove()
      $('.images-list-container ul li').hide()
      works.query().then(response => {
        this.works = response.data
        this.work = this.works.find(this.findWorkById)
        this.isFirstWork = parseInt(this.$route.params.id) !== 1
        this.isLastWork = parseInt(this.$route.params.id) !== this.works.length
      })
      this.$Lazyload.$on('loaded', this.toggleImagesWidth)
    },
    updated: function () {
      let workDescription = document.querySelector('.work-description-container')
      let workDescriptionOffsetTop = workDescription.offsetTop
      let workDescriptionOffsetHeight = workDescription.offsetHeight
      let workDescriptionOffsetBottom = workDescriptionOffsetHeight + workDescriptionOffsetTop
      $('.images-list-container').css('margin-top', workDescriptionOffsetBottom)
      $(window).scroll((event) => {
        let windowOffsetTop = window.pageYOffset
        this.toggleWorkDescriptionVisibility(windowOffsetTop, workDescriptionOffsetTop, workDescriptionOffsetBottom)
      })
    },
    destroyed: function () {
      this.$off()
    },
    watch: {
      '$route' (to, from) {
        this.work = this.works.find(this.findWorkById)
        this.isFirstWork = parseInt(to.params.id) !== 1
        this.isLastWork = parseInt(to.params.id) !== this.works.length
        $('.work-description-container').css({
          'display': 'block'
        })
      }
    },
    methods: {
      findWorkById: function (work) {
        return work.id === parseInt(this.$route.params.id)
      },
      toggleImagesWidth: function ({ el, naturalHeight, naturalWidth }) {
        let imageClass = this.isImagePortrait(naturalWidth, naturalHeight) ? 'half-width' : 'full-width'
        $(el).parent().removeClass('half-width').removeClass('full-width').addClass(imageClass)
      },
      isImagePortrait: function (width, height) {
        return height > width
      },
      toggleWorkDescriptionVisibility: function (windowOffsetTop, workDescriptionOffsetTop, workDescriptionOffsetBottom) {
        if (windowOffsetTop < workDescriptionOffsetBottom) {
          let ratio = windowOffsetTop / workDescriptionOffsetBottom
          let percentage = ratio * 100
          $('.work-description-container').css({
            'opacity': 1 - ratio,
            'transform': 'translate3d(-50%, -' + percentage + '%, 0)',
            'display': 'block'
          })
        } else if (windowOffsetTop > workDescriptionOffsetBottom) {
          $('.work-description-container').css({
            'opacity': 0,
            'display': 'none'
          })
        }
      }
    }
  }
</script>
