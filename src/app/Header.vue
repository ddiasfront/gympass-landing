<template>
  <header class="headerbar container-fluid">    
    <b-navbar toggleable toggle-breakpoint="md">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <img src="assets/logo.png" alt="">
      </b-link>
      <b-collapse is-nav id="nav_collapse" >
          <menu-component></menu-component>
          <user-component></user-component>
      </b-collapse>
    </b-navbar>
  </header>

  
</template>

<script>

import Menu from './Menu.vue';
import User from './User.vue';

export default {
  name: 'Header',
   components: {
    'menu-component': Menu,
    'user-component': User,
  },

};
</script>
