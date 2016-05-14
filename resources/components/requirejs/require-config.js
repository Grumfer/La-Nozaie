requirejs.config({
	baseUrl: "resources/js",
	paths: {
		// Ici, avec notre baseUrl, on indique que le
		// fichier qui contient jQuery est situé à
		jquery : "../components/jQuery/jQuery-2.2.1.min",
		bootstrap : "../components/bootstrap-3.3.6-dist/js/bootstrap.min",
		slider : "../components/jQuerySlide/jquery.slides.min"
	},

	// l'objet shim va permettre de spécifier les
	// dépendances entre fichiers qui n'utilisent
	// pas la fonction define et associer d'éventuelles
	// variables globales à un nom de module.
	shim: {

		// Pour les bibliothèque qui en ont besoin,
		// un simple tableau de dépendances permettra
		// à RequireJS d’ordonnancer les chargements
		bootstrap : {
			deps: ["jquery"]
		},
		slider : {
			deps: ["jquery"]
		},
		main : {
			deps: ["bootstrap"]
		},
		map: {
		    "*": {
		        css: "require-css"
		    }
		}
	}
});
require(["main"], function() {});

/*var pathToJQuery;
if ("querySelector" in document && "localStorage" in window && "addEventListener" in window) {
    pathToJQuery = "../components/jquery/jquery.min"
} else {
    pathToJQuery = "../components/jquery/v1.11.2/jquery-1.11.2.min"
}
requirejs.config({
    baseUrl: baseUrl + "common/js/app",
    paths: {
        jquery: pathToJQuery,
        domReady: "../components/domready/domReady",
        jqueryUi: "../components/jquery-ui/jquery-ui.min",
        jqueryPlugin: "../components/jquery/jquery.plugin",
        jqueryKeypad: "../components/jquery/jquery.keypad",
        jqueryAutotab: "../components/jquery/jquery.autotab.min",
        jqueryUiTouchPunch: "../components/jquery-ui-touch-punch/jquery-ui-touch-punch.min",
        underscore: "../components/underscore/underscore",
        bootstrap: "../components/bootstrap/js/bootstrap",
        bootstrapSwitch: "../components/bootstrap-switch/bootstrap-switch",
        bootstrapValidator: "../components/bootstrapvalidator/js/bootstrapValidator",
        i18n: "../components/i18n/jquery.i18n.json",
        modernizr_havana: "../components/modernizr/modernizr_havana",
        "require-css": "../components/requirejs/require-css",
        jqueryMaskedinput: "../components/jquery-mask/jquery.maskedinput.min",
        jqueryNumber: "../components/jquery-number/jquery.number.min",
        moment: "../components/ion.calendar/js/ion-calendar/moment.min",
        calendar: "../components/ion.calendar/js/ion-calendar/ion.calendar",
        "jquery-ui-datepicker": "../components/pollyfill/input-date/js/jquery-ui-datepicker",
        rainbow: "../components/rainbow/js/rainbow",
        "rainbow-generic": "../components/rainbow/js/generic",
        "rainbow-javascript": "../components/rainbow/js/javascript",
        "date-utils": "../utils/date-utils",
        "pdf-utils": "../utils/pdf-utils",
        "input-utils": "../utils/input-utils",
        "amount-utils": "../utils/amount-utils",
        rangeSlider: "../components/ion.rangeSlider/js/ion.rangeSlider.min",
        sale: "../utils/sale",
        tooltip: "../utils/tooltip",
        classList: "../utils/classList",
        modal_content_resize: "../utils/modal_content_resize",
        header: "../utils/header",
        customer_contact: "../utils/customer_contact",
        icheck: "../components/icheck/icheck",
        qtip: "../components/jquery-qtip/jquery.qtip",
        "match-height": "../components/jquery-match-height/jquery.matchHeight",
        jqueryValidate: "../components/jquery-validate/jquery.validate",
        messagesFr: "../components/jquery-validate/messages_fr",
        additionalMethods: "../components/jquery-validate/additionalMethods",
        owlCarousel: "../components/owl-carousel/owl.carousel.min",
        "redirect-alert": "../utils/redirect-alert"
    },
    shim: {
        underscore: {
            exports: "_"
        },
        bootstrap: {
            deps: ["jquery"]
        },
        bootstrapValidator: {
            deps: ["bootstrap"]
        },
        bootstrapSwitch: {
            deps: ["bootstrap"]
        },
        i18n: {
            deps: ["jquery"]
        },
        domReady: {
            deps: ["jquery"]
        },
        "rainbow-generic": {
            deps: ["rainbow"]
        },
        "rainbow-javascript": {
            deps: ["rainbow-generic"]
        },
        jqueryUi: {
            deps: ["jquery"]
        },
        jqueryPlugin: {
            deps: ["jquery"]
        },
        jqueryKeypad: {
            deps: ["jqueryPlugin"]
        },
        jqueryAutotab: {
            deps: ["jquery"]
        },
        jqueryUiTouchPunch: {
            deps: ["jqueryUi"]
        },
        tooltip: {
            deps: ["jquery"]
        },
        classList: {
            deps: ["jquery"]
        },
        icheck: {
            deps: ["jquery"]
        },
        qtip: {
            deps: ["jquery"]
        },
        "match-height": {
            deps: ["jquery"]
        },
        moment: {
            deps: ["jquery"]
        },
        calendar: {
            deps: ["jquery", "moment"]
        },
        jqueryValidate: {
            deps: ["jquery"]
        },
        jqueryMaskedinput: {
            deps: ["jquery"]
        },
        jqueryNumber: {
            deps: ["jquery"]
        },
        messagesFr: {
            deps: ["jquery", "jqueryValidate", "additionalMethods"]
        },
        additionalMethods: {
            deps: ["jquery", "jqueryValidate"]
        },
        modal_content_resize: {
            deps: ["jquery"]
        },
        owlCarousel: {
            deps: ["jquery"]
        },
        "redirect-alert": {
            deps: ["jquery"]
        },
        main: {
            deps: ["jquery", "underscore", "bootstrap", "i18n", "input-utils", "modernizr_havana", "date-utils", "redirect-alert", "pdf-utils", "amount-utils", "sale", "tooltip", "classList", "modal_content_resize", "header", "customer_contact"]
        }
    },
    map: {
        "*": {
            css: "require-css"
        }
    }
});*/