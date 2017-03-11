<template>
  <div class="section about">
    <div class="description-container">
      <div class="about-wrapper">
        <p>Très belle description de moi en anglais, car je suis bilingue et j’ai beaucoup de chose à dire sur moi-même !<br>
          Genre que je suis à HETIC, que je suis designer 2D et 3D et que je travaille en tant que Mafieux !</p>
        <p>Une vie dantesque comme on dit par chez nous, en Normandie !<br>
          A ne pas confondre avec le payx de caux...</p>
        <div class="resume-container">
          <a href="#">
            Download my resume
            <span id="top" class="border-delimiter"></span>
            <span id="right" class="border-delimiter"></span>
            <span id="bottom" class="border-delimiter"></span>
            <span id="left" class="border-delimiter"></span>
          </a>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppFooter from './partials/AppFooter'

  export default {
    name: 'about',
    components: {
      AppFooter
    }
  }
</script>
