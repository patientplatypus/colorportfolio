<template>
  <div class="about">

    <div class='box0button'
    v-on:mouseover="barhover(0)"  v-on:mouseleave='barleave(0)'
    v-on:click="currentpage=0" v-bind:style='{ backgroundColor: currentpage===0?usecolor1:pagehover0===true?usecolor3:usecolor4, color:currentpage===0?usecolor3:usecolor1, cursor:(currentpage!=0&&pagehover0===true)?"pointer":"auto"}'>Introduction</div>
    <div class='box1button'
    v-on:mouseover="barhover(1)"  v-on:mouseleave='barleave(1)'
    v-on:click="currentpage=1" v-bind:style='{ backgroundColor: currentpage===1?usecolor1:pagehover1===true?usecolor3:usecolor4, color:currentpage===1?usecolor3:usecolor1, cursor:(currentpage!=1&&pagehover1===true)?"pointer":"auto"}'>Education</div>
    <div class='box2button'
    v-on:mouseover="barhover(2)"  v-on:mouseleave='barleave(2)'
    v-on:click="currentpage=2" v-bind:style='{ backgroundColor: currentpage===2?usecolor1:pagehover2===true?usecolor3:usecolor4, color:currentpage===2?usecolor3:usecolor1, cursor:(currentpage!=2&&pagehover2===true)?"pointer":"auto"}'>Work</div>
    <div class='box3button'
    v-on:mouseover="barhover(3)"  v-on:mouseleave='barleave(3)'
    v-on:click="currentpage=3" v-bind:style='{ backgroundColor: currentpage===3?usecolor1:pagehover3===true?usecolor3:usecolor4, color:currentpage===3?usecolor3:usecolor1, cursor:(currentpage!=3&&pagehover3===true)?"pointer":"auto"}'>Travel</div>
    <div class='box4button'
    v-on:mouseover="barhover(4)"  v-on:mouseleave='barleave(4)'
    v-on:click="currentpage=4" v-bind:style='{ backgroundColor: currentpage===4?usecolor1:pagehover4===true?usecolor3:usecolor4, color:currentpage===4?usecolor3:usecolor1, cursor:(currentpage!=4&&pagehover4===true)?"pointer":"auto"}'>Interests</div>

    <div class='box0' v-bind:style='{ fontWeight: "bold", fontSize:"3.5vh", backgroundColor: usecolor1, color: usecolor3, zIndex:currentpage===0?9999:10}'>
      <div class='positionrelative'>
        <div class='boxtitleholder'>
          <h1>
            About Me
          </h1>
        </div>
        <div class='boxtextholder3'>
          <p>
            By clicking on the tabs above you can learn about my past work history, which includes more details than my current resume - some of my accomplishments were more specific to other industries. I&#39;ve also two additional tabs - one for my travel experiences which includes pictures of mountains I&#39;ve climbed, and an interests section with links to some of my favorite novels.
          </p>
          <p>
            However, the most important thing that you should know about me is that I&#39;m a web developer living in Austin, Texas and I&#39;m currently available to hire. If you would like to get in contact with me please email at pweyand@gmail.com. Examples of my web development portfolio and a copy of my resume are available by clicking the Work button at the top of your screen.
          </p>
        </div>
      </div>
    </div>
    <div class='box1' v-bind:style='{ fontSize: "2.5vh", fontWeight: "bold", backgroundColor: usecolor1, color: usecolor3, zIndex:currentpage===1?9999:10}'>
      <div class='positionrelative'>
        <div class='boxtitleholder'>
          <h1>
            Education
          </h1>
        </div>
        <div class='boxtextholder2'>
          <h2>
            University of Illinois at Champaign-Urbana
          </h2>
          <p>
            While my primary education has alway been through doing, I also have a bachelors degree from my state university. I was very interested in the intersection of the social sciences with hard mathematics, and learning about how large groups of people behave. That&#39;s why I got a triple major in economics, statistics and mathematics. Some of my accomplishments:
          </p>
          <ul>
            <li>
              Led thesis project in Development Economics on macroeconomic conditions in Sub-Saharan Africa.
            </li>
            <li>
              Programmed stochastic volatility model of stock prices as a final project in Statistical Computing.
            </li>
            <li>
              Experience with Markov Chain Monte Carlo (MCMC) methods through graduate coursework in Statistics.
            </li>
            <li>
              National Science Foundation student fellowship to study game theory. Presented research project at local mathematics conference.
            </li>
          </ul>
          <h3>
            General Assembly Web Development Immersive
          </h3>
          <p>
            In addition to the above I have also graduated from the GA WDI course. I hope that the results from that education show in my portfolio work. You can view that by clicking the Work page on the topmost navigation bar.
          </p>
        </div>
      </div>
    </div>
    <div class='box2' v-bind:style='{ fontSize: "2.05vh", fontWeight: "bold", backgroundColor: usecolor1, color: usecolor3, zIndex:currentpage===2?9999:10}'>
      <div class='positionrelative'>
        <div class='boxtitleholder'>
          <h1>
            Work
          </h1>
        </div>
        <div class='boxtextholder2'>
          <h2>
            The Federal Reserve
          </h2>
          <p>
            I worked as a researcher at the DC office of the Federal Reserve in the Emerging Market Economies section. I helped resident economists with their research as well as prepared reports that helped guide monetary policy decisions. A few of my duties included the following:
          </p>
          <ul>
            <li>
              Produce charts and tables vital to reports presented during Pre-FOMC briefings to the Board of Governors.
            </li>
            <li>
              Responsible for creation and maintenance of entire statistical catalog in EME world - all relevant time series databased in Unix environment
            </li>
            <li>
              Pakistan and Vietnam analyst responsibilities include attending briefings at World Bank, covering breaking economic news.
            </li>
            <li>
              Voted on National Advisory Council intergovernmental panel on US international loans in coordination with Treasury.
            </li>
          </ul>
          <h2>
            Capital One
          </h2>
          <p>
            I have also worked as a senior financial analyst at Capital One, one of the largest banks in the US. My section covered finance for the digital efforts of Capital One, primarily in mobile banking. My duties include the following:
          </p>
          <ul>
            <li>
              Designed and implemented cost/capacity allocations process for Digital Finance ($150M+ budget). Made briefings for line of business stakeholders.
            </li>
            <li>
              Guided multiple business cases through Revenue Allocation Committee for Digital projects in excess of $1M.
            </li>
            <li>
              Collaborated with managers and sr. director on added analysis to incorporate ING acquisition funding into Digital Finance outlooks and allocations.
            </li>
            <li>
              Forecast Digital IT outlook with senior manager for month end, quarterly close, and yearly long term financial plan
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class='box3' v-bind:style='{fontSize: "3vh", backgroundColor: usecolor1, color: usecolor3, zIndex:currentpage===3?9999:10}'>
      <div class='positionrelative'>
        <div class='boxtitleholder'>
          <h1>
            World Travel
          </h1>
        </div>
        <div class='boxtextholder'>
          <p>
            During my working life I had saved up a bit of money and had used my knowledge of the stock market to work up a small portfolio. I was able to use my knowledge of options trading to finance a couple years traveling the world. I learned a great deal, many things you can&#39;t learn from sitting behind a desk, and had a great deal of fun. I traveled to over 20 countries, learned to scuba dive, climb in high altitudes and survive on my own in the wild. Below are a few of the mountains that I climbed in Nepal, China, and Peru. Click on the links to see bigger pictures in a new window!
          </p>
        </div>
        <div class='picturebox pbposition1' v-on:click='windowopener("http://68.media.tumblr.com/87a054d67ec0533fb006d398bf00d650/tumblr_o87wj9YwfJ1rw1i3co5_1280.jpg")'>
        </div>
        <div class='picturebox pbposition2' v-on:click='windowopener("http://68.media.tumblr.com/2dda034f85eb5cc4d4d3e4af9d1a0733/tumblr_n3v61lg50Z1rw1i3co1_1280.jpg")'>
        </div>
        <div class='picturebox pbposition3' v-on:click='windowopener("http://68.media.tumblr.com/5f2faffabcade8b33e7cf9ea198e2a72/tumblr_n3v8fvlXMb1rw1i3co1_1280.jpg")'>
        </div>
      </div>
    </div>
    <div class='box4' v-bind:style='{fontSize: "2.5vh", backgroundColor: usecolor1, color: usecolor3, zIndex:currentpage===4?9999:10}'>
      <div class='positionrelative'>
        <div class='boxtitleholder'>
          <h1>
            Some of My Favorite Books.
          </h1>
        </div>
        <div class="boxtextholder2">
          <p>
            Besides analytics, my other great passion in life has been reading. While my favorite book has always been the last one I&#39;ve read, this space is too small to list them all. But here are three that you might not have read, and have given me great pleasure. Click on the links to navigate to free books!
          </p>
          <ul>
            <li>
              <div v-bind:style='{ color: titlehover5===true?usecolor4:usecolor2, cursor:titlehover5===true?"pointer":"auto", fontStyle: "italic"}'
              v-on:mouseover="barhover(5)"  v-on:mouseleave='barleave(5)' v-on:click='windowopener("http://www.gutenberg.org/ebooks/145")'>
                Middlemarch by George Eliot
              </div>
              Perhaps one of the greatest, and in my opinion the greatest, love stories ever. It tells the story of three couples in rural England and how their different personalities dictate their feelings and actions. In most books you have a sense that what is happening is taking place on a stage and the sense of fiction lowers the stakes of any dramatic tension. This book almost feels supra-real, where even the most minor or fleeting movement could make or destroy the world.
            </li>
            <li>
              <div v-bind:style='{ color: titlehover6===true?usecolor4:usecolor2, cursor:titlehover6===true?"pointer":"auto", fontStyle: "italic"}'
              v-on:mouseover="barhover(6)"  v-on:mouseleave='barleave(6)'
              v-on:click='windowopener("http://www.gutenberg.org/ebooks/308")'>
                Three Men in a Boat by Jerome K. Jerome
              </div>
              This is about three clerical workers that go on a holiday boat ride on the Thames in Victorian England. Between humor that is very much like the style in a PG Wodehouse novel, there are life lessons that feel as true today as they were over when they were first written over 100 years ago. Definitely recommend!
            </li>
            <li>
              <div v-bind:style='{ color: titlehover7===true?usecolor4:usecolor2, cursor:titlehover7===true?"pointer":"auto", fontStyle: "italic"}'
              v-on:mouseover="barhover(7)"  v-on:mouseleave='barleave(7)' v-on:click='windowopener("http://fer3.com/arc/imgx/wind-sand-and-stars.pdf")'>
                Wind Sand and Stars by Antoine de Saint-Exupery
              </div>
              Written by the French author of The Little Prince, this is an autobiographical account of the author&#39;s experiences delivering the mail by plane at the birth of aeronautics. Every page is filled with danger and excitement, and, even in translation, the poetry of the language is inspiring. By far my favorite adventure novel!
            </li>
          </ul>
        </div>
      </div>
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
      counter: 0,
      currentpage: 0,
      pagehover0: false,
      pagehover1: false,
      pagehover2: false,
      pagehover3: false,
      pagehover4: false,
      titlehover5: false,
      titlehover6: false,
      titlehover7: false
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
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    windowopener(url){
      window.open(url);
    },
    barhover: function(number){
      if(number===0){
        console.log('inside if statement 1 in barhover');
        this.pagehover0=true;
        console.log('value of pagehover0 in if statement: ', this.pagehover);
      }else if(number===1){
        this.pagehover1=true;
      }else if(number===2){
        this.pagehover2=true
      }else if(number===3){
        this.pagehover3=true;
      }else if(number===4){
        this.pagehover4=true;
      }else if(number===5){
        this.titlehover5=true;
      }else if(number===6){
        this.titlehover6=true;
      }else if(number===7){
        this.titlehover7=true;
      }
      console.log('value of pagehover0: ', this.pagehover0);
      console.log('value of number: ', number);
    },
    barleave: function(number){
      if(number===0){
        this.pagehover0=false;
      }else if(number===1){
        this.pagehover1=false;
      }else if(number===2){
        this.pagehover2=false;
      }else if(number===3){
        this.pagehover3=false;
      }else if(number===4){
        this.pagehover4=false;
      }else if(number===5){
        this.titlehover5=false;
      }else if(number===6){
        this.titlehover6=false;
      }else if(number===7){
        this.titlehover7=false;
      }
    }
    // setcurrentpage: function(number){
    //   console.log('inside setcurrentpage and number is ', number);
    //   this
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.picturebox{
  position: absolute;
  width: 30%;
  height: 20%;
  top: 75%;
  background: red;
  text-align: center;
}

.pbposition1{
  left: 2.5%;
  background:
  linear-gradient(rgba(200,200,200,0.4), rgba(200,200,200,0.4)), url('http://68.media.tumblr.com/87a054d67ec0533fb006d398bf00d650/tumblr_o87wj9YwfJ1rw1i3co5_250.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.pbposition1:hover{
  background:
  linear-gradient(rgba(200,200,200,0), rgba(200,200,200,0)), url('http://68.media.tumblr.com/87a054d67ec0533fb006d398bf00d650/tumblr_o87wj9YwfJ1rw1i3co5_250.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.pbposition2{
  left: 35%;
  background:
  linear-gradient(rgba(200,200,200,.4), rgba(200,200,200,.4)), url('http://68.media.tumblr.com/2dda034f85eb5cc4d4d3e4af9d1a0733/tumblr_n3v61lg50Z1rw1i3co1_250.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.pbposition2:hover{
  background:
  linear-gradient(rgba(200,200,200,0), rgba(200,200,200,0)), url('http://68.media.tumblr.com/2dda034f85eb5cc4d4d3e4af9d1a0733/tumblr_n3v61lg50Z1rw1i3co1_250.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.pbposition3{
  left: 67.5%;
  background:
  linear-gradient(rgba(200,200,200,.4), rgba(200,200,200,.4)), url('http://68.media.tumblr.com/5f2faffabcade8b33e7cf9ea198e2a72/tumblr_n3v8fvlXMb1rw1i3co1_250.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.pbposition3:hover{
  background:
  linear-gradient(rgba(200,200,200,0), rgba(200,200,200,0)), url('http://68.media.tumblr.com/5f2faffabcade8b33e7cf9ea198e2a72/tumblr_n3v8fvlXMb1rw1i3co1_250.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}



.boxtitleholder{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  overflow: hidden;
  overflow-y: scroll;
  pointer-events: none;
  z-index: 10;
}

.boxtextholder{
  position: absolute;
  width: 100%;
  height: 50%;
  top: 20%;
  left: 0%;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9;
}

.boxtextholder2{
  position: absolute;
  width: 100%;
  height: 87%;
  top: 13%;
  left: 0%;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9;
}

.boxtextholder3{
  position: absolute;
  width: 100%;
  height: 80%;
  top: 20%;
  left: 0%;
  overflow: hidden;
  overflow-y: scroll;
  z-index: 9;
}

.box0button{
  position: absolute;
  top: 5%;
  left: 5%;
  width: 15%;
  height: 5%;
  font-size: 2vh;
  font-weight: bold;
  padding-top: 1%;
}

.box1button{
  position: absolute;
  top: 5%;
  left: 20%;
  width: 15%;
  height: 5%;
  font-size: 2vh;
  font-weight: bold;
  padding-top: 1%;
}

.box2button{
  position: absolute;
  top: 5%;
  left: 35%;
  width: 15%;
  height: 5%;
  font-size: 2vh;
  font-weight: bold;
  padding-top: 1%;
}

.box3button{
  position: absolute;
  top: 5%;
  left: 50%;
  width: 15%;
  height: 5%;
  font-size: 2vh;
  font-weight: bold;
  padding-top: 1%;
}

.box4button{
  position: absolute;
  top: 5%;
  left: 65%;
  width: 15%;
  height: 5%;
  font-size: 2vh;
  font-weight: bold;
  padding-top: 1%;
}

.box0{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 85%;
  width: 88%;
  z-index: 9999;
  padding-left: 1%;
  padding-right: 1%;
  overflow: hidden;
  overflow-y: scroll;
}

.box1{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 85%;
  width: 88%;
  z-index: 10;
  padding-left: 1%;
  padding-right: 1%;
  overflow: hidden;
  overflow-y: scroll;
}

.box2{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 85%;
  width: 88%;
  z-index: 10;
  padding-left: 1%;
  padding-right: 1%;
  overflow: hidden;
  overflow-y: scroll;
}

.box3{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 85%;
  width: 88%;
  z-index: 10;
  padding-left: 1%;
  padding-right: 1%;
  overflow: hidden;
  overflow-y: scroll;
}

.box4{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 85%;
  width: 88%;
  z-index: 10;
  padding-left: 1%;
  padding-right: 1%;
  overflow: hidden;
  overflow-y: scroll;
}

p, ul{
  text-align: left;
}

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
