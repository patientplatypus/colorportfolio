<template>
  <div class="about">
    <div class='welcometitle' v-bind:style='{ backgroundColor: usecolor3, color: usecolor4}'>
      <h1>
        Welcome to Q8Z8P!
      </h1>
    </div>
    <div class='explanationbox' v-bind:style='{ backgroundColor: usecolor4, color: usecolor5}'>
      <h3>
        Hello, my name is Peter Weyand and this is my website.
      </h3>
      <p>
        The primary purpose of this site is to demonstrate some of my software development skills and also advertise my portfolio. You may be wondering, why Q8Z8P? Well, because the domain was cheap and if you squint really hard the letters look like a face. Also, I thought just using my-name.domain is kind of dull.
      </p>
      <p>
        The motivation for this iteration of my site is to have a clean and functional design. I&#39;ve had interest in Google&#39;s flat material design concept and I thought I would emulate it. You will also find a color picker that allows you to choose five aesthetically pleasing colors, or choose your own, and set the website colors. Also also, there&#39;s a sound toy that changes the site&#39;s colors when the notes are hit! Neat, huh? If you find that the colors are destracting and are having trouble turning them off, feel free to refresh the site. The aesthetially pleasing color palette is courtesy of colormind.io, who has been kind enough to provide it for free. Given that it is a third party API it may take a second to load so you may have to be a little patient.
      </p>
      <p>
        This site is written in Vue.js, but I also enjoy React. If you are looking for a talented developer please feel free to contact me at pweyand@gmail.com. A previous site that I have written in a totally different style is available at http://www.q8z8p.com. Enjoy!
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to the Home Page!',
      counter: 0
    }
  },
  computed: mapGetters([
    'count',
    'recentHistory',
    'usecolor1',
    'usecolor2',
    'usecolor3',
    'usecolor4',
    'usecolor5',
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
}

.welcometitle{
  position: absolute;
  font-size: 5vh;
  font-weight: bolder;
  top: 5%;
  height: 20%;
  left: 10%;
  width: 80%;
  line-height: 100%;
}

.explanationbox{
  position: absolute;
  font-size: 2.5vh;
  font-weight: bold;
  top: 30%;
  height: 65%;
  padding-left: 2%;
  padding-right: 2%;
  left: 3%;
  width: 90%;
  overflow: hidden;
  overflow-y: scroll;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
