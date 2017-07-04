<template lang="html">
  <nav class="main-navbar">
    <div class="container-fluid">
      <div class="row">
        <!-- Logo -->
        <div class="nav-section nav-section-logo col-md-3 col-sm-4 col-xs-8">
          <div class="holder">
            <a class="logo-link" href="#">
              <div class="nav-link-holder">
                <img class="nav-logo" src="public/img/logo.png" alt="">
                <span class="app-name">Scrapbox</span>
              </div>
            </a>
          </div>
        </div>
        <!-- Search box -->
        <div class="nav-section nav-section-search col-md-6 col-sm-4 hidden-xs">
          <div class="holder">
            <input class="nav-search-box" type="text">
          </div>
        </div>
        <!-- Menu -->
        <div class="nav-section nav-section-menu col-md-3 col-sm-4 col-xs-4">
          <app-menu class="holder"></app-menu>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: {
    appMenu: Menu
  },
  data: () => {
    return {

    }
  }
}

</script>

<style lang="sass" scoped>
@import 'public/sass/_variables.sass'

.main-navbar
  background-color: $primary-color2
  color: #fff
  transition: all .25s
  border: none
  margin: 0
  height: 50px
  .container-fluid
    height: 100%
    .row
      height: 100%
      .nav-section
        display: flex
        flex-direction: column
        justify-content: center
        height: 100%
      .nav-section-logo
        .logo-link
          text-decoration: none
          padding: 0px 10px 0px 0px
          .nav-link-holder
            display: inline-block
            .nav-logo
              height: 40px
            .app-name
              color: #fff
              margin-left: 10px
              font-size: 20px
              position: relative
              top: 3px
          &:hover
            .app-name
              color: rgb(228, 228, 228)
      .nav-section-search
        .nav-search-box
          height: 34px
          border: none
          width: 100%
          border-radius: 4px
          padding: 0px 5px 0px 10px
          outline: none
          color: $primary-text-color
          background-color: rgba(255, 255, 255, 0.2)
          &:focus
            background-color: #fff
      .nav-section-menu
        text-align: right
        .holder
          height: 100%


</style>
