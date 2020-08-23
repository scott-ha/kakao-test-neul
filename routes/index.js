var express = require('express');
var moment = require('moment');
var router = express.Router();

const work_week = 40;

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(moment.format("MM-DD-YYYY"));
  res.render('index', {
    title: moment.format("MM-DD-YYYY")
  });
});

// qr test HN
router.post('/qr', function(req, res, next) {
  console.log('--req--');
  var barcode = JSON.parse(req.body.action.params.barcode);
  var barcode_url = barcode.barcodeData
  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": "바코드 입력 완료"
        }
      }, {
        "basicCard": {
          "title": "링크 to barcode",
          "description": "링크 to barcode",
          "buttons": [{
              "action": "webLink",
              "label": "링크 넘어가기",
              "webLinkUrl": barcode_url
            }
          ]
        }
      }]
    }
  }

  kakao_res = kakao_data;
  res.status(200).send(kakao_res);
  console.log('--res--');
  console.log(kakao_res);
  // initialize
  kakao_data,
  kakao_res = '';

});

// time test hn
router.post('/time', function(req, res, next) {
  console.log('--req--');
  var time_1 = JSON.parse(req.body.action.params.time);
  time_1 = timq_1.value;
  // 시스템에 시간 받은거 뿌려주면됨..
  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": time_1
        }
      }, {
        "simpleText": {
          "text": "시간 입력 완료"
        }
      }]
    }
  }
  kakao_res = kakao_data;
  res.status(200).send(kakao_res);
  console.log('--res--');
  console.log(kakao_res);
  // initialize
  kakao_data,
  kakao_res = '';

});

module.exports = router;
