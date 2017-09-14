<template>
  <div class="sound">

    <div class='playinbackgroundbutton playinbackgroundhover' v-bind:style='{ fontSize: "2vh", cursor: "pointer"}' v-if='playinbackground===false && localplaycheck===false' v-on:click='timeoutbackground()'>
      <p>
        Play in Background!
      </p>
    </div>
    <div class='playinbackgroundbutton' v-bind:style='{
      }' v-if='playinbackground===true'>
      <div class='positionrelative'>
        <div class='playinbackgroundbuttonsmall playinbackgroundhover' v-bind:style='{ fontSize: "1.2vh", cursor: "pointer"}' v-on:click='timeoutbackground()'>
          <p>
            Stop Playing in Background.
          </p>
        </div>
        <div v-if='playing==="stop"' v-on:click='playcontrols(playing, "play")' class='playbutton2 cursorpointer'>
          Play!
        </div>
        <div v-if='playing==="play"' v-on:click='playcontrols(playing, "stop")' class='stopbutton2 cursorpointer'>
          Stop!
        </div>
      </div>
    </div>

    <div v-if='currentpage!="sound"'>
      <router-view v-bind:style="{position: 'relative', height: '90vh', width: '100%', backgroundColor: usecolor5 }"></router-view>
    </div>

    <div v-bind:style='{ position: "relative", height: "100%", width: "100%"}'>
      <div class="notecontrols">
        <div class='positionrelative'>
          <div class='noteboxtitle'>
            Note Controls
          </div>
          <div v-if='playing==="stop"' v-on:click='playcontrols(playing, "play")' class='playbutton cursorpointer'>
            Play!
          </div>
          <div v-if='playing==="play"' v-on:click='playcontrols(playing, "stop")' class='stopbutton cursorpointer'>
            Stop!
          </div>
          <div class='speedslider'>
            <p>
              Adjust Play Speed.
            </p>
            <vue-slider class='flipvueslider' ref="slider" :tooltip="false" :max="8000" :min='5000' v-model="timetoend"></vue-slider>
          </div>
          <div class='notemanager'>
            <div class='positionrelative'>
              <div v-on:click='deletenotes("one")' class='delete1note cursorpointer'>
                <p>
                  {{onenoteprompt}}
                </p>
              </div>
              <div v-on:click='deletenotes("all")' class='deleteallnotes cursorpointer'>
                <p>
                  Delete All Notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='notebar' ref='notecanvascontainer' v-on:mousemove="notebarover($event)"  v-on:mouseleave='notebarleave()' v-on:click='placenote()' v-bind:style='{cursor: cursor}'>
        <div class='positionrelative'>
          <div v-bind:style="{ backgroundColor: highlightbar===1?'gold':''}" class='noteline nlposition1'/>
          <div v-bind:style="{ backgroundColor: highlightbar===2?'gold':''}"  class='noteline nlposition2'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===3?'gold':''}" class='noteline nlposition3'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===4?'gold':''}" class='noteline nlposition4'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===5?'gold':''}" class='noteline nlposition5'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===6?'gold':''}" class='noteline nlposition6'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===7?'gold':''}" class='noteline nlposition7'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===8?'gold':''}" class='noteline nlposition8'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===9?'gold':''}" class='noteline nlposition9'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===10?'gold':''}" class='noteline nlposition10'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===11?'gold':''}" class='noteline nlposition11'/>
          <div  v-bind:style="{ backgroundColor: highlightbar===12?'gold':''}" class='noteline nlposition12'/>
          <div v-for="show in shapearray">
            <div v-bind:style='{cursor:deletingnote===true?"pointer":"none"}' v-html="show.coloredshape" v-on:click='deletethisnote($event)'></div>
          </div>
          <div v-if='shapechosen!=-1 && colorchosen!=-1 && overnotebar===true' v-html="notebarhover"/>
          <canvas class='notecanvas' ref="notecanvas" ></canvas>
        </div>
      </div>
      <div class='notemaker'>
        <div class='noteboxtitle'>
          Note Maker
        </div>
        <div class='positionrelative'>
          <div class='instructions' v-bind:style='{ fontSize: noteFont + "vh"}'>
            {{instructions}}
          </div>
          <div class='pickcolor1 cursorpointer' v-on:click="notemaker('color', 1)" v-bind:style='{backgroundColor: usecolor1}'></div>
          <div class='pickcolor2 cursorpointer'
          v-on:click="notemaker('color', 2)" v-bind:style='{backgroundColor: usecolor2}'></div>
          <div class='pickcolor3 cursorpointer'
          v-on:click="notemaker('color', 3)" v-bind:style='{backgroundColor: usecolor3}'></div>
          <div class='pickcolor4 cursorpointer'
          v-on:click="notemaker('color', 4)" v-bind:style='{backgroundColor: usecolor4}'></div>
          <div class='pickcolor5 cursorpointer'
          v-on:click="notemaker('color', 5)" v-bind:style='{backgroundColor: usecolor5}'></div>
          <div class='shape1 cursorpointer'
          v-on:click="notemaker('shape', 1)"></div>
          <div class='shape2 cursorpointer'
          v-on:click="notemaker('shape', 2)"></div>
          <div class='shape3 cursorpointer'
          v-on:click="notemaker('shape', 3)"></div>
          <div class='shape4 cursorpointer'
          v-on:click="notemaker('shape', 4)"></div>
          <div class='shape5 cursorpointer'
          v-on:click="notemaker('shape', 5)"></div>
          <div v-if='shapechosen!=-1||colorchosen!=-1' class='builtnote' v-bind:style='{clipPath: shapepath, backgroundColor: colorchosen===1?usecolor1:colorchosen===2?usecolor2:colorchosen===3?usecolor3:colorchosen===4?usecolor4:usecolor5}'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vueSlider from 'vue-slider-component'
import './sound.css'
// var Sound = require('./SoundClass.js');
import Sound from './SoundClass.js'
export default {
  name: 'sound',
  components: {
    vueSlider
  },
  data () {
    return {
      instructions: 'Pick a Color and a Shape!',
      audiocontext: null,
      audiooscillator: null,
      audiogain: null,
      audiocontextarray: [],
      shapechosen: -1,
      playing: "stop",
      colorchosen: -1,
      shapepath: '',
      noteFont: 2,
      overnotebar: false,
      notebarx: -1,
      notebarhovernumber: null,
      cursor: 'auto',
      onenoteprompt: 'Delete One Note.',
      // notearray: [[], [], [], [],
      //             [], [], [], [],
      //             [], [], [], []],
      highlightbar: -1,
      notebary: -1,
      builtcolor: 'black',
      notebarhover: ``,
      noteshow: [],
      startingtime: null,
      timetoend: 5000,
      timetoendtime: null,
      shownoteline: false,
      interval2: 1000/120,
      now: null,
      delta: null,
      then: Date.now(),
      overamount: null,
      animationframebar: undefined,
      usetime: 0,
      notelowerbound: null,
      noteupperbound: null,
      firenote1: true,
      firenote2: true,
      firenote3: true,
      firenote4: true,
      firenote5: true,
      firenote6: true,
      firenote7: true,
      firenote8: true,
      firenote9: true,
      firenote10: true,
      firenote11: true,
      firenote12: true,
      localplaycheck: false,
      deletingnote: false,
    }
  },
  created(){
    console.log('Sound has been created!');
    this.audiocontext = new (window.AudioContext || window.webkitAudioContext)();
    // function voiceMute() {
    //   if(mute.id == "") {
    //     gainNode.gain.value = 0;
    //     mute.id = "activated";
    //     mute.innerHTML = "Unmute";
    //   } else {
    //     gainNode.gain.value = 1;
    //     mute.id = "";
    //     mute.innerHTML = "Mute";
    //   }
    // }
  },
  beforeDestroy(){
    this.audiocontext.close();
  },
  watch:{
    timetoend: function(){
      this.timetoendtime = Date.now();
      this.firenote1 = false;
      this.firenote2 = false;
      this.firenote3 = false;
      this.firenote4 = false;
      this.firenote5 = false;
      this.firenote6 = false;
      this.firenote7 = false;
      this.firenote8 = false;
      this.firenote9 = false;
      this.firenote10 = false;
      this.firenote11 = false;
      this.firenote12 = false;
      setTimeout(()=>{
        if(Date.now() - this.timetoendtime>=480){
          this.firenote1 = true;
          this.firenote2 = true;
          this.firenote3 = true;
          this.firenote4 = true;
          this.firenote5 = true;
          this.firenote6 = true;
          this.firenote7 = true;
          this.firenote8 = true;
          this.firenote9 = true;
          this.firenote10 = true;
          this.firenote11 = true;
          this.firenote12 = true;
        }
      }, 500)
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
      'shapearray',
      'notearray',
      'currentpage',
      'playinbackground'
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
    timeoutbackground: function(){
      var currentpageholder = this.currentpage;
      if(currentpageholder === 'sound/color'){
        currentpageholder = 'color'
      }else if(currentpageholder === 'sound/work' ){
        currentpageholder = 'work'
      }else if(currentpageholder === 'sound/about'){
        currentpageholder = 'about'
      }else if(currentpageholder === 'sound/home'){
        currentpageholder = 'home'
      }else if(currentpageholder === 'color'){
        currentpageholder = 'sound/color'
      }else if(currentpageholder === 'work'){
        currentpageholder = 'sound/work'
      }else if(currentpageholder === 'about'){
        currentpageholder = 'sound/about'
      }else if(currentpageholder === 'home'){
        currentpageholder = 'sound/home'
      }
      setTimeout(()=>{
        if(this.playinbackground===true){
          this.localplaycheck = true;
        }
        this.BackgroundPlay();
        this.SetCurrentPage(currentpageholder);
      }, 0)
    },
    deletethisnote: function(event){

      var left = 'left: '+event.target.style.left;
      var top = 'top: '+event.target.style.top;
      top = top.substring(0, top.length - 2);
      var leftstring = String(event.target.style.left);
      var slicedleft = 'left: ' + leftstring.substring(0, leftstring.length - 1) + '%;';

      if (slicedleft === 'left: 7.75%;'){
        var index = 0;
      }else if (slicedleft === 'left: 15.25%;'){
        var index = 1;
      }else if (slicedleft === 'left: 22.75%;'){
        var index = 2;
      }else if (slicedleft === 'left: 30.25%;'){
        var index = 3;
      }else if (slicedleft === 'left: 37.75%;'){
        var index = 4;
      }else if (slicedleft === 'left: 45.25%;'){
        var index = 5;
      }else if (slicedleft === 'left: 52.75%;'){
        var index = 6;
      }else if (slicedleft === 'left: 60.25%;'){
        var index = 8;
      }else if (slicedleft === 'left: 67.75%;'){
        var index = 9;
      }else if (slicedleft === 'left: 75.25%;'){
        var index = 10;
      }else if (slicedleft === 'left: 82.75%;'){
        var index = 11;
      }else{//90.25
        var index = 12;
      }

      var shape = event.target.style.clipPath;
      var color = event.target.style.backgroundColor;

      for(var x = 0; x < this.shapearray.length; x++ ){
        var thisnote = this.shapearray[x]['coloredshape'];
        if (thisnote.includes(left)&&thisnote.includes(top)){
          this.SubtractShapeArray(x);
          break;
        }
      }

      var searchnotearray = this.notearray[index]

      for(var x = 0; x < searchnotearray.length; x++){
        console.log('value of searchnotearray[x]', searchnotearray[x]);
        if (searchnotearray[x]['builtcolor'] === color && searchnotearray[x]['shapepath'] === shape){
          this.SubtractNoteArray({index12: index, indexsmall: x})
          break;
        }
      }
      // console.log('value of this.notearray', this.notearray);
    },
    deletenotes: function(howmany){
      if(howmany === 'all'){
        this.ResetShapeArray();
        this.ResetNoteArray();
      }
      if(howmany === 'one'){
        if(this.onenoteprompt === "Delete One Note."){
          this.onenoteprompt = 'Click The Note(s) You Want to Delete. Click Here When Finished.'
          this.deletingnote = true;
        }else{
          this.onenoteprompt = 'Delete One Note.'
          this.deletingnote = false;
        }
      }
    },
    playcontrols: function(prevplay, playstate){
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

      console.log('inside playcontrols');
      this.playing = playstate;
      var animationframebar;
      if(prevplay==='stop'){
        console.log('date.now: ', Date.now());
        this.startingtime = Date.now();
        this.shownoteline = true;
        console.log('canvas: ', this.$refs.notecanvas);
        console.log('inside animationframebar');
        this.animationframebar = requestAnimationFrame(this.drawnotebar.bind(this));
        console.log('value of animationframebar: ', animationframebar);
      }
      if(playstate === 'stop' && prevplay === 'play'){
        cancelAnimationFrame(this.animationframebar);
        this.shownoteline = false;
        var c=this.$refs.notecanvas;
        var ctx=c.getContext("2d");
        ctx.clearRect(0,0,c.width,c.height);
        this.firenote1 = true;
      }
    },
    noteplayer: function(notenumber){
      let note = new Sound(this.audiocontext);
      let now = this.audiocontext.currentTime;
      // var notearraylocal = this.notearray[notenumber];
      var xlength = this.notearray[notenumber]
      for(var x = 0; x < xlength.length; x++){

        if(this.notearray[notenumber][x]['shapechosen']===1){
          note.play(220, now);
          if(this.notearray[notenumber][x]['colorchosen']===1){
            this.color1Save([(this.color1[0]+20)%255, this.color1[1] , this.color1[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===2){
            this.color2Save([(this.color2[0]+20)%255, this.color2[1] , this.color2[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===3){
            this.color3Save([(this.color3[0]+20)%255, this.color3[1] , this.color3[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===4){
            this.color4Save([(this.color4[0]+20)%255, this.color4[1] , this.color4[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===5){
            this.color5Save([(this.color5[0]+20)%255, this.color5[1] , this.color5[2]]);
          }
        }
        if(this.notearray[notenumber][x]['shapechosen']===2){
          note.play(246.94, now);
          if(this.notearray[notenumber][x]['colorchosen']===1){
            this.color1Save([(this.color1[0]+30)%255, (this.color1[1]+40)%255, this.color1[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===2){
            this.color2Save([(this.color2[0]+30)%255, (this.color2[1]+40)%255 , this.color2[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===3){
            this.color3Save([(this.color3[0]+30)%255, (this.color3[1]+40)%255 , this.color3[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===4){
            this.color4Save([(this.color4[0]+30)%255, (this.color4[1]+40)%255 , this.color4[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===5){
            this.color5Save([(this.color5[0]+30)%255, (this.color5[1]+40)%255 , this.color5[2]]);
          }
        }
        if(this.notearray[notenumber][x]['shapechosen']===3){
          note.play(261.63, now);
          if(this.notearray[notenumber][x]['colorchosen']===1){
            this.color1Save([(this.color1[0]+50)%255, this.color1[1] , (this.color1[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===2){
            this.color2Save([(this.color2[0]+50)%255, this.color2[1] , (this.color2[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===3){
            this.color3Save([(this.color3[0]+50)%255, this.color3[1] , (this.color3[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===4){
            this.color4Save([(this.color4[0]+50)%255, this.color4[1] , (this.color4[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===5){
            this.color5Save([(this.color5[0]+50)%255, this.color5[1] , (this.color5[2]+40)%255]);
          }
        }
        if(this.notearray[notenumber][x]['shapechosen']===4){
          note.play(293.66, now);
          if(this.notearray[notenumber][x]['colorchosen']===1){
            this.color1Save([(this.color1[0]+30)%255, (this.color1[1]+20)%255 , (this.color1[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===2){
            this.color2Save([(this.color2[0]+30)%255, (this.color2[1]+20)%255 , (this.color2[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===3){
            this.color3Save([(this.color3[0]+30)%255, (this.color3[1]+20)%255 , (this.color3[2]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===4){
            this.color4Save([(this.color4[0]+30)%255, (this.color4[1]+20)%255 , (this.color4[0]+40)%255]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===5){
            this.color5Save([(this.color5[0]+30)%255, (this.color5[1]+20)%255 , (this.color5[2]+40)%255]);
          }
        }
        if(this.notearray[notenumber][x]['shapechosen']===5){
          note.play(329.63, now);
          if(this.notearray[notenumber][x]['colorchosen']===1){
            this.color1Save([this.color1[0], (this.color1[1]+30)%255 , this.color1[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===2){
            this.color2Save([this.color2[0], (this.color2[1]+30)%255 , this.color2[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===3){
            this.color3Save([this.color3[0], (this.color3[1]+30)%255 , this.color3[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===4){
            this.color4Save([this.color4[0], (this.color4[1]+30)%255 , this.color4[2]]);
          }
          if(this.notearray[notenumber][x]['colorchosen']===5){
            this.color5Save([this.color5[0], (this.color5[1]+30)%255 , this.color5[2]]);
          }
        }
      }

    },
    drawnotebar: function(){
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      this.now = Date.now();
      this.delta = this.now - this.then;
      var c=this.$refs.notecanvas;
      c.height = this.$refs.notecanvascontainer.clientHeight;
      c.width = this.$refs.notecanvascontainer.clientWidth;
      var ctx=c.getContext("2d");
      ctx.fillStyle = 'rgba(255,215,0,0.3)';
      if (this.delta>this.interval2){
        this.then = this.now - (this.delta % this.interval2);
        this.notelowerbound = this.overamount;
        this.overamount = (((Date.now()-this.startingtime)%this.timetoend)/this.timetoend)*0.95*c.width;
        this.noteupperbound = this.overamount;
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillRect(c.width*0.075+this.overamount,0,c.width*0.05,c.height);

        if(this.noteupperbound>this.notelowerbound){
          // console.log('************');
          // console.log('value of noteupperbound: ', this.noteupperbound);
          // console.log('value of notelowerbound: ', this.notelowerbound);
          // console.log('************');


          if(this.firenote1===true){
            if(this.notelowerbound+0.075*c.width>0.074*c.width){
              if(this.noteupperbound+0.075*c.width<=0.126*c.width){
                this.noteplayer(0);
                this.firenote1 = false;
                this.firenote2 = true;
              }
            }
          }

          if(this.firenote2 === true){
            if(this.notelowerbound+0.075*c.width>0.149*c.width){
              if(this.noteupperbound+0.075*c.width<=0.201*c.width){
                this.noteplayer(1);
                this.firenote2 = false;
                this.firenote3 = true;
              }
            }
          }

          if(this.firenote3 === true){
            if(this.notelowerbound+0.075*c.width>0.224*c.width){
              if(this.noteupperbound+0.075*c.width<=0.276*c.width){
                this.noteplayer(2);
                this.firenote3 = false;
                this.firenote4 = true;
              }
            }
          }

          if(this.firenote4 === true){
            if(this.notelowerbound+0.075*c.width>0.299*c.width){
              if(this.noteupperbound+0.075*c.width<=0.351*c.width){
                this.noteplayer(3);
                this.firenote4 = false;
                this.firenote5 = true;
              }
            }
          }

          if(this.firenote5 === true){
            if(this.notelowerbound+0.075*c.width>0.374*c.width){
              if(this.noteupperbound+0.075*c.width<=0.426*c.width){
                this.noteplayer(4);
                this.firenote5 = false;
                this.firenote6 = true;
              }
            }
          }

          if(this.firenote6 === true){
            if(this.notelowerbound+0.075*c.width>0.449*c.width){
              if(this.noteupperbound+0.075*c.width<=0.501*c.width){
                this.noteplayer(5);
                this.firenote6 = false;
                this.firenote7 = true;
              }
            }
          }

          if(this.firenote7 === true){
            if(this.notelowerbound+0.075*c.width>0.524*c.width){
              if(this.noteupperbound+0.075*c.width<=0.576*c.width){
                this.noteplayer(6);
                this.firenote7 = false;
                this.firenote8 = true;
              }
            }
          }

          if(this.firenote8 === true){
            if(this.notelowerbound+0.075*c.width>0.599*c.width){
              if(this.noteupperbound+0.075*c.width<=0.651*c.width){
                this.noteplayer(7);
                this.firenote8 = false;
                this.firenote9 = true;
              }
            }
          }

          if(this.firenote9 === true){
            if(this.notelowerbound+0.075*c.width>0.674*c.width){
              if(this.noteupperbound+0.075*c.width<=0.7251*c.width){
                this.noteplayer(8);
                this.firenote9 = false;
                this.firenote10 = true;
              }
            }
          }

          if(this.firenote10 === true){
            if(this.notelowerbound+0.075*c.width>0.749*c.width){
              if(this.noteupperbound+0.075*c.width<=0.801*c.width){
                this.noteplayer(9);
                this.firenote10 = false;
                this.firenote11 = true;
              }
            }
          }

          if(this.firenote11 === true){
            if(this.notelowerbound+0.075*c.width>0.824*c.width){
              if(this.noteupperbound+0.075*c.width<=0.876*c.width){
                this.noteplayer(10);
                this.firenote11 = false;
                this.firenote12 = true;
              }
            }
          }

          if(this.firenote12 === true){
            if(this.notelowerbound+0.075*c.width>0.899*c.width){
              if(this.noteupperbound+0.075*c.width<=0.951*c.width){
                this.noteplayer(11);
                this.firenote12 = false;
                this.firenote1 = true;
              }
            }
          }
        }

      }
      this.animationframebar = requestAnimationFrame(this.drawnotebar.bind(this));

    },
    placenote: function(){
      if(this.highlightbar!=-1){
        // var  temp = this.notebarhover;

        var hoverlen = this.notebarhover.length;

        if(this.highlightbar===1){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 7.75%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===2){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 15.25%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===3){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 22.75%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===4){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 30.25%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===5){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 37.75%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===6){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 45.25%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===7){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 52.75%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===8){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 60.25%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===9){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 67.75%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===10){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 75.25%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===11){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 82.75%; " + this.notebarhover.substring(hoverlen-8);
        }else if(this.highlightbar===12){
          var noteonline = this.notebarhover.substring(0, hoverlen-8) + " left: 90.25%; " + this.notebarhover.substring(hoverlen-8);
        }

        // console.log('value of noteshowusecolor: ', noteshowusecolor);

        // var noteshowtemp = this.noteshow;
        // noteshowtemp.push({note: noteonline, color: notebarhovercolor})
        // this.noteshow = noteshowtemp;

        // console.log('value of notebarhovernumber', this.notebarhovernumber);

        this.AddShapeArray({addshape: noteonline, addcolornumber: this.notebarhovernumber})

        console.log('value of shapearray', this.shapearray);


        // var notevariable = [this.builtcolor, this.shapepath, this.colorchosen, this.shapechosen];
        // var temparray = this.notearray[(this.highlightbar-1)];
        // temparray.push(notevariable);
        // this.notearray[(this.highlightbar-1)] = temparray;
        this.AddNoteArray({index: this.highlightbar-1, builtcolor: this.builtcolor, shapepath: this.shapepath, colorchosen: this.colorchosen, shapechosen: this.shapechosen})
      }
    },
    notebarover: function(event, number){
      // console.log('inside notebarover');
      if(this.shapechosen!=-1 && this.colorchosen!=-1){
        this.notebarx = `${100*event.clientX/(0.85*window.innerWidth) - 17}`;
        this.notebary = `${100*event.clientY/(0.44*window.innerHeight) - 30}`;
        // console.log('mousex position: ', this.notebarx ,' mousey position: ', this.notebary);
        if(this.notebarx>7.5){
          if(this.deletingnote===false){
            this.overnotebar = true;
            this.cursor = 'none';
          }else if(this.deletingnote===true){
            this.overnotebar = false;
            this.cursor = 'auto';
          }
        }else{
          this.overnotebar = false;
          this.cursor = 'auto';
        }

        if(this.colorchosen===1){
          this.notebarhovercolor = this.usecolor1;
          this.notebarhovernumber = 1;
        }else if(this.colorchosen===2){
          this.notebarhovercolor = this.usecolor2;
          this.notebarhovernumber = 2;
        }else if(this.colorchosen===3){
          this.notebarhovercolor = this.usecolor3;
          this.notebarhovernumber = 3;
        }else if(this.colorchosen===4){
          this.notebarhovercolor = this.usecolor4;
          this.notebarhovernumber = 4;
        }else if(this.colorchosen===5){
          this.notebarhovercolor = this.usecolor5;
          this.notebarhovernumber = 5;
        }

        // console.log('value of this.notebarhovercolor: ', this.notebarhovercolor);

        this.notebarhover = `<div style="z-index: 999; opacity:0.5; clip-path:`+this.shapepath+`; width: 5%; height: 15%; position: absolute; top: `+this.notebary+`%; left:`+this.notebarx+`%; background: `+this.notebarhovercolor+`;"></div>`

        // console.log('value of this.notebarhover: ', this.notebarhover);

        if(this.deletingnote===false){
          if(this.notebarx>=7.5&&this.notebarx<=10.9){
            // console.log('inside highlightbar successful');
            this.highlightbar=1;
            // console.log('value of highlightbar: ', this.highlightbar);
          }else if(this.notebarx>=12.5 && this.notebarx<=18){
            this.highlightbar=2;
          }else if(this.notebarx>=20 && this.notebarx<=25.5){
            this.highlightbar=3;
          }else if(this.notebarx>=27 && this.notebarx<=33){
            this.highlightbar=4;
          }else if(this.notebarx>=35 && this.notebarx<=41){
            this.highlightbar=5;
          }else if(this.notebarx>=42.5 && this.notebarx<=48){
            this.highlightbar=6;
          }else if(this.notebarx>=50 && this.notebarx<=55.5){
            this.highlightbar=7;
          }else if(this.notebarx>=57.5 && this.notebarx<=63){
            this.highlightbar=8;
          }else if(this.notebarx>=65 && this.notebarx<=70.5){
            this.highlightbar=9;
          }else if(this.notebarx>=72.5 && this.notebarx<=78){
            this.highlightbar=10;
          }else if(this.notebarx>=80 && this.notebarx<=85.5){
            this.highlightbar=11;
          }else if(this.notebarx>=87.5 && this.notebarx<=93){
            this.highlightbar=12;
          }
          else{
            this.highlightbar=-1;
            // console.log('value of highlightbar: ', this.highlightbar);
          }
        }

      }
    },
    notebarleave: function(){
      // console.log('inside notebarleave');
      this.cursor = 'auto';
      this.overnotebar = false;
      this.highlightbar = -1;
    },
    notemaker: function(colorshape, number){
      // console.log('inside notemaker function');
      if (colorshape==='color'){
        if(this.shapechosen===-1){
          this.instructions = 'Color Chosen, Pick a Shape!';
          this.noteFont = 2;
        }else{
          this.instructions = 'Color and Shape Chosen! Choose Another or Add to Note Sheet Above!';
          this.noteFont = 1.5;
        }
        this.colorchosen = number;
        if(number===1){
          this.builtcolor = this.usecolor1;
        }else if(number===2){
          this.builtcolor = this.usecolor2;
        }else if(number===3){
          this.builtcolor = this.usecolor3;
        }else if(number===4){
          this.builtcolor = this.usecolor4;
        }else{
          this.builtcolor = this.usecolor5;
        }
      }
      if (colorshape==='shape'){
        if(this.colorchosen===-1){
          this.instructions = 'Shape Chosen, Pick a Color!';
          this.noteFont = 2;
        }else{
          this.instructions = 'Color and Shape Chosen! Choose Another or Add to Note Sheet Above!';
          this.noteFont = 1.5;
        }
        this.shapechosen = number;
        if(number===1){
          this.shapepath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }else if(number===2){
          this.shapepath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
        }else if(number===3){
          this.shapepath = 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
        }else if(number===4){
          this.shapepath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
        }else{
          this.shapepath = 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)';
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.routerbox{
  position: absolute;
  z-index: 9999;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
}

.playinbackgroundbutton{
  position: absolute;
  top: -11%;
  right: 0%;
  width: 8.5%;
  height: 16%;
  z-index: 999;
  background-color: black;
  color: rgb(250,250,250);
}

.playinbackgroundbuttonsmall{
  position: absolute;
  top: 60%;
  right: 0%;
  width: 100%;
  height: 40%;
  z-index: 999;
  background-color: black;
  color: rgb(250,250,250);
}

.playinbackgroundhover:hover{
  background-color: rgb(250,250,250);
  color: black;
}

.flipvueslider{
  /*transform: rotate(180deg);*/
}

.speedslider{
  position: absolute;
  width: 80%;
  left: 10%;
  height: 20%;
  top: 30%;
  text-align: center;
  font-size: 2vh;
  font-weight: bold;
}

.notemanager{
  position: absolute;
  width: 100%;
  height: 30%;
  top: 57.5%;
  text-align: center;
  font-size: 2vh;
  font-weight: bold;
}

.delete1note{
  position: absolute;
  left: 0%;
  width: 40%;
  height: 100%;
  padding-top: 2.5%;
  padding-left: 5%;
  padding-right: 5%;
}

.deleteallnotes{
  position: absolute;
  left: 50%;
  width: 50%;
  height: 100%;
  padding-top: 2.5%;
}

.delete1note:hover, .deleteallnotes:hover{
  background: black;
  color: rgba(250,250,250,1);
}

.notecanvas{
  position: absolute;
  pointer-events: none;
  top: 0%;
  left: 0%;
  z-index: 999;
}

.playbutton{
  position: absolute;
  font-weight: bold;
  font-size: 3vh;
  top: 20%;
  left: 0%;
  width: 50%;
  height: 10%;
}

.stopbutton{
  position: absolute;
  font-weight: bold;
  font-size: 3vh;
  top: 20%;
  left: 50%;
  width: 50%;
  height: 10%;
}

.playbutton2{
  position: absolute;
  font-weight: bold;
  font-size: 3vh;
  top: 30%;
  left: 10%;
  width: 80%;
  height: 30%;
  z-index: 9999;
}

.stopbutton2{
  position: absolute;
  font-weight: bold;
  font-size: 3vh;
  top: 30%;
  left: 10%;
  width: 80%;
  height: 30%;
  z-index: 9999;
}


.playbutton:hover, .stopbutton:hover, .playbutton2:hover, .stopbutton2:hover {
  background: black;
  color: rgb(250,250,250);
  z-index: 9999;
}

.playbutton2:hover, .stopbutton2:hover {
  background: rgb(250,250,250);
  color: black;
  z-index: 9999;
}

.testdiv2{
  position: absolute;
  background-color: red;
  height: 10%;
  width: 10%;
  left: 50%;
  top: 60%;
  z-index: 999;
}

.noteline{
  position: absolute;
  width: 0.5%;
  top: 0%;
  height: 100%;
}

.nlposition1{
  left: 10%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition2{
  left: 17.5%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition3{
  left: 25%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition4{
  left: 32.5%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition5{
  left: 40%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition6{
  left: 47.5%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition7{
  left: 55%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition8{
  left: 62.5%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition9{
  left: 70%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition10{
  left: 77.5%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition11{
  left: 85%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}

.nlposition12{
  left: 92.5%;
  z-index: 10;
  background-color: rgba(250,250,250,0.5);
}


.positionrelative{
  position: relative;
  height: 100%;
  width: 100%;
}

.noteboxtitle{
  position: absolute;
  font-size: 3vh;
  text-align: left;
  font-weight: bold;
  top: 5%;
  padding-left: 10%;
  width: 100%;
  left: 0%;
}

.instructions{
  position: absolute;
  font-weight: bold;
  top: 20%;
  left: 5%;
}

.cursorpointer{
  cursor: pointer;
}

.pickcolor1{
  position: absolute;
  top: 30%;
  left: 5%;
  width: 15%;
  height: 30%;
  z-index: 10;
}

.pickcolor2{
  position: absolute;
  top: 30%;
  left: 20%;
  width: 15%;
  height: 30%;
  z-index: 10;
}

.pickcolor3{
  position: absolute;
  top: 30%;
  left: 35%;
  width: 15%;
  height: 30%;
  z-index: 10;
}

.pickcolor4{
  position: absolute;
  top: 30%;
  left: 50%;
  width: 15%;
  height: 30%;
  z-index: 10;
}

.pickcolor5{
  position: absolute;
  top: 30%;
  left: 65%;
  width: 15%;
  height: 30%;
  z-index: 10;
}

.shape1{
  position: absolute;
  top: 65%;
  left: 7.5%;
  width: 10%;
  height: 20%;
  background-color: black;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 11;
}

.shape2{
  position: absolute;
  top: 65%;
  left: 22.5%;
  width: 10%;
  height: 20%;
  background-color: black;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  z-index: 11;
}

.shape3{
  position: absolute;
  top: 65%;
  left: 37.5%;
  width: 10%;
  height: 20%;
  background-color: black;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  z-index: 11;
}

.shape4{
  position: absolute;
  top: 65%;
  left: 52.5%;
  width: 10%;
  height: 20%;
  background-color: black;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: 11;
}

.shape5{
  position: absolute;
  top: 65%;
  left: 67.5%;
  width: 10%;
  height: 20%;
  background-color: black;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  z-index: 11;
}

.builtnote{
  position: absolute;
  top: 5%;
  right: 5%;
  width: 10%;
  height: 20%;
}

.sound{
  position: relative;
}

.notebar{
  position: absolute;
  top: 5%;
  left: 0%;
  width: 100%;
  height: 40%;
  z-index: 1;
  background-color: black;
}

.notemaker{
  position: absolute;
  top: 50%;
  left: 5%;
  width: 45%;
  height: 45%;
  background-color: rgb(250,250,250);
}

.notecontrols{
  position: absolute;
  left: 55%;
  top: 50%;
  width: 40%;
  height: 45%;
  background-color: rgb(250,250,250);
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
