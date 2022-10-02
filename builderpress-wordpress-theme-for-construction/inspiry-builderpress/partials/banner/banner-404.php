<?php
$blog_banner_heading   = get_theme_mod( 'inspiry-banner-heading' );
$banner_image_blog     = get_theme_mod( 'banner-image' );
$banner_image_blog_url = wp_get_attachment_url( $banner_image_blog );

$header_color = get_theme_mod( 'banner-title-color' );

$header_layout = get_theme_mod( 'inspiry_header_layout' );

$test_image_meta = get_post_meta( get_the_ID(), 'bp-page-bg-image', true );
?>
<div class="banner <?php if ( $header_layout == 'two' ) { ?> banner-header-2 <?php } ?>" style="<?php if ( ! empty( $banner_image_blog ) ) { ?>background-image: url(<?php echo esc_url($banner_image_blog_url) ?>)<?php } ?>;">
	<h1 style="color: <?php echo esc_attr($header_color); ?>"><?php esc_html_e( '404 - Page Not Found!', 'inspiry-builderpress' ) ?></h1>
</div>