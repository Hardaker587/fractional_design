<template>
  <header>
  
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#"><g-image src="~/assets/images/Logo_black.png"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Portfolio</b-nav-item>
        <b-nav-item href="#">Projects</b-nav-item>
        <b-nav-item href="#">Blog</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
<!--
    <ul>
      <li>
          <g-link to="/blogarchive">Blog</g-link>
      </li>
      <li>
        <g-link to="/projects">Projects</g-link>
      </li>
            <li>
        <a href="/#blog">Blogs</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
      <div class="Header__Profile__Image">
        <g-link to="/">
          <g-image src="~/assets/images/Logo_black.png"/>
        </g-link>
      </div>
    </ul>
-->
  </header>
</template>

<style lang="sass" scoped>
  header
    padding: 50px 0

    ul
      display: flex
      flex-direction: row
      align-items: center
      text-transform: uppercase

      li
        flex: 1 1 0
        color: #4DBA87
        font-size: 0.75rem
        font-weight: 700

  .Header__Profile__Image
    text-align: center
  img
    width: 150px !important
    border-radius: 0px
</style>
