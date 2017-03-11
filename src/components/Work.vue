<template>
  <div class="work">
    <div class="work-wrapper">
      <div class="back-button">
        <router-link :to="{ name: 'index', hash: '#works' }">
          <img src="/static/images/back.png"> Back
        </router-link>
      </div>
      <div class="work-description-container">
        <div class="work-description-wrapper">
          <h1 class="medium">{{ work.title }}</h1>
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
              <img class="work-images" :src="image">
            </li>
        </ul>
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
        work: {}
      }
    },
    mounted: function () {
      $('nav, .logo-container').remove()
      works.query().then(response => {
        this.works = response.data
        this.work = this.works.find(this.findWorkById)
      })
      $('.work').scroll(function (event) {
        console.log(event)
      })
    },
    updated: function () {
      $('.work-images').each((index, element) => {
        let width = element.naturalWidth
        let height = element.naturalHeight
        let imageClass = this.isImagePortrait(width, height) ? 'half-width' : 'full-width'
        $(element).parent().addClass(imageClass)
      })
    },
    methods: {
      findWorkById: function (work) {
        return work.id === parseInt(this.$route.params.id)
      },
      isImagePortrait: function (width, height) {
        return height > width
      }
    }
  }
</script>
