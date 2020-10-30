! function(t) {
    "use strict";
    jQuery(document).on("ready", function() {
        t(".navbar .navbar-nav li a, .navbar .appointment-btn").on("click", function(o) {
                var n = t(this);
                t("html, body").stop().animate({
                    scrollTop: t(n.attr("href")).offset().top - 50
                }, 1500), o.preventDefault()
            }), t(document).on("click", ".navbar-collapse.in", function(o) {
                t(o.target).is("a") && "dropdown-toggle" != t(o.target).attr("class") && t(this).collapse("hide")
            }), t(".navbar .navbar-nav li a").on("click", function() {
                t(".navbar-collapse").collapse("hide")
            }), t(window).on("scroll", function() {
                t(this).scrollTop() > 120 ? t(".navbar-light").addClass("is-sticky") : t(".navbar-light").removeClass("is-sticky")
            }), t(".hero-slides").owlCarousel({
                items: 1,
                // nav: !1,
                // dots: !0,
                nav: false,
                dots: false,
                touchDrag: !1,
                mouseDrag: true,
                autoplay: true,
                smartSpeed: 700,
                loop: !0,
                navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"]
            }), t(".company-slider").owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        center: true
                    },
                    340: {
                        items: 2
                    },
                    550: {
                        items: 2,
                        margin: 10
                    },
                    992: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            }),
            t(".testi-slider").owlCarousel({
                loop: true,
                margin: 20,
                autoplay: true,
                nav: true,
                dots: false,
                navText: ["<i class='icon-chevron-left'></i>", "<i class='icon-chevron-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    550: {
                        items: 1,
                        center: false,
                        margin: 10
                    },
                    992: {
                        items: 1
                    },
                    1200: {
                        items: 2
                    }
                }
            }), t(".brand-slider").owlCarousel({
                autoplay: true,
                loop: true,
                dots: false,
                smartSpeed: 1000,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    450: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            }),

            function(t) {
                t(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"), t(".tab ul.tabs li a").on("click", function(o) {
                    var n = t(this).closest(".tab"),
                        a = t(this).closest("li").index();
                    n.find("ul.tabs > li").removeClass("current"), t(this).closest("li").addClass("current"), n.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq(" + a + ")").slideUp(), n.find(".tab_content").find("div.tabs_item:eq(" + a + ")").slideDown(), o.preventDefault()
                })
            }(jQuery), t(function() {
                t(".accordion").find(".accordion-title").on("click", function() {
                    t(this).toggleClass("active"), t(this).next().slideToggle("fast"), t(".accordion-content").not(t(this).next()).slideUp("fast"), t(".accordion-title").not(t(this)).removeClass("active")
                })
            }), t(function() {
                t("#datepicker").datepicker()
            }), t(".count").counterUp({
                delay: 20,
                time: 1500
            }), t(function() {
                t(".shorting").mixItUp()
            }), t(".popup-btn").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                }
            }), t(".popup-video").magnificPopup({
                disableOn: 320,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), t(function() {
                t(window).on("scroll", function() {
                    var o = t(window).scrollTop();
                    o > 300 && t(".go-top").fadeIn("slow"), o < 300 && t(".go-top").fadeOut("slow")
                }), t(".go-top").on("click", function() {
                    t("html, body").animate({
                        scrollTop: "0"
                    }, 500)
                })
            })
    }), jQuery(window).on("load", function() {
        t(".preloader-area").fadeOut()
    })
}(jQuery);