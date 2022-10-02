<?php

/**
 * Customizer settings for header
 */

if ( ! function_exists( 'inspiry_header_customizer' ) ) :

	function inspiry_header_customizer( WP_Customize_Manager $wp_customize ) {

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

		/*
		 * Header Section
		 */

		// Header Panel
		$wp_customize->add_panel( 'header-panel', array(
			'priority' => 10,
			'title'    => esc_html__( 'Header', 'inspiry-builderpress' ),
		) );

		// Header Variations
		$wp_customize->add_section( 'inspiry-header-variations', array(
			'title'    => esc_html__( 'Header Layouts', 'inspiry-builderpress' ),
			'priority' => 12,
			'panel'    => 'header-panel',
		) );

		$wp_customize->add_setting( 'inspiry_header_layout', array(
			'default'           => 'one',
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control(
			new Inspiry_Custom_Radio_Image_Control(
				$wp_customize,
				'inspiry_header_layout',
				array(
					'section'     => 'inspiry-header-variations',
					'label'       => esc_html__( 'Header Layout', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Choose your desired layout.', 'inspiry-builderpress' ),
					'settings'    => 'inspiry_header_layout',
					'choices'     => array(
						'one'   => get_template_directory_uri() . '/images/header-var1.png',
						'two'   => get_template_directory_uri() . '/images/header-var2.png',
						'three' => get_template_directory_uri() . '/images/header-var3.png',
					)
				)
			)
		);

		$wp_customize->add_setting( 'inspiry_header_sticky_layout', array(
			'default'           => 'false',
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control( 'inspiry_header_sticky_layout', array(
			'label'    => esc_html__( 'Enable Sticky Menu ?', 'inspiry-builderpress' ),
			'section'     => 'inspiry-header-variations',
			'settings' => 'inspiry_header_sticky_layout',
			'type'     => 'select',
			'choices'  => array(
				'true'  => esc_html__( 'Yes', 'inspiry-builderpress' ),
				'false' => esc_html__( 'No', 'inspiry-builderpress' )
			)
		) );



		// Section Top Header Bar
		$wp_customize->add_section( 'inspiry-header-top-section', array(
			'title'    => esc_html__( 'Top Header Bar', 'inspiry-builderpress' ),
			'priority' => 22,
			'panel'    => 'header-panel',
		) );

		//show/hide top bar
		$wp_customize->add_setting( 'top-bar-show', array(
			'default'           => 'false',
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control( 'top-bar-show', array(
			'label'    => esc_html__( 'Show/Hide Top Bar', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-top-section',
			'settings' => 'top-bar-show',
			'type'     => 'select',
			'choices'  => array(
				'true'  => esc_html__( 'Show', 'inspiry-builderpress' ),
				'false' => esc_html__( 'Hide', 'inspiry-builderpress' )
			)
		) );

		// tag line controls
		$wp_customize->add_setting( 'header-tag-line', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'header-tag-line', array(
			'label'    => esc_html__( 'Top Header Tagline', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-top-section',
			'settings' => 'header-tag-line',
			'type'     => 'textarea',
		) );

		// working days controls
		$wp_customize->add_setting( 'working-days', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'working-days', array(
			'label'    => esc_html__( 'Working Days', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-top-section',
			'settings' => 'working-days',
			'type'     => 'text',
		) );

		// working Hours controls
		$wp_customize->add_setting( 'working-hours', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'working-hours', array(
			'label'    => esc_html__( 'Working Hours', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-top-section',
			'settings' => 'working-hours',
			'type'     => 'text',
		) );

		// close days controls
		$wp_customize->add_setting( 'close-days', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'close-days', array(
			'label'    => esc_html__( 'Close Days', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-top-section',
			'settings' => 'close-days',
			'type'     => 'text',
		) );

		// close text controls
		$wp_customize->add_setting( 'close-text', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'close-text', array(
			'label'    => esc_html__( 'Close Text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-top-section',
			'settings' => 'close-text',
			'type'     => 'text',
		) );

		// section contact header

		$wp_customize->add_section( 'inspiry-header-contact-section', array(
			'title' => esc_html__( 'Header Contact Detail', 'inspiry-builderpress' ),
			'panel' => 'header-panel',
		) );

		// contact label controls
		$wp_customize->add_setting( 'contact-phone-label', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'contact-phone-label', array(
			'label'    => esc_html__( 'Label for phone number', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'contact-phone-label',
			'type'     => 'text',
		) );


		// contact number controls
		$wp_customize->add_setting( 'contact-phone-number', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'contact-phone-number', array(
			'label'    => esc_html__( 'Enter phone number', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'contact-phone-number',
			'type'     => 'text',
		) );


		// PNG/JPG icon controls
		$wp_customize->add_setting( 'contact-phone-icon-png', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'contact-phone-icon-png',
				array(
					'label'    => esc_html__( 'Upload a png/jpg image for phone icon 27x27', 'inspiry-builderpress' ),
					'section'  => 'inspiry-header-contact-section',
					'settings' => 'contact-phone-icon-png',
				)
			)
		);


		$wp_customize->add_setting( 'inspiry_keyword_separator', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new Inspiry_Separator_Control(
				$wp_customize,
				'inspiry_keyword_separator',
				array(
					'section' => 'inspiry-header-contact-section',
				)
			)
		);


		// contact label controls
		$wp_customize->add_setting( 'contact-email-label', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'contact-email-label', array(
			'label'    => esc_html__( 'Label for Email address', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'contact-email-label',
			'type'     => 'text',
		) );


		// contact email controls
		$wp_customize->add_setting( 'contact-email-address', array(
			'sanitize_callback' => 'sanitize_email',
		) );
		$wp_customize->add_control( 'contact-email-address', array(
			'label'    => esc_html__( 'Enter email address', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'contact-email-address',
			'type'     => 'text',
		) );


		// PNG/JPG icon controls
		$wp_customize->add_setting( 'contact-email-icon-png', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'contact-email-icon-png',
				array(
					'label'    => esc_html__( 'Upload a png/jpg image for email icon 27x27', 'inspiry-builderpress' ),
					'section'  => 'inspiry-header-contact-section',
					'settings' => 'contact-email-icon-png',
				)
			)
		);

		$wp_customize->add_setting( 'inspiry_btn_separator', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new Inspiry_Separator_Control(
				$wp_customize,
				'inspiry_btn_separator',
				array(
					'section' => 'inspiry-header-contact-section',
				)
			)
		);


		//Header quote button text
		$wp_customize->add_setting( 'inspiry-header-quote-text', array(
			'sanitize_callback' => 'sanitize_text_field',
			'default'           => esc_html__( 'Get A Quote', 'inspiry-builderpress' ),
		) );
		$wp_customize->add_control( 'inspiry-header-quote-text', array(
			'label'    => esc_html__( 'Header quote button text', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'inspiry-header-quote-text',
			'type'     => 'text',
		) );

		//CTA button URL field
		$wp_customize->add_setting( 'inspiry-header-quote-url', array(
			'sanitize_callback' => 'sanitize_text_field',
		) );
		$wp_customize->add_control( 'inspiry-header-quote-url', array(
			'label'    => esc_html__( 'URL for quote Button', 'inspiry-builderpress' ),
			'description' => esc_html__( 'Enter URL or select page from "Select page for quote button" below', 'inspiry-builderpress' ),
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'inspiry-header-quote-url',
			'type'     => 'text',

		) );

		// Header quote button page

		$wp_customize->add_setting( 'inspiry-header-quote-page', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );

		$wp_customize->add_control( 'inspiry-header-quote-page', array(
			'label'    => esc_html__( 'Select Page for quote button', 'inspiry-builderpress' ),
			'type'     => 'select',
			'section'  => 'inspiry-header-contact-section',
			'settings' => 'inspiry-header-quote-page',
			'choices'  => $inspiry_pages,
		) );


		$wp_customize->add_section( 'inspiry-header-image-section', array(
			'title' => esc_html__( 'Header Image', 'inspiry-builderpress' ),
//            'priority' => 22,
			'panel' => 'header-panel',
		) );

		$wp_customize->add_section( 'inspiry-banner', array(
			'title' => esc_html__( 'Banner', 'inspiry-builderpress' ),
			'panel' => 'header-panel',
		) );

		$wp_customize->add_setting( 'banner-image', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Cropped_Image_Control(
				$wp_customize,
				'banner-image',
				array(
					'label'       => esc_html__( 'Banner Image', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Upload a banner image of size 1900x250', 'inspiry-builderpress' ),
					'section'     => 'inspiry-banner',
					'settings'    => 'banner-image',
					'width'       => 1900,
					'height'      => 220
				)
			)
		);

		$wp_customize->add_setting( 'banner-title-color', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				'banner-title-color',
				array(
					'label'       => esc_html__( 'Banner Title Color', 'inspiry-builderpress' ),
					'description' => esc_html__( 'Default color is #1a1a1a', 'inspiry-builderpress' ),
					'section'     => 'inspiry-banner',
					'settings'    => 'banner-title-color',
				) )
		);

		$wp_customize->add_setting( 'inspiry_icon_separator', array(
			'sanitize_callback' => 'inspiry_sanitize',
		) );
		$wp_customize->add_control(
			new Inspiry_Separator_Control(
				$wp_customize,
				'inspiry_icon_separator',
				array(
					'section' => 'inspiry-banner',
				)
			)
		);
	}

	add_action( 'customize_register', 'inspiry_header_customizer' );

endif;