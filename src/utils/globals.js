import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const works = Vue.resource('/static/resources/works.json')
