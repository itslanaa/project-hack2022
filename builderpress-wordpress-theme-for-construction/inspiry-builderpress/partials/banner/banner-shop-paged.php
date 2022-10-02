<?php
$shop_banner_image             = get_theme_mod( 'shop-banner-image' );
$shop_banner_title             = get_theme_mod( 'inspiry-shop-heading' );
$header_color_default          = get_theme_mod( 'banner-title-color' );
$shop_banner_color             = get_theme_mod( 'inspiry-shop-heading-color' );
$banner_image_blog             = get_theme_mod( 'banner-image' );
$banner_image_blog_url         = wp_get_attachment_url( $banner_image_blog );
$header_layout                 = get_theme_mod( 'inspiry_header_layout' );
$in_page_banner_title          = get_post_meta( get_the_ID(), 'bp-banner-in-page-title', true );
$in_page_banner_title_color    = get_post_meta( get_the_ID(), 'bp-banner-in-page-title-color', true );
$in_page_banner_bg_image       = get_post_meta( get_the_ID(), 'bp-banner-in-page-bg-image', true );
$in_page_banner_display_option = get_post_meta( get_the_ID(), 'bp-banner-display-option', true );

if ( $in_page_banner_display_option !== 'no' ) {

	if ( ! empty( $shop_banner_color ) ) {
		$header_color = $shop_banner_color;
	} else {
		$header_color = $header_color_default;
	}

	if ( ! empty( $in_page_banner_bg_image ) ) {
		$banner_image_in_page_bg = wp_get_attachment_url( $in_page_banner_bg_image );
		?>
		<div class="banner <?php if ( $header_layout == 'two' ) { ?> banner-header-2 <?php } ?>"
		style="background-image: url(<?php echo esc_attr($banner_image_in_page_bg) ?>); ">
		<?php
	} elseif ( ! empty( $shop_banner_image ) ) {
		$banner_image = wp_get_attachment_url( $shop_banner_image );

		?>
		<div class="banner <?php if ( $header_layout == 'two' ) { ?> banner-header-2 <?php } ?>"
		style="background-image: url(<?php echo esc_attr($banner_image) ?>); ">
		<?php
	} else {
		?>
		<div class="banner  <?php if ( $header_layout == 'two' ) { ?> banner-header-2 <?php } ?>"
		style="<?php if ( ! empty( $banner_image_blog ) ) { ?>background-image: url(<?php echo esc_attr($banner_image_blog_url) ?>)<?php } ?>;">

		<?php
	}


	if ( ! empty( $in_page_banner_title ) || ! empty( $in_page_banner_title_color ) ) {
		$in_page_shop_banner_title = '';
		if ( ! empty( $in_page_banner_title ) ) {
			$in_page_shop_banner_title = $in_page_banner_title;
		} elseif ( ! empty( $shop_banner_title ) ) {
			$in_page_shop_banner_title = $shop_banner_title;
		} else {
			$in_page_shop_banner_title = get_the_title();
		}

		$in_page_shop_title_color = '';
		if ( ! empty( $in_page_banner_title_color ) ) {
			$in_page_shop_title_color = $in_page_banner_title_color;
		} elseif ( ! empty( $header_color ) ) {
			$in_page_shop_title_color = $header_color;
		}
		?>


		<h1 class="page-title test"
		    style="color: <?php echo esc_attr($in_page_shop_title_color); ?>"><?php echo esc_html($in_page_shop_banner_title); ?></h1>
		<?php
	} elseif ( ! empty( $shop_banner_title ) ) {
		?>
		<h1 class="page-title"
		    style="color: <?php echo esc_attr($header_color); ?>"><?php echo esc_html($shop_banner_title); ?></h1>
		<?php
	} else {
		?>
		<h1 class="page-title"
		    style="color: <?php echo esc_attr($header_color); ?>"><?php woocommerce_page_title(); ?></h1>
		<?php

	}

	?>


	</div>
	<?php
}