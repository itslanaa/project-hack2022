<?php
if ( ! function_exists( 'builderpress_theme_meta_box' ) ) {
	function builderpress_theme_meta_box( $meta_boxes ) {
		$meta_boxes[] = array(
			'id'         => 'bp-page-banner-meta',
			'title'      => esc_html__( 'Banner', 'inspiry-builderpress' ),
			'post_types' => array( 'page' ),
			'fields'     => array(

				array(
					'name'    => esc_html__( 'Display Banner in Header? ', 'inspiry-builderpress' ),
					'id'      => 'bp-banner-display-option',
					'type'    => 'radio',
					'std'     => 'yes',
					'options' => array(
						'yes' => esc_html__( 'Yes', 'inspiry-builderpress' ),
						'no'  => esc_html__( 'No', 'inspiry-builderpress' ),
					),
				),

				array(
					'name' => esc_html__( 'Banner Title ', 'inspiry-builderpress' ),
					'id'   => 'bp-banner-in-page-title',
					'type' => 'text',
					'desc' => esc_html__( 'Default title from customize option will be displayed if field is empty. ', 'inspiry-builderpress' ),
				),

				array(
					'name' => esc_html__( 'Title Color ', 'inspiry-builderpress' ),
					'type' => 'color',
					'id'   => 'bp-banner-in-page-title-color',
					'desc' => esc_html__( 'Default color will be applied if no color selected. ', 'inspiry-builderpress' ),
				),

				array(
					'name' => esc_html__( 'Banner Background Image', 'inspiry-builderpress' ),
					'type' => 'image_advanced',
					'id'   => 'bp-banner-in-page-bg-image',
					'desc' => esc_html__( 'Default background will be displayed if no image selected. ', 'inspiry-builderpress' ),
				),


			),
		);

		return $meta_boxes;
	}
	add_filter( 'rwmb_meta_boxes', 'builderpress_theme_meta_box' );
}
