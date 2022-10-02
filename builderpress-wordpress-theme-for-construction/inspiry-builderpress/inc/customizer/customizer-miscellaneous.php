<?php

/**
 * Customizer settings for miscellaneous controls
 */

if ( ! function_exists( 'inspiry_miscellaneous_customizer' ) ) :

	function inspiry_miscellaneous_customizer( WP_Customize_Manager $wp_customize ) {


		/**
		 * Header Section
		 */
		// miscellaneous Panel
		$wp_customize->add_panel( 'miscellaneous-panel', array(
			'title'    => esc_html__( 'Misc', 'inspiry-builderpress' ),
			'priority' => 170,
		) );

		$wp_customize->add_section( 'inspiry_loader_panel', array(
			'title' => esc_html__( 'Pre Loading Screen', 'inspiry-builderpress' ),
			'panel' => 'miscellaneous-panel',
		) );


		$wp_customize->add_setting( 'inspiry_page_load', array(
			'sanitize_callback' => 'inspiry_sanitize',
			'default'           => 'true',
		) );

		$wp_customize->add_control( 'inspiry_page_load', array(
			'label'    => esc_html__( 'Do you want to enable page loading screen?', 'inspiry-builderpress' ),
			'type'     => 'select',
			'section'  => 'inspiry_loader_panel',
			'settings' => 'inspiry_page_load',
			'choices'  => array(
				'true'  => esc_html__( 'Yes', 'inspiry-builderpress' ),
				'false' => esc_html__( 'No', 'inspiry-builderpress' ),

			)
		) );

		$wp_customize->add_section( 'inspiry_breadcrumbs_section', array(
			'title' => esc_html__( 'Breadcrumbs', 'inspiry-builderpress' ),
			'panel' => 'miscellaneous-panel',
		) );

		$wp_customize->add_setting( 'inspiry_projects_breadcrumbs', array(
			'sanitize_callback' => 'inspiry_sanitize',
			'default'           => 'true',
		) );

		$wp_customize->add_control( 'inspiry_projects_breadcrumbs', array(
			'label'    => esc_html__( 'Enable Project Single Breadcrumbs?', 'inspiry-builderpress' ),
			'type'     => 'select',
			'section'  => 'inspiry_breadcrumbs_section',
			'settings' => 'inspiry_projects_breadcrumbs',
			'choices'  => array(
				'true'  => esc_html__( 'Yes', 'inspiry-builderpress' ),
				'false' => esc_html__( 'No', 'inspiry-builderpress' ),

			)
		)
		);

		$wp_customize->add_setting( 'inspiry_services_breadcrumbs', array(
			'sanitize_callback' => 'inspiry_sanitize',
			'default'           => 'true',
		) );

		$wp_customize->add_control( 'inspiry_services_breadcrumbs', array(
				'label'    => esc_html__( 'Enable Service Single Breadcrumbs?', 'inspiry-builderpress' ),
				'type'     => 'select',
				'section'  => 'inspiry_breadcrumbs_section',
				'settings' => 'inspiry_services_breadcrumbs',
				'choices'  => array(
					'true'  => esc_html__( 'Yes', 'inspiry-builderpress' ),
					'false' => esc_html__( 'No', 'inspiry-builderpress' ),

				)
			)
		);

		$wp_customize->add_section( 'inspiry_post_navigation', array(
			'title' => esc_html__( 'Project/Service Post Nav', 'inspiry-builderpress' ),
			'panel' => 'miscellaneous-panel',
		) );

		$wp_customize->add_setting( 'inspiry_project_nav', array(
			'sanitize_callback' => 'inspiry_sanitize',
			'default'           => 'true',
		) );

		$wp_customize->add_control( 'inspiry_project_nav', array(
				'label'    => esc_html__( 'Enable Project Post Nav?', 'inspiry-builderpress' ),
				'type'     => 'select',
				'section'  => 'inspiry_post_navigation',
				'settings' => 'inspiry_project_nav',
				'choices'  => array(
					'true'  => esc_html__( 'Yes', 'inspiry-builderpress' ),
					'false' => esc_html__( 'No', 'inspiry-builderpress' ),

				)
			)
		);

		$wp_customize->add_setting( 'inspiry_service_nav', array(
			'sanitize_callback' => 'inspiry_sanitize',
			'default'           => 'true',
		) );

		$wp_customize->add_control( 'inspiry_service_nav', array(
				'label'    => esc_html__( 'Enable Service Post Nav?', 'inspiry-builderpress' ),
				'type'     => 'select',
				'section'  => 'inspiry_post_navigation',
				'settings' => 'inspiry_service_nav',
				'choices'  => array(
					'true'  => esc_html__( 'Yes', 'inspiry-builderpress' ),
					'false' => esc_html__( 'No', 'inspiry-builderpress' ),

				)
			)
		);




	}

	add_action( 'customize_register', 'inspiry_miscellaneous_customizer' );

endif;