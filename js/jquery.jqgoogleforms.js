/*
 * jqGoogleForms: a demonstration of the ability to submit a Google Form with jquery and AJAX.
 * DISCLAIMER: This plugin is in no way created nor endorsed by Google Inc. 

               This plugin is provided only as demonstration of a method. The creator 
               does not endorse it's use in place of Google's proprietary interface.

               Use it at your own discretion. Removing Google branding and/or disclaimers 
               may or may not be in violation of Google's Terms of Service. 
               
 * Version: 1.0.0
 * Original author: Corey Walsh
 * Website: http://www.hzldv.com
 * Email: chwalsh@mit.edu
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'jqGoogleForms',
        defaults = {},
        options = {};

    function jqGoogleForms( element, customOptions ) {
        options = $.extend( {}, defaults, customOptions) ;
        if (options.formKey){
            options["url"] = "https://docs.google.com/forms/d/" + options.formKey + "/viewform?embedded=true"
        }   
    }

    /**
     * A really lightweight plugin wrapper around the constructor,
        preventing against multiple instantiations
     * @param  {Object} options
     * @return {jQuery Object}
     */
    $.fn[pluginName] = function ( options ) {
        return this.each(function(i) {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new jqGoogleForms( this, options ));
            }
        });
    };

    $.fn[pluginName]().sendFormData = function(data){ //appends to main function, reduce namespace footprint
        if (options.formKey) {
            $.ajax({
                url: "https://docs.google.com/forms/d/" + options.formKey + "/formResponse",
                data: data,
                type: "POST",
                dataType: "xml"
            });
        } else {
            console.log("jqGoogleForms: No form key!");
        }
    };

})( jQuery, window, document );