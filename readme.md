# jqGoogleForms.js #

A demonstration of a method to submit Google Forms using AJAX. 

Author: Corey Walsh (http://hzldv.com)
Version: 1.0.0 (2014-02-1)

MIT Licensed (http://www.opensource.org/licenses/mit-license.php)

## DISCLAIMER ##

This plugin is in no way created nor endorsed by Google Inc. 

This plugin is provided only as demonstration of a method. The creator does not endorse it's use in place of Google's proprietary interface.

Use it at your own discretion. Removing Google branding and/or disclaimers or may not be in violation of Google's Terms of Service.

## Getting Started ##

Create a Google Form by clicking "CREATE" -> "Form" at http://drive.google.com, add all of the fields that you desire. Note the form key, found in the URL between "/d/" and "/edit" of the form creation page:

docs.google.com/forms/d/ (YOUR FORM KEY) /edit

Download the [production version][min] or the [development version][max] and include it after jQuery. Example:

<script type="text/javascript" src="js/jquery.jqgoogleforms.min.js"></script>

Then attach the main method of the plugin to an element, and store that in a variable for ease of use:

```javascript
var googleForm = $(window).jqGoogleForms({"formKey": "YOUR FORM KEY"});
```

To send the form, you must find the name of each field you wish to submit. To find these: 
1) Open Chrome (or another browser that can view source) 
2) View your form live 
3) On each form input or text area there will be a "name" attribute, set to something like "entry.1234567890" 
4) Gather all of these names, and keep in mind which field they are associated with 
5) Use the "sendFormData" method, passing in an object containing all of the data you wish to send in the format of {name:data,name:data} 

Example:
```javascript
googleForm.sendFormData({
    "entry.##########": "some data",
    "entry.##########": "some more data"
});
```


[min]: https://github.com/kctess5/jqGoogleForms/blob/master/js/jquery.jqgoogleforms.min.js
[max]: https://github.com/kctess5/jqGoogleForms/blob/master/js/jquery.jqgoogleforms.js

### Example ###

A minimal HTML structure for submitting a form may like this:

```html
<head>
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.jqgoogleforms.min.js"></script>
</head>
<body>

</body>
<script type="text/javascript">
var googleForm = $(window).jqGoogleForms({"formKey": "YOUR FORM KEY"});

googleForm.sendFormData({
    "entry.1313128433": email
});
</script>
```
## Notes ##

jqGoogleForm does not do any input sanitization, so be sure to do that in your jquery. If data gets sent which does not comply with you Google Form's validation rules, it will simply not work.

**NOTE: The console will log a XXS error, however this DOES NOT mean that the request failed. Go ahead and look for yourself at your form submission data...**

## Support ##
Contact me through my site http://hzldv.com if you encounter issues. I will try to fix them and update code if necessary.

## Release History ##

+ **v1.0.0 (2014-02-1)** Initial version