import '../scss/app.scss';

import $ from 'jquery';
//import foundation from 'foundation-sites/dist/foundation.js';
import {attachSubmitHandlers} from "./test.es6.js";
import selectPage from "./pager.es6.js";

$(document).ready(function(){
    var pages = $(".topics > h6, .topic, .tutorialtest .testquestion, .results, .talk_to_us, .page");
    var topics = $(".topic");
    var pager = $(".content ul#pageselect");

    selectPage(pager, pages, topics);
    attachSubmitHandlers();
}
);
