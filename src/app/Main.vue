<template>
  <div id="root">
    <main>
        <header-component></header-component>
        <hero-component></hero-component>
        <plano-component></plano-component>
        <modalidade-component></modalidade-component>
        <duvidas-component></duvidas-component>
        <footer-component></footer-component>
    </main>
  </div>
</template>

<script>

import Header from './Header.vue';
import Hero from './Hero.vue';
import Plano from './Plano.vue';
import Modalidade from './Modalidade.vue';
import Duvidas from './Duvidas.vue';
import Footer from './Footer.vue';

export default {
  name: 'Main',
  components: {
    'header-component': Header,
    'hero-component': Hero,
    'plano-component': Plano,
    'modalidade-component': Modalidade,
    'duvidas-component': Duvidas,
    'footer-component': Footer
  }
};

</script>
