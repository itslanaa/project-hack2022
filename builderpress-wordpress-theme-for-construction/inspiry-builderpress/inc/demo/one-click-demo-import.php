<?php
/*Import content data*/
if ( ! function_exists( 'inspiry_import_files' ) ) :
	function inspiry_import_files() {
		return array(
			array(
				'import_file_name'             => 'Import Demo',
				'local_import_file'            => trailingslashit( get_template_directory() ) . '/inc/demo/default/content.xml',
				'local_import_widget_file'     => trailingslashit( get_template_directory() ) . '/inc/demo/default/widgets.wie',
				'local_import_customizer_file' => trailingslashit( get_template_directory() ) . '/inc/demo/default/customizer.dat',
				'import_notice'                => wp_kses( __( "Please waiting for a few minutes, do not close the window or refresh the page until the data is imported. </br> After importing this demo, you will have to set the permalinks settings to <strong>Post name</strong> from <strong>Settings > Permalinks</strong>. ", 'inspiry-builderpress' ), array(
					'br'     => array(),
					'strong' => array()
				) )
			),

		);
	}

	add_filter( 'pt-ocdi/import_files', 'inspiry_import_files' );
endif;


if ( ! function_exists( 'inspiry_after_import' ) ) :
	function inspiry_after_import( $selected_import ) {

		if ( 'Import Demo' === $selected_import['import_file_name'] ) {
			//Set Menu
			$top_menu = get_term_by( 'name', 'Main Menu', 'nav_menu' );
			set_theme_mod( 'nav_menu_locations', array(
					'primary' => $top_menu->term_id,
				)
			);

			//Set Front page
			$page         = get_page_by_title( 'Home' );
			$blog_page_id = get_page_by_title( 'Blog' );
			if ( isset( $page->ID ) ) {
				update_option( 'page_on_front', $page->ID );
				update_option( 'show_on_front', 'page' );
				update_option( 'page_for_posts', $blog_page_id->ID );
			}
		}

	}

	add_action( 'pt-ocdi/after_import', 'inspiry_after_import' );
endif;


// Add demo import page to menu.
function move_import_demo_data( $args ) {

	// Check the args.
	if ( empty( $args ) || ! is_array( $args ) ) {
		return $args;
	}

	if ( defined( 'BPP_VERSION' ) ) {
		$args['parent_slug'] = 'admin.php';
	}

	return $args;
}

add_filter( 'pt-ocdi/plugin_page_setup', 'move_import_demo_data' );
