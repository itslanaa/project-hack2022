<?php
/**
 * Add color styling from theme
 */

if ( ! function_exists( 'inspiry_builderpress_add_inline_styles' ) ) {


	function inspiry_builderpress_add_inline_styles() {

		$get_color_scheme             = get_theme_mod( 'inspiry-color-scheme-controls', 'yellow' );
		$custum_theme_color           = get_theme_mod( 'inspiry-color-schemes-code' );
		$custum_theme_nav_color       = get_theme_mod( 'inspiry-color-schemes-nav-code' );
		$custum_theme_nav_hover_color = get_theme_mod( 'inspiry-color-schemes-nav-hover-code' );
		$theme_color                  = '';
		$theme_nav_color              = '';


		if ( ! empty( $custum_theme_color ) ) {
			$theme_color = $custum_theme_color;
		} elseif ( $get_color_scheme != 'yellow' ) {
			switch ( $get_color_scheme ) {
				case "orange":
					$theme_color = '#ff9800';
					break;
				case "indigo":
					$theme_color = '#303f9f';
					break;
				case "green":
					$theme_color = '#8bc34a';
					break;
				case "red":
					$theme_color = '#e53935';
					break;

			}
		}

		if ( ! empty( $custum_theme_nav_color ) ) {
			$theme_nav_color = $custum_theme_nav_color;
			$custom_css_nav  = "
			.main-menu ul li a{
				color: $theme_nav_color;
			}
					.main-menu ul li:hover a{
			color: $theme_nav_color;
			}
			";
			wp_add_inline_style( 'inspiry-main', $custom_css_nav );
		} else {
			switch ( $get_color_scheme ) {
				case 'yellow';
					$theme_nav_color = "#515151";
					break;
				case 'orange';
					$theme_nav_color = "#ffe0b2";
					break;
				case 'indigo';
					$theme_nav_color = "#b2bdff";
					break;
				case "green";
					$theme_nav_color = "#d3edb4";
					break;
				case 'red';
					$theme_nav_color = "#edb5b4";
					break;
			}

			$custom_css_nav = "
			.main-menu ul li a{
				color: $theme_nav_color;
			}

			";
			wp_add_inline_style( 'inspiry-main', $custom_css_nav );
		}
		if ( ! empty( $custum_theme_nav_hover_color ) ) {
			$theme_nav_hover_color = $custum_theme_nav_hover_color;
			$custom_css_nav_hover  = "
			.main-menu ul li:hover a:hover{
			color: $theme_nav_hover_color;
			}
			.main-menu ul > li.current-menu-item > a{
			color: $theme_nav_hover_color;
			}
			.header-nav-top .main-menu li ul li a{
			color: #$theme_nav_hover_color;
			}
			";
			wp_add_inline_style( 'inspiry-main', $custom_css_nav_hover );
		} else {

			if ( $get_color_scheme == 'yellow' ) {
				$theme_nav_hover_color = '#1a1a1a';

			} else {
				$theme_nav_hover_color = '#ffffff';
			}
			$custom_css_nav_hover = "
			.main-menu ul li:hover a{
			color: $theme_nav_hover_color;
			}
			.main-menu ul > li.current-menu-item > a{
			color: $theme_nav_hover_color;
			}

			.header-nav-top .main-menu li ul li:hover a{
			color: #$theme_nav_hover_color;
			}

			";
			wp_add_inline_style( 'inspiry-main', $custom_css_nav_hover );

		}


		if ( ! empty( $theme_color ) ) {
			//Convert Hex color to RGB
			list( $r, $g, $b ) = sscanf( $theme_color, "#%02x%02x%02x" );
			$theme_color_to_hex = " $r, $g, $b,";

			$custom_css = "
::selection {
background: {$theme_color};
}
::-moz-selection {
background: {$theme_color};
}

.bp-lined:after,.bp-list-lined li a:after,
.button-dark.hover-to-yellow:hover,
.button-yellow,
.common-vc-class .button-dark.hover-to-yellow:hover,
.common-vc-class .button-yellow,
.header-nav-section,
.main-menu ul li ul,
.shopping-cart-btn,
.mean-container .mean-bar,
.mean-container .mean-nav ul li a.mean-expand:hover,
.mean-container .mean-nav ul li a:hover,
.mean-container .mean-nav ul li ul li a:hover,
.mini-cart a.button-mini-cart,
.mini-cart.cart-fixed,
.mini-cart.cart-fixed:hover,
.cart-fixed,
.wrapper-inner-owl .owl-prev:hover,
.wrapper-inner-owl .owl-next:hover,
#customDots .owl-dot:after,
.vc-cta-overlay,
.testimonials-section .testimonial-short-border,
.testimonials-slider.variation-2 h3,
.side-brochures a:hover,
.nf-form-cont input[type=\"button\"]:hover,
.sidebar .widget h3:after,
.sidebar .widget_tag_cloud a:hover,
.select2-container--default .select2-selection--single .select2-selection__arrow,
.the-content-wrapper input[type=\"submit\"],
.bp-page-contents input[type=\"submit\"],
.single-post-bp.sticky h2 .sticky-pin-icon,
.comments-single .comment-wrapper .comment-reply-link,
.comment-respond input[type=\"submit\"],
.comment-respond #cancel-comment-reply-link,
.tag-links a,
.uil-flickr-css > div:nth-of-type(2),
.Shortcode_btn.button-dark.hover-to-yellow:hover,
.Shortcode_btn.button-yellow,
.Shortcode_btn.bp-lined:after,
.woocommerce span.onsale,
.woocommerce div.product .single-right-wc .button,
.woocommerce #respond input#submit,
.carousel-product-upsells-related h2 a:before,
.woocommerce .widget_price_filter .ui-slider .ui-slider-range,
.woocommerce .widget_price_filter .ui-slider .ui-slider-handle,
.woocommerce .widget_price_filter button:hover,
.woocommerce-cart table.cart th,
.woocommerce-cart table.cart input[type=\"submit\"]:hover,
.woocommerce .bp-shipping-calculator .button:hover,
.woocommerce .collaterals-single .cart_totals .wc-proceed-to-checkout a:hover,
.woocommerce .woocommerce-checkout input[type=\"submit\"]:hover,
.woocommerce .woocommerce-message a:hover,
.woocommerce .woocommerce-info a:hover,
.woocommerce .woocommerce-error a:hover,
.woocommerce .return-to-shop a:hover,
.woocommerce .woocommerce-MyAccount-navigation ul li a:after,
.woocommerce .woocommerce-MyAccount-content table a.button:hover,
.woocommerce .woocommerce-MyAccount-content form input[type=\"submit\"]:hover,
.woocommerce .checkout_coupon input[type=\"submit\"]:hover,
.woocommerce form.login input[type=\"submit\"]:hover,
.woocommerce form.lost_reset_password input[type=\"submit\"]:hover,
.woocommerce .widget_shopping_cart_content .button,
.woocommerce .widget_product_tag_cloud .tagcloud a:hover,
.footer-widgets-area .woocommerce .widget_shopping_cart_content .button.checkout:hover,
.footer-widgets-area .woocommerce .price_slider_amount .button,
.footer-widgets-area .widget_product_tag_cloud .tagcloud a:hover,
.wrapper-nav-section-2 .main-menu,
.prev-next-wrapper a:after,
.woocommerce table.cart th{
background: {$theme_color};
}

.wrapper-inner-owl div.owl-prev:hover,
.wrapper-inner-owl div.owl-next:hover,
.woocommerce table.cart input[type=\"submit\"]:hover{
background: {$theme_color} !important;
}

.button-yellow:hover,
.common-vc-class .button-yellow:hover,
.top-social-nav li a:hover,
.request-quote-btn:hover,
.shopping-cart-btn:hover,
.mini-cart:hover .cart-icon i,
.mini-cart .cart_list_product_title:hover,
.mini-cart a.button-mini-cart:hover,
.header-nav-top .mini-cart .cart-inner:hover .cart-icon i,
.services-section .service-single-content h3 a:hover,
.services-section .service-box-var2 h3 a:hover,
.wrapper-recent-single h3 a:hover,
.single-service-box h3 a:hover,
.wrapper-member .single-member ul li a:hover,
.sidebar .widget a:hover,
.wrapper-page-contents .post-heading a:hover,
.wrapper-page-contents .post-meta a span,
.wrapper-page-contents .post-meta a:hover ,
.wrapper-page-contents .post-meta .post-count:hover ,
.the-content-wrapper a, .bp-page-contents a ,
.the-content-wrapper input[type=\"submit\"]:hover,
.bp-page-contents input[type=\"submit\"]:hover ,
.comments-single .comment-wrapper a,
.comments-single .comment-wrapper .comment-reply-link:hover,
.comments-single .pingback a,
.comment-respond input[type=\"submit\"]:hover,
.comment-respond #cancel-comment-reply-link:hover,
.page-links a,
.tag-links a:hover,
.footer-intro-section p a:hover,
.copyright-text a:hover,
.Shortcode_btn.button-yellow:hover,
.woocommerce .star-rating:before,
.woocommerce .star-rating span,
.woocommerce div.product .single-right-wc .button:hover,
.woocommerce div.product .single-right-wc .button:hover:after,
.comment-form-rating p.stars a,
.woocommerce .widget_price_filter button,
.woocommerce .woocommerce-message a,
.woocommerce .woocommerce-info a,
.woocommerce .woocommerce-error a,
.woocommerce .return-to-shop a,
.woocommerce .woocommerce-MyAccount-content a,
.woocommerce .woocommerce-MyAccount-content table a.button,
.woocommerce .woocommerce-MyAccount-content form input[type=\"submit\"],
.woocommerce .checkout_coupon input[type=\"submit\"],
.woocommerce form.login input[type=\"submit\"], .woocommerce form.lost_reset_password input[type=\"submit\"],
.woocommerce form.login a:hover,
.woocommerce form.lost_reset_password a:hover,
.woocommerce .widget_shopping_cart_content .button:hover,
.woocommerce ul.product_list_widget li:hover .product-title
{
color: {$theme_color};
}






.button-yellow-border,
.common-vc-class .button-yellow-border,
.request-quote-btn
 {
border: 2px solid {$theme_color};
}

.main-menu ul li ul li:hover > a {
background: {$theme_color};
filter: brightness(90%);
}

.mean-container .mean-nav {
border-bottom: 1px solid {$theme_color};
}

.mean-container .mean-nav ul li a.mean-expand {
border-color: {$theme_color} !important;
}

.mean-container .mean-nav ul li a,
.mean-container .mean-nav ul li ul li a
 {
border-top-color: {$theme_color};
}

.mini-cart:hover svg {
fill: {$theme_color};
}

.mini-cart.cart-fixed:hover a.cart-link{
display: block;
background: {$theme_color};
filter: brightness(90%);
}

.wrapper-portfolio-slider .overlay-slide {
background: rgba($theme_color_to_hex 0.85);
}

.wrapper-portfolio-slider .overlay-slide p {
color: {$theme_color};
filter: brightness(40%);
}
.quote-bar-home .cta-overlay {
background: rgba($theme_color_to_hex 0.85);
}
.side-services-list li:after {
border-bottom: 2px {$theme_color} dashed;
}

.select2-container--default .select2-results__option--highlighted[aria-selected],
.widget_search input[type=\"submit\"]
{
background-color: {$theme_color};
}

.widget_search input[type=\"submit\"]:hover {
background-color: {$theme_color};
filter: brightness(70%);
}
.single-post-bp.sticky {
border-bottom: 2px solid {$theme_color};
}

.pagination a:hover,
 .pagination .current
 {
background: {$theme_color};
border-color: {$theme_color};
}

blockquote {
border-color: {$theme_color};
}

@media only screen and (max-width: 991px) {
.header-nav-top .mini-cart .cart-icon:hover svg {
fill: {$theme_color};
}
}

.Shortcode_btn.button-yellow-border {
border: 2px solid {$theme_color};
}

.woocommerce .wrapper-buttons-add-cart .add_to_cart_button:hover, .woocommerce .wrapper-buttons-add-cart .added_to_cart:hover {
background: {$theme_color};
border-color: {$theme_color};
}
.woocommerce .woocommerce-checkout .woocommerce-validated input.input-text {
border: 1px solid {$theme_color} !important;
}
.woocommerce .woocommerce-info {
border-top-color: {$theme_color};
}
.woocommerce .woocommerce-message, .woocommerce .woocommerce-info, .woocommerce .woocommerce-error {
border: 2px solid {$theme_color};
}
.woocommerce .checkout_coupon input[type=\"text\"]:focus {
border: 1px solid {$theme_color};
}
.woocommerce .widget_shopping_cart_content .total {
border-top: 2px solid {$theme_color};
}
.woocommerce .widget_shopping_cart_content .checkout {
color: {$theme_color};
background: #1a1a1a;
}
.woocommerce .widget_shopping_cart_content .checkout:hover {
background: {$theme_color};
color: #1a1a1a;
}
.woocommerce .widget_product_search input[type=\"submit\"] {
background-color: {$theme_color};
}
.woocommerce .widget_product_search input[type=\"submit\"]:hover {
background-color: {$theme_color};
}
.woocommerce nav.woocommerce-pagination ul li a:hover,
.woocommerce nav.woocommerce-pagination ul li .current
{
background: {$theme_color} !important;
border-color: {$theme_color} !important;
}


.footer-widgets-area .widget_product_search input[type=\"submit\"],
.footer-widgets-area .widget_product_search input[type=\"submit\"]:hover
{
background-color: {$theme_color};
}

#imagelightbox-close, .imagelightbox-arrow {
border: 2px solid {$theme_color};
}

#imagelightbox-close:before, #imagelightbox-close:after {
background-color: {$theme_color} !important;
}

.imagelightbox-arrow-right:before {
border-left-color: {$theme_color} !important;
}

.imagelightbox-arrow-left:before {
border-right-color: {$theme_color} !important;
}


";

			wp_add_inline_style( 'inspiry-main', $custom_css );
		}

		if ( $get_color_scheme != 'yellow' ) {
			$custom_css_button = "
			.common-vc-class .bp-button{
			color : #ffffff;
			}
			.common-vc-class .bp-button:hover{
			color: #ffffff;
			}
			.common-vc-class .button-dark.hover-to-yellow:hover{
			color: #ffffff;
			}

			";

			wp_add_inline_style( 'inspiry-main', $custom_css_button );
		}

		if ( $get_color_scheme == 'indigo' ) {
			$custom_css_scheme_three = "
			.wrapper-portfolio-slider .overlay-slide p{
			color : #ffffff;
			filter: none;
			}
			.mini-cart.cart-fixed svg{
			fill : #ffffff;
			}
			.mini-cart.cart-fixed:hover svg{
			fill : #ffffff;
			}
			.mini-cart a.button-mini-cart,
			.mini-cart a.button-mini-cart:hover,
			.button-yellow,
			.button-yellow:hover,
			.woocommerce span.onsale,
			.woocommerce .wrapper-buttons-add-cart .add_to_cart_button:hover,
			.woocommerce .wrapper-buttons-add-cart .added_to_cart:hover,
			.select2-container--default .select2-results__option--highlighted[aria-selected],
			.woocommerce .widget_shopping_cart_content .button,
			.woocommerce .widget_shopping_cart_content .button:hover,
			.woocommerce .widget_price_filter button,
			.woocommerce .widget_price_filter button:hover,
			.woocommerce-cart table.cart th,
			.woocommerce-cart table.cart input[type=\"submit\"]:hover,
			.woocommerce .collaterals-single .cart_totals .wc-proceed-to-checkout a:hover,
			.woocommerce .woocommerce-message a,
			.woocommerce .woocommerce-info a,
			.woocommerce .woocommerce-error a,
			.woocommerce .woocommerce-message a:hover,
			.woocommerce .woocommerce-info a:hover,
			.woocommerce .woocommerce-error a:hover,
			.woocommerce .woocommerce-checkout input[type=\"submit\"]:hover,
			.woocommerce div.product .single-right-wc .button,
			.woocommerce div.product .single-right-wc .button:hover,
			.woocommerce div.product .single-right-wc .button:after,
			.woocommerce div.product .single-right-wc .button:hover:after,
			.woocommerce .woocommerce-MyAccount-content form input[type=\"submit\"],
			.woocommerce .woocommerce-MyAccount-content form input[type=\"submit\"]:hover,
			.woocommerce form.login input[type=\"submit\"],
			.woocommerce form.lost_reset_password input[type=\"submit\"],
			.woocommerce form.login input[type=\"submit\"]:hover,
			.woocommerce form.lost_reset_password input[type=\"submit\"]:hover,
			.the-content-wrapper input[type=\"submit\"],
			.bp-page-contents input[type=\"submit\"],
			.the-content-wrapper input[type=\"submit\"]:hover,
			.bp-page-contents input[type=\"submit\"]:hover,
			.request-quote-btn:hover,
			.top-social-nav li a:hover{
			color : #ffffff;
			}
			.select2-container--default .select2-selection--single .select2-selection__arrow b{
			border-color: #ffffff transparent transparent transparent !important;
			}
			.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b{
			border-color: transparent transparent #ffffff transparent !important;
			}
			::selection {
			color: #ffffff;
			}
			::-moz-selection {
			color: #ffffff;
			}
			";

			wp_add_inline_style( 'inspiry-main', $custom_css_scheme_three );
		}


	}

	add_action( 'wp_enqueue_scripts', 'inspiry_builderpress_add_inline_styles' );

}

