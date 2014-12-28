(function(window){

    'use strict';
    function define_noob(){
        var noob = {};
        
        noob.fullScreen = function(){
            $("html, body").css("margin", "0");
            $("html, body").css("padding", "0");
        }

        noob.setColor = function(div, color) {
        	$(div).css("background-color", color);
        }

        noob.ajax = function() {
            var php;
            for (var i = 0; i < arguments.length; i++) {
                php = arguments[0];
            }
            var phpURL = php + "?data_1=" + arguments[1] + "&data_2=" + arguments[2];
            $.ajax({
                url: phpURL,
                type: "GET",
                dataType: "text",
                success: function() { console.log(arguments[1]); }
            }).done(function(data) {
                console.log(data);
            });
        }

        return noob;
    }
 
    if(typeof(noob) === 'undefined') {
        window.noob = define_noob();
    }
    else {
        console.log("noob already defined.");
    }
})(window);