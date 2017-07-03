<template>
  <section id="modalidade">
    <header>
      <h3>Modalidades Disponíveis</h3>
    </header>
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-12">
        <input type="checkbox" v-model="checked" v-on:click="checkedFunction"><span class="tipo-moda">Modalidades aquáticas</span>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <input type="checkbox" v-model="checked2" v-on:click="checkedFunction"><span class="tipo-moda">Modalidades não aquáticas</span>
      </div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="modalidade in modalidadesdisplay">
        <article>
          <header><h4 v-bind:class="modalidade.tyh4e">{{modalidade.title}}</h4></header>
          <p>{{modalidade.description}}</p>
        </article>
      </swiper-slide>
     
    </swiper>
    <div class="containerpager">
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Modalidade',
  data() {
      return {
      modalidades: [],
      modalidadesdisplay: [],
      aquatics: [],
      nonaqua: [],
      checked: false,
      checked2: false,
      swiperOption: {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 4,
            spaceBetween: 20,
            breakpoints: {     
              1200: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1190: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              }
            }
          },

      };
    },
    methods: {   
    getAqua: function(modalidades) {
     return modalidades.type == 'aquatic';
    },
    getNonaqua: function(modalidades){
    return modalidades.type == 'non-aquatic';
    },
    emitAqua: function() {
    this.modalidadesdisplay = this.aquatics;
    },
    emitNonaqua: function() {
    this.modalidadesdisplay = this.nonaqua;
    },
    checkedFunction: function() {
        if (this.checked == true && this.checked2 == false ) {
          this.emitAqua();
        }
        else if (this.checked2 == true && this.checked == false){
          this.emitNonaqua();
        }
        else if (this.checked2 == true && this.checked == true) {
           this.modalidadesdisplay = this.modalidades;
        }
        else {
          this.modalidadesdisplay = this.modalidades;
        }
      }
    },
    created() {
      this.axios.get('./classes.json').then((response) => {
        let modalidades = response.data.classes;
        this.modalidades = modalidades;
        this.modalidadesdisplay = modalidades;
        this.aquatics = modalidades.filter(this.getAqua);
        this.nonaqua = modalidades.filter(this.getNonaqua);
      })
    },
};
</script>
