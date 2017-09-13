

<template>
  <div class="color">
    <div class='facecontainer'>
      <div class='positionrelative'>
        <div class='facecircle' v-bind:style='{backgroundColor: usecolor2, borderColor: usecolor1}'/>
        <div class='glasses1' v-bind:style='{background: "linear-gradient(45deg,"+usecolor1+","+usecolor2+","+usecolor3+","+usecolor4+","+usecolor5+")"}'/>
        <div class='glasses2' v-bind:style='{background: "linear-gradient(45deg,"+usecolor1+","+usecolor2+","+usecolor3+","+usecolor4+","+usecolor5+")"}'/>
        <div class='glassframe1' v-bind:style='{backgroundColor: usecolor5}'/>
        <div class='glassframe2'/>
        <div class='glassframe3'/>
        <div class='smile1' v-bind:style='{background: "radial-gradient(ellipse at center,"+usecolor1+","+usecolor1+")"}'/>
        <div class='smile2' v-bind:style='{background: "radial-gradient(ellipse at center,"+usecolor2+","+usecolor2+")"}'/>
        <div class='smile3' v-bind:style='{background: "radial-gradient(ellipse at center,"+usecolor3+","+usecolor4+","+usecolor5+")"}'/>
        <div class='tongue1' v-bind:style='{background: "linear-gradient("+usecolor3+","+usecolor3+" 50%, "+usecolor5+" 70%, "+usecolor3+"90%)"}'/>
        <div class='tongue2'  v-bind:style='{background: "linear-gradient("+usecolor4+","+usecolor4+" 50%, "+usecolor5+" 70%, "+usecolor3+"90%)"}'/>
      </div>
    </div>

    <div class='currentsavedcolors'>
      <div class='positionrelative'>

        <div  v-if='showmindpalette' class='onecolorcurrenttopalette colorswapposition1' v-on:click="sendcolor('topalette','one')" v-bind:style="{ color: choosecurrenttopalette===true?'white':'', backgroundColor: choosecurrenttopalette===true?'black':'' }" >
          <div v-if='!choosecurrenttopalette'>
            <p>
              Send One Color to Palette.
            </p>
          </div>
          <div v-if='choosecurrenttopalette'>
            <div v-if='transfercolor===null'>
              <p>
                Click a Current Color (Click Here to Cancel).
              </p>
            </div>
            <div v-if='transfercolor!=null'>
              <p>
                Now Click in Palette (Click Here to Cancel).
              </p>
            </div>
          </div>
        </div>

        <div  v-if='showmindpalette' class='allcolorscurrenttopalette colorswapposition2' v-on:click="sendcolor('alltopalette', 'na')">
          <p>
            Send All Colors to Palette.
          </p>
        </div>

        <div v-if='!showmindpalette' v-on:click='colormindretrieve()' class='colormindbutton cmbposition1'>
          <p>
            Retrieve Ascetically Pleasing Palette.
          </p>
        </div>
        <div v-if='modifyingcolornumber===-1 && !choosecurrenttopalette && !choosepalettetocurrent' class='colorclickreminder cmbposition3'>
          <p>
            Click Colors Below to Modify.
          </p>
        </div>

        <div v-if='!choosecurrenttopalette && !choosepalettetocurrent'>
          <div v-bind:style='{ backgroundColor: usecolor1}' class='scbposition1 savedcolorbox'  v-on:mouseover="currenthover(1)"  v-on:mouseleave='currentleave(1)'>
            <div v-if='current1hover && modifyingcolornumber!=1' class='cursorpointer choosecurrenttoreplace' v-on:click='savedcolorclick(1)'>
              <p>
                Click Here To Modify!
              </p>
            </div>
            <div v-if='modifyingcolornumber===1' class='choosecurrenttoreplace'>
              <p>
                This Will Be The New Color.
              </p>
              <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor2}'class='scbposition2 savedcolorbox'  v-on:mouseover="currenthover(2)"  v-on:mouseleave='currentleave(2)'>
            <div v-if='current2hover && modifyingcolornumber!=2' class='cursorpointer choosecurrenttoreplace' v-on:click='savedcolorclick(2)'>
              <p>
                Click Here To Modify!
              </p>
            </div>
            <div v-if='modifyingcolornumber===2' class='choosecurrenttoreplace'>
              <p>
                This Will Be The New Color.
              </p>
              <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor3}' class='scbposition3 savedcolorbox'  v-on:mouseover="currenthover(3)"  v-on:mouseleave='currentleave(3)'>
            <div v-if='current3hover && modifyingcolornumber!=3' class='cursorpointer choosecurrenttoreplace' v-on:click='savedcolorclick(3)'>
              <p>
                Click Here To Modify!
              </p>
            </div>
            <div v-if='modifyingcolornumber===3' class='choosecurrenttoreplace'>
              <p>
                This Will Be The New Color.
              </p>
              <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor4}' class='scbposition4 savedcolorbox'  v-on:mouseover="currenthover(4)"  v-on:mouseleave='currentleave(4)'>
            <div v-if='current4hover && modifyingcolornumber!=4' class='cursorpointer choosecurrenttoreplace' v-on:click='savedcolorclick(4)'>
              <p>
                Click Here To Modify!
              </p>
            </div>
            <div v-if='modifyingcolornumber===4' class='choosecurrenttoreplace'>
              <p>
                This Will Be The New Color.
              </p>
              <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor5}' class='scbposition5 savedcolorbox'  v-on:mouseover="currenthover(5)"  v-on:mouseleave='currentleave(5)'>
            <div v-if='current5hover && modifyingcolornumber!=5' class='cursorpointer choosecurrenttoreplace' v-on:click='savedcolorclick(5)'>
              <p>
                Click Here To Modify!
              </p>
            </div>
            <div v-if='modifyingcolornumber===5' class='choosecurrenttoreplace'>
              <p>
                This Will Be The New Color.
              </p>
              <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
            </div>
          </div>
        </div>

        <div v-if='choosepalettetocurrent'>
          <div v-bind:style='{ backgroundColor: usecolor1}' class='scbposition1 savedcolorbox' v-on:mouseover="currenthover(1)"  v-on:mouseleave='currentleave(1)'>
            <div v-if='transfercolor===null && current1hover===true' class='choosecurrenttoreplace'>
              <p>
                Select Palette First!
              </p>
            </div>
            <div v-if='transfercolor!=null && current1hover===true' v-on:click="sendcolor('replacecurrent', 'one')" class='choosecurrenttoreplace cursorpointer'>
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor2}' class='scbposition2 savedcolorbox'  v-on:mouseover="currenthover(2)"  v-on:mouseleave='currentleave(2)'>
            <div v-if='transfercolor===null && current2hover===true' class='choosecurrenttoreplace'>
              <p>
                Select Palette First!
              </p>
            </div>
            <div v-if='transfercolor!=null && current2hover===true' v-on:click="sendcolor('replacecurrent', 'two')" class='choosecurrenttoreplace cursorpointer'>
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor3}' class='scbposition3 savedcolorbox' v-on:mouseover="currenthover(3)"  v-on:mouseleave='currentleave(3)'>
            <div v-if='transfercolor===null && current3hover===true' class='choosecurrenttoreplace'>
              <p>
                Select Palette First!
              </p>
            </div>
            <div v-if='transfercolor!=null && current3hover===true' v-on:click="sendcolor('replacecurrent', 'three')" class='choosecurrenttoreplace cursorpointer'>
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor4}' class='scbposition4 savedcolorbox' v-on:mouseover="currenthover(4)"  v-on:mouseleave='currentleave(4)'>
            <div v-if='transfercolor===null && current4hover===true' class='choosecurrenttoreplace'>
              <p>
                Select Palette First!
              </p>
            </div>
            <div v-if='transfercolor!=null && current4hover===true' v-on:click="sendcolor('replacecurrent', 'four')" class='choosecurrenttoreplace cursorpointer'>
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='currentreplaceexample'></div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor5}' class='scbposition5 savedcolorbox' v-on:mouseover="currenthover(5)"  v-on:mouseleave='currentleave(5)'>
            <div v-if='transfercolor===null && current5hover===true' class='choosecurrenttoreplace'>
              <p>
                Select Palette First!
              </p>
            </div>
            <div v-if='transfercolor!=null && current5hover===true' v-on:click="sendcolor('replacecurrent', 'five')" class='choosecurrenttoreplace cursorpointer'>
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='currentreplaceexample'></div>
            </div>
          </div>
        </div>

        <div v-if='choosecurrenttopalette'>
          <div v-bind:style='{ backgroundColor: usecolor1, cursor: "auto"}' class='scbposition1 savedcolorbox' v-on:mouseover="currentsendhover(1)" v-on:mouseleave='currentsendleave(1)'>
            <div class='positionrelative'>
              <div v-if='currentsend1hover && transfercolor!=usecolor1' class='choosecurrenttosend' v-on:click='transfercolor=usecolor1'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===usecolor1' class='choosecurrenttosend'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor2, cursor: "auto"}' class='scbposition2 savedcolorbox' v-on:mouseover="currentsendhover(2)" v-on:mouseleave='currentsendleave(2)'>
            <div class='positionrelative'>
              <div v-if='currentsend2hover && transfercolor!=usecolor2' class='choosecurrenttosend' v-on:click='transfercolor=usecolor2'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===usecolor2' class='choosecurrenttosend'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: color3, cursor: "auto"}' class='scbposition3 savedcolorbox' v-on:mouseover="currentsendhover(3)" v-on:mouseleave='currentsendleave(3)'>
            <div class='positionrelative'>
              <div v-if='currentsend3hover && transfercolor!=usecolor3' class='choosecurrenttosend'
              v-on:click='transfercolor=usecolor3'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===usecolor3' class='choosecurrenttosend'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor4, cursor: "auto"}' class='scbposition4 savedcolorbox' v-on:mouseover="currentsendhover(4)" v-on:mouseleave='currentsendleave(4)'>
            <div class='positionrelative'>
              <div v-if='currentsend4hover && transfercolor!=usecolor4' class='choosecurrenttosend' v-on:click='transfercolor=usecolor4'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===usecolor4' class='choosecurrenttosend'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style='{ backgroundColor: usecolor5, cursor: "auto"}' class='scbposition5 savedcolorbox' v-on:mouseover="currentsendhover(5)" v-on:mouseleave='currentsendleave(5)'>
            <div class='positionrelative'>
              <div v-if='currentsend5hover && transfercolor!=usecolor5' class='choosecurrenttosend' v-on:click='transfercolor=usecolor5'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===usecolor5' class='choosecurrenttosend'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='savedcolorstitle'>
          <h3>
            CURRENT COLORS
          </h3>
        </div>
      </div>
    </div>
    <div v-if='showmindpalette' class='mindpalette'>
      <div class='positionrelative'>

        <div class='onecolorpalettetocurrent colorswapposition3' v-on:click="sendcolor('tocurrent','one')" v-bind:style="{ color: choosepalettetocurrent===true?'white':'', backgroundColor: choosepalettetocurrent===true?'black':'' }" >
          <div v-if='!choosepalettetocurrent'>
            <p>
              Send One Color to Current Colors.
            </p>
          </div>
          <div v-if='choosepalettetocurrent'>
            <div v-if='transfercolor===null'>
              <p>
                Click Palette Color (Here to Cancel).
              </p>
            </div>
            <div v-if='transfercolor!=null'>
              Now Current Color (Here to Cancel).
            </div>
          </div>
        </div>

        <div class='allcolorspalettetocurrent colorswapposition4'  v-on:click="sendcolor('alltocurrent', 'na')">
          <p>
            Send All Colors to Current Colors.
          </p>
        </div>



        <div v-if='showmindpalette' v-on:click='colormindretrieve()' class='colormindbutton cmbposition2'>
          <p>
            Refresh Color Palette.
          </p>
        </div>
        <div class='savedpalettetitle'>
          <h3>
            COLOR PALETTE
          </h3>
        </div>

        <div v-if='choosepalettetocurrent'>
          <div v-bind:style="{ backgroundColor: mindcolor1 }" class='mcbposition1 mindcolorbox' v-on:mouseover="palettesendhover(1)" v-on:mouseleave='palettesendleave(1)'>
            <div class='positionrelative'>
              <div v-if='palettesend1hover && transfercolor!=mindcolor1' class='choosecurrenttosendinpalette' v-on:click='transfercolor=mindcolor1; transfercolorRGB=mindcolor1RGB'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===mindcolor1' class='choosecurrenttosendinpalette'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor2 }" class='mcbposition2 mindcolorbox' v-on:mouseover="palettesendhover(2)" v-on:mouseleave='palettesendleave(2)'>
            <div class='positionrelative'>
              <div v-if='palettesend2hover && transfercolor!=mindcolor2' class='choosecurrenttosendinpalette' v-on:click='transfercolor=mindcolor2; transfercolorRGB=mindcolor2RGB'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===mindcolor2' class='choosecurrenttosendinpalette'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor3 }" class='mcbposition3 mindcolorbox' v-on:mouseover="palettesendhover(3)"  v-on:mouseleave='palettesendleave(3)'>
            <div class='positionrelative'>
              <div v-if='palettesend3hover && transfercolor!=mindcolor3' class='choosecurrenttosendinpalette' v-on:click='transfercolor=mindcolor3; transfercolorRGB=mindcolor3RGB'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===mindcolor3' class='choosecurrenttosendinpalette'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor4 }" class='mcbposition4 mindcolorbox' v-on:mouseover="palettesendhover(4)"  v-on:mouseleave='palettesendleave(4)'>
            <div class='positionrelative'>
              <div v-if='palettesend4hover && transfercolor!=mindcolor4' class='choosecurrenttosendinpalette' v-on:click='transfercolor=mindcolor4; transfercolorRGB=mindcolor4RGB'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===mindcolor4' class='choosecurrenttosendinpalette'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor5 }" class='mcbposition5 mindcolorbox' v-on:mouseover="palettesendhover(5)"  v-on:mouseleave='palettesendleave(5)'>
            <div class='positionrelative'>
              <div v-if='palettesend5hover && transfercolor!=mindcolor5' class='choosecurrenttosendinpalette' v-on:click='transfercolor=mindcolor5; transfercolorRGB=mindcolor5RGB'>
                <p>
                  Choose This Color
                </p>
              </div>
              <div v-if='transfercolor===mindcolor5' class='choosecurrenttosendinpalette'>
                <p>
                  You&#39;ve Chosen Me!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div v-if='choosecurrenttopalette'>
          <div v-bind:style="{ backgroundColor: mindcolor1 }" class='mcbposition1 mindcolorbox' v-on:mouseover="palettehover(1)" v-on:mouseleave='paletteleave(1)'>
            <div v-if='transfercolor===null && palette1hover===true' class='choosecurrenttosendinpalette'>
              <p>
                Choose Current Color First!
              </p>
            </div>
            <div v-if='transfercolor!=null && palette1hover===true' class='choosecurrenttosendinpalette' v-on:click="sendcolor('replacepalette', 'one')">
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='palettereplaceexample'></div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor2 }" class='mcbposition2 mindcolorbox' v-on:mouseover="palettehover(2)" v-on:mouseleave='paletteleave(2)'>
            <div v-if='transfercolor===null && palette2hover===true' class='choosecurrenttosendinpalette'>
              <p>
                Choose Current Color First!
              </p>
            </div>
            <div v-if='transfercolor!=null && palette2hover===true' class='choosecurrenttosendinpalette' v-on:click="sendcolor('replacepalette', 'two')">
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='palettereplaceexample'></div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor3 }" class='mcbposition3 mindcolorbox' v-on:mouseover="palettehover(3)"  v-on:mouseleave='paletteleave(3)'>
            <div v-if='transfercolor===null && palette3hover===true' class='choosecurrenttosendinpalette'>
              <p>
                Choose Current Color First!
              </p>
            </div>
            <div v-if='transfercolor!=null && palette3hover===true' class='choosecurrenttosendinpalette' v-on:click="sendcolor('replacepalette', 'three')">
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='palettereplaceexample'></div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor4 }" class='mcbposition4 mindcolorbox' v-on:mouseover="palettehover(4)"  v-on:mouseleave='paletteleave(4)'>
            <div v-if='transfercolor===null && palette4hover===true' class='choosecurrenttosendinpalette'>
              <p>
                Choose Current Color First!
              </p>
            </div>
            <div v-if='transfercolor!=null && palette4hover===true' class='choosecurrenttosendinpalette' v-on:click="sendcolor('replacepalette', 'four')">
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='palettereplaceexample'></div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor5 }" class='mcbposition5 mindcolorbox' v-on:mouseover="palettehover(5)"  v-on:mouseleave='paletteleave(5)'>
            <div v-if='transfercolor===null && palette5hover===true' class='choosecurrenttosendinpalette'>
              <p>
                Choose Current Color First!
              </p>
            </div>
            <div v-if='transfercolor!=null && palette5hover===true' class='choosecurrenttosendinpalette' v-on:click="sendcolor('replacepalette', 'five')">
              <p>
                Replace With This Color.
              </p>
              <div v-bind:style=" { backgroundColor: transfercolor}" class='palettereplaceexample'></div>
            </div>
          </div>
        </div>

        <div v-if='!choosecurrenttopalette && !choosepalettetocurrent'>
          <div v-bind:style="{ backgroundColor: mindcolor1 }" class='mcbposition1 mindcolorbox' v-on:mouseover="palettehover(1)" v-on:mouseleave='paletteleave(1)'>
            <div  v-if="palette1hover" class='positionrelative'>
              <div v-if='!lockpalette1' v-on:click="lockpalette1 = true" class='lockbutton mindhover mhposition2 cursorpointer'>
                Lock Color.
              </div>
              <div v-if='lockpalette1' v-on:click="lockpalette1 = false" class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='mhposition3 mindhover cursorpointer' v-if='modifyingcolornumber!=6' v-on:click='savedcolorclick(6)'>
                <p>
                  Click Here to Modify!
                </p>
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===6'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
            <div v-if='!palette1hover' class='positionrelative'>
              <div v-if='lockpalette1' class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===6'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>

          </div>
          <div v-bind:style="{ backgroundColor: mindcolor2 }" class='mcbposition2 mindcolorbox' v-on:mouseover="palettehover(2)" v-on:mouseleave='paletteleave(2)'>
            <div  v-if="palette2hover" class='positionrelative'>
              <div v-if='!lockpalette2' v-on:click="lockpalette2 = true" class='lockbutton mindhover mhposition2 cursorpointer'>
                Lock Color.
              </div>
              <div v-if='lockpalette2' v-on:click="lockpalette2 = false" class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='mhposition3 mindhover cursorpointer'  v-if='modifyingcolornumber!=7' v-on:click='savedcolorclick(7)'>
                <p>
                  Click Here to Modify!
                </p>
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===7'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
            <div v-if='!palette2hover' class='positionrelative'>
              <div v-if='lockpalette2' class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===7'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor3 }" class='mcbposition3 mindcolorbox' v-on:mouseover="palettehover(3)"  v-on:mouseleave='paletteleave(3)'>
            <div  v-if="palette3hover" class='positionrelative'>
              <div v-if='!lockpalette3' v-on:click="lockpalette3 = true" class='lockbutton mindhover mhposition2 cursorpointer'>
                Lock Color.
              </div>
              <div v-if='lockpalette3' v-on:click="lockpalette3 = false" class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='mhposition3 mindhover cursorpointer' v-on:click='savedcolorclick(8)'  v-if='modifyingcolornumber!=8'>
                <p>
                  Click Here to Modify!
                </p>
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===8'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
            <div v-if='!palette3hover' class='positionrelative'>
              <div v-if='lockpalette3' class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===8'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor4 }" class='mcbposition4 mindcolorbox' v-on:mouseover="palettehover(4)"  v-on:mouseleave='paletteleave(4)'>
            <div  v-if="palette4hover" class='positionrelative'>
              <div v-if='!lockpalette4' v-on:click="lockpalette4 = true" class='lockbutton mindhover mhposition2 cursorpointer'>
                Lock Color.
              </div>
              <div v-if='lockpalette4' v-on:click="lockpalette4 = false" class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='mhposition3 mindhover cursorpointer' v-on:click='savedcolorclick(9)'  v-if='modifyingcolornumber!=9'>
                <p>
                  Click Here to Modify!
                </p>
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===9'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
            <div v-if='!palette4hover' class='positionrelative'>
              <div v-if='lockpalette4' class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===9'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
          </div>
          <div v-bind:style="{ backgroundColor: mindcolor5 }" class='mcbposition5 mindcolorbox' v-on:mouseover="palettehover(5)"  v-on:mouseleave='paletteleave(5)'>
            <div  v-if="palette5hover" class='positionrelative'>
              <div v-if='!lockpalette5' v-on:click="lockpalette5 = true" class='lockbutton mindhover mhposition2 cursorpointer'>
                Lock Color.
              </div>
              <div v-if='lockpalette5' v-on:click="lockpalette5 = false" class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='mhposition3 mindhover cursorpointer' v-on:click='savedcolorclick(10)'  v-if='modifyingcolornumber!=10'>
                <p>
                  Click Here to Modify!
                </p>
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===10'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
            <div v-if='!palette5hover' class='positionrelative'>
              <div v-if='lockpalette5' class='lockbutton mindhover mhposition2 cursorpointer'>
                Color Locked!
              </div>
              <div class='modifycolorpalette' v-if='modifyingcolornumber===10'>
                <p>
                  This Will Be The New Color.
                </p>
                <div v-bind:style=" { backgroundColor: rgb1string}" class='currentreplaceexample'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="colorpickerbox" v-if='modifyingcolornumber!=-1'>
      <div class='colorpickeropen'>
        <div v-bind:style="{ backgroundColor: rgb1string }" class='colorexample' />
        <div class="rgbshowvalue">
          {{rgb1string}}
        </div>
        <div class='slidercontainer slider1position' v-on:click='rgbstringset(1)'>
          <div>
            <p>
              R Value
            </p>
          </div>
          <vue-slider ref="slider" :tooltip="false" :max="255" v-model="color1valuechosen.R"></vue-slider>
          <div class='gradientbar' v-bind:style="{ background:rgb1gradientR }"/>
        </div>
        <div class='slidercontainer slider2position' v-on:click='rgbstringset(1)'>
          <div>
            <p>
              G Value
            </p>
          </div>
          <vue-slider ref="slider" :tooltip="false" :max="255" v-model="color1valuechosen.G"></vue-slider>
          <div class='gradientbar' v-bind:style="{ background:rgb1gradientG }"/>
        </div>
        <div class='slidercontainer slider3position' v-on:click='rgbstringset(1)'>
          <div>
            <p>
              B Value
            </p>
          </div>
          <vue-slider ref="slider" :tooltip="false" :max="255" v-model="color1valuechosen.B"></vue-slider>
          <div class='gradientbar' v-bind:style="{ background:rgb1gradientB }"/>
        </div>
        <div class='choosecolor choosecolorposition1' v-on:click='choosecolor(modifyingcolornumber)'>
          </p>
            Choose Color
          </p>
        </div>
        <div class='choosecolor choosecolorposition2' v-on:click='discardcolor()'>
          </p>
            Discard Color
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vueSlider from 'vue-slider-component'
import { Material } from 'vue-color'
import { Compact } from 'vue-color'
import { Swatches } from 'vue-color'
import { Slider } from 'vue-color'
import { Sketch } from 'vue-color'
import { Chrome } from 'vue-color'
import { Photoshop } from 'vue-color'
import axios from 'axios'

export default {
  name: 'color',
  components: {
    vueSlider,
    'material-picker': Material,
    'compact-picker': Compact,
    'swatches-picker': Swatches,
    'slider-picker': Slider,
    'sketch-picker': Sketch,
    'chrome-picker': Chrome,
    'photoshop-picker': Photoshop
  },
  data () {
    return {
      color1valuechosen: {"R": 0, "G": 0, "B": 0},
      rgb1string: `rgb(0,0,0)`,
      modifyingcolornumber: -1,
      showmindpalette: false,
      transfercolor: null,
      transfercolorRGB: null,

      mindcolor1: null,
      mindcolor2: null,
      mindcolor3: null,
      mindcolor4: null,
      mindcolor5: null,

      mindcolor1RGB: null,
      mindcolor2RGB: null,
      mindcolor3RGB: null,
      mindcolor4RGB: null,
      mindcolor5RGB: null,

      lockpalette1: false,
      lockpalette2: false,
      lockpalette3: false,
      lockpalette4: false,
      lockpalette5: false,
      currentsend1hover: false,
      currentsend2hover: false,
      currentsend3hover: false,
      currentsend4hover: false,
      currentsend5hover: false,
      current1hover: false,
      current2hover: false,
      current3hover: false,
      current4hover: false,
      current5hover: false,
      palettesend1hover: false,
      palettesend2hover: false,
      palettesend3hover: false,
      palettesend4hover: false,
      palettesend5hover: false,
      palette1hover: false,
      palette2hover: false,
      palette3hover: false,
      palette4hover: false,
      palette5hover: false,
      rgb1gradientR:  `linear-gradient(to right, rgb(0,0,0), rgb(255,0,0))`,
      rgb1gradientG:  `linear-gradient(to right, rgb(0,0,0), rgb(0,255,0))`,
      rgb1gradientB:  `linear-gradient(to right, rgb(0,0,0), rgb(0,0,255))`,
      colorpickeropen: false,
      choosecurrenttopalette: false,
      choosepalettetocurrent: false,
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
      'usecolor5'
    ])
  },
  methods:{
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
      'incrementAsync'
    ]),
    updateValue: function(value){
      this.colors = value
    },
    togglecolorpicker: function(){
      console.log('inside togglecolorpicker');
      this.colorpickeropen = !this.colorpickeropen;
    },
    choosecolor: function(number){
      this.colorpickeropen = !this.colorpickeropen;

      var setcolor = [String(this.color1valuechosen.R), String(this.color1valuechosen.G), String(this.color1valuechosen.B)];

      if(number===1){
        this.color1Save(setcolor);
      }else if(number===2){
        this.color2Save(setcolor);
      }else if(number===3){
        this.color3Save(setcolor);
      }else if(number===4){
        this.color4Save(setcolor);
      }else if(number===5){
        this.color5Save(setcolor);
      }else if(number===6){
        this.mindcolor1 = this.rgb1string;
        this.mindcolor1RGB = setcolor
      }else if(number===7){
        this.mindcolor2 = this.rgb1string;
        this.mindcolor2RGB = setcolor
      }else if(number===8){
        this.mindcolor3 = this.rgb1string;
        this.mindcolor3RGB = setcolor
      }else if(number===9){
        this.mindcolor4 = this.rgb1string;
        this.mindcolor4RGB = setcolor
      }else{
        this.mindcolor5 = this.rgb1string;
        this.mindcolor5RGB = setcolor
      }
      this.modifyingcolornumber = -1;
    },
    rgbstringset: function(number){
      this.rgb1string = `rgb(`+this.color1valuechosen.R+`,`+this.color1valuechosen.G+`,`+this.color1valuechosen.B+`)`

      this.rgb1gradientR = `linear-gradient(to right, rgb(0,`+this.color1valuechosen.G+`,`+this.color1valuechosen.B+`), rgb(255,`+this.color1valuechosen.G+`,`+this.color1valuechosen.B+`))`

      this.rgb1gradientG = `linear-gradient(to right, rgb(`+this.color1valuechosen.R+`,0,`+this.color1valuechosen.B+`), rgb(`+this.color1valuechosen.R+`,255,`+this.color1valuechosen.B+`))`

      this.rgb1gradientB = `linear-gradient(to right, rgb(`+this.color1valuechosen.R+`,`+this.color1valuechosen.G+`,0), rgb(`+this.color1valuechosen.R+`,`+this.color1valuechosen.G+`,255))`
    },
    colormindretrieve: function(){

      this.choosepalettetocurrent = false;
      this.choosecurrenttopalette = false;
      this.transfercolor = null;
      this.transfercolorRGB = null;

      console.log('value of mindcolor1 is ', this.mindcolor1);
      let mindinput = ['N', 'N', 'N', 'N', 'N'];

      if (this.mindcolor1!=null){
        let mind1array = this.mindcolor1.replace(/[^\d,]/g, '').split(',').map(Number);
        let mind2array = this.mindcolor2.replace(/[^\d,]/g, '').split(',').map(Number);
        let mind3array = this.mindcolor3.replace(/[^\d,]/g, '').split(',').map(Number);
        let mind4array = this.mindcolor4.replace(/[^\d,]/g, '').split(',').map(Number);
        let mind5array = this.mindcolor5.replace(/[^\d,]/g, '').split(',').map(Number);

        mindinput = [this.lockpalette1===false?'N':mind1array, this.lockpalette2===false?'N':mind2array, this.lockpalette3===false?'N':mind3array, this.lockpalette4===false?'N':mind4array, this.lockpalette5===false?'N':mind5array];
      }

      console.log('value of mindinput: ', mindinput);

      axios.post('http://localhost:3000/colormindretrievepalette', {
        input: mindinput
      })
      .then((response)=>{
        console.log('*******************');
        console.log('response from routertest: ', response);
        var colorarray = [];
        var colorRGBarray = [];
        response.data.colormind_response.forEach((color)=>{
          var colorstring = `rgb(`+color[0]+`,`+color[1]+`,`+color[2]+`)`
          colorarray.push(colorstring);
        })

        this.mindcolor1 = colorarray[0];
        this.mindcolor2 = colorarray[1];
        this.mindcolor3 = colorarray[2];
        this.mindcolor4 = colorarray[3];
        this.mindcolor5 = colorarray[4];

        this.showmindpalette = true;

        response.data.colormind_response.forEach((color)=>{
          var colorRGB = [color[0], color[1], color[2]];
          colorRGBarray.push(colorRGB);
        })

        this.mindcolor1RGB = colorRGBarray[0];
        this.mindcolor2RGB = colorRGBarray[1];
        this.mindcolor3RGB = colorRGBarray[2];
        this.mindcolor4RGB = colorRGBarray[3];
        this.mindcolor5RGB = colorRGBarray[4];


      })
      .catch((error)=>{
        console.log('*******************');
        console.log('error from routertest: ', error);
      })
    },
    savedcolorclick: function(number){
      console.log('inside savedcolor and number is: ', number);
      this.modifyingcolornumber=number;
      if(number===1){
        this.rgb1string = this.usecolor1;
      }
      if(number===2){
        this.rgb1string = this.usecolor2;
      }
      if(number===3){
        this.rgb1string = this.usecolor3;
      }
      if(number===4){
        this.rgb1string = this.usecolor4;
      }
      if(number===5){
        this.rgb1string = this.usecolor5;
      }
      if(number===6){
        this.rgb1string = this.mindcolor1;
      }
      if(number===7){
        this.rgb1string = this.mindcolor2;
      }
      if(number===8){
        this.rgb1string = this.mindcolor3;
      }
      if(number===9){
        this.rgb1string = this.mindcolor4;
      }
      if(number===10){
        this.rgb1string = this.mindcolor5;
      }

      let rgbarray = this.rgb1string.replace(/[^\d,]/g, '').split(',');
      this.color1valuechosen.R = rgbarray[0];
      this.color1valuechosen.G = rgbarray[1];
      this.color1valuechosen.B = rgbarray[2];

      this.rgb1gradientR = `linear-gradient(to right, rgb(0,`+this.color1valuechosen.G+`,`+this.color1valuechosen.B+`), rgb(255,`+this.color1valuechosen.G+`,`+this.color1valuechosen.B+`))`

      this.rgb1gradientG = `linear-gradient(to right, rgb(`+this.color1valuechosen.R+`,0,`+this.color1valuechosen.B+`), rgb(`+this.color1valuechosen.R+`,255,`+this.color1valuechosen.B+`))`

      this.rgb1gradientB = `linear-gradient(to right, rgb(`+this.color1valuechosen.R+`,`+this.color1valuechosen.G+`,0), rgb(`+this.color1valuechosen.R+`,`+this.color1valuechosen.G+`,255))`
    },
    discardcolor: function(){
      this.modifyingcolornumber = -1;
    },
    currentleave: function(number){
      if (number===1){
        this.current1hover = false
      }else if (number===2){
        this.current2hover = false
      }else if (number===3){
        this.current3hover = false
      }else if (number===4){
        this.current4hover = false
      }else{
        this.current5hover = false
      }
    },
    currenthover: function(number){
      if (number===1){
        this.current1hover = true;
        this.current2hover = false;
        this.current3hover = false;
        this.current4hover = false;
        this.current5hover = false;
      }else if (number===2){
        this.current1hover = false;
        this.current2hover = true;
        this.current3hover = false;
        this.current4hover = false;
        this.current5hover = false;
      }else if (number===3){
        this.current1hover = false;
        this.current2hover = false;
        this.current3hover = true;
        this.current4hover = false;
        this.current5hover = false;
      }else if (number===4){
        this.current1hover = false;
        this.current2hover = false;
        this.current3hover = false;
        this.current4hover = true;
        this.current5hover = false;
      }else{
        this.current1hover = false;
        this.current2hover = false;
        this.current3hover = false;
        this.current4hover = false;
        this.current5hover = true;
      }
    },
    currentsendleave: function(number){
      if (number===1){
        this.currentsend1hover = false
      }else if (number===2){
        this.currentsend2hover = false
      }else if (number===3){
        this.currentsend3hover = false
      }else if (number===4){
        this.currentsend4hover = false
      }else{
        this.currentsend5hover = false
      }
    },
    currentsendhover: function(number){
      if (number===1){
        this.currentsend1hover = true;
        this.currentsend2hover = false;
        this.currentsend3hover = false;
        this.currentsend4hover = false;
        this.currentsend5hover = false;
      }else if (number===2){
        this.currentsend1hover = false;
        this.currentsend2hover = true;
        this.currentsend3hover = false;
        this.currentsend4hover = false;
        this.currentsend5hover = false;
      }else if (number===3){
        this.currentsend1hover = false;
        this.currentsend2hover = false;
        this.currentsend3hover = true;
        this.currentsend4hover = false;
        this.currentsend5hover = false;
      }else if (number===4){
        this.currentsend1hover = false;
        this.currentsend2hover = false;
        this.currentsend3hover = false;
        this.currentsend4hover = true;
        this.currentsend5hover = false;
      }else{
        this.currentsend1hover = false;
        this.currentsend2hover = false;
        this.currentsend3hover = false;
        this.currentsend4hover = false;
        this.currentsend5hover = true;
      }
    },
    paletteleave: function(number){
      if (number===1){
        this.palette1hover = false
      }else if (number===2){
        this.palette2hover = false
      }else if (number===3){
        this.palette3hover = false
      }else if (number===4){
        this.palette4hover = false
      }else{
        this.palette5hover = false
      }
    },
    palettehover: function(number){
      if (number===1){
        this.palette1hover = true;
        this.palette2hover = false;
        this.palette3hover = false;
        this.palette4hover = false;
        this.palette5hover = false;
      }else if (number===2){
        this.palette1hover = false;
        this.palette2hover = true;
        this.palette3hover = false;
        this.palette4hover = false;
        this.palette5hover = false;
      }else if (number===3){
        this.palette1hover = false;
        this.palette2hover = false;
        this.palette3hover = true;
        this.palette4hover = false;
        this.palette5hover = false;
      }else if (number===4){
        this.palette1hover = false;
        this.palette2hover = false;
        this.palette3hover = false;
        this.palette4hover = true;
        this.palette5hover = false;
      }else{
        this.palette1hover = false;
        this.palette2hover = false;
        this.palette3hover = false;
        this.palette4hover = false;
        this.palette5hover = true;
      }
    },
    palettesendleave: function(number){
      if (number===1){
        this.palettesend1hover = false
      }else if (number===2){
        this.palettesend2hover = false
      }else if (number===3){
        this.palettesend3hover = false
      }else if (number===4){
        this.palettesend4hover = false
      }else{
        this.palettesend5hover = false
      }
    },
    palettesendhover: function(number){
      if (number===1){
        this.palettesend1hover = true;
        this.palettesend2hover = false;
        this.palettesend3hover = false;
        this.palettesend4hover = false;
        this.palettesend5hover = false;
      }else if (number===2){
        this.palettesend1hover = false;
        this.palettesend2hover = true;
        this.palettesend3hover = false;
        this.palettesend4hover = false;
        this.palettesend5hover = false;
      }else if (number===3){
        this.palettesend1hover = false;
        this.palettesend2hover = false;
        this.palettesend3hover = true;
        this.palettesend4hover = false;
        this.palettesend5hover = false;
      }else if (number===4){
        this.palettesend1hover = false;
        this.palettesend2hover = false;
        this.palettesend3hover = false;
        this.palettesend4hover = true;
        this.palettesend5hover = false;
      }else{
        this.palettesend1hover = false;
        this.palettesend2hover = false;
        this.palettesend3hover = false;
        this.palettesend4hover = false;
        this.palettesend5hover = true;
      }
    },
    sendcolor: function(direction, number){
      console.log('inside sendcolor and value of direction is: ', direction);
      if (direction==='topalette'){
        this.transfercolor = null;
        this.modifyingcolornumber = -1;
        this.choosecurrenttopalette = !this.choosecurrenttopalette;
        if(this.choosepalettetocurrent===true){
          this.choosepalettetocurrent= !this.choosepalettetocurrent;
        }
      }
      if (direction ==='tocurrent'){
        this.transfercolor = null;
        this.modifyingcolornumber = -1;
        this.choosepalettetocurrent= !this.choosepalettetocurrent;
        if(this.choosecurrenttopalette === true){
          this.choosecurrenttopalette = !this.choosecurrenttopalette;
        }
      }
      if (direction==='replacepalette'){
        if (number==='one'){
          this.mindcolor1 = this.transfercolor;
        }else if (number === 'two'){
          this.mindcolor2 = this.transfercolor;
        }else if (number === 'three'){
          this.mindcolor3 = this.transfercolor;
        }else if (number === 'four'){
          this.mindcolor4 = this.transfercolor;
        }else{
          this.mindcolor5 = this.transfercolor;
        }
        this.transfercolor = null;
        this.choosecurrenttopalette= !this.choosecurrenttopalette;
      }
      if (direction === 'replacecurrent'){
        if (number === 'one'){
          this.color1Save(this.transfercolorRGB);
        } else if (number === 'two'){
          this.color2Save(this.transfercolorRGB);
        } else if (number === 'three'){
          this.color3Save(this.transfercolorRGB);
        } else if (number === 'four'){
          this.color4Save(this.transfercolorRGB);
        }else{
          this.color5Save(this.transfercolorRGB);
        }
        this.transfercolor = null;
        this.transfercolorRGB = null;
        this.choosepalettetocurrent = !this.choosepalettetocurrent;
      }
      if (direction === 'alltopalette'){
        this.mindcolor1 = this.usecolor1;
        this.mindcolor2 = this.usecolor2;
        this.mindcolor3 = this.usecolor3;
        this.mindcolor4 = this.usecolor4;
        this.mindcolor5 = this.usecolor5;
      }
      if (direction === 'alltocurrent'){
        this.color1Save(this.mindcolor1RGB);
        this.color2Save(this.mindcolor2RGB);
        this.color3Save(this.mindcolor3RGB);
        this.color4Save(this.mindcolor4RGB);
        this.color5Save(this.mindcolor5RGB);
      }
    }
  }
}
</script>

<style scoped>

.color{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
}

.facecontainer{
  position: absolute;
  top: 5%;
  left: 2.5%;
  height: 30%;
  width: 15%;
  background: transparent;
}

.facecircle{
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 10px;
  border-style: solid;
  z-index: 1;
}

.glasses1{
  position: absolute;
  top: 35%;
  left: 60%;
  height: 30%;
  width: 30%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform:rotate(90deg);
  z-index: 9;
}

.glasses2{
  position: absolute;
  top: 35%;
  left: 20%;
  height: 30%;
  width: 30%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transform:rotate(90deg);
  z-index: 9;
}

.smile1{
  position: absolute;
  top: 65%;
  left: 25%;
  height: 35%;
  width: 60%;
  border-radius: 50%;
  z-index: 2;
}

.smile3{
  position: absolute;
  top: 65%;
  left: 25%;
  height: 35%;
  width: 60%;
  border-radius: 50%;
  z-index: 2;
  opacity: 0.5;
}

.smile2{
  position: absolute;
  top: 50%;
  left: 25%;
  height: 30%;
  width: 60%;
  border-radius: 50%;
  z-index: 8;
}

.tongue1{
  position: absolute;
  top: 75%;
  left: 35%;
  width: 40%;
  height: 40%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  z-index: 5;
}

.tongue2{
  position: absolute;
  top: 75%;
  left: 53%;
  width: 5%;
  height: 40%;
  z-index: 5;
}

.glassframe1{
  position: absolute;
  top: 48.75%;
  left: 47.75%;
  height: 2.5%;
  width: 15%;
  border-radius: 50%;
  z-index: 10
}
/*clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);*/


.choosecurrenttosend{
  position: absolute;
  top: 30%;
  left: 0%;
  width: 100%;
  color: black;
  font-size: 2vh;
  background: rgba(250,250,250,0.5);
  height: 30%;
  text-align: center;
  cursor: pointer;
}

.choosecurrenttoreplace{
  position: absolute;
  top: 30%;
  left: 0%;
  width: 100%;
  color: black;
  font-size: 2vh;
  background: rgba(250,250,250,0.5);
  height: 30%;
  text-align: center;
}

.choosecurrenttosendinpalette{
  position: absolute;
  top: 30%;
  left: 0%;
  width: 100%;
  color: black;
  font-size: 2vh;
  background: rgba(250,250,250,0.5);
  height: 15%;
  text-align: center;
  cursor: pointer;
}

.modifycolorpalette{
  position: absolute;
  top: 60%;
  left: 0%;
  width: 100%;
  color: black;
  font-size: 2vh;
  background: rgba(250,250,250,0.5);
  height: 15%;
  text-align: center;
  cursor: pointer;
}

.palettereplaceexample{
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100%;
  color: black;
  font-size: 2vh;
  height: 100%;
  text-align: center;
}

.cursorpointer{
  cursor: pointer;
}

.currentreplaceexample{
  position: absolute;
  top: 100%;
  left: 0%;
  width: 100%;
  color: black;
  font-size: 2vh;
  height: 100%;
  text-align: center;
}

.inverttextcolors{
  background-color: black;
  color: white;
  height: 100%;
  width: 100%;
}

.colorpickerbox{
  position: absolute;
  text-align: center;
  width: 38%;
  height: 50%;
  top: 40%;
  left: 5%;
  background-color: rgba(240,240,240,1);
}

.colorpickeropen{
  position: relative;
  height: 100%;
  width: 100%;
}

.sliderpicker{
  width: 100%;
}

.positionrelative{
  position: relative;
  width: 100%;
  height: 100%;
}

.currentsavedcolors{
  position: absolute;
  height: 25%;
  width: 50%;
  left: 20%;
  top: 12.5%;
  background-color: white;
  font-size: 2vh;
  font-weight: bold;
  z-index: 2;
}

p {
  margin-bottom: 0;
  margin-top: 0;
}

.savedcolorstitle{
  position: absolute;
  top: 70%;
  width: 100%;
  text-align: center;
  z-index: 2;
}

.savedpalettetitle{
  position: absolute;
  top: 0%;
  width: 100%;
  text-align: center;
  z-index: 2;
}

.savedcolorbox{
  position: absolute;
  height: 75%;
  width: 20%;
  z-index: 2;
}
/*
.savedcolorbox:hover{
  cursor: pointer;
}*/

.scbposition1{
  left: 0%;
  top: 0%;
}

.scbposition2{
  left: 20%;
  top: 0%;
}

.scbposition3{
  left: 40%;
  top: 0%;
}

.scbposition4{
  left: 60%;
  top: 0%;
}

.scbposition5{
  left: 80%;
  top: 0%;
}

.mindcolorbox{
  position: absolute;
  height: 85%;
  width: 20%;
}

.mcbposition1{
  left: 0%;
  top: 15%;
}

.mcbposition2{
  left: 20%;
  top: 15%;
}

.mcbposition3{
  left: 40%;
  top: 15%;
}

.mcbposition4{
  left: 60%;
  top: 15%;
}

.mcbposition5{
  left: 80%;
  top: 15%;
}

.mindhover{
  position: absolute;
  width: 100%;
  text-align: center;
  background: rgba(255,255,255,0.5);
  font-size: 2vh;
  font-weight: bold;
}

.mhposition1{
  top: 10%;
  left: 10%;
}

.mhposition2{
  top: 40%;
  left: 0%;
}

.mhposition3{
  top: 60%;
  left: 0%;
}

.mindpalette{
  position: absolute;
  width: 50%;
  height: 50%;
  top: 40%;
  left: 45%;
  background: white;
  font-size: 2vh;
  color: black;
  font-weight: bold;
  padding: 0;
}

.colorexample{
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 30%;
}

.rgbshowvalue{
  position: absolute;
  left: 0%;
  top: 30%;
  height: 5%;
  font-weight: bold;
  background: rgb(250,250,250);
  width: 100%;
  text-align: center;
}

.slidercontainer{
  position: absolute;
  width: 100%;
  font-weight: bold;
  background: rgb(250,250,250);
  height: 15%;
  left: 0%;
}

.slider1position{
  top: 35%
}

.slider2position{
  top: 50%
}

.slider3position{
  top: 65%
}

.choosecolorposition1{
  position: absolute;
  width: 100%;
  height: 10%;
  top: 80%;
  left: 0%;
}

.choosecolorposition2{
  position: absolute;
  width: 100%;
  height: 10%;
  top: 90%;
  left: 0%;
}



.gradientbar{
  width: 100%;
  height: 10px;
}

.opencolorpicker, .colormindbutton, .colorclickreminder, .onecolorpalettetocurrent, .onecolorcurrenttopalette, .allcolorspalettetocurrent, .allcolorscurrenttopalette{
  padding: 1%;
  font-size: 2vh;
  font-weight: bold;
  color: black;
  background-color: rgb(250, 250, 250);
}

.choosecolor{
  font-size: 3vh;
  font-weight: normal;
  color: black;
  background-color: rgb(250, 250, 250);
}

.choosecolor p {
  line-height: 110%;
}

/*<div class='onecolorpalettetocurrent'>
<div class='allcolorspalettetocurrent'>*/

.opencolorpicker:hover, .choosecolor:hover, .colormindbutton:hover, .onecolorpalettetocurrent:hover, .onecolorcurrenttopalette:hover, .allcolorspalettetocurrent:hover, .allcolorscurrenttopalette:hover{
  background-color: black;
  color: white;
  cursor: pointer;
}

.colorswapposition1{
  position: absolute;
  left: 100%;
  height: 10%;
  width: 50%;
  top: 0%;
  font-size: 1vw;
  white-space: nowrap;
}

.colorswapposition2{
  position: absolute;
  left: 100%;
  width: 50%;
  height: 10%;
  top: 20%;
  font-size: 1vw;
  white-space: nowrap;
}

.colorswapposition3{
  position: absolute;
  right: 0%;
  width: 40%;
  height: 5%;
  top: -20%;
  font-size: 1vw;
  white-space: nowrap;
}

.colorswapposition4{
  position: absolute;
  right: 0%;
  width: 40%;
  height: 5%;
  top: -10%;
  font-size: 1vw;
  white-space: nowrap;
}

.color{
  position: relative;
}

.cmbposition2{
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 1;
}

.cmbposition1{
  position: absolute;
  top: 100%;
  right: 0%;
  z-index: 1;
}

.cmbposition3{
  position: absolute;
  top: -15%;
  left: 0%;
  z-index: 1;
}

h1, h2 {
  font-weight: normal;
}

.slider1{
  width: 50%;
  margin: 0 auto;
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
