<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php
$header_layout = get_theme_mod( 'inspiry_header_layout', 'one' );

// Added filter to change header layout using "Demo Child Theme"
$header_layout = apply_filters( 'builderpress_header_layout', $header_layout );

switch ( $header_layout ) {
	case "one":
		get_template_part( 'partials/header/header-var1' );
		break;
	case "two":
		get_template_part( 'partials/header/header-var2' );
		break;
	case "three":
		get_template_part( 'partials/header/header-var3' );

}

$enable_page_loader = get_theme_mod( 'inspiry_page_load', 'false' );
if ( $enable_page_loader == 'true' ) {
	get_template_part( 'partials/page-loader' );
}
?>