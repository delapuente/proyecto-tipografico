!function(n){var e={};function t(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,s){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:s})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./resources/js/index.js")}({"./resources/js/index.js":function(module,exports){eval("//WTF?!?!?! > \n\n\nwindow.addEventListener(\"load\", function(){\n    \n    if(document.contentEditable != undefined && document.execCommand != undefined)\n   {\n       alert(\"HTML5 Document Editing API Is Not Supported\");\n    }\n    else\n    {\n        document.execCommand('styleWithCSS', false, true);\n    }\n}, false);\n   \nvar area_texto = document.querySelectorAll(\".typetext_container\");\n\nfor (var i = 0; i <  area_texto.length; i++) {\narea_texto[i].addEventListener(\"click\", function() {\n       document.getElementById(\"control-bar\").style.display = 'block';\n    }, false);\n}\n    \n$(\".link-falso-jq\").click(function(){$(\"#lista__jq\").toggleClass(\"inactive\")});\n        \n\n$('[data-func]').click(function(){\ndocument.execCommand( $(this).data('func'), false   );\n});\n\nfunction fontSize()\n{\n   var rangeInput_Size = document.getElementById(\"text-size\").value;\n  document.execCommand(\"fontSize\", false, \"7\");\n  var fontElements = document.getElementsByTagName(\"font\");\n  for (var i = 0, len = fontElements.length; i < len; ++i) {\n      if (fontElements[i].size == \"7\") {\n          fontElements[i].removeAttribute(\"size\");\n          fontElements[i].style.fontSize = rangeInput_Size + \"px\";\n      }\n  }\n}\n\nfunction lineHeight(){\n    var rangeInput_lineHeight = document.getElementById(\"line_height\").value;\n    document.getElementById(\"contenedor_jq\").style.lineHeight  = rangeInput_lineHeight +\"px\";\n    \n}\n    \n/*Basic typesetting*/\n$('input[name=\"standar_ligatures\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('stan_liga') : $('#contenedor_jq').removeClass('stan_liga');\n});\n\n$('input[name=\"contextual_ligatures\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('contextual_ligatures') : $('#contenedor_jq').removeClass('contextual_ligatures');\n});\n\n/*Letter case*/\n$('input[name=\"small_caps\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('smcp') : $('#contenedor_jq').removeClass('smcp');\n});\n\n$('input[name=\"case_sensitive\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('case_sensitive') : $('#contenedor_jq').removeClass('case_sensitive');\n});\n\n/*Numerals*/\n$('input[name=\"old_style_figures\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('old_style') : $('#contenedor_jq').removeClass('old_style');\n});\n\n$('input[name=\"fractions\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('fractions') : $('#contenedor_jq').removeClass('fractions');\n});\n\n$('input[name=\"pnum\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('pnum') : $('#contenedor_jq').removeClass('pnum');\n});\n\n$('input[name=\"super_script\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('super_script') : $('#contenedor_jq').removeClass('super_script');\n});\n\n$('input[name=\"sub_script\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('sub_script') : $('#contenedor_jq').removeClass('sub_script');\n});\n\n/*Typographic variants*/\n$('input[name=\"swsh\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('swsh') : $('#contenedor_jq').removeClass('swsh');\n});\n\n$('input[name=\"dlig\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('dis_liga') : $('#contenedor_jq').removeClass('dis_liga');\n});\n\n$('input[name=\"hist\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('hist_forms') : $('#contenedor_jq').removeClass('hist_forms');\n});\n\n$('input[name=\"hlig\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('hist_lig') : $('#contenedor_jq').removeClass('hist_lig');\n});\n\n$('input[name=\"ss01\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('sty_set01') : $('#contenedor_jq').removeClass('sty_set01');\n});\n\n$('input[name=\"ss02\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('sty_set02') : $('#contenedor_jq').removeClass('sty_set02');\n});\n\n$('input[name=\"ss03\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('sty_set03') : $('#contenedor_jq').removeClass('sty_set03');\n});\n\n$('input[name=\"salt\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('salt') : $('#contenedor_jq').removeClass('salt');\n});\n\n$('input[name=\"ornaments\"]').change(function(){\n  this.checked ? $('#contenedor_jq').addClass('ornaments') : $('#contenedor_jq').removeClass('ornaments');\n});\n\n\n//# sourceURL=webpack:///./resources/js/index.js?")}});