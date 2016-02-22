var cmc_portal = cmc_portal || {};

cmc_portal.fileInputs = function () {
 var $this = $(this);
 var $val = $this.val();
 var items = [];
 var valArray = $val.split('\\');
 var newVal = valArray[valArray.length - 1];
 var $button = $this.siblings('button')
 var $fakeFile = $this.siblings('.file-holder');

 if ($.isArray($val)) {
    for(i = 0; i < $val.length; i++) {
        items.push
    }
 } else {
     
 }
 
 if (newVal !== '') {
   $button.text('file chosen');
   if ($fakeFile.length === 0) {
     $button.after('<span class="file-holder">' + newVal + '</span>');
   } else {
     $fakeFile.text(newVal);
   }
 }
};

$(document).ready(function () {
 $('.file-wrapper input[type=file]').bind('change focus click', cmc_portal.fileInputs);
});
​[15:58] 
<span class="file-wrapper">
   <input type="file" name="photo" id="photo" multiple />
   <button class="button">choose file</button>
 </span>