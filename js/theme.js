$(".search i,.mobileSearch i").click(function(a){$(this).siblings("form").fadeIn()});$("#wrapper").click(function(a){$(".search form,.mobileSearch form").fadeOut()});$(document).on("click","#header .mobile .menu-icon",function(a){a.preventDefault();$(this).siblings(".menu-list").slideToggle("500",function(){$(this).find(".menu-top-container").fadeToggle("500")});$(this).toggleClass("expand");$("#header .mobile .logo").toggleClass("expand");$(this).siblings(".menu-list").toggleClass("show");if(!$(this).hasClass("expand")){$(this).siblings().find("ul ul").slideUp();$(this).siblings().find("*").removeClass("expand")}});$(document).on("click","#header .mobile li > a",function(a){if($(this).parent().hasClass("menu-item-has-children")){a.preventDefault()}$(this).parent().siblings().find("ul").slideUp();$(this).parent().siblings().removeClass("expand");$(this).parent().siblings().find("*").removeClass("expand");$(this).siblings().find("ul").slideUp();$(this).siblings().find("*").removeClass("expand");$(this).siblings("ul").slideToggle();$(this).parent().toggleClass("expand")});$("#wrapper").click(function(a){$("#header ul.menu > li ul").slideUp();$("#header").find("*").removeClass("expand")});function waterfallGridInit(){$(".category.container .row").masonry({itemSelector:".waterfallGrid",})}function randomThumbnailHeight(){$(".post-photo .img div").each(function(a,b){if($(this).height()<10){if($(this).attr("ratio")==0){$(this).height($(this).width()*0.6+Math.random()*$(this).width()*0.6);$(this).attr("ratio",$(this).width()/$(this).height())}else{$(this).height($(this).width()/$(this).attr("ratio"))}}})}function parseHeightByRatio(){$(".post-photo .img div").each(function(a,b){if($(this).attr("ratio")!="0"){$(this).height($(this).width()/$(this).attr("ratio"))}})}function backgroundImgScroll(){$(".backgroundImg").css("top",-$(window).scrollTop()/2)}var ajaxOnce=true;function ajaxNextPage(){ajaxOnce=false;link=$(".next_pagi > a").attr("href");if(link==undefined){return true}$(".category.container").append("<div class='loading ms-spining-line'><div></div><div></div><div></div><div></div></div>");$.ajax({url:link,type:"GET",}).done(function(b){var a=$(b).find(".category.container .waterfallGrid");$(".category.container > .row").append(a);randomThumbnailHeight();$(".category.container .row").masonry("appended",a,true);$(".next_pagi > a").remove();$(".next_pagi").append($(b).find(".next_pagi > a"));$(".category.container .loading").remove()}).always(function(){ajaxOnce=true})}function ajaxMonthlyList(){$("ul.monthly > li").each(function(b,c){var d=$(this).children("a").attr("href");$(this).append('<a href="'+d+'" class="no-before"><div class="pics"></div></a>');var a=$(this).find(".pics");$.ajax({url:d,type:"GET",}).done(function(f){var e=$(f).find(".category.container .waterfallGrid .img");e.find("div").each(function(g,h){$(this).css({"width":80*parseFloat($(this).attr("realratio")),"height":80,})});a.prepend(e)})})}$(function(){randomThumbnailHeight();waterfallGridInit();ajaxMonthlyList()});$(window).scroll(function(a){backgroundImgScroll();if(($(document).height()-$(window).height()-$(document).scrollTop()<100)&ajaxOnce){ajaxNextPage()}});$(window).resize(function(a){parseHeightByRatio()});

