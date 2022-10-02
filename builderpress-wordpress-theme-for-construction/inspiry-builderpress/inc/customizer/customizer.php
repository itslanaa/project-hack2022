<?php
/**
 * Customizer
 */

/**
 * Load custom controls
 */
if ( ! function_exists( 'inspiry_load_customize_controls' ) ) :
	function inspiry_load_customize_controls() {
		require_once( INSPIRY_CUSTOMIZER . 'custom/control-radio-image.php' );
		require_once( INSPIRY_CUSTOMIZER . 'custom/control-separator.php' );
	}

	add_action( 'customize_register', 'inspiry_load_customize_controls', 0 );
endif;

require_once( INSPIRY_CUSTOMIZER . 'customizer-schemes.php' );
require_once( INSPIRY_CUSTOMIZER . 'customizer-header.php' );
require_once( INSPIRY_CUSTOMIZER . 'customizer-miscellaneous.php' );
require_once( INSPIRY_CUSTOMIZER . 'customizer-footer.php' );
require_once( INSPIRY_CUSTOMIZER . 'customizer-blog.php' );

$inspiry_pages = array( 0 => esc_html__( 'None', 'inspiry-builderpress' ) );
$raw_pages     = get_pages();
if ( 0 < count( $raw_pages ) ) {
	foreach ( $raw_pages as $single_page ) {
		$inspiry_pages[ $single_page->ID ] = $single_page->post_title;
	}
}

if ( ! function_exists( 'inspiry_modify_default_customizer' ) ) :
	/**
	 * Remove stuff from customizer
	 *
	 * @param WP_Customize_Manager $wp_customize
	 */
	function inspiry_modify_default_customizer( WP_Customize_Manager $wp_customize ) {

		$wp_customize->remove_control( 'header_image' );
		$wp_customize->remove_section('colors');
	}

	add_action( 'customize_register', 'inspiry_modify_default_customizer', 999 );
endif;

if ( ! function_exists( 'inspiry_sanitize' ) ) :
	/**
	 * A sanitization placeholder
	 *
	 * @param $str
	 *
	 * @return mixed
	 */
	function inspiry_sanitize( $str ) {
		return $str;
	}
endif;
