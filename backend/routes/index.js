var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/apitest', (req,res,next)=>{
  //
  // console.log('inside apitest');
  //
  // var url = "http://colormind.io/api/";
  // var data = {
  // 	model : "default",
  // 	input : [[44,43,44],[90,83,82],"N","N","N"]
  // }
  //
  // var http = new XMLHttpRequest();
  //
  // http.onreadystatechange = function() {
  // 	if(http.readyState == 4 && http.status == 200) {
  //     console.log('inside if statement');
  // 		var palette = JSON.parse(http.responseText).result;
  //     console.log('value of palette inside if statement: ', palette);
  //   }
  // }
  //
  // http.open("POST", url, true);
  // http.send(JSON.stringify(data));
  // console.log('value of palette: ', palette);


  axios.get('http://colormind.io/api/', {
    data: {
      model: 'default',
    }
  })
  .then((response)=>{
    console.log('response from colormind: ', response.data.result);
    res.json({'colormind_response': response.data.result})
  })
  .catch((error)=>{
    console.log('error from colormind: ', error);
    res.json({'colormind_error': error})
  })
})

// router.post('/routertest', (req, res, next) => {
//   res.json({'makemoney':'getbitches'})
// })

router.post('/colormindretrievepalette', (req, res, next) => {

  var ifstatementcounter = 0;
  var promise = new Promise((resolve)=>{
      for (var x=0; x<=5; x++){
        console.log('inside for loop');
        console.log('value of req.bod.input['+x+'] is: ', req.body.input[x]);
        if (req.body.input[x]==='N'){
          ifstatementcounter++;
        }
        if(x===5){
          resolve(true)
        }
      }
  })
  promise.then((resolved)=>{
    if (resolved){
      console.log('inside promise.then and value of ifstatementcounter is ', ifstatementcounter);
      var returnresponse;
      if (ifstatementcounter===5){
        console.log('inside first if statement');
        axios.get('http://colormind.io/api/', {
          data: {
            model: 'ui',
          }
        })
        .then((response)=>{
          console.log('response from colormind: ', response.data.result);
          res.json({'colormind_response': response.data.result})
        })
        .catch((error)=>{
          console.log('error from colormind: ', error);
          res.json({'colormind_error': error})
        })
      }else{
        axios.get('http://colormind.io/api/', {
          data: {
            model: 'ui',
            input: req.body.input
          }
        })
        .then((response)=>{
          console.log('response from colormind: ', response.data.result);
          res.json({'colormind_response': response.data.result})
        })
        .catch((error)=>{
          console.log('error from colormind: ', error);
          res.json({'colormind_error': error})
        })
      }
    }
  })
})


module.exports = router;
