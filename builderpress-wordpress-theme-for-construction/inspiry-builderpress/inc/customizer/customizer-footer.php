<?php

/**
 * Customizer settings for footer
 */


if ( ! function_exists( 'inspiry_footer_customizer' ) ) :

	function inspiry_footer_customizer( WP_Customize_Manager $wp_customize ) {

		/*
		 * Get Pages
		 */
		$inspiry_pages = array( 0 => esc_html__( 'None', 'inspiry-builderpress' ) );
		$raw_pages     = get_pages();
		if ( 0 < count( $raw_pages ) ) {
			foreach ( $raw_pages as $single_page ) {
				$inspiry_pages[ $single_page->ID ] = $single_page->post_title;
			}
		}

		//CTA Bar
		$wp_customize->add_section( 'inspiry-footer-cta', array(
			'title' => esc_html__( 'Call To Action Bar', 'inspiry-builderpress' ),
			'panel' => 'footer-panel'
		) );

		$wp_customize->add_setting( 'inspiry-cta-display', array(
			'default'           => 'false',
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control( 'inspiry-cta-display', array(
			'label'    => esc_html__( 'Show/Hide Cta Bar', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-cta',
			'settings' => 'inspiry-cta-display',
			'type'     => 'select',
			'choices'  => array(
				'true'  => esc_html__( 'Show', 'inspiry-builderpress' ),
				'false' => esc_html__( 'Hide', 'inspiry-builderpress' ),
			)
		) );

		// image controls
		$wp_customize->add_setting( 'inspiry-cta-image', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Cropped_Image_Control(
				$wp_customize,
				'inspiry-cta-image',
				array(
					'label'       => esc_html__( 'Upload an image for background', 'inspiry-builderpress' ),
					'description' => esc_html__( 'recommended size of image is 1900x200', 'inspiry-builderpress' ),
					'section'     => 'inspiry-footer-cta',
					'settings'    => 'inspiry-cta-image',
					'width'       => 1900,
					'height'      => 500
				)
			)
		);

		//over lay color
		$wp_customize->add_setting( 'inspiry-cta-overlay', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'inspiry-cta-overlay',
				array(
					'label'       => esc_html__( 'Select overlay color for background', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Default color is #ffd800', 'inspiry-builderpress' ),
					'section'     => 'inspiry-footer-cta',
					'settings'    => 'inspiry-cta-overlay',
				) )
		);


		// CTA heading controls
		$wp_customize->add_setting( 'inspiry-cta-heading', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-cta-heading', array(
			'label'    => esc_html__( 'CTA Banner Heading', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-cta',
			'settings' => 'inspiry-cta-heading',
			'type'     => 'text',
		) );

		$wp_customize->add_setting( 'inspiry-cta-heading-color', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'inspiry-cta-heading-color',
				array(
					'label'       => esc_html__( 'CTA Heading Color', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Default color is #1a1a1a', 'inspiry-builderpress' ),
					'section'     => 'inspiry-footer-cta',
					'settings'    => 'inspiry-cta-heading-color',
				) )
		);


		// CTA text controls
		$wp_customize->add_setting( 'inspiry-cta-text', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-cta-text', array(
			'label'    => esc_html__( 'CTA banner text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-cta',
			'settings' => 'inspiry-cta-text',
			'type'     => 'text',
		) );

		$wp_customize->add_setting( 'inspiry-cta-text-color', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'inspiry-cta-text-color',
				array(
					'label'       => esc_html__( 'CTA Text Color', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Default color is #4b493d', 'inspiry-builderpress' ),
					'section'     => 'inspiry-footer-cta',
					'settings'    => 'inspiry-cta-text-color',
				) )
		);


		//CTA button text
		$wp_customize->add_setting( 'inspiry-cta-button-text', array(
			'sanitize_callback' => 'sanitize_text_field',
			'default'           => esc_html__( 'GET A QUOTE', 'inspiry-builderpress' ),
		) );
		$wp_customize->add_control( 'inspiry-cta-button-text', array(
			'label'    => esc_html__( 'CTA Button text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-cta',
			'settings' => 'inspiry-cta-button-text',
			'type'     => 'text',
		) );


		//CTA button URL field
		$wp_customize->add_setting( 'inspiry-cta-button-url', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-cta-button-url', array(
			'label'       => esc_html__( 'URL for CTA Button', 'inspiry-builderpress' ),
			'description' => esc_html__( 'Enter URL or select page from "Select CTA page" below', 'inspiry-builderpress' ),
			'section'     => 'inspiry-footer-cta',
			'settings'    => 'inspiry-cta-button-url',
			'type'        => 'text',

		) );

		// CTA button page

		$wp_customize->add_setting( 'inspiry-cta-page', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control( 'inspiry-cta-page', array(
			'label'    => esc_html__( 'Select CTA Page', 'inspiry-builderpress' ),
			'type'     => 'select',
			'section'  => 'inspiry-footer-cta',
			'settings' => 'inspiry-cta-page',
			'choices'  => $inspiry_pages,
		) );


		// Footer Panel
		$wp_customize->add_panel( 'footer-panel', array(
			'title'    => esc_html__( 'Footer', 'inspiry-builderpress' ),
			'priority' => 180,
		) );


		// Footer Section
		$wp_customize->add_section( 'inspiry-footer-intro', array(
			'title' => esc_html__( 'Footer', 'inspiry-builderpress' ),
			'panel' => 'footer-panel'
		) );


		// PNG/JPG icon control for footer logo
		$wp_customize->add_setting( 'inspiry-footer-logo', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'inspiry-footer-logo',
				array(
					'label'    => esc_html__( 'Footer Logo', 'inspiry-builderpress' ),
					'section'  => 'inspiry-footer-intro',
					'settings' => 'inspiry-footer-logo',
				)
			)
		);


		// footer intro text
		$wp_customize->add_setting( 'inspiry-footer-text', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-footer-text', array(
			'label'    => esc_html__( 'Footer Introduction Text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-intro',
			'settings' => 'inspiry-footer-text',
			'type'     => 'textarea',
		) );


		// footer button text
		$wp_customize->add_setting( 'inspiry-know-more-button', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-know-more-button', array(
			'label'    => esc_html__( 'Footer Button Text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-intro',
			'settings' => 'inspiry-know-more-button',
			'type'     => 'text',
		) );


		//CTA button URL field
		$wp_customize->add_setting( 'inspiry-footer-btn-url', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-footer-btn-url', array(
			'label'       => esc_html__( 'URL for Footer Button', 'inspiry-builderpress' ),
			'description' => esc_html__( 'Enter URL or select page from "Select Page To Link" below', 'inspiry-builderpress' ),
			'section'     => 'inspiry-footer-intro',
			'settings'    => 'inspiry-footer-btn-url',
			'type'        => 'text',

		) );


		//footer button page link
		$wp_customize->add_setting( 'inspiry-footer-btn-link', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control( 'inspiry-footer-btn-link', array(
			'label'    => esc_html__( 'Select Page To Link', 'inspiry-builderpress' ),
			'type'     => 'select',
			'section'  => 'inspiry-footer-intro',
			'settings' => 'inspiry-footer-btn-link',
			'choices'  => $inspiry_pages,
		) );

		// footer copyright text
		$wp_customize->add_setting( 'inspiry-copyright-text', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-copyright-text', array(
			'label'    => esc_html__( 'Copyright Text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-footer-intro',
			'settings' => 'inspiry-copyright-text',
			'type'     => 'text',
		) );

		//separator
		$wp_customize->add_setting( 'inspiry_footer_separator', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new Inspiry_Separator_Control(
				$wp_customize,
				'inspiry_footer_separator',
				array(
					'section' => 'inspiry-footer-section',
				)
			)
		);


	}

	add_action( 'customize_register', 'inspiry_footer_customizer' );

endif;