<template>
  <div class="section about">
    <div class="description-container">
      <div class="about-wrapper">
        <p>Hi ! I’m Giovanni, a french designer. I’m studying at HETIC and looking for a 6 month internship.<br>
          I have a passion for UX / UI design and 3D design.</p>
        <p>Feel free to contact me at : <a class="mailto" href="mailto:fainagiovanni@gmail.com">fainagiovanni@gmail.com</a> !</p>
        <div class="resume-container">
          <a target="_blank" href="/static/resources/cv.pdf">
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
