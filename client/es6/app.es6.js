import '../scss/app.scss';

import $ from 'jquery';
import foundation from 'foundation-sites/dist/foundation.js';
import {attachSubmitHandlers} from "./test.es6.js";
import selectPage from "./pager.es6.js";

$(document).ready(function(){
    var pager = $(".content ul#pageselect");

    $(document).foundation();
    attachSubmitHandlers();
}
);
