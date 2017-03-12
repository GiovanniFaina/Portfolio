<template>
  <div class="section">
    <div class="works-container">
      <ul class="works-list">
        <li v-for="work in works">
          <div class="cover-container">
            <img :src="work.cover">
          </div>
          <router-link :to="{ name: 'work', params: { id: work.id } }">
            <p class="index semi-bold">0{{ work.id }}</p>
            <p class="title semi-bold">{{ work.title }}</p>
            <p class="type">{{ work.type }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { works } from '../utils/globals.js'

  export default {
    name: 'works',
    data: function () {
      return {
        works: []
      }
    },
    mounted: function () {
      works.query().then(response => {
        this.works = response.data
      })
    }
  }
</script>
