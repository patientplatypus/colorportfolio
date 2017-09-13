<template>
  <div id="app">
    <div v-bind:style="{ backgroundColor: usecolor1 }" class='leftbox'>
      <div class='positionrelative'>
        <div class='lettercontainer letterposition1'>
          <div class='positionrelative'>
            <div class='q1' v-bind:style='{backgroundColor: usecolor2}'/>
            <div class='q2' v-bind:style='{backgroundColor: usecolor1}'/>
            <div class='q3' v-bind:style='{background: "linear-gradient("+usecolor3+","+usecolor4+")"}'/>
          </div>
        </div>
        <div class='lettercontainer letterposition2'>
          <div class='positionrelative'>
            <div class='eight11' v-bind:style='{backgroundColor: usecolor3}'/>
            <div class='eight12' v-bind:style='{backgroundColor: usecolor1}'/>
            <div class='eight13' v-bind:style='{backgroundColor: usecolor3}'/>
            <div class='eight14' v-bind:style='{backgroundColor: usecolor1}'/>
          </div>
        </div>
        <div class='lettercontainer letterposition3'>
          <div class='positionrelative'>
            <div class='z1' v-bind:style='{backgroundColor: usecolor5}'/>
            <div class='z2' v-bind:style='{backgroundColor: usecolor4}'/>
            <div class='z3' v-bind:style='{background: "linear-gradient(-45deg,transparent 45%,"+usecolor2+" 45%, "+usecolor2+" 47.5%,"+usecolor3+" 50%,"+usecolor2+" 52.5%,"+usecolor2+" 55%, transparent 55%)"}'/>
            <div class='z4' v-bind:style='{backgroundColor: usecolor2}'/>
          </div>
        </div>
        <div class='lettercontainer letterposition4'>
          <div class='positionrelative'>
            <div class='eight11' v-bind:style='{backgroundColor: usecolor4}'/>
            <div class='eight12' v-bind:style='{backgroundColor: usecolor1}'/>
            <div class='eight13' v-bind:style='{backgroundColor: usecolor4}'/>
            <div class='eight14' v-bind:style='{backgroundColor: usecolor1}'/>
          </div>
        </div>
        <div class='lettercontainer letterposition5'>
          <div class='positionrelative'>
            <div class='p1' v-bind:style='{backgroundColor: usecolor5}'/>
            <div class='p2' v-bind:style='{backgroundColor: usecolor5}'/>
            <div class='p3' v-bind:style='{backgroundColor: usecolor1}'/>
            <div class='p4' v-bind:style='{background: "linear-gradient("+usecolor5+","+usecolor4+")"}'/>
          </div>
        </div>
      </div>
    </div>
    <div v-bind:style="{ backgroundColor: usecolor5 }" v-if='playinbackground===false' class='topbox'>
      <router-link v-on:click.native='SetCurrentPage("home")' v-bind:style="{ color:currentpage==='home'?usecolor3:usecolor2}" class='routerlink' to="/">Home</router-link>
      <router-link v-on:click.native='SetCurrentPage("about")' v-bind:style="{ color:currentpage==='about'?usecolor3:usecolor2}" class='routerlink' to="/about">About</router-link>
      <router-link v-on:click.native='SetCurrentPage("work")' v-bind:style="{ color:currentpage==='work'?usecolor3:usecolor2}" class='routerlink' to="/work">Work</router-link>
      <router-link v-on:click.native='SetCurrentPage("color")' v-bind:style="{ color:currentpage==='color'?usecolor3:usecolor2}" class='routerlink' to="/color">Color</router-link>
      <router-link  v-on:click.native='SetCurrentPage("sound")' v-bind:style="{ color:currentpage==='sound'?usecolor3:usecolor2}" class='routerlink' to="/sound">Sound</router-link>
    </div>
    <div v-bind:style="{ backgroundColor: usecolor5 }" v-if='playinbackground===true' class='topbox'>
      <router-link v-on:click.native='SetCurrentPage("sound/home")' v-bind:style="{ color:currentpage==='sound/home'?usecolor3:usecolor2}" class='routerlink' to="/sound/home">Home</router-link>
      <router-link v-on:click.native='SetCurrentPage("about")' v-bind:style="{ color:currentpage==='sound/about'?usecolor3:usecolor2}" class='routerlink' to="/sound/about">About</router-link>
      <router-link v-on:click.native='SetCurrentPage("work")' v-bind:style="{ color:currentpage==='sound/work'?usecolor3:usecolor2}" class='routerlink' to="/sound/work">Work</router-link>
      <router-link v-on:click.native='SetCurrentPage("sound/color")' v-bind:style="{ color:currentpage==='sound/color'?usecolor3:usecolor2}" class='routerlink' to="/sound/color">Color</router-link>
      <router-link  v-on:click.native='SetCurrentPage("sound")' v-bind:style="{ color:currentpage==='sound'?usecolor3:usecolor2}" class='routerlink' to="/sound">Sound</router-link>
    </div>
    <router-view v-bind:style="{ backgroundColor: usecolor2 }" class='contentbox'></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return{
    }
  },
  computed: {
    ...mapGetters([
      'count',
      'recentHistory',
      'savedString',
      'color1',
      'color2',
      'color3',
      'color4',
      'color5',
      'usecolor1',
      'usecolor2',
      'usecolor3',
      'usecolor4',
      'usecolor5',
      'playinbackground',
      'currentpage'
    ])
  },
  methods: {
    ...mapActions([
      'saveString',
      'color1Save',
      'color2Save',
      'color3Save',
      'color4Save',
      'color5Save',
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
      'AddShapeArray',
      'SubtractShapeArray',
      'ResetShapeArray',
      'ResetNoteArray',
      'AddNoteArray',
      'SubtractNoteArray',
      'BackgroundPlay',
      'SetCurrentPage'
    ]),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*grid layout top level */
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 10vh 90vh;
  grid-gap: 0vw;
  overflow: hidden;
  background-color: #fff;
  color: #444;
}
.routerlink{
  font-size: 5vh;
  margin-left: 2.5%;
  margin-right: 2.5%;
  font-weight: bold;
  text-decoration: none;
}
.leftbox{
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: tomato;
}
.topbox{
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: skyblue;
  padding-top: 0.75%;
}
.contentbox{
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: grey;
}
.positionrelative{
  position: relative;
  height: 100%;
  width: 100%;
}
.lettercontainer{
  position: absolute;
  width: 80%;
  height: 15%;
  background: transparent;
}
.letterposition1{
  top: 2.5%;
  left:10%;
}
.letterposition2{
  top: 22.5%;
  left:10%;
}
.letterposition3{
  top: 42.5%;
  left:10%;
}
.letterposition4{
  top: 62.5%;
  left:10%;
}
.letterposition5{
  top: 82.5%;
  left:10%;
}
.q1{
  position: absolute;
  top: 5%;
  left: 10%;
  width: 80%;
  height: 90%;
  border-radius: 20%;
  z-index: 1;
}
.q2{
  position: absolute;
  top: 10%;
  left: 15%;
  width: 70%;
  height: 80%;
  border-radius: 25%;
  z-index: 2;
}
.q3{
  position: absolute;
  top: 70%;
  left: 40%;
  width: 30%;
  height: 50%;
  z-index: 3;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
}
.eight11{
  position: absolute;
  top: 5%;
  left: 10%;
  height: 40%;
  width: 80%;
  border-radius: 30%;
  z-index: 1;
}
.eight12{
  position: absolute;
  top: 10%;
  left: 15%;
  height: 30%;
  width: 70%;
  border-radius: 30%;
  z-index: 1;
}
.eight13{
  position: absolute;
  top: 45%;
  height: 50%;
  left: 10%;
  width: 80%;
  border-radius: 20%;
  z-index: 1;
}
.eight14{
  position: absolute;
  top: 50%;
  height: 40%;
  left: 15%;
  width: 70%;
  border-radius: 20%;
  z-index: 1;
}
.z1{
  position: absolute;
  top: 5%;
  left: 10%;
  width: 80%;
  height: 10%;
  clip-path: polygon(0 0, 0 100%, 95% 0);
}
.z2{
  position: absolute;
  top: 65%;
  left: 10%;
  width: 80%;
  height: 30%;
  clip-path: polygon(100% 0, 15% 100%, 100% 100%);
}
.z3{
 position: absolute;
 top: 5%;
 height: 90%;
 left: 10%;
 width: 80%;
 z-index: 10;
}
.p1{
  position: absolute;
  left: 10%;
  height: 90%;
  width: 5%;
  top: 5%;
}
.p2{
  position: absolute;
  left: 15%;
  width: 80%;
  height: 40%;
  border-radius: 20%;
  top:5%;
}
.p3{
  position: absolute;
  height: 30%;
  top: 10%;
  left: 18%;
  width: 72%;
  border-radius: 20%;
}
.p4{
  position: absolute;
  height: 25.15%;
  top: 70%;
  left: 9.85%;
  width: 20%;
  clip-path: polygon(0 0, 25% 0, 80% 100%, 0% 100%);
}


@import './assets/main.css';
</style>
