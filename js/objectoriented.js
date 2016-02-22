//var cmc_portal = cmc_portal || {};
//​
//            cmc_portal.fileInputs = function () {
//             var $this = $(this);
//             var $val = $this.val();
//             var names = [];
//             var valArray = $val.split('\\');
//             var newVal = valArray[valArray.length - 1];
//             var $button = $this.siblings('button')
//             var $fakeFile = $this.siblings('.file-holder');
//                
//                function printFilesToPage(fileNames) {
//                  if (fileNames !== '') {
//                       $button.text('file chosen');
//                       if ($fakeFile.length === 0) {
//                            for (i = 0; i < fileNames.length; i++) {
//                                $button.after('<span class="file-holder">' + fileNames[i] + '</span><br>');
//                            }
//                         
//                       } else {
//                         $fakeFile.text(fileNames);
//                       }
//                     }
//                  
//                }
//                
//              //console.log($(this));
//             for (var i = 0; i < $(this).get(0).files.length; ++i) {
//                 names.push($(this).get(0).files[i].name);
//             }
//             printFilesToPage(names);
//           
//              
//​
//             
//            };
//​
//            $(document).ready(function () {
//             $('.file-wrapper input[type=file]').bind('change', cmc_portal.fileInputs);
//            });

 var scrollify = scrollify || {};

    scrollify.animateSection = function(selector) {
          if ($(selector).length && $(window).width() >= 1024 && !isMobileWebkit) {
              
                    //run animation
                    $(hiddenSelector).each(function(i) {
                        $(this).delay((i++) * 200).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 500, function() {
                          $(displayNoneSelector).fadeIn('slow');
                        }); 
                    });
            
          // $(window).off("scroll", selector );
        }
    }

    scrollify.displayNone = function(displayNoneSelector) {
        for(var x = 0; x < displayNoneSelector.length; x++) {
		var selector = displayNoneSelector[x];
		//for each element that matches the selector
            $(selector).each(function() {
                if ($(selector).length) {
                    $(selector).hide(); 
                }
            });
        }
        
    }
    
    scrollify.hideSelector = function(hiddenSelector) {
        for(var x = 0; x < hiddenSelector.length; x++) {
		var selector = hiddenSelector[x];
            //for each element that matches the selector
            $(selector).each(function() {
                if ($(selector).length) {
                    $(selector).css('visibility', 'hidden');
                }
            });
        }

    }