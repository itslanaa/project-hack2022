<?php
/**
 * Customizer settings for Color Scheme
 */

if ( ! function_exists( 'inspiry_color_scheme_customizer' ) ) :

	function inspiry_color_scheme_customizer( WP_Customize_Manager $wp_customize ) {


		$wp_customize->add_section( 'scheme-panel', array(
			'priority' => 10,
			'title'    => esc_html__( 'Colors', 'inspiry-builderpress' ),
		) );


		$wp_customize->add_setting( 'inspiry-color-scheme-controls', array(
			'default'           => 'default',
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control(
			new Inspiry_Custom_Radio_Image_Control(
				$wp_customize,
				'inspiry-color-scheme-controls',
				array(
					'section'     => 'scheme-panel',
					'label'       => esc_html__( 'Default Theme Color Schemes', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Choose your desired Color Scheme.', 'inspiry-builderpress' ),
					'settings'    => 'inspiry-color-scheme-controls',
					'choices'     => array(
						'yellow' => get_template_directory_uri() . '/images/color-scheme-1.png',
						'orange' => get_template_directory_uri() . '/images/color-scheme-2.png',
						'indigo' => get_template_directory_uri() . '/images/color-scheme-3.png',
						'green'  => get_template_directory_uri() . '/images/color-scheme-4.png',
						'red'    => get_template_directory_uri() . '/images/color-scheme-5.png',
					)
				)
			)
		);

		$wp_customize->add_setting( 'inspiry-color-schemes-code', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'inspiry-color-schemes-code',
				array(
					'label'       => esc_html__( 'Custom Theme Color Scheme', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Enter your desired hex color (i.e #ffd800)', 'inspiry-builderpress' ),
					'section'     => 'scheme-panel',
					'settings'    => 'inspiry-color-schemes-code',
				)
			)
		);

		$wp_customize->add_setting( 'inspiry-color-schemes-nav-code', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'inspiry-color-schemes-nav-code',
				array(
					'label'       => esc_html__( 'Top main menu color', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Enter your desired hex color (i.e #ffffff)', 'inspiry-builderpress' ),
					'section'     => 'scheme-panel',
					'settings'    => 'inspiry-color-schemes-nav-code',
				)
			)
		);

		$wp_customize->add_setting( 'inspiry-color-schemes-nav-hover-code', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'inspiry-color-schemes-nav-hover-code',
				array(
					'label'       => esc_html__( 'Top main menu hover color', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Enter your desired hex color (i.e #ffffff). This color will also be applied on current menu item.', 'inspiry-builderpress' ),
					'section'     => 'scheme-panel',
					'settings'    => 'inspiry-color-schemes-nav-hover-code',
				)
			)
		);


	}

	add_action( 'customize_register', 'inspiry_color_scheme_customizer' );

endif;