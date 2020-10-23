
(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

	$(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.headerbg');
    
    if (scrollPos > 20) {
      navbar.addClass('change-color');
    } else {
      navbar.removeClass('change-color');
    }
  });
});
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
			if($("#home").hasClass("active-nav"))
			$("#wussy").text("Homepage");
		else if($("#shop").hasClass("active-nav"))
			$("#wussy").text("shop")
		else if($("#info").hasClass("active-nav"))
			$("#wussy").text("contact us")
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
			if($("#home").hasClass("active-nav"))
			$("#wussy").text("Light theme is for noobs!")
		else if($("#shop").hasClass("active-nav"))
			$("#wussy").text("Light shop")
		else if($("#info").hasClass("active-nav"))
			$("#wussy").text("Light contact us")


		}
	}); 
	var val=1;         
       var bruh = function () {
		var init = function init() {
			
			applyListeners(home,shop,info);
		};
		var applyListeners = function applyListeners(lmao,noice,epic) {
			lmao.addEventListener('click', function () {
				return toggleClass(lmao, 'active-nav');
			});
			noice.addEventListener('click', function () {
				return toggleClass(noice, 'active-nav');
			});
			epic.addEventListener('click', function () {
				return toggleClass(epic, 'active-nav');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (home.classList.contains(stringClass)) {home.classList.remove(stringClass);$(".txtman").css({"display":"none"});}
			else if (shop.classList.contains(stringClass)) {shop.classList.remove(stringClass);$(".container").css({"display":"none"});}
			else if (info.classList.contains(stringClass)) info.classList.remove(stringClass);
			element.classList.add(stringClass);
			if($("#home").hasClass("active-nav"))
			{
				$(".txtman").css({"display":"block"})
			if($("body").hasClass("light")){
			$("#wussy").text("Light theme is for noobs!")
		}else $("#wussy").text("Homepage");
		} else if($("#shop").hasClass("active-nav"))
		{
			$(".container").css({"display":"flex"})
			if($("body").hasClass("light")){
			$("#wussy").text("Light shop")
		}else $("#wussy").text("shop")
		} else if($("#info").hasClass("active-nav")){
			if($("body").hasClass("light")) {
			$("#wussy").text("Light contact us")
			}else $("#wussy").text("contact us")
	}
		};
		init();
	}();       
})(jQuery); 
