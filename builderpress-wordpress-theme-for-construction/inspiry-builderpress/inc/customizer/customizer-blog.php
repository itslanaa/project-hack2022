<?php

/**
 * Customizer settings for blog
 */

if ( ! function_exists( 'inspiry_blog_customizer' ) ) :

	function inspiry_blog_customizer( WP_Customize_Manager $wp_customize ) {

		// Footer Section
		$wp_customize->add_section( 'inspiry-blog-section', array(
			'title' => esc_html__( 'Blog', 'inspiry-builderpress' ),

		) );

		// footer intro text
		$wp_customize->add_setting( 'inspiry-banner-heading', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );

		$wp_customize->add_control( 'inspiry-banner-heading', array(
			'label'       => esc_html__( 'Enter blog banner heading', 'inspiry-builderpress' ),
			'description' => esc_html__( 'Default page title will be shown if field is empty', 'inspiry-builderpress' ),
			'section'     => 'inspiry-blog-section',
			'settings'    => 'inspiry-banner-heading',
			'type'        => 'text',
		) );

	}

	add_action( 'customize_register', 'inspiry_blog_customizer' );
endif;