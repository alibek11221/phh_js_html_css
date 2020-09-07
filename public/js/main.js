/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */


// ==================================================
// fancyBox v3.4.0
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function (t, e, n, o) {
    "use strict";

    function a(t, e) {
        var o, a, i, s = [], r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), i = n.fancybox.getInstance(), i && i.$trigger && i.$trigger.is(o) || (e.selector ? s = n(e.selector) : (a = o.attr("data-fancybox") || "", a ? (s = t.data ? t.data.items : [], s = s.length ? s.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]')) : s = [o]), r = n(s).index(o), r < 0 && (r = 0), i = n.fancybox.open(s, e, r), i.$trigger = o))
    }

    if (t.console = t.console || {
        info: function (t) {
        }
    }, n) {
        if (n.fn.fancybox) return void console.info("fancyBox already initialized");
        var i = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {preload: !1},
            ajax: {settings: {data: {fancybox: !0}}},
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {scrolling: "auto"}
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload"><source src="{{src}}" type="{{format}}" />Your browser doesn\'t support HTML5 video</video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></svg></a>',
                arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></a>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {autoStart: !1},
            touch: {vertical: !0, momentum: !0},
            hash: null,
            media: {},
            slideShow: {autoStart: !1, speed: 3e3},
            thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function (t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                idleTime: !1, clickContent: function (t, e) {
                    return "image" === t.type && "toggleControls"
                }, clickSlide: function (t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                }, dblclickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                }, dblclickSlide: function (t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "Zurück",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Maßstab"
                }
            }
        }, s = n(t), r = n(e), c = 0, l = function (t) {
            return t && t.hasOwnProperty && t instanceof n
        }, u = function () {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }(), d = function () {
            var t, n = e.createElement("fakeelement"), a = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in a) if (n.style[t] !== o) return a[t];
            return "transitionend"
        }(), f = function (t) {
            return t && t.length && t[0].offsetHeight
        }, p = function (t, e) {
            var o = n.extend(!0, {}, t, e);
            return n.each(e, function (t, e) {
                n.isArray(e) && (o[t] = e)
            }), o
        }, h = function (t, e, o) {
            var a = this;
            a.opts = p({index: o}, n.fancybox.defaults), n.isPlainObject(e) && (a.opts = p(a.opts, e)), n.fancybox.isMobile && (a.opts = p(a.opts, a.opts.mobile)), a.id = a.opts.id || ++c, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(t), a.group.length && a.init()
        };
        n.extend(h.prototype, {
            init: function () {
                var a, i, s, r = this, c = r.group[r.currIndex], l = c.opts, u = n.fancybox.scrollbarWidth;
                l.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && l.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (u === o && (a = n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), u = n.fancybox.scrollbarWidth = a[0].offsetWidth - a[0].clientWidth, a.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"), n("body").addClass("compensate-for-scrollbar")), s = "", n.each(l.buttons, function (t, e) {
                    s += l.btnTpl[e] || ""
                }), i = n(r.translate(r, l.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox", r).appendTo(l.parentEl), r.$refs = {container: i}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                    r.$refs[t] = i.find(".fancybox-" + t)
                }), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
            }, translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    var a = n[e];
                    return a === o ? t : a
                })
            }, addContent: function (t) {
                var e, a = this, i = n.makeArray(t);
                n.each(i, function (t, e) {
                    var i, s, r, c, l, u = {}, d = {};
                    n.isPlainObject(e) ? (u = e, d = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e), d = i.data() || {}, d = n.extend(!0, {}, d, d.options), d.$orig = i, u.src = a.opts.src || d.src || i.attr("href"), u.type || u.src || (u.type = "inline", u.src = e)) : u = {
                        type: "html",
                        src: e + ""
                    }, u.opts = n.extend(!0, {}, a.opts, d), n.isArray(d.buttons) && (u.opts.buttons = d.buttons), n.fancybox.isMobile && u.opts.mobile && (u.opts = p(u.opts, u.opts.mobile)), s = u.type || u.opts.type, c = u.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video", u.opts.video.format || (u.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")), s ? u.type = s : a.trigger("objectNeedsType", u), u.contentType || (u.contentType = n.inArray(u.type, ["html", "inline", "ajax"]) > -1 ? "html" : u.type), u.index = a.group.length, "auto" == u.opts.smallBtn && (u.opts.smallBtn = n.inArray(u.type, ["html", "inline", "ajax"]) > -1), "auto" === u.opts.toolbar && (u.opts.toolbar = !u.opts.smallBtn), u.opts.$trigger && u.index === a.opts.index && (u.opts.$thumb = u.opts.$trigger.find("img:first"), u.opts.$thumb.length && (u.opts.$orig = u.opts.$trigger)), u.opts.$thumb && u.opts.$thumb.length || !u.opts.$orig || (u.opts.$thumb = u.opts.$orig.find("img:first")), "function" === n.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(e, [a, u])), "function" === n.type(a.opts.caption) && (u.opts.caption = a.opts.caption.apply(e, [a, u])), u.opts.caption instanceof n || (u.opts.caption = u.opts.caption === o ? "" : u.opts.caption + ""), "ajax" === u.type && (l = c.split(/\s+/, 2), l.length > 1 && (u.src = l.shift(), u.opts.filter = l.shift())), u.opts.modal && (u.opts = n.extend(!0, u.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), a.group.push(u)
                }), Object.keys(a.slides).length && (a.updateControls(), e = a.Thumbs, e && e.isActive && (e.create(), e.focus()))
            }, addEvents: function () {
                var o = this;
                o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.next()
                }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), s.on("orientationchange.fb resize.fb", function (t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? u(function () {
                        o.update()
                    }) : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(), setTimeout(function () {
                        o.$refs.stage.show(), o.update()
                    }, n.fancybox.isMobile ? 600 : 250))
                }), r.on("focusin.fb", function (t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus())
                }), r.on("keydown.fb", function (t) {
                    var e = o.current, a = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === a || 27 === a ? (t.preventDefault(), void o.close(t)) : 37 === a || 38 === a ? (t.preventDefault(), void o.previous()) : 39 === a || 40 === a ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, a)
                }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                    o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
                }), o.idleInterval = t.setInterval(function () {
                    o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
                }, 1e3))
            }, removeEvents: function () {
                var e = this;
                s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
            }, previous: function (t) {
                return this.jumpTo(this.currPos - 1, t)
            }, next: function (t) {
                return this.jumpTo(this.currPos + 1, t)
            }, jumpTo: function (t, e) {
                var a, i, s, r, c, l, u, d = this, p = d.group.length;
                if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
                    if (t = parseInt(t, 10), s = d.current ? d.current.opts.loop : d.opts.loop, !s && (t < 0 || t >= p)) return !1;
                    if (a = d.firstRun = !Object.keys(d.slides).length, !(p < 2 && !a && d.isDragging)) {
                        if (c = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, r = d.createSlide(t), p > 1 && ((s || r.index > 0) && d.createSlide(t - 1), (s || r.index < p - 1) && d.createSlide(t + 1)), d.current = r, d.currIndex = r.index, d.currPos = r.pos, d.trigger("beforeShow", a), d.updateControls(), i = d.isMoved(r), r.forcedDuration = o, n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), a) return r.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.removeClass("fancybox-is-hidden"), f(d.$refs.container), d.$refs.container.addClass("fancybox-is-open"), f(d.$refs.container), r.$slide.addClass("fancybox-slide--previous"), d.loadSlide(r), r.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void d.preload("image");
                        n.each(d.slides, function (t, e) {
                            n.fancybox.stop(e.$slide, !0), e.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            })
                        }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), i ? (l = Math.round(r.$slide.width()), n.each(d.slides, function (t, o) {
                            var a = o.pos - r.pos;
                            n.fancybox.animate(o.$slide, {top: 0, left: a * l + a * o.opts.gutter}, e, function () {
                                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === d.currPos && d.complete()
                            })
                        })) : d.$refs.stage.children().removeAttr("style"), r.isLoaded ? d.revealContent(r) : d.loadSlide(r), d.preload("image"), c.pos !== r.pos && (u = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"), c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), c.isComplete = !1, e && (i || r.opts.transitionEffect) && (i ? c.$slide.addClass(u) : (u = "fancybox-animated " + u + " fancybox-fx-" + r.opts.transitionEffect, n.fancybox.animate(c.$slide, u, e, null, !1))))
                    }
                }
            }, createSlide: function (t) {
                var e, o, a = this;
                return o = t % a.group.length, o = o < 0 ? a.group.length + o : o, !a.slides[t] && a.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage), a.slides[t] = n.extend(!0, {}, a.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), a.updateSlide(a.slides[t])), a.slides[t]
            }, scaleToActual: function (t, e, a) {
                var i, s, r, c, l, u = this, d = u.current, f = d.$content, p = n.fancybox.getTranslate(d.$slide).width,
                    h = n.fancybox.getTranslate(d.$slide).height, g = d.width, b = d.height;
                !u.isAnimating && f && "image" == d.type && d.isLoaded && !d.hasError && (n.fancybox.stop(f), u.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, i = n.fancybox.getTranslate(f), i.top -= n.fancybox.getTranslate(d.$slide).top, i.left -= n.fancybox.getTranslate(d.$slide).left, c = g / i.width, l = b / i.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = i.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = i.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), u.updateCursor(g, b), n.fancybox.animate(f, {
                    top: r,
                    left: s,
                    scaleX: c,
                    scaleY: l
                }, a || 330, function () {
                    u.isAnimating = !1
                }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
            }, scaleToFit: function (t) {
                var e, o = this, a = o.current, i = a.$content;
                !o.isAnimating && i && "image" == a.type && a.isLoaded && !a.hasError && (n.fancybox.stop(i), o.isAnimating = !0, e = o.getFitPos(a), o.updateCursor(e.width, e.height), n.fancybox.animate(i, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / i.width(),
                    scaleY: e.height / i.height()
                }, t || 330, function () {
                    o.isAnimating = !1
                }))
            }, getFitPos: function (t) {
                var e, o, a, i, s = this, r = t.$content, c = t.$slide, l = t.width || t.opts.width,
                    u = t.height || t.opts.height, d = {};
                return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width, o = n.fancybox.getTranslate(s.$refs.stage).height, e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), l && u || (l = e, u = o), a = Math.min(1, e / l, o / u), l = Math.floor(a * l), u = Math.floor(a * u), "image" === t.type ? (d.top = Math.floor(.5 * (o - u)) + parseFloat(c.css("paddingTop")), d.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (i = t.opts.width && t.opts.height ? l / u : t.opts.ratio || 16 / 9, u > l / i ? u = l / i : l > u * i && (l = u * i)), d.width = l, d.height = u, d)
            }, update: function () {
                var t = this;
                n.each(t.slides, function (e, n) {
                    t.updateSlide(n)
                })
            }, updateSlide: function (t, e) {
                var o = this, a = t && t.$content, i = t.width || t.opts.width, s = t.height || t.opts.height,
                    r = t.$slide;
                a && (i || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(a), n.fancybox.setTranslate(a, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), r.length && (r.trigger("refresh"), o.$refs.toolbar.toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), o.trigger("onUpdate", t)
            }, centerSlide: function (t, e) {
                var a, i, s = this;
                s.current && (a = Math.round(t.$slide.width()), i = t.pos - s.current.pos, n.fancybox.animate(t.$slide, {
                    top: 0,
                    left: i * a + i * t.opts.gutter,
                    opacity: 1
                }, e === o ? 0 : e, null, !1))
            }, isMoved: function (t) {
                var e = t || this.current, o = n.fancybox.getTranslate(e.$slide);
                return (0 !== o.left || 0 !== o.top) && !e.$slide.hasClass("fancybox-animated")
            }, updateCursor: function (t, e) {
                var o, a = this, i = a.current,
                    s = a.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
                i && !a.isClosing && (o = a.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), n.isFunction(i.opts.clickContent) && (i.opts.clickContent = i.opts.clickContent(i)), a.canPan(t, e) ? s.addClass("fancybox-can-pan") : o && "zoom" === i.opts.clickContent ? s.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || a.group.length > 1) && "video" !== i.contentType && s.addClass("fancybox-can-swipe"))
            }, isZoomable: function () {
                var t, e = this, n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded) return !0;
                    if (t = e.getFitPos(n), n.width > t.width || n.height > t.height) return !0
                }
                return !1
            }, isScaledDown: function (t, e) {
                var a = this, i = !1, s = a.current, r = s.$content;
                return t !== o && e !== o ? i = t < s.width && e < s.height : r && (i = n.fancybox.getTranslate(r), i = i.width < s.width && i.height < s.height), i
            }, canPan: function (t, e) {
                var a, i, s = this, r = !1, c = s.current;
                return "image" === c.type && (a = c.$content) && !c.hasError && (r = s.getFitPos(c), i = t !== o && e !== o ? {
                    width: t,
                    height: e
                } : n.fancybox.getTranslate(a), r = Math.abs(i.width - r.width) > 1.5 || Math.abs(i.height - r.height) > 1.5), r
            }, loadSlide: function (t) {
                var e, o, a, i = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, i.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                        case"image":
                            i.setImage(t);
                            break;
                        case"iframe":
                            i.setIframe(t);
                            break;
                        case"html":
                            i.setContent(t, t.src || t.content);
                            break;
                        case"video":
                            i.setContent(t, t.opts.video.tpl.replace("{{src}}", t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format));
                            break;
                        case"inline":
                            n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
                            break;
                        case"ajax":
                            i.showLoading(t), a = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function (e, n) {
                                    "success" === n && i.setContent(t, e)
                                },
                                error: function (e, n) {
                                    e && "abort" !== n && i.setError(t)
                                }
                            })), o.one("onReset", function () {
                                a.abort()
                            });
                            break;
                        default:
                            i.setError(t)
                    }
                    return !0
                }
            }, setImage: function (e) {
                var o, a, i, s, r, c = this, l = e.opts.srcset || e.opts.image.srcset;
                if (e.timouts = setTimeout(function () {
                    var t = e.$image;
                    !e.isLoading || t && t.length && t[0].complete || e.hasError || c.showLoading(e)
                }, 350), l) {
                    s = t.devicePixelRatio || 1, r = t.innerWidth * s, i = l.split(",").map(function (t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function (t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void (o && (e.value = o, e.postfix = t[t.length - 1]))
                        }), e
                    }), i.sort(function (t, e) {
                        return t.value - e.value
                    });
                    for (var u = 0; u < i.length; u++) {
                        var d = i[u];
                        if ("w" === d.postfix && d.value >= r || "x" === d.postfix && d.value >= s) {
                            a = d;
                            break
                        }
                    }
                    !a && i.length && (a = i[i.length - 1]), a && (e.src = a.url, e.width && e.height && "w" == a.postfix && (e.height = e.width / e.height * a.value, e.width = a.value), e.opts.srcset = l)
                }
                e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function () {
                    n(this).remove(), e.$ghost = null
                }).one("load", function () {
                    c.afterLoad(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", o)), c.setBigImage(e)
            }, setBigImage: function (t) {
                var e = this, o = n("<img />");
                t.$image = o.one("error", function () {
                    e.setError(t)
                }).one("load", function () {
                    var n;
                    t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), e.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), e.isClosing || (t.opts.srcset && (n = t.opts.sizes, n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", n).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                        t.$ghost && !e.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error")
            }, resolveImageSlideSize: function (t, e, n) {
                var o = parseInt(t.opts.width, 10), a = parseInt(t.opts.height, 10);
                t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), a > 0 && (t.width = Math.floor(a * e / n), t.height = a)
            }, setIframe: function (t) {
                var e, a = this, i = t.opts.iframe, s = t.$slide;
                t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (a.showLoading(t), e.on("load.fb error.fb", function (e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), a.afterLoad(t)
                }), s.on("refresh.fb", function () {
                    var n, a, s = t.$content, r = i.css.width, c = i.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents(), a = n.find("body")
                        } catch (t) {
                        }
                        a && a.length && a.children().length && (s.css({
                            width: "",
                            height: ""
                        }), r === o && (r = Math.ceil(Math.max(a[0].clientWidth, a.outerWidth(!0)))), r && s.width(r), c === o && (c = Math.ceil(Math.max(a[0].clientHeight, a.outerHeight(!0)))), c && s.height(c)), s.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), s.one("onReset", function () {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {
                    }
                    n(this).off("refresh.fb").empty(), t.isLoaded = !1
                })
            }, setContent: function (t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? (e.hasClass(".fancybox-content") && e.parent(".fancybox-slide--html").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                    n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
                }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
            }, setError: function (t) {
                t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            }, showLoading: function (t) {
                var e = this;
                t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide))
            }, hideLoading: function (t) {
                var e = this;
                t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            }, afterLoad: function (t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.pos === e.currPos && e.updateCursor(), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
            }, revealContent: function (t) {
                var e, a, i, s, r = this, c = t.$slide, l = !1, u = !1, d = r.isMoved(t), p = t.isRevealed;
                if (!d || !p) {
                    if (t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(t.forcedDuration === o ? i : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !d && t.pos === r.currPos && i || (e = !1), "zoom" === e && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (u = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e) return l.scaleX = l.width / u.width, l.scaleY = l.height / u.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1), s && (u.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u), f(t.$content), void n.fancybox.animate(t.$content, l, i, function () {
                        r.isAnimating = !1, r.complete()
                    });
                    if (r.updateSlide(t), !e) return f(c), p || t.$content.removeClass("fancybox-is-hidden").hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete());
                    n.fancybox.stop(c), a = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(a), t.$content.removeClass("fancybox-is-hidden"), f(c), n.fancybox.animate(c, "fancybox-slide--current", i, function () {
                        c.removeClass(a).removeAttr("style"), t.pos === r.currPos && r.complete()
                    }, !0)
                }
            }, getThumbPos: function (o) {
                var a, i = this, s = !1, r = o.opts.$thumb,
                    c = r && r.length && r[0].ownerDocument === e ? r.offset() : 0, l = function (e) {
                        for (var o, a = e[0], i = a.getBoundingClientRect(), s = []; null !== a.parentElement;) "hidden" !== n(a.parentElement).css("overflow") && "auto" !== n(a.parentElement).css("overflow") || s.push(a.parentElement.getBoundingClientRect()), a = a.parentElement;
                        return o = s.every(function (t) {
                            var e = Math.min(i.right, t.right) - Math.max(i.left, t.left),
                                n = Math.min(i.bottom, t.bottom) - Math.max(i.top, t.top);
                            return e > 0 && n > 0
                        }), o && i.bottom > 0 && i.right > 0 && i.left < n(t).width() && i.top < n(t).height()
                    };
                return c && l(r) && (a = i.$refs.stage.offset(), s = {
                    top: c.top - a.top + parseFloat(r.css("border-top-width") || 0),
                    left: c.left - a.left + parseFloat(r.css("border-left-width") || 0),
                    width: r.width(),
                    height: r.height(),
                    scaleX: 1,
                    scaleY: 1
                }), s
            }, complete: function () {
                var t = this, e = t.current, o = {};
                !t.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), t.preload("inline"), f(e.$slide), e.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function (e, a) {
                    a.pos >= t.currPos - 1 && a.pos <= t.currPos + 1 ? o[a.pos] = a : a && (n.fancybox.stop(a.$slide), a.$slide.off().remove())
                }), t.slides = o), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play"), e.opts.autoFocus && ("image" !== e.type || t.firstRun) && t.focus(), e.$slide.scrollTop(0).scrollLeft(0))
            }, preload: function (t) {
                var e = this, n = e.slides[e.currPos + 1], o = e.slides[e.currPos - 1];
                n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o)
            }, focus: function () {
                var t, e = this, n = e.current;
                this.isClosing || (n && n.isComplete && n.$content && (t = n.$content.find("input[autofocus]:enabled:visible:first"), t.length || (t = n.$content.find("button,:input,[tabindex],a").filter(":not(.fancybox-close-small):enabled:visible:first"))), t = t && t.length ? t : e.$refs.container, t.trigger("focus"))
            }, activate: function () {
                var t = this;
                n(".fancybox-container").each(function () {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            }, close: function (t, e) {
                var o, a, i, s, r, c, l, p = this, h = p.current, g = function () {
                    p.cleanUp(t)
                };
                return !p.isClosing && (p.isClosing = !0, p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1, u(function () {
                    p.update()
                }), !1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), i = h.$content, o = h.opts.animationEffect, a = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), a && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== o || t !== !0 && i && a && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(i), s = n.fancybox.getTranslate(i), c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height
                }, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(i, c), f(i), n.fancybox.animate(i, l, a, g), !0) : (o && a ? t === !0 ? setTimeout(g, a) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, a, g) : g(), !0)))
            }, cleanUp: function (e) {
                var o, a, i, s = this, r = s.current.opts.$orig;
                s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger), r && r.length && (a = t.scrollX, i = t.scrollY, r.trigger("focus"), n("html, body").scrollTop(i).scrollLeft(a))), s.current = null, o = n.fancybox.getInstance(), o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
            }, trigger: function (t, e) {
                var o, a = Array.prototype.slice.call(arguments, 1), i = this, s = e && e.opts ? e : i.current;
                return s ? a.unshift(s) : s = i, a.unshift(i), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, a)), o === !1 ? o : void ("afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", a) : r.trigger(t + ".fb", a))
            }, updateControls: function (t) {
                var e = this, n = e.current, o = n.index, a = n.opts.caption, i = e.$refs.container,
                    s = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = a && a.length ? s.html(a) : null, e.isHiddenControls || e.isIdle || e.showControls(), i.find("[data-fancybox-count]").html(e.group.length), i.find("[data-fancybox-index]").html(o + 1), i.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && o <= 0), i.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            }, hideControls: function () {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            }, showControls: function () {
                var t = this, e = t.current ? t.current.opts : t.opts, n = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            }, toggleControls: function () {
                this.isHiddenControls ? this.showControls() : this.hideControls();
            }
        }), n.fancybox = {
            version: "3.4.0",
            defaults: i,
            getInstance: function (t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    o = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
            },
            open: function (t, e, n) {
                return new h(t, e, n)
            },
            close: function (t) {
                var e = this.getInstance();
                e && (e.close(), t === !0 && this.close(t))
            },
            destroy: function () {
                this.close(!0), r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function () {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function (t) {
                var e;
                return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
                    top: e.top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                })
            },
            setTranslate: function (t, e) {
                var n = "", a = {};
                if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (a.transform = n), e.opacity !== o && (a.opacity = e.opacity), e.width !== o && (a.width = e.width), e.height !== o && (a.height = e.height), t.css(a)
            },
            animate: function (t, e, a, i, s) {
                var r, c = !1;
                n.isFunction(a) && (i = a, a = null), n.isPlainObject(e) || t.removeAttr("style"), n.fancybox.stop(t), t.on(d, function (o) {
                    (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), c && n.fancybox.setTranslate(t, c), n.isNumeric(a) && t.css("transition-duration", ""), n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e), n.isFunction(i) && i(o))
                }), n.isNumeric(a) && t.css("transition-duration", a + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.fancybox.getTranslate(t), c = n.extend({}, e, {
                    width: r.width * e.scaleX,
                    height: r.height * e.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }), delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
                    t.trigger("transitionend")
                }, a + 16))
            },
            stop: function (t, e) {
                t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
        }, n.fn.fancybox = function (t) {
            var e;
            return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {options: t}, a) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, a), this
        }, r.on("click.fb-start", "[data-fancybox]", a), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: n(this)})
        }), r.on("mousedown", ".fancybox-button", function () {
            n(this).data("pressed", 1)
        }).on("mouseup", ".fancybox-button", function () {
            n(this).removeData("pressed")
        }).on("focus", ".fancybox-button", function () {
            n(this).data("pressed") || n(this).addClass("fancybox-focus")
        }).on("blur", ".fancybox-button", function () {
            n(this).removeClass("fancybox-focus")
        })
    }
}(window, document, window.jQuery || jQuery), function (t) {
    "use strict";
    var e = function (e, n, o) {
        if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function (t, n) {
            e = e.replace("$" + t, n || "")
        }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
    }, n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube-nocookie.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    t(document).on("objectNeedsType.fb", function (o, a, i) {
        var s, r, c, l, u, d, f, p = i.src || "", h = !1;
        s = t.extend(!0, {}, n, i.opts.media), t.each(s, function (n, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type, f = n, d = {}, o.paramPlace && c[o.paramPlace]) {
                    u = c[o.paramPlace], "?" == u[0] && (u = u.substring(1)), u = u.split("&");
                    for (var a = 0; a < u.length; ++a) {
                        var s = u[a].split("=", 2);
                        2 == s.length && (d[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, i.opts[n], d), p = "function" === t.type(o.url) ? o.url.call(this, c, l, i) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, i) : e(o.thumb, c), "youtube" === n ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === n && (p = p.replace("&%23", "#")), !1
            }
        }), h ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = r), "iframe" === h && (i.opts = t.extend(!0, i.opts, {
            iframe: {
                preload: !1,
                attr: {scrolling: "no"}
            }
        })), t.extend(i, {
            type: h,
            src: p,
            origSrc: i.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (i.type = i.opts.defaultType)
    })
}(window.jQuery || jQuery), function (t, e, n) {
    "use strict";
    var o = function () {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }(), a = function () {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e)
        }
    }(), i = function (e) {
        var n = [];
        e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var o in e) e[o].pageX ? n.push({x: e[o].pageX, y: e[o].pageY}) : e[o].clientX && n.push({
            x: e[o].clientX,
            y: e[o].clientY
        });
        return n
    }, s = function (t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }, r = function (t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
        for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1
    }, c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"], o = t.getComputedStyle(e)["overflow-x"],
            a = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
            i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return a || i
    }, l = function (t) {
        for (var e = !1; ;) {
            if (e = c(t.get(0))) break;
            if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
        }
        return e
    }, u = function (t) {
        var e = this;
        e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    u.prototype.destroy = function () {
        this.$container.off(".fb.touch")
    }, u.prototype.ontouchstart = function (o) {
        var a = this, c = n(o.target), u = a.instance, d = u.current, f = d.$slide, p = d.$content,
            h = "touchstart" == o.type;
        if (h && a.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!d || u.isAnimating || u.isClosing) return o.stopPropagation(), void o.preventDefault();
            if (a.realPoints = a.startPoints = i(o), a.startPoints.length) {
                if (d.touch && o.stopPropagation(), a.startEvent = o, a.canTap = !0, a.$target = c, a.$content = p, a.opts = d.opts.touch, a.isPanning = !1, a.isSwiping = !1, a.isZooming = !1, a.isScrolling = !1, a.canPan = u.canPan(), a.startTime = (new Date).getTime(), a.distanceX = a.distanceY = a.distance = 0, a.canvasWidth = Math.round(f[0].clientWidth), a.canvasHeight = Math.round(f[0].clientHeight), a.contentLastPos = null, a.contentStartPos = n.fancybox.getTranslate(a.$content) || {
                    top: 0,
                    left: 0
                }, a.sliderStartPos = a.sliderLastPos || n.fancybox.getTranslate(f), a.stagePos = n.fancybox.getTranslate(u.$refs.stage), a.sliderStartPos.top -= a.stagePos.top, a.sliderStartPos.left -= a.stagePos.left, a.contentStartPos.top -= a.stagePos.top, a.contentStartPos.left -= a.stagePos.left, n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(a, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(a, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", a.onscroll, !0), !a.opts && !a.canPan || !c.is(a.$stage) && !a.$stage.find(c).length) return void (c.is(".fancybox-image") && o.preventDefault());
                a.isScrollable = l(c) || l(c.parent()), n.fancybox.isMobile && a.isScrollable || o.preventDefault(), (1 === a.startPoints.length || d.hasError) && (a.canPan ? (n.fancybox.stop(a.$content), a.$content.css("transition-duration", ""), a.isPanning = !0) : a.isSwiping = !0, a.$container.addClass("fancybox-is-grabbing")), 2 === a.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (a.canTap = !1, a.isSwiping = !1, a.isPanning = !1, a.isZooming = !0, n.fancybox.stop(a.$content), a.$content.css("transition-duration", ""), a.centerPointStartX = .5 * (a.startPoints[0].x + a.startPoints[1].x) - n(t).scrollLeft(), a.centerPointStartY = .5 * (a.startPoints[0].y + a.startPoints[1].y) - n(t).scrollTop(), a.percentageOfImageAtPinchPointX = (a.centerPointStartX - a.contentStartPos.left) / a.contentStartPos.width, a.percentageOfImageAtPinchPointY = (a.centerPointStartY - a.contentStartPos.top) / a.contentStartPos.height, a.startDistanceBetweenFingers = s(a.startPoints[0], a.startPoints[1]))
            }
        }
    }, u.prototype.onscroll = function (t) {
        var n = this;
        n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
    }, u.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = i(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, u.prototype.onSwipe = function (e) {
        var i, s = this, r = s.isSwiping, c = s.sliderStartPos.left || 0;
        if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
            top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
            left: c
        }, s.requestId && (a(s.requestId), s.requestId = null), s.requestId = o(function () {
            s.sliderLastPos && (n.each(s.instance.slides, function (t, e) {
                var o = e.pos - s.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                })
            }), s.$container.addClass("fancybox-is-sliding"))
        }); else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (i = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = i > 45 && i < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable) return void (s.isScrolling = !0);
            s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function (t, e) {
                n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left)
            }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
        }
    }, u.prototype.onPan = function () {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (a(t.requestId), t.requestId = null), void (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }, u.prototype.limitMovement = function () {
        var t, e, n, o, a, i, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, u = s.distanceY,
            d = s.contentStartPos, f = d.left, p = d.top, h = d.width, g = d.height;
        return a = h > r ? f + l : f, i = p + u, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && a > t && (a = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && a < n && (a = n + 1 - Math.pow(n - f - l, .8) || 0), u > 0 && i > e && (i = e - 1 + Math.pow(-e + p + u, .8) || 0), u < 0 && i < o && (i = o + 1 - Math.pow(o - p - u, .8) || 0), {
            top: i,
            left: a
        }
    }, u.prototype.limitPosition = function (t, e, n, o) {
        var a = this, i = a.canvasWidth, s = a.canvasHeight;
        return n > i ? (t = t > 0 ? 0 : t, t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
            top: e,
            left: t
        }
    }, u.prototype.onZoom = function () {
        var e = this, i = e.contentStartPos, r = i.width, c = i.height, l = i.left, u = i.top,
            d = s(e.newPoints[0], e.newPoints[1]), f = d / e.startDistanceBetweenFingers, p = Math.floor(r * f),
            h = Math.floor(c * f), g = (r - p) * e.percentageOfImageAtPinchPointX,
            b = (c - h) * e.percentageOfImageAtPinchPointY,
            m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
            y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(), v = m - e.centerPointStartX,
            x = y - e.centerPointStartY, w = l + (g + v), $ = u + (b + x), S = {top: $, left: w, scaleX: f, scaleY: f};
        e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && (a(e.requestId), e.requestId = null), e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, u.prototype.ontouchend = function (t) {
        var o = this, s = Math.max((new Date).getTime() - o.startTime, 1), r = o.isSwiping, c = o.isPanning,
            l = o.isZooming, u = o.isScrolling;
        return o.endPoints = i(t), o.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (a(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, u)))
    }, u.prototype.endSwiping = function (t, e) {
        var o = this, a = !1, i = o.instance.group.length;
        o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200), a = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && i > 1 ? a = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && i > 1 && (a = o.instance.next(o.speedX)), a !== !1 || "x" != t && "y" != t || (e || i < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding")
    }, u.prototype.endPanning = function () {
        var t, e, o, a = this;
        a.contentLastPos && (a.opts.momentum === !1 ? (t = a.contentLastPos.left, e = a.contentLastPos.top) : (t = a.contentLastPos.left + a.velocityX * a.speed, e = a.contentLastPos.top + a.velocityY * a.speed), o = a.limitPosition(t, e, a.contentStartPos.width, a.contentStartPos.height), o.width = a.contentStartPos.width, o.height = a.contentStartPos.height, n.fancybox.animate(a.$content, o, 330))
    }, u.prototype.endZooming = function () {
        var t, e, o, a, i = this, s = i.instance.current, r = i.newWidth, c = i.newHeight;
        i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, a = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(i.$content, a), r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > s.width || c > s.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c), n.fancybox.setTranslate(i.$content, n.fancybox.getTranslate(i.$content)), n.fancybox.animate(i.$content, o, 150)))
    }, u.prototype.onTap = function (e) {
        var o, a = this, s = n(e.target), r = a.instance, c = r.current, l = e && i(e) || a.startPoints,
            u = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0,
            d = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0, f = function (t) {
                var o = c.opts[t];
                if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
                    case"close":
                        r.close(a.startEvent);
                        break;
                    case"toggleControls":
                        r.toggleControls(!0);
                        break;
                    case"next":
                        r.next();
                        break;
                    case"nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(a.startEvent);
                        break;
                    case"zoom":
                        "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(u, d) : r.group.length < 2 && r.close(a.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(u > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside"; else if (s.is(".fancybox-slide")) o = "Slide"; else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                o = "Content"
            }
            if (a.tapped) {
                if (clearTimeout(a.tapped), a.tapped = null, Math.abs(u - a.tapX) > 50 || Math.abs(d - a.tapY) > 50) return this;
                f("dblclick" + o)
            } else a.tapX = u, a.tapY = d, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? a.tapped = setTimeout(function () {
                a.tapped = null, f("click" + o)
            }, 500) : f("click" + o);
            return this
        }
    }, n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    })
}(window, document, window.jQuery || jQuery), function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
        slideShow: {autoStart: !1, speed: 3e3}
    });
    var n = function (t) {
        this.instance = t, this.init()
    };
    e.extend(n.prototype, {
        timer: null, isActive: !1, $button: null, init: function () {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        }, set: function (t) {
            var e = this;
            e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
                e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
            }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
        }, clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null
        }, start: function () {
            var t = this, e = t.instance.current;
            e && (t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        }, stop: function () {
            var t = this, e = t.instance.current;
            t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1)
        }, toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        }, "beforeShow.fb": function (t, e, n, o) {
            var a = e && e.SlideShow;
            o ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear()
        }, "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        }, "afterKeydown.fb": function (n, o, a, i, s) {
            var r = o && o.SlideShow;
            !r || !a.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle())
        }, "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(), o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, window.jQuery || jQuery), function (t, e) {
    "use strict";
    var n = function () {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            if (a && a[1] in t) {
                for (var i = 0; i < a.length; i++) n[e[0][i]] = a[i];
                return n
            }
        }
        return !1
    }();
    if (!n) return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
    var o = {
        request: function (e) {
            e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        }, exit: function () {
            t[n.exitFullscreen]()
        }, toggle: function (e) {
            e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
        }, isFullscreen: function () {
            return Boolean(t[n.fullscreenElement])
        }, enabled: function () {
            return Boolean(t[n.fullscreenEnabled])
        }
    };
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
        fullScreen: {autoStart: !1}
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
            }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        }, "afterKeydown.fb": function (t, e, n, o, a) {
            e && e.FullScreen && 70 === a && (o.preventDefault(), e.FullScreen.toggle())
        }, "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    }), e(t).on(n.fullscreenchange, function () {
        var t = o.isFullscreen(), n = e.fancybox.getInstance();
        n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
    })
}(document, window.jQuery || jQuery), function (t, e) {
    "use strict";
    var n = "fancybox-thumbs", o = n + "-active";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
        thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
    }, e.fancybox.defaults);
    var a = function (t) {
        this.init(t)
    };
    e.extend(a.prototype, {
        $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (t) {
            var e, n, o = this;
            o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), t.group.length > 1 && (n = t.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), o.opts && e && n ? (o.$button.show().on("click", function () {
                o.toggle()
            }), o.isActive = !0) : o.$button.hide()
        }, create: function () {
            var t, o = this, a = o.instance, i = o.opts.parentEl, s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)), o.$grid.on("click", "a", function () {
                a.jumpTo(e(this).attr("data-index"))
            })), o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)), e.each(a.group, function (e, n) {
                t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), t || "image" !== n.type || (t = n.src), s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '" ' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></a>")
            }), o.$list[0].innerHTML = s.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0))
        }, focus: function (t) {
            var e, n, a = this, i = a.$list, s = a.$grid;
            a.instance.current && (e = i.children().removeClass(o).filter('[data-index="' + a.instance.current.index + '"]').addClass(o), n = e.position(), "y" === a.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({scrollTop: i.scrollTop() + n.top}, t) : "x" === a.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({scrollLeft: n.left}, t))
        }, update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        }, hide: function () {
            this.isVisible = !1, this.update()
        }, show: function () {
            this.isVisible = !0, this.update()
        }, toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && !e.Thumbs && (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show())
        }, "beforeShow.fb": function (t, e, n, o) {
            var a = e && e.Thumbs;
            a && a.isVisible && a.focus(o ? 0 : 250)
        }, "afterKeydown.fb": function (t, e, n, o, a) {
            var i = e && e.Thumbs;
            i && i.isActive && 71 === a && (o.preventDefault(), i.toggle())
        }, "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
        }
    })
}(document, window.jQuery || jQuery), function (t, e) {
    "use strict";

    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return e[t]
        })
    }

    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function () {
        var t, o, a = e.fancybox.getInstance(), i = a.current || null;
        i && ("function" === e.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [a, i])), o = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : ""), e.fancybox.open({
            src: a.translate(a, o),
            type: "html",
            opts: {
                touch: !1, animationEffect: !1, afterLoad: function (t, e) {
                    a.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }, mobile: {autoFocus: !1}
            }
        }))
    })
}(document, window.jQuery || jQuery), function (t, e, n) {
    "use strict";

    function o() {
        var t = e.location.hash.substr(1), n = t.split("-"),
            o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1, a = n.join("-");
        return {hash: t, index: o < 1 ? 1 : o, gallery: a}
    }

    function a(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).trigger("click.fb-start")
    }

    function i(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : ""), "" !== n && n)
    }

    n.escapeSelector || (n.escapeSelector = function (t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, n = function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(e, n)
    }), n(function () {
        n.fancybox.defaults.hash !== !1 && (n(t).on({
            "onInit.fb": function (t, e) {
                var n, a;
                e.group[e.currIndex].opts.hash !== !1 && (n = o(), a = i(e), a && n.gallery && a == n.gallery && (e.currIndex = n.index - 1))
            }, "beforeShow.fb": function (n, o, a, s) {
                var r;
                a && a.opts.hash !== !1 && (r = i(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (a.index + 1) : ""), e.location.hash !== "#" + o.currentHash && (o.origHash || (o.origHash = e.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function () {
                    "replaceState" in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash, o.hashTimer = null
                }, 300))))
            }, "beforeClose.fb": function (n, o, a) {
                a.opts.hash !== !1 && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash), o.currentHash = null)
            }
        }), n(e).on("hashchange.fb", function () {
            var t = o(), e = null;
            n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                var a = n(o).data("FancyBox");
                if (a && a.currentHash) return e = a, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && a(t)
        }), setTimeout(function () {
            n.fancybox.getInstance() || a(o())
        }, 50))
    })
}(document, window, window.jQuery || jQuery), function (t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var o = e.current, a = (new Date).getTime();
                e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, a - n < 250 || (n = a, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
            })
        }
    })
}(document, window.jQuery || jQuery);
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function (e) {
    function t() {
        var e = document.createElement("input"), t = "onpaste";
        return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
    }

    var n, a = t() + ".mask", r = navigator.userAgent, i = /iphone/i.test(r), o = /android/i.test(r);
    e.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function (e, t) {
            var n;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (t, r) {
            var c, l, s, u, f, h;
            return !t && this.length > 0 ? (c = e(this[0]), c.data(e.mask.dataName)()) : (r = e.extend({
                placeholder: e.mask.placeholder,
                completed: null
            }, r), l = e.mask.definitions, s = [], u = h = t.length, f = null, e.each(t.split(""), function (e, t) {
                "?" == t ? (h--, u = e) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null)
            }), this.trigger("unmask").each(function () {
                function c(e) {
                    for (; h > ++e && !s[e];) ;
                    return e
                }

                function d(e) {
                    for (; --e >= 0 && !s[e];) ;
                    return e
                }

                function m(e, t) {
                    var n, a;
                    if (!(0 > e)) {
                        for (n = e, a = c(t); h > n; n++) if (s[n]) {
                            if (!(h > a && s[n].test(R[a]))) break;
                            R[n] = R[a], R[a] = r.placeholder, a = c(a)
                        }
                        b(), x.caret(Math.max(f, e))
                    }
                }

                function p(e) {
                    var t, n, a, i;
                    for (t = e, n = r.placeholder; h > t; t++) if (s[t]) {
                        if (a = c(t), i = R[t], R[t] = n, !(h > a && s[a].test(i))) break;
                        n = i
                    }
                }

                function g(e) {
                    var t, n, a, r = e.which;
                    8 === r || 46 === r || i && 127 === r ? (t = x.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? d(n) : a = c(n - 1), a = 46 === r ? c(a) : a), k(n, a), m(n, a - 1), e.preventDefault()) : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault())
                }

                function v(t) {
                    var n, a, i, l = t.which, u = x.caret();
                    t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)), n = c(u.begin - 1), h > n && (a = String.fromCharCode(l), s[n].test(a) && (p(n), R[n] = a, b(), i = c(n), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))), t.preventDefault())
                }

                function k(e, t) {
                    var n;
                    for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder)
                }

                function b() {
                    x.val(R.join(""))
                }

                function y(e) {
                    var t, n, a = x.val(), i = -1;
                    for (t = 0, pos = 0; h > t; t++) if (s[t]) {
                        for (R[t] = r.placeholder; pos++ < a.length;) if (n = a.charAt(pos - 1), s[t].test(n)) {
                            R[t] = n, i = t;
                            break
                        }
                        if (pos > a.length) break
                    } else R[t] === a.charAt(pos) && t !== u && (pos++, i = t);
                    return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f
                }

                var x = e(this), R = e.map(t.split(""), function (e) {
                    return "?" != e ? l[e] ? r.placeholder : e : void 0
                }), S = x.val();
                x.data(e.mask.dataName, function () {
                    return e.map(R, function (e, t) {
                        return s[t] && e != r.placeholder ? e : null
                    }).join("")
                }), x.attr("readonly") || x.one("unmask", function () {
                    x.unbind(".mask").removeData(e.mask.dataName)
                }).bind("focus.mask", function () {
                    clearTimeout(n);
                    var e;
                    S = x.val(), e = y(), n = setTimeout(function () {
                        b(), e == t.length ? x.caret(0, e) : x.caret(e)
                    }, 10)
                }).bind("blur.mask", function () {
                    y(), x.val() != S && x.change()
                }).bind("keydown.mask", g).bind("keypress.mask", v).bind(a, function () {
                    setTimeout(function () {
                        var e = y(!0);
                        x.caret(e), r.completed && e == x.val().length && r.completed.call(x)
                    }, 0)
                }), y()
            }))
        }
    })
})(jQuery);
/*! nouislider - 12.1.0 - 10/25/2018 */
!function (t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function () {
    "use strict";
    var et = "12.1.0";

    function s(t) {
        return null != t
    }

    function rt(t) {
        t.preventDefault()
    }

    function i(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function nt(t, e, r) {
        0 < r && (at(t, e), setTimeout(function () {
            st(t, e)
        }, r))
    }

    function it(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function ot(t) {
        return Array.isArray(t) ? t : [t]
    }

    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }

    function at(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function st(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function lt(t) {
        var e = void 0 !== window.pageXOffset, r = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }

    function c(t, e) {
        return 100 / (e - t)
    }

    function p(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function f(t, e) {
        for (var r = 1; t >= e[r];) r += 1;
        return r
    }

    function r(t, e, r) {
        if (r >= t.slice(-1)[0]) return 100;
        var n, i, o = f(r, t), a = t[o - 1], s = t[o], l = e[o - 1], u = e[o];
        return l + (i = r, p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u))
    }

    function n(t, e, r, n) {
        if (100 === n) return n;
        var i, o, a = f(n, t), s = t[a - 1], l = t[a];
        return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1], o = e[a - 1], Math.round(i / o) * o) : n
    }

    function o(t, e, r) {
        var n;
        if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' contains invalid value.");
        if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider (" + et + "): 'range' value isn't numeric.");
        r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0)
    }

    function a(t, e, r) {
        if (!e) return !0;
        r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
        var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t], i = Math.ceil(Number(n.toFixed(3)) - 1),
            o = r.xVal[t] + r.xNumSteps[t] * i;
        r.xHighestCompleteStep[t] = o
    }

    function l(t, e, r) {
        var n;
        this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
        var i = [];
        for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function (t, e) {
            return t[0][0] - e[0][0]
        }) : i.sort(function (t, e) {
            return t[0] - e[0]
        }), n = 0; n < i.length; n++) o(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) a(n, this.xNumSteps[n], this)
    }

    l.prototype.getMargin = function (t) {
        var e = this.xNumSteps[0];
        if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + et + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && p(this.xVal, t)
    }, l.prototype.toStepping = function (t) {
        return t = r(this.xVal, this.xPct, t)
    }, l.prototype.fromStepping = function (t) {
        return function (t, e, r) {
            if (100 <= r) return t.slice(-1)[0];
            var n, i = f(r, e), o = t[i - 1], a = t[i], s = e[i - 1], l = e[i];
            return n = [o, a], (r - s) * c(s, l) * (n[1] - n[0]) / 100 + n[0]
        }(this.xVal, this.xPct, t)
    }, l.prototype.getStep = function (t) {
        return t = n(this.xPct, this.xSteps, this.snap, t)
    }, l.prototype.getNearbySteps = function (t) {
        var e = f(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e]}
        }
    }, l.prototype.countStepDecimals = function () {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    }, l.prototype.convert = function (t) {
        return this.getStep(this.toStepping(t))
    };
    var u = {
        to: function (t) {
            return void 0 !== t && t.toFixed(2)
        }, from: Number
    };

    function d(t) {
        if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
        var e;
        throw new Error("noUiSlider (" + et + "): 'format' requires 'to' and 'from' methods.")
    }

    function h(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + et + "): 'step' is not numeric.");
        t.singleStep = e
    }

    function m(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + et + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider (" + et + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new l(e, t.snap, t.singleStep)
    }

    function g(t, e) {
        if (e = ot(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + et + "): 'start' option is incorrect.");
        t.handles = e.length, t.start = e
    }

    function v(t, e) {
        if ("boolean" != typeof (t.snap = e)) throw new Error("noUiSlider (" + et + "): 'snap' option must be a boolean.")
    }

    function b(t, e) {
        if ("boolean" != typeof (t.animate = e)) throw new Error("noUiSlider (" + et + "): 'animate' option must be a boolean.")
    }

    function S(t, e) {
        if ("number" != typeof (t.animationDuration = e)) throw new Error("noUiSlider (" + et + "): 'animationDuration' option must be a number.")
    }

    function w(t, e) {
        var r, n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + et + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }

    function x(t, e) {
        switch (e) {
            case"horizontal":
                t.ort = 0;
                break;
            case"vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + et + "): 'orientation' option is invalid.")
        }
    }

    function y(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + et + "): 'margin' option must be numeric.");
        if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + et + "): 'margin' option is only supported on linear sliders.")
    }

    function E(t, e) {
        if (!i(e)) throw new Error("noUiSlider (" + et + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + et + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function C(t, e) {
        if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option is only supported on linear sliders.");
            if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + et + "): 'padding' option must be a positive number(s).");
            if (100 <= t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option must not exceed 100% of the range.")
        }
    }

    function N(t, e) {
        switch (e) {
            case"ltr":
                t.dir = 0;
                break;
            case"rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + et + "): 'direction' option was not recognized.")
        }
    }

    function U(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider (" + et + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"), n = 0 <= e.indexOf("drag"), i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"), a = 0 <= e.indexOf("hover"), s = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + et + "): 'fixed' behaviour must be used with 2 handles");
            y(t, t.start[1] - t.start[0])
        }
        if (s && (t.margin || t.limit)) throw new Error("noUiSlider (" + et + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = {tap: r || o, drag: n, fixed: i, snap: o, hover: a, unconstrained: s}
    }

    function k(t, e) {
        if (!1 !== e) if (!0 === e) {
            t.tooltips = [];
            for (var r = 0; r < t.handles; r++) t.tooltips.push(!0)
        } else {
            if (t.tooltips = ot(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + et + "): must pass a formatter for all handles.");
            t.tooltips.forEach(function (t) {
                if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + et + "): 'tooltips' must be passed a formatter or 'false'.")
            })
        }
    }

    function P(t, e) {
        d(t.ariaFormat = e)
    }

    function A(t, e) {
        d(t.format = e)
    }

    function M(t, e) {
        if ("boolean" != typeof (t.keyboardSupport = e)) throw new Error("noUiSlider (" + et + "): 'keyboardSupport' option must be a boolean.")
    }

    function V(t, e) {
        t.documentElement = e
    }

    function O(t, e) {
        if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + et + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }

    function L(t, e) {
        if ("object" != typeof e) throw new Error("noUiSlider (" + et + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix) for (var r in t.cssClasses = {}, e) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]); else t.cssClasses = e
    }

    function ut(e) {
        var r = {margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: u, format: u}, n = {
            step: {r: !1, t: h},
            start: {r: !0, t: g},
            connect: {r: !0, t: w},
            direction: {r: !0, t: N},
            snap: {r: !1, t: v},
            animate: {r: !1, t: b},
            animationDuration: {r: !1, t: S},
            range: {r: !0, t: m},
            orientation: {r: !1, t: x},
            margin: {r: !1, t: y},
            limit: {r: !1, t: E},
            padding: {r: !1, t: C},
            behaviour: {r: !0, t: U},
            ariaFormat: {r: !1, t: P},
            format: {r: !1, t: A},
            tooltips: {r: !1, t: k},
            keyboardSupport: {r: !0, t: M},
            documentElement: {r: !1, t: V},
            cssPrefix: {r: !0, t: O},
            cssClasses: {r: !0, t: L}
        }, i = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: !0,
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
            if (!s(e[t]) && void 0 === i[t]) {
                if (n[t].r) throw new Error("noUiSlider (" + et + "): '" + t + "' is required.");
                return !0
            }
            n[t].t(r, s(e[t]) ? e[t] : i[t])
        }), r.pips = e.pips;
        var t = document.createElement("div"), o = void 0 !== t.style.msTransform, a = void 0 !== t.style.transform;
        r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
        return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r
    }

    function z(t, f, o) {
        var l, u, s, a, c, e, p, i, d = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend"},
            h = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {
                }
                return t
            }(), y = t, m = [], g = [], v = 0, E = f.spectrum, b = [], S = {}, w = t.ownerDocument,
            x = f.documentElement || w.documentElement, C = w.body, N = -1, U = 0, k = 1, P = 2,
            A = "rtl" === w.dir || 1 === f.ort ? 0 : 100;

        function M(t, e) {
            var r = w.createElement("div");
            return e && at(r, e), t.appendChild(r), r
        }

        function V(t, e) {
            return !!e && M(t, f.cssClasses.connect)
        }

        function r(t, e) {
            return !!f.tooltips[e] && M(t.firstChild, f.cssClasses.tooltip)
        }

        function O(e, i, o) {
            var a = w.createElement("div"), s = [];
            s[U] = f.cssClasses.valueNormal, s[k] = f.cssClasses.valueLarge, s[P] = f.cssClasses.valueSub;
            var l = [];
            l[U] = f.cssClasses.markerNormal, l[k] = f.cssClasses.markerLarge, l[P] = f.cssClasses.markerSub;
            var u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
                c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];

            function p(t, e) {
                var r = e === f.cssClasses.value, n = r ? s : l;
                return e + " " + (r ? u : c)[f.ort] + " " + n[t]
            }

            return at(a, f.cssClasses.pips), at(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
                !function (t, e, r) {
                    if ((r = i ? i(e, r) : r) !== N) {
                        var n = M(a, !1);
                        n.className = p(r, f.cssClasses.marker), n.style[f.style] = t + "%", U < r && ((n = M(a, !1)).className = p(r, f.cssClasses.value), n.setAttribute("data-value", e), n.style[f.style] = t + "%", n.innerHTML = o.to(e))
                    }
                }(t, e[t][0], e[t][1])
            }), a
        }

        function L() {
            var t;
            c && ((t = c).parentElement.removeChild(t), c = null)
        }

        function z(t) {
            L();
            var m, g, v, b, e, r, S, w, x, n = t.mode, i = t.density || 1, o = t.filter || !1, a = function (t, e, r) {
                    if ("range" === t || "steps" === t) return E.xVal;
                    if ("count" === t) {
                        if (e < 2) throw new Error("noUiSlider (" + et + "): 'values' (>= 2) required for mode 'count'.");
                        var n = e - 1, i = 100 / n;
                        for (e = []; n--;) e[n] = n * i;
                        e.push(100), t = "positions"
                    }
                    return "positions" === t ? e.map(function (t) {
                        return E.fromStepping(r ? E.getStep(t) : t)
                    }) : "values" === t ? r ? e.map(function (t) {
                        return E.fromStepping(E.getStep(E.toStepping(t)))
                    }) : e : void 0
                }(n, t.values || !1, t.stepped || !1),
                s = (m = i, g = n, v = a, b = {}, e = E.xVal[0], r = E.xVal[E.xVal.length - 1], w = S = !1, x = 0, (v = v.slice().sort(function (t, e) {
                    return t - e
                }).filter(function (t) {
                    return !this[t] && (this[t] = !0)
                }, {}))[0] !== e && (v.unshift(e), S = !0), v[v.length - 1] !== r && (v.push(r), w = !0), v.forEach(function (t, e) {
                    var r, n, i, o, a, s, l, u, c, p, f = t, d = v[e + 1], h = "steps" === g;
                    if (h && (r = E.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d) for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                        for (u = (a = (o = E.toStepping(n)) - x) / m, p = a / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(s = x + i * p).toFixed(5)] = [E.fromStepping(s), 0];
                        l = -1 < v.indexOf(n) ? k : h ? P : U, !e && S && (l = 0), n === d && w || (b[o.toFixed(5)] = [n, l]), x = o
                    }
                }), b), l = t.format || {to: Math.round};
            return c = y.appendChild(O(s, o, l))
        }

        function j() {
            var t = l.getBoundingClientRect(), e = "offset" + ["Width", "Height"][f.ort];
            return 0 === f.ort ? t.width || l[e] : t.height || l[e]
        }

        function F(n, i, o, a) {
            var e = function (t) {
                return !!(t = function (t, e, r) {
                    var n, i, o = 0 === t.type.indexOf("touch"), a = 0 === t.type.indexOf("mouse"),
                        s = 0 === t.type.indexOf("pointer");
                    0 === t.type.indexOf("MSPointer") && (s = !0);
                    if (o) {
                        var l = function (t) {
                            return t.target === r || r.contains(t.target)
                        };
                        if ("touchstart" === t.type) {
                            var u = Array.prototype.filter.call(t.touches, l);
                            if (1 < u.length) return !1;
                            n = u[0].pageX, i = u[0].pageY
                        } else {
                            var c = Array.prototype.find.call(t.changedTouches, l);
                            if (!c) return !1;
                            n = c.pageX, i = c.pageY
                        }
                    }
                    e = e || lt(w), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y);
                    return t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t
                }(t, a.pageOffset, a.target || i)) && (!(y.hasAttribute("disabled") && !a.doNotReject) && (e = y, r = f.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && (!(n === d.start && void 0 !== t.buttons && 1 < t.buttons) && ((!a.hover || !t.buttons) && (h || t.preventDefault(), t.calcPoint = t.points[f.ort], void o(t, a))))));
                var e, r
            }, r = [];
            return n.split(" ").forEach(function (t) {
                i.addEventListener(t, e, !!h && {passive: !0}), r.push([t, e])
            }), r
        }

        function H(t) {
            var e, r, n, i, o, a,
                s = 100 * (t - (e = l, r = f.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, a = lt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / j();
            return s = it(s), f.dir ? 100 - s : s
        }

        function D(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && R(t, e)
        }

        function T(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return R(t, e);
            var r = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            $(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
        }

        function R(t, e) {
            e.handle && (st(e.handle, f.cssClasses.active), v -= 1), e.listeners.forEach(function (t) {
                x.removeEventListener(t[0], t[1])
            }), 0 === v && (st(y, f.cssClasses.drag), J(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", rt))), e.handleNumbers.forEach(function (t) {
                Y("change", t), Y("set", t), Y("end", t)
            })
        }

        function q(t, e) {
            var r;
            if (1 === e.handleNumbers.length) {
                var n = u[e.handleNumbers[0]];
                if (n.hasAttribute("disabled")) return !1;
                r = n.children[0], v += 1, at(r, f.cssClasses.active)
            }
            t.stopPropagation();
            var i = [], o = F(d.move, x, T, {
                target: t.target,
                handle: r,
                listeners: i,
                startCalcPoint: t.calcPoint,
                baseSize: j(),
                pageOffset: t.pageOffset,
                handleNumbers: e.handleNumbers,
                buttonsProperty: t.buttons,
                locations: m.slice()
            }), a = F(d.end, x, R, {
                target: t.target,
                handle: r,
                listeners: i,
                doNotReject: !0,
                handleNumbers: e.handleNumbers
            }), s = F("mouseout", x, D, {
                target: t.target,
                handle: r,
                listeners: i,
                doNotReject: !0,
                handleNumbers: e.handleNumbers
            });
            i.push.apply(i, o.concat(a, s)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && at(y, f.cssClasses.drag), C.addEventListener("selectstart", rt, !1)), e.handleNumbers.forEach(function (t) {
                Y("start", t)
            })
        }

        function n(t) {
            t.stopPropagation();
            var n, i, o, e = H(t.calcPoint), r = (n = e, o = !(i = 100), u.forEach(function (t, e) {
                if (!t.hasAttribute("disabled")) {
                    var r = Math.abs(m[e] - n);
                    (r < i || 100 === r && 100 === i) && (o = e, i = r)
                }
            }), o);
            if (!1 === r) return !1;
            f.events.snap || nt(y, f.cssClasses.tap, f.animationDuration), K(r, e, !0, !0), J(), Y("slide", r, !0), Y("update", r, !0), Y("change", r, !0), Y("set", r, !0), f.events.snap && q(t, {handleNumbers: [r]})
        }

        function B(t) {
            var e = H(t.calcPoint), r = E.getStep(e), n = E.fromStepping(r);
            Object.keys(S).forEach(function (t) {
                "hover" === t.split(".")[0] && S[t].forEach(function (t) {
                    t.call(a, n)
                })
            })
        }

        function X(t, e) {
            S[t] = S[t] || [], S[t].push(e), "update" === t.split(".")[0] && u.forEach(function (t, e) {
                Y("update", e)
            })
        }

        function Y(r, n, i) {
            Object.keys(S).forEach(function (t) {
                var e = t.split(".")[0];
                r === e && S[t].forEach(function (t) {
                    t.call(a, b.map(f.format.to), n, b.slice(), i || !1, m.slice())
                })
            })
        }

        function _(t) {
            return t + "%"
        }

        function I(t, e, r, n, i, o) {
            return 1 < u.length && !f.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + f.margin)), i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - f.margin))), 1 < u.length && f.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + f.limit)), i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - f.limit))), f.padding && (0 === e && (r = Math.max(r, f.padding[0])), e === u.length - 1 && (r = Math.min(r, 100 - f.padding[1]))), !((r = it(r = E.getStep(r))) === t[e] && !o) && r
        }

        function W(t, e) {
            var r = f.ort;
            return (r ? e : t) + ", " + (r ? t : e)
        }

        function $(t, n, r, e) {
            var i = r.slice(), o = [!t, t], a = [t, !t];
            e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
                var r = I(i, t, i[t] + n, o[e], a[e], !1);
                !1 === r ? n = 0 : (n = r - i[t], i[t] = r)
            }) : o = a = [!0];
            var s = !1;
            e.forEach(function (t, e) {
                s = K(t, r[t] + n, o[e], a[e]) || s
            }), s && e.forEach(function (t) {
                Y("update", t), Y("slide", t)
            })
        }

        function G(t, e) {
            return f.dir ? 100 - t - e : t
        }

        function J() {
            g.forEach(function (t) {
                var e = 50 < m[t] ? -1 : 1, r = 3 + (u.length + e * t);
                u[t].style.zIndex = r
            })
        }

        function K(t, e, r, n) {
            return !1 !== (e = I(m, t, e, r, n, !1)) && (function (t, e) {
                m[t] = e, b[t] = E.fromStepping(e);
                var r = "translate(" + W(_(G(e, 0) - A), "0") + ")";
                u[t].style[f.transformRule] = r, Q(t), Q(t + 1)
            }(t, e), !0)
        }

        function Q(t) {
            if (s[t]) {
                var e = 0, r = 100;
                0 !== t && (e = m[t - 1]), t !== s.length - 1 && (r = m[t]);
                var n = r - e, i = "translate(" + W(_(G(e, n)), "0") + ")", o = "scale(" + W(n / 100, "1") + ")";
                s[t].style[f.transformRule] = i + " " + o
            }
        }

        function Z(t, e) {
            var n = ot(t), r = void 0 === m[0];
            e = void 0 === e || !!e, f.animate && !r && nt(y, f.cssClasses.tap, f.animationDuration), g.forEach(function (t) {
                var e, r;
                K(t, (e = n[t], r = t, null === e || !1 === e || void 0 === e ? m[r] : ("number" == typeof e && (e = String(e)), e = f.format.from(e), !1 === (e = E.toStepping(e)) || isNaN(e) ? m[r] : e)), !0, !1)
            }), g.forEach(function (t) {
                K(t, m[t], !0, !0)
            }), J(), g.forEach(function (t) {
                Y("update", t), null !== n[t] && e && Y("set", t)
            })
        }

        function tt() {
            var t = b.map(f.format.to);
            return 1 === t.length ? t[0] : t
        }

        return at(e = y, f.cssClasses.target), 0 === f.dir ? at(e, f.cssClasses.ltr) : at(e, f.cssClasses.rtl), 0 === f.ort ? at(e, f.cssClasses.horizontal) : at(e, f.cssClasses.vertical), l = M(e, f.cssClasses.base), function (t, e) {
            var r, n, i, o = M(e, f.cssClasses.connects);
            u = [], (s = []).push(V(o, t[0]));
            for (var a = 0; a < f.handles; a++) u.push((r = a, i = void 0, n = M(e, f.cssClasses.origin), (i = M(n, f.cssClasses.handle)).setAttribute("data-handle", r), f.keyboardSupport && i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"), 0 === r ? at(i, f.cssClasses.handleLower) : r === f.handles - 1 && at(i, f.cssClasses.handleUpper), n)), g[a] = a, s.push(V(o, t[a + 1]))
        }(f.connect, l), (p = f.events).fixed || u.forEach(function (t, e) {
            F(d.start, t.children[0], q, {handleNumbers: [e]})
        }), p.tap && F(d.start, l, n, {}), p.hover && F(d.move, l, B, {hover: !0}), p.drag && s.forEach(function (t, e) {
            if (!1 !== t && 0 !== e && e !== s.length - 1) {
                var r = u[e - 1], n = u[e], i = [t];
                at(t, f.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function (t) {
                    F(d.start, t, q, {handles: [r, n], handleNumbers: [e - 1, e]})
                })
            }
        }), Z(f.start), a = {
            destroy: function () {
                for (var t in f.cssClasses) f.cssClasses.hasOwnProperty(t) && st(y, f.cssClasses[t]);
                for (; y.firstChild;) y.removeChild(y.firstChild);
                delete y.noUiSlider
            }, steps: function () {
                return m.map(function (t, e) {
                    var r = E.getNearbySteps(t), n = b[e], i = r.thisStep.step, o = null;
                    !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === t ? i = null : 0 === t && (o = null);
                    var a = E.countStepDecimals();
                    return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i]
                })
            }, on: X, off: function (t) {
                var n = t && t.split(".")[0], i = n && t.substring(n.length);
                Object.keys(S).forEach(function (t) {
                    var e = t.split(".")[0], r = t.substring(e.length);
                    n && n !== e || i && i !== r || delete S[t]
                })
            }, get: tt, set: Z, setHandle: function (t, e, r) {
                var n = [];
                if (!(0 <= (t = Number(t)) && t < g.length)) throw new Error("noUiSlider (" + et + "): invalid handle number, got: " + t);
                for (var i = 0; i < g.length; i++) n[i] = null;
                n[t] = e, Z(n, r)
            }, reset: function (t) {
                Z(f.start, t)
            }, __moveHandles: function (t, e, r) {
                $(t, e, m, r)
            }, options: o, updateOptions: function (e, t) {
                var r = tt(), n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                n.forEach(function (t) {
                    void 0 !== e[t] && (o[t] = e[t])
                });
                var i = ut(o);
                n.forEach(function (t) {
                    void 0 !== e[t] && (f[t] = i[t])
                }), E = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, f.pips && z(f.pips), m = [], Z(e.start || r, t)
            }, target: y, removePips: L, pips: z
        }, f.pips && z(f.pips), f.tooltips && (i = u.map(r), X("update", function (t, e, r) {
            if (i[e]) {
                var n = t[e];
                !0 !== f.tooltips[e] && (n = f.tooltips[e].to(r[e])), i[e].innerHTML = n
            }
        })), X("update", function (t, e, a, r, s) {
            g.forEach(function (t) {
                var e = u[t], r = I(m, t, 0, !0, !0, !0), n = I(m, t, 100, !0, !0, !0), i = s[t],
                    o = f.ariaFormat.to(a[t]);
                r = E.fromStepping(r).toFixed(1), n = E.fromStepping(n).toFixed(1), i = E.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o)
            })
        }), a
    }

    return {
        __spectrum: l, version: et, create: function (t, e) {
            if (!t || !t.nodeName) throw new Error("noUiSlider (" + et + "): create requires a single element, got: " + t);
            if (t.noUiSlider) throw new Error("noUiSlider (" + et + "): Slider was already initialized.");
            var r = z(t, ut(e), e);
            return t.noUiSlider = r
        }
    }
});
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!function (l, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(l.jQuery)
}(this, function (l) {
    "use strict";

    function e(e) {
        if (t.webkit && !e) return {height: 0, width: 0};
        if (!t.data.outer) {
            var o = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            t.data.inner = l("<div>").css(l.extend({}, o)), t.data.outer = l("<div>").css(l.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, o)).append(t.data.inner).appendTo("body")
        }
        return t.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(t.data.outer.offset().top - t.data.inner.offset().top || 0),
            width: Math.ceil(t.data.outer.offset().left - t.data.inner.offset().left || 0)
        }
    }

    function o() {
        var l = e(!0);
        return !(l.height || l.width)
    }

    function s(l) {
        var e = l.originalEvent;
        return e.axis && e.axis === e.HORIZONTAL_AXIS ? !1 : e.wheelDeltaX ? !1 : !0
    }

    var r = !1, t = {
        data: {index: 0, name: "scrollbar"},
        macosx: /mac/i.test(navigator.platform),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    t.scrolls.add = function (l) {
        this.remove(l).push(l)
    }, t.scrolls.remove = function (e) {
        for (; l.inArray(e, this) >= 0;) this.splice(l.inArray(e, this), 1);
        return this
    };
    var i = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !1,
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    }, n = function (s) {
        t.scroll || (t.overlay = o(), t.scroll = e(), a(), l(window).resize(function () {
            var l = !1;
            if (t.scroll && (t.scroll.height || t.scroll.width)) {
                var o = e();
                (o.height !== t.scroll.height || o.width !== t.scroll.width) && (t.scroll = o, l = !0)
            }
            a(l)
        })), this.container = s, this.namespace = ".scrollbar_" + t.data.index++, this.options = l.extend({}, i, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, s.data(t.data.name, this), t.scrolls.add(this)
    };
    n.prototype = {
        destroy: function () {
            if (this.wrapper) {
                this.container.removeData(t.data.name), t.scrolls.remove(this);
                var e = this.container.scrollLeft(), o = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), l(document).add("body").off(this.namespace), l.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        }, init: function (e) {
            var o = this, r = this.container, i = this.containerWrapper || r, n = this.namespace,
                c = l.extend(this.options, e || {}), a = {x: this.scrollx, y: this.scrolly}, d = this.wrapper,
                h = {scrollLeft: r.scrollLeft(), scrollTop: r.scrollTop()};
            if (t.mobile && c.ignoreMobile || t.overlay && c.ignoreOverlay || t.macosx && !t.webkit) return !1;
            if (d) i.css({
                height: "auto",
                "margin-bottom": -1 * t.scroll.height + "px",
                "margin-right": -1 * t.scroll.width + "px",
                "max-height": ""
            }); else {
                if (this.wrapper = d = l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position", "absolute" == r.css("position") ? "absolute" : "relative").insertBefore(r).append(r), r.is("textarea") && (this.containerWrapper = i = l("<div>").insertBefore(r).append(r), d.addClass("scroll-textarea")), i.addClass("scroll-content").css({
                    height: "auto",
                    "margin-bottom": -1 * t.scroll.height + "px",
                    "margin-right": -1 * t.scroll.width + "px",
                    "max-height": ""
                }), r.on("scroll" + n, function (e) {
                    l.isFunction(c.onScroll) && c.onScroll.call(o, {
                        maxScroll: a.y.maxScrollOffset,
                        scroll: r.scrollTop(),
                        size: a.y.size,
                        visible: a.y.visible
                    }, {
                        maxScroll: a.x.maxScrollOffset,
                        scroll: r.scrollLeft(),
                        size: a.x.size,
                        visible: a.x.visible
                    }), a.x.isVisible && a.x.scroll.bar.css("left", r.scrollLeft() * a.x.kx + "px"), a.y.isVisible && a.y.scroll.bar.css("top", r.scrollTop() * a.y.kx + "px")
                }), d.on("scroll" + n, function () {
                    d.scrollTop(0).scrollLeft(0)
                }), c.disableBodyScroll) {
                    var p = function (l) {
                        s(l) ? a.y.isVisible && a.y.mousewheel(l) : a.x.isVisible && a.x.mousewheel(l)
                    };
                    d.on("MozMousePixelScroll" + n, p), d.on("mousewheel" + n, p), t.mobile && d.on("touchstart" + n, function (e) {
                        var o = e.originalEvent.touches && e.originalEvent.touches[0] || e,
                            s = {pageX: o.pageX, pageY: o.pageY}, t = {left: r.scrollLeft(), top: r.scrollTop()};
                        l(document).on("touchmove" + n, function (l) {
                            var e = l.originalEvent.targetTouches && l.originalEvent.targetTouches[0] || l;
                            r.scrollLeft(t.left + s.pageX - e.pageX), r.scrollTop(t.top + s.pageY - e.pageY), l.preventDefault()
                        }), l(document).on("touchend" + n, function () {
                            l(document).off(n)
                        })
                    })
                }
                l.isFunction(c.onInit) && c.onInit.apply(this, [r])
            }
            l.each(a, function (e, t) {
                var i = null, d = 1, h = "x" === e ? "scrollLeft" : "scrollTop", p = c.scrollStep, u = function () {
                    var l = r[h]();
                    r[h](l + p), 1 == d && l + p >= f && (l = r[h]()), -1 == d && f >= l + p && (l = r[h]()), r[h]() == l && i && i()
                }, f = 0;
                t.scroll || (t.scroll = o._getScroll(c["scroll" + e]).addClass("scroll-" + e), c.showArrows && t.scroll.addClass("scroll-element_arrows_visible"), t.mousewheel = function (l) {
                    if (!t.isVisible || "x" === e && s(l)) return !0;
                    if ("y" === e && !s(l)) return a.x.mousewheel(l), !0;
                    var i = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
                        n = t.size - t.visible - t.offset;
                    return (i > 0 && n > f || 0 > i && f > 0) && (f += i, 0 > f && (f = 0), f > n && (f = n), o.scrollTo = o.scrollTo || {}, o.scrollTo[h] = f, setTimeout(function () {
                        o.scrollTo && (r.stop().animate(o.scrollTo, 240, "linear", function () {
                            f = r[h]()
                        }), o.scrollTo = null)
                    }, 1)), l.preventDefault(), !1
                }, t.scroll.on("MozMousePixelScroll" + n, t.mousewheel).on("mousewheel" + n, t.mousewheel).on("mouseenter" + n, function () {
                    f = r[h]()
                }), t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + n, function (s) {
                    if (1 != s.which) return !0;
                    d = 1;
                    var n = {
                        eventOffset: s["x" === e ? "pageX" : "pageY"],
                        maxScrollValue: t.size - t.visible - t.offset,
                        scrollbarOffset: t.scroll.bar.offset()["x" === e ? "left" : "top"],
                        scrollbarSize: t.scroll.bar["x" === e ? "outerWidth" : "outerHeight"]()
                    }, a = 0, v = 0;
                    return l(this).hasClass("scroll-arrow") ? (d = l(this).hasClass("scroll-arrow_more") ? 1 : -1, p = c.scrollStep * d, f = d > 0 ? n.maxScrollValue : 0) : (d = n.eventOffset > n.scrollbarOffset + n.scrollbarSize ? 1 : n.eventOffset < n.scrollbarOffset ? -1 : 0, p = Math.round(.75 * t.visible) * d, f = n.eventOffset - n.scrollbarOffset - (c.stepScrolling ? 1 == d ? n.scrollbarSize : 0 : Math.round(n.scrollbarSize / 2)), f = r[h]() + f / t.kx), o.scrollTo = o.scrollTo || {}, o.scrollTo[h] = c.stepScrolling ? r[h]() + p : f, c.stepScrolling && (i = function () {
                        f = r[h](), clearInterval(v), clearTimeout(a), a = 0, v = 0
                    }, a = setTimeout(function () {
                        v = setInterval(u, 40)
                    }, c.duration + 100)), setTimeout(function () {
                        o.scrollTo && (r.animate(o.scrollTo, c.duration), o.scrollTo = null)
                    }, 1), o._handleMouseDown(i, s)
                }), t.scroll.bar.on("mousedown" + n, function (s) {
                    if (1 != s.which) return !0;
                    var i = s["x" === e ? "pageX" : "pageY"], c = r[h]();
                    return t.scroll.addClass("scroll-draggable"), l(document).on("mousemove" + n, function (l) {
                        var o = parseInt((l["x" === e ? "pageX" : "pageY"] - i) / t.kx, 10);
                        r[h](c + o)
                    }), o._handleMouseDown(function () {
                        t.scroll.removeClass("scroll-draggable"), f = r[h]()
                    }, s)
                }))
            }), l.each(a, function (l, e) {
                var o = "scroll-scroll" + l + "_visible", s = "x" == l ? a.y : a.x;
                e.scroll.removeClass(o), s.scroll.removeClass(o), i.removeClass(o)
            }), l.each(a, function (e, o) {
                l.extend(o, "x" == e ? {
                    offset: parseInt(r.css("left"), 10) || 0,
                    size: r.prop("scrollWidth"),
                    visible: d.width()
                } : {offset: parseInt(r.css("top"), 10) || 0, size: r.prop("scrollHeight"), visible: d.height()})
            }), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), l.isFunction(c.onUpdate) && c.onUpdate.apply(this, [r]), l.each(a, function (l, e) {
                var o = "x" === l ? "left" : "top", s = "x" === l ? "outerWidth" : "outerHeight",
                    t = "x" === l ? "width" : "height", i = parseInt(r.css(o), 10) || 0, n = e.size, a = e.visible + i,
                    d = e.scroll.size[s]() + (parseInt(e.scroll.size.css(o), 10) || 0);
                c.autoScrollSize && (e.scrollbarSize = parseInt(d * a / n, 10), e.scroll.bar.css(t, e.scrollbarSize + "px")), e.scrollbarSize = e.scroll.bar[s](), e.kx = (d - e.scrollbarSize) / (n - a) || 1, e.maxScrollOffset = n - a
            }), r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")
        }, _getScroll: function (e) {
            var o = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return o[e] && (e = o[e]), e || (e = o.simple), e = "string" == typeof e ? l(e).appendTo(this.wrapper) : l(e), l.extend(e, {
                bar: e.find(".scroll-bar"),
                size: e.find(".scroll-element_size"),
                track: e.find(".scroll-element_track")
            }), e
        }, _handleMouseDown: function (e, o) {
            var s = this.namespace;
            return l(document).on("blur" + s, function () {
                l(document).add("body").off(s), e && e()
            }), l(document).on("dragstart" + s, function (l) {
                return l.preventDefault(), !1
            }), l(document).on("mouseup" + s, function () {
                l(document).add("body").off(s), e && e()
            }), l("body").on("selectstart" + s, function (l) {
                return l.preventDefault(), !1
            }), o && o.preventDefault(), !1
        }, _updateScroll: function (e, o) {
            var s = this.container, r = this.containerWrapper || s, i = "scroll-scroll" + e + "_visible",
                n = "x" === e ? this.scrolly : this.scrollx,
                c = parseInt(this.container.css("x" === e ? "left" : "top"), 10) || 0, a = this.wrapper, d = o.size,
                h = o.visible + c;
            o.isVisible = d - h > 1, o.isVisible ? (o.scroll.addClass(i), n.scroll.addClass(i), r.addClass(i)) : (o.scroll.removeClass(i), n.scroll.removeClass(i), r.removeClass(i)), "y" === e && (s.is("textarea") || h > d ? r.css({
                height: h + t.scroll.height + "px",
                "max-height": "none"
            }) : r.css({"max-height": h + t.scroll.height + "px"})), (o.size != s.prop("scrollWidth") || n.size != s.prop("scrollHeight") || o.visible != a.width() || n.visible != a.height() || o.offset != (parseInt(s.css("left"), 10) || 0) || n.offset != (parseInt(s.css("top"), 10) || 0)) && (l.extend(this.scrollx, {
                offset: parseInt(s.css("left"), 10) || 0,
                size: s.prop("scrollWidth"),
                visible: a.width()
            }), l.extend(this.scrolly, {
                offset: parseInt(s.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: a.height()
            }), this._updateScroll("x" === e ? "y" : "x", n))
        }
    };
    var c = n;
    l.fn.scrollbar = function (e, o) {
        return "string" != typeof e && (o = e, e = "init"), "undefined" == typeof o && (o = []), l.isArray(o) || (o = [o]), this.not("body, .scroll-wrapper").each(function () {
            var s = l(this), r = s.data(t.data.name);
            (r || "init" === e) && (r || (r = new c(s)), r[e] && r[e].apply(r, o))
        }), this
    }, l.fn.scrollbar.options = i;
    var a = function () {
        var l = 0, e = 0;
        return function (o) {
            var s, i, n, c, d, h, p;
            for (s = 0; s < t.scrolls.length; s++) c = t.scrolls[s], i = c.container, n = c.options, d = c.wrapper, h = c.scrollx, p = c.scrolly, (o || n.autoUpdate && d && d.is(":visible") && (i.prop("scrollWidth") != h.size || i.prop("scrollHeight") != p.size || d.width() != h.visible || d.height() != p.visible)) && (c.init(), n.debug && (window.console && console.log({
                scrollHeight: i.prop("scrollHeight") + ":" + c.scrolly.size,
                scrollWidth: i.prop("scrollWidth") + ":" + c.scrollx.size,
                visibleHeight: d.height() + ":" + c.scrolly.visible,
                visibleWidth: d.width() + ":" + c.scrollx.visible
            }, !0), e++));
            r && e > 10 ? (window.console && console.log("Scroll updates exceed 10"), a = function () {
            }) : (clearTimeout(l), l = setTimeout(a, 300))
        }
    }();
    window.angular && !function (l) {
        l.module("jQueryScrollbar", []).provider("jQueryScrollbar", function () {
            var e = i;
            return {
                setOptions: function (o) {
                    l.extend(e, o)
                }, $get: function () {
                    return {options: l.copy(e)}
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function (l, e) {
            return {
                restrict: "AC", link: function (o, s, r) {
                    var t = e(r.jqueryScrollbar), i = t(o);
                    s.scrollbar(i || l.options).on("$destroy", function () {
                        s.scrollbar("destroy")
                    })
                }
            }
        }])
    }(window.angular)
});
/* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";

    function t(t, s) {
        this.element = t, this.options = e.extend({}, l, s);
        var i = this.options.locale;
        void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
    }

    function s(t) {
        if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
            var s = e("div.jq-selectbox.opened"), l = e("div.jq-selectbox__search input", s),
                o = e("div.jq-selectbox__dropdown", s);
            s.find("select").data("_" + i).options.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown")
        }
    }

    var i = "styler", l = {
        idSuffix: "-styler",
        filePlaceholder: "Файл не выбран",
        fileBrowse: "Обзор...",
        fileNumber: "Выбрано файлов: %s",
        selectPlaceholder: "Выберите...",
        selectSearch: !1,
        selectSearchLimit: 10,
        selectSearchNotFound: "Совпадений не найдено",
        selectSearchPlaceholder: "Поиск...",
        selectVisibleOptions: 0,
        selectSmartPositioning: !0,
        locale: "ru",
        locales: {
            en: {
                filePlaceholder: "No file selected",
                fileBrowse: "Browse...",
                fileNumber: "Selected files: %s",
                selectPlaceholder: "Select...",
                selectSearchNotFound: "No matches found",
                selectSearchPlaceholder: "Search..."
            }
        },
        onSelectOpened: function () {
        },
        onSelectClosed: function () {
        },
        onFormStyled: function () {
        }
    };
    t.prototype = {
        init: function () {
            function t() {
                void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data()
            }

            var i = e(this.element), l = this.options,
                o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
            if (i.is(":checkbox")) {
                var d = function () {
                    var s = new t, l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                        id: s.id,
                        title: s.title
                    }).addClass(s.classes).data(s.data);
                    i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
                        e.preventDefault(), i.triggerHandler("click"), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change())
                    }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
                        e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                    }), i.on("change.styler", function () {
                        i.is(":checked") ? l.addClass("checked") : l.removeClass("checked")
                    }).on("keydown.styler", function (e) {
                        32 == e.which && l.click()
                    }).on("focus.styler", function () {
                        l.is(".disabled") || l.addClass("focused")
                    }).on("blur.styler", function () {
                        l.removeClass("focused")
                    })
                };
                d(), i.on("refresh", function () {
                    i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d()
                })
            } else if (i.is(":radio")) {
                var r = function () {
                    var s = new t, l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                        id: s.id,
                        title: s.title
                    }).addClass(s.classes).data(s.data);
                    i.after(l).prependTo(l), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
                        var t = this;
                        return t.first().parents().filter(function () {
                            return e(this).find(t).length === t.length
                        })
                    }, e.fn.commonParent = function () {
                        return e(this).commonParents().first()
                    }, l.click(function (t) {
                        if (t.preventDefault(), i.triggerHandler("click"), !l.is(".disabled")) {
                            var s = e('input[name="' + i.attr("name") + '"]');
                            s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change()
                        }
                    }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
                        e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                    }), i.on("change.styler", function () {
                        i.parent().addClass("checked")
                    }).on("focus.styler", function () {
                        l.is(".disabled") || l.addClass("focused")
                    }).on("blur.styler", function () {
                        l.removeClass("focused")
                    })
                };
                r(), i.on("refresh", function () {
                    i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r()
                })
            } else if (i.is(":file")) {
                var c = function () {
                    var s = new t, o = i.data("placeholder");
                    void 0 === o && (o = l.filePlaceholder);
                    var a = i.data("browse");
                    void 0 !== a && "" !== a || (a = l.fileBrowse);
                    var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").attr({
                        id: s.id,
                        title: s.title
                    }).addClass(s.classes).data(s.data);
                    i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled");
                    var r = i.val(), c = e("div.jq-file__name", d);
                    r && c.text(r.replace(/.+[\\\/]/, "")), i.on("change.styler", function () {
                        var e = i.val();
                        if (i.is("[multiple]")) {
                            e = "";
                            var t = i[0].files.length;
                            if (t > 0) {
                                var s = i.data("number");
                                void 0 === s && (s = l.fileNumber), s = s.replace("%s", t), e = s
                            }
                        }
                        c.text(e.replace(/.+[\\\/]/, "")), "" === e ? (c.text(o), d.removeClass("changed")) : d.addClass("changed")
                    }).on("focus.styler", function () {
                        d.addClass("focused")
                    }).on("blur.styler", function () {
                        d.removeClass("focused")
                    }).on("click.styler", function () {
                        d.removeClass("focused")
                    })
                };
                c(), i.on("refresh", function () {
                    i.off(".styler").parent().before(i).remove(), c()
                })
            } else if (i.is('input[type="number"]')) {
                var n = function () {
                    var s = new t,
                        l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
                            id: s.id,
                            title: s.title
                        }).addClass(s.classes).data(s.data);
                    i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
                    var o, a, d, r = null, c = null;
                    void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
                    var n = function (t) {
                        var s, l = i.val();
                        e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
                        var r = (d.toString().split(".")[1] || []).length;
                        if (r > 0) {
                            for (var c = "1"; c.length <= r;) c += "0";
                            s = Math.round(s * c) / c
                        }
                        e.isNumeric(o) && e.isNumeric(a) ? s >= o && s <= a && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? s <= a && i.val(s) : i.val(s)
                    };
                    l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
                        var t = e(this);
                        n(t), r = setTimeout(function () {
                            c = setInterval(function () {
                                n(t)
                            }, 40)
                        }, 350)
                    }).on("mouseup mouseout", "div.jq-number__spin", function () {
                        clearTimeout(r), clearInterval(c)
                    }).on("mouseup", "div.jq-number__spin", function () {
                        i.change().trigger("input")
                    }), i.on("focus.styler", function () {
                        l.addClass("focused")
                    }).on("blur.styler", function () {
                        l.removeClass("focused")
                    }))
                };
                n(), i.on("refresh", function () {
                    i.off(".styler").closest(".jq-number").before(i).remove(), n()
                })
            } else if (i.is("select")) {
                var f = function () {
                    function d(e) {
                        var t = e.prop("scrollHeight") - e.outerHeight(), s = null, i = null;
                        e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (l) {
                            s = l.originalEvent.detail < 0 || l.originalEvent.wheelDelta > 0 ? 1 : -1, ((i = e.scrollTop()) >= t && s < 0 || i <= 0 && s > 0) && (l.stopPropagation(), l.preventDefault())
                        })
                    }

                    function r() {
                        for (var e = 0; e < c.length; e++) {
                            var t = c.eq(e), s = "", i = "", o = "", a = "", d = "", r = "", f = "", h = "", u = "";
                            t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = "disabled"), t.is(":selected:disabled") && (i = "selected sel disabled"), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== c.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (f = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
                            var p = t.data();
                            for (var v in p) "" !== p[v] && (r += " data-" + v + '="' + p[v] + '"');
                            i + f !== "" && (o = ' class="' + i + f + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (h = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + f + " option" + h + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + h + '">' + t.parent().attr("label") + "</li>" + s)), n += s
                        }
                    }

                    var c = e("option", i), n = "";
                    if (i.is("[multiple]")) {
                        if (a || o) return;
                        !function () {
                            var s = new t, l = e('<div class="jq-select-multiple jqselect"></div>').attr({
                                id: s.id,
                                title: s.title
                            }).addClass(s.classes).data(s.data);
                            i.after(l), r(), l.append("<ul>" + n + "</ul>");
                            var o = e("ul", l), a = e("li", l), f = i.attr("size"), h = o.outerHeight(),
                                u = a.outerHeight();
                            void 0 !== f && f > 0 ? o.css({height: u * f}) : o.css({height: 4 * u}), h > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l), i.is(":disabled") ? (l.addClass("disabled"), c.each(function () {
                                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected")
                            })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
                                i.focus();
                                var s = e(this);
                                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                                    var l = !1, o = !1;
                                    s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                                        e(this).is(".first") && (l = !0)
                                    }), s.nextAll().each(function () {
                                        e(this).is(".first") && (o = !0)
                                    }), l && s.prevAll().each(function () {
                                        if (e(this).is(".selected")) return !1;
                                        e(this).not(".disabled, .optgroup").addClass("selected")
                                    }), o && s.nextAll().each(function () {
                                        if (e(this).is(".selected")) return !1;
                                        e(this).not(".disabled, .optgroup").addClass("selected")
                                    }), 1 == a.filter(".selected").length && s.addClass("first")
                                }
                                c.prop("selected", !1), a.filter(".selected").each(function () {
                                    var t = e(this), s = t.index();
                                    t.is(".option") && (s -= t.prevAll(".optgroup").length), c.eq(s).prop("selected", !0)
                                }), i.change()
                            }), c.each(function (t) {
                                e(this).data("optionIndex", t)
                            }), i.on("change.styler", function () {
                                a.removeClass("selected");
                                var t = [];
                                c.filter(":selected").each(function () {
                                    t.push(e(this).data("optionIndex"))
                                }), a.not(".optgroup").filter(function (s) {
                                    return e.inArray(s, t) > -1
                                }).addClass("selected")
                            }).on("focus.styler", function () {
                                l.addClass("focused")
                            }).on("blur.styler", function () {
                                l.removeClass("focused")
                            }), h > l.height() && i.on("keydown.styler", function (e) {
                                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u)
                            }))
                        }()
                    } else !function () {
                        var a = new t, f = "", h = i.data("placeholder"), u = i.data("search"),
                            p = i.data("search-limit"), v = i.data("search-not-found"),
                            m = i.data("search-placeholder"), g = i.data("smart-positioning");
                        void 0 === h && (h = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.selectSmartPositioning);
                        var b = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({
                            id: a.id,
                            title: a.title
                        }).addClass(a.classes).data(a.data);
                        i.after(b).prependTo(b);
                        var C = b.css("z-index");
                        C = C > 0 ? C : 1;
                        var x = e("div.jq-selectbox__select", b), y = e("div.jq-selectbox__select-text", b),
                            w = c.filter(":selected");
                        r(), u && (f = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
                        var q = e('<div class="jq-selectbox__dropdown">' + f + "<ul>" + n + "</ul></div>");
                        b.append(q);
                        var _ = e("ul", q), j = e("li", q), k = e("input", q),
                            S = e("div.jq-selectbox__not-found", q).hide();
                        j.length < p && k.parent().hide(), "" === c.first().text() && c.first().is(":selected") && !1 !== h ? y.text(h).addClass("placeholder") : y.text(w.text());
                        var T = 0, N = 0;
                        if (j.css({display: "inline-block"}), j.each(function () {
                            var t = e(this);
                            t.innerWidth() > T && (T = t.innerWidth(), N = t.width())
                        }), j.css({display: ""}), y.is(".placeholder") && y.width() > T) y.width(y.width()); else {
                            var P = b.clone().appendTo("body").width("auto"), H = P.outerWidth();
                            P.remove(), H == b.outerWidth() && y.width(N)
                        }
                        T > b.width() && q.width(T), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide();
                        var A = b.outerHeight(!0), D = k.parent().outerHeight(!0) || 0, I = _.css("max-height"),
                            K = j.filter(".selected");
                        if (K.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
                            var O = j.outerHeight();
                            !1 !== h && (O = j.eq(1).outerHeight()), j.data("li-height", O)
                        }
                        var M = q.css("top");
                        if ("auto" == q.css("left") && q.css({left: 0}), "auto" == q.css("top") && (q.css({top: A}), M = A), q.hide(), K.length && (c.first().text() != w.text() && b.addClass("changed"), b.data("jqfs-class", K.data("jqfs-class")), b.addClass(K.data("jqfs-class"))), i.is(":disabled")) return b.addClass("disabled"), !1;
                        x.click(function () {
                            if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                                var t = e(window), s = j.data("li-height"), a = b.offset().top,
                                    r = t.height() - A - (a - t.scrollTop()), n = i.data("visible-options");
                                void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                                var f = 5 * s, h = s * n;
                                n > 0 && n < 6 && (f = h), 0 === n && (h = "auto");
                                var u = function () {
                                    q.height("auto").css({bottom: "auto", top: M});
                                    var e = function () {
                                        _.css("max-height", Math.floor((r - 20 - D) / s) * s)
                                    };
                                    e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e()
                                };
                                !0 === g || 1 === g ? r > f + D + 20 ? (u(), b.removeClass("dropup").addClass("dropdown")) : (function () {
                                    q.height("auto").css({top: "auto", bottom: M});
                                    var e = function () {
                                        _.css("max-height", Math.floor((a - t.scrollTop() - 20 - D) / s) * s)
                                    };
                                    e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e()
                                }(), b.removeClass("dropdown").addClass("dropup")) : !1 === g || 0 === g ? r > f + D + 20 && (u(), b.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                                    bottom: "auto",
                                    top: M
                                }), _.css("max-height", h), "none" != I && _.css("max-height", I)), b.offset().left + q.outerWidth() > t.width() && q.css({
                                    left: "auto",
                                    right: 0
                                }), e("div.jqselect").css({zIndex: C - 1}).removeClass("opened"), b.css({zIndex: C}), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), b.addClass("opened focused"), l.onSelectOpened.call(b)) : (q.hide(), b.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(b)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                                    var t = e(this).val();
                                    j.each(function () {
                                        e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide()
                                    }), "" === c.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide()
                                })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 != 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_)
                            }
                        }), j.hover(function () {
                            e(this).siblings().removeClass("selected")
                        });
                        var W = j.filter(".selected").text();
                        j.filter(":not(.disabled):not(.optgroup)").click(function () {
                            i.focus();
                            var t = e(this), s = t.text();
                            if (!t.is(".selected")) {
                                var o = t.index();
                                o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), c.prop("selected", !1).eq(o).prop("selected", !0), W = s, y.text(s), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", t.data("jqfs-class")), b.addClass(t.data("jqfs-class")), i.change()
                            }
                            q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b)
                        }), q.mouseout(function () {
                            e("li.sel", q).addClass("selected")
                        }), i.on("change.styler", function () {
                            y.text(c.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), c.first().text() != j.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed")
                        }).on("focus.styler", function () {
                            b.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                        }).on("blur.styler", function () {
                            b.removeClass("focused")
                        }).on("keydown.styler keyup.styler", function (e) {
                            var t = j.data("li-height");
                            "" === i.val() ? y.text(h).addClass("placeholder") : y.text(c.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), b.removeClass("opened dropup dropdown"), l.onSelectClosed.call(b))
                        }).on("keydown.styler", function (e) {
                            32 == e.which && (e.preventDefault(), x.click())
                        }), s.registered || (e(document).on("click", s), s.registered = !0)
                    }()
                };
                f(), i.on("refresh", function () {
                    i.off(".styler").parent().before(i).remove(), f()
                })
            } else i.is(":reset") && i.on("click", function () {
                setTimeout(function () {
                    i.closest("form").find("input, select").trigger("refresh")
                }, 1)
            })
        }, destroy: function () {
            var t = e(this.element);
            t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove()
        }
    }, e.fn[i] = function (s) {
        var l = arguments;
        if (void 0 === s || "object" == typeof s) return this.each(function () {
            e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s))
        }).promise().done(function () {
            var t = e(this[0]).data("_" + i);
            t && t.options.onFormStyled.call()
        }), this;
        if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
            var o;
            return this.each(function () {
                var a = e.data(this, "_" + i);
                a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)))
            }), void 0 !== o ? o : this
        }
    }, s.registered = !1
});
(function (factory) {

    if (typeof define === 'function' && define.amd) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if (typeof exports === 'object') {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.wNumb = factory();
    }

}(function () {

    'use strict';

    var FormatOptions = [
        'decimals',
        'thousand',
        'mark',
        'prefix',
        'suffix',
        'encoder',
        'decoder',
        'negativeBefore',
        'negative',
        'edit',
        'undo'
    ];

// General

    // Reverse a string
    function strReverse(a) {
        return a.split('').reverse().join('');
    }

    // Check if a string starts with a specified prefix.
    function strStartsWith(input, match) {
        return input.substring(0, match.length) === match;
    }

    // Check is a string ends in a specified suffix.
    function strEndsWith(input, match) {
        return input.slice(-1 * match.length) === match;
    }

    // Throw an error if formatting options are incompatible.
    function throwEqualError(F, a, b) {
        if ((F[a] || F[b]) && (F[a] === F[b])) {
            throw new Error(a);
        }
    }

    // Check if a number is finite and not NaN
    function isValidNumber(input) {
        return typeof input === 'number' && isFinite(input);
    }

    // Provide rounding-accurate toFixed method.
    // Borrowed: http://stackoverflow.com/a/21323330/775265
    function toFixed(value, exp) {
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
        value = value.toString().split('e');
        return (+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp))).toFixed(exp);
    }


// Formatting

    // Accept a number as input, output formatted string.
    function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

        var originalInput = input, inputIsNegative, inputPieces, inputBase, inputDecimals = '', output = '';

        // Apply user encoder to the input.
        // Expected outcome: number.
        if (encoder) {
            input = encoder(input);
        }

        // Stop if no valid number was provided, the number is infinite or NaN.
        if (!isValidNumber(input)) {
            return false;
        }

        // Rounding away decimals might cause a value of -0
        // when using very small ranges. Remove those cases.
        if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
            input = 0;
        }

        // Formatting is done on absolute numbers,
        // decorated by an optional negative symbol.
        if (input < 0) {
            inputIsNegative = true;
            input = Math.abs(input);
        }

        // Reduce the number of decimals to the specified option.
        if (decimals !== false) {
            input = toFixed(input, decimals);
        }

        // Transform the number into a string, so it can be split.
        input = input.toString();

        // Break the number on the decimal separator.
        if (input.indexOf('.') !== -1) {
            inputPieces = input.split('.');

            inputBase = inputPieces[0];

            if (mark) {
                inputDecimals = mark + inputPieces[1];
            }

        } else {

            // If it isn't split, the entire number will do.
            inputBase = input;
        }

        // Group numbers in sets of three.
        if (thousand) {
            inputBase = strReverse(inputBase).match(/.{1,3}/g);
            inputBase = strReverse(inputBase.join(strReverse(thousand)));
        }

        // If the number is negative, prefix with negation symbol.
        if (inputIsNegative && negativeBefore) {
            output += negativeBefore;
        }

        // Prefix the number
        if (prefix) {
            output += prefix;
        }

        // Normal negative option comes after the prefix. Defaults to '-'.
        if (inputIsNegative && negative) {
            output += negative;
        }

        // Append the actual number.
        output += inputBase;
        output += inputDecimals;

        // Apply the suffix.
        if (suffix) {
            output += suffix;
        }

        // Run the output through a user-specified post-formatter.
        if (edit) {
            output = edit(output, originalInput);
        }

        // All done.
        return output;
    }

    // Accept a sting as input, output decoded number.
    function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

        var originalInput = input, inputIsNegative, output = '';

        // User defined pre-decoder. Result must be a non empty string.
        if (undo) {
            input = undo(input);
        }

        // Test the input. Can't be empty.
        if (!input || typeof input !== 'string') {
            return false;
        }

        // If the string starts with the negativeBefore value: remove it.
        // Remember is was there, the number is negative.
        if (negativeBefore && strStartsWith(input, negativeBefore)) {
            input = input.replace(negativeBefore, '');
            inputIsNegative = true;
        }

        // Repeat the same procedure for the prefix.
        if (prefix && strStartsWith(input, prefix)) {
            input = input.replace(prefix, '');
        }

        // And again for negative.
        if (negative && strStartsWith(input, negative)) {
            input = input.replace(negative, '');
            inputIsNegative = true;
        }

        // Remove the suffix.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
        if (suffix && strEndsWith(input, suffix)) {
            input = input.slice(0, -1 * suffix.length);
        }

        // Remove the thousand grouping.
        if (thousand) {
            input = input.split(thousand).join('');
        }

        // Set the decimal separator back to period.
        if (mark) {
            input = input.replace(mark, '.');
        }

        // Prepend the negative symbol.
        if (inputIsNegative) {
            output += '-';
        }

        // Add the number
        output += input;

        // Trim all non-numeric characters (allow '.' and '-');
        output = output.replace(/[^0-9\.\-.]/g, '');

        // The value contains no parse-able number.
        if (output === '') {
            return false;
        }

        // Covert to number.
        output = Number(output);

        // Run the user-specified post-decoder.
        if (decoder) {
            output = decoder(output);
        }

        // Check is the output is valid, otherwise: return false.
        if (!isValidNumber(output)) {
            return false;
        }

        return output;
    }


// Framework

    // Validate formatting options
    function validate(inputOptions) {

        var i, optionName, optionValue,
            filteredOptions = {};

        if (inputOptions['suffix'] === undefined) {
            inputOptions['suffix'] = inputOptions['postfix'];
        }

        for (i = 0; i < FormatOptions.length; i += 1) {

            optionName = FormatOptions[i];
            optionValue = inputOptions[optionName];

            if (optionValue === undefined) {

                // Only default if negativeBefore isn't set.
                if (optionName === 'negative' && !filteredOptions.negativeBefore) {
                    filteredOptions[optionName] = '-';
                    // Don't set a default for mark when 'thousand' is set.
                } else if (optionName === 'mark' && filteredOptions.thousand !== '.') {
                    filteredOptions[optionName] = '.';
                } else {
                    filteredOptions[optionName] = false;
                }

                // Floating points in JS are stable up to 7 decimals.
            } else if (optionName === 'decimals') {
                if (optionValue >= 0 && optionValue < 8) {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

                // These options, when provided, must be functions.
            } else if (optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo') {
                if (typeof optionValue === 'function') {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }

                // Other options are strings.
            } else {

                if (typeof optionValue === 'string') {
                    filteredOptions[optionName] = optionValue;
                } else {
                    throw new Error(optionName);
                }
            }
        }

        // Some values can't be extracted from a
        // string if certain combinations are present.
        throwEqualError(filteredOptions, 'mark', 'thousand');
        throwEqualError(filteredOptions, 'prefix', 'negative');
        throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

        return filteredOptions;
    }

    // Pass all options as function arguments
    function passAll(options, method, input) {
        var i, args = [];

        // Add all options in order of FormatOptions
        for (i = 0; i < FormatOptions.length; i += 1) {
            args.push(options[FormatOptions[i]]);
        }

        // Append the input, then call the method, presenting all
        // options as arguments.
        args.push(input);
        return method.apply('', args);
    }

    function wNumb(options) {

        if (!(this instanceof wNumb)) {
            return new wNumb(options);
        }

        if (typeof options !== "object") {
            return;
        }

        options = validate(options);

        // Call 'formatTo' with proper arguments.
        this.to = function (input) {
            return passAll(options, formatTo, input);
        };

        // Call 'formatFrom' with proper arguments.
        this.from = function (input) {
            return passAll(options, formatFrom, input);
        };
    }

    return wNumb;

}));

$('.accordion-name').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.accordion')
        .toggleClass('active');

    $(this).closest('.accordion')
        .find('.accordion-content')
        .stop()
        .slideToggle(500);
});

$('.accordion').each(function () {
    if ($(this).hasClass('active')) {
        $(this).find('.accordion-content').css({'display': 'block'});
    }
});

$('.js-box-edit').on('click', function (e) {
    e.preventDefault();

    $(this).closest('.prof-box')
        .toggleClass('edit');

    // $(this).attr('disabled',"disabled");
});

$('.prof-box .prof-box__action .btn').on('click', function (e) {
    e.preventDefault();

    $(this).closest('.prof-box')
        .removeClass('edit');
});

$('select.sel-main-1').on('change', function () {
    if ($(this).val()) {
        $('select.sel-main-2').prop('disabled', false);
        $('select.sel-main-2').closest('.jq-selectbox')
            .removeClass('disabled');
        $('select.sel-main-2').styler('destroy');
        $('select.sel-main-2').styler({
            onFormStyled: function () {
                $('.jq-selectbox__dropdown ul').scrollbar();
            }
        });
    }
});
$('select.sel-main-2').on('change', function () {
    if ($(this).val()) {
        $('select.sel-main-3').prop('disabled', false);
        $('select.sel-main-3').closest('.jq-selectbox')
            .removeClass('disabled');
        $('select.sel-main-3').styler('destroy');
        $('select.sel-main-3').styler({
            onFormStyled: function () {
                $('.jq-selectbox__dropdown ul').scrollbar();
            }
        });
    }
});


$('select').styler({
    onFormStyled: function () {
        $('.jq-selectbox__dropdown ul').scrollbar();
    }
});

$('.prof-box__res').scrollbar();


$('input[type=tel]').mask("+7 (999) 999-99-99");

var rangeAge = document.getElementById('range-age');

if ($('#range-age').length) {
    var rangeAgeSlider = noUiSlider.create(rangeAge, {
        range: {
            'min': 18,
            'max': 90
        },
        start: [18, 90],
        step: 1,
        connect: true,
        behaviour: 'tap-drag',
        tooltips: true,
        pips: {
            mode: 'steps',
            stepped: true,
            density: 4,
            format: wNumb({
                decimals: 0
            })
        },
        format: wNumb({
            decimals: 0
        })
    });

    var nodes = [
        document.getElementById('range-age-lower'),
        document.getElementById('range-age-upper')
    ];

    rangeAgeSlider.on("slide", function (values, handle, unencoded, isTap, positions) {
        nodes[handle].value = values[handle];
    });
}

$('.form-comb-type').on('change', function () {
    var val = $(this).val(),
        box = $(this).closest('.prof-box'),
        combs = box.find('.form-comb');

    combs.each(function () {
        if ($(this).attr('data-box') == val) {
            $(this).addClass('active')
                .siblings('.form-comb')
                .removeClass('active');
        }
    });
});
$('.js-nav-toggle').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-opened');
});


$(window).on('scroll', function () {
    navAsideScroll();
});

navAsideScroll();

function navAsideScroll() {
    if ($('.nav-aside').length > 0) {
        var headerH = $('.header').height();
        if ($(window).scrollTop() > headerH) {
            $('.nav-aside').addClass('scrolled');
        } else {
            $('.nav-aside').removeClass('scrolled');
        }
    }
}


$('.js-popup').on('click', function (e) {
    e.preventDefault();
    if ($('body').hasClass('fancybox-active')) {
        $('[data-fancybox-close]').trigger('click');
    }
    $.fancybox.open({
        src: $(this).attr('href'),
        hash: false
    });
});


$('.popup-reg__tabs .btn').on('click', function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-box');

    $(this).addClass('active')
        .siblings()
        .removeClass('active');

    $(this).closest('.popup-reg')
        .addClass('popup-reg--full');

    $('.popup-reg__box').each(function () {
        if ($(this).attr('data-box') == attr) {
            $(this).addClass('active')
                .siblings()
                .removeClass('active');
        }
    });
});


function questionNext(questionActive) {
    questionActive.next()
        .addClass('active')
        .siblings()
        .removeClass('active');

    $('.testing-item.active').next()
        .addClass('active')
        .siblings()
        .removeClass('active');

    var step = $('.testing-iteration-step').html();
    step = parseInt(step) + 1;
    $('.testing-iteration-step').html(step);
}
(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

