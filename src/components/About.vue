<template>
  <div class="section about">
    <div class="description-container">
      <div class="about-wrapper">
        <p>Hi ! I’m Giovanni, a french designer. I’m studying at HETIC and I looking for a 6 month internship.<br>
          I have for passion the UX / UI design and 3D design.</p>
        <p>Feel free to contact me at : fainagiovanni@gmail.com !</p>
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
