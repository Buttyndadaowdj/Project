let express = require('express');
let SwiperModel = require('./SwiperModel')
let VideoModel = require('./VideoModel')
let QuestionsModel = require('./QuestionsModel')
let SubjectModle = require('./SubjectModle')
let Answer_A = require('./Answer_A')
let Answer_B = require('./Answer_B')
let Answer_C = require('./Answer_C')
let Answer_D = require('./Answer_D')
let app = express();
let kings = {
    swiper: [], video: [], questions: [], subject: [],
    answer_A: [], answer_B: [], answer_C: [], answer_D: []
}
app.get('/index', function (req, res) {
    console.log(req.query.user);
    let videoModel = new VideoModel();
    let swiperModel = new SwiperModel();
    let subjectModle = new SubjectModle();
    let questionsModel = new QuestionsModel();
    let answer_A = new Answer_A();
    let answer_B = new Answer_B();
    let answer_C = new Answer_C();
    let answer_D = new Answer_D();

    videoModel.select(function (data) {
        kings.video = data;
    });
    subjectModle.select(function (data) {
        kings.subject = data;
    });
    swiperModel.select(function (data) {
        kings.swiper = data;
    });
    questionsModel.select(function (data) {
        kings.questions = data;
    });
    answer_A.select(function (data) {
        kings.answer_A = data;
    });
    answer_B.select(function (data) {
        kings.answer_B = data;
    });
    answer_C.select(function (data) {
        kings.answer_C = data;
    });
    answer_D.select(function (data) {
        kings.answer_D = data;
    });

    setTimeout((res) => {
        res.json(kings);
    }, 1000, res);
});
app.listen(8888, function () {
    console.log("strat");
});