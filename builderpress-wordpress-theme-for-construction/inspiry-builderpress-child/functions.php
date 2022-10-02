<?php
/**
 * The current version of the theme.
 */
define( 'INSPIRY_CHILD_THEME_VERSION', '1.0.1' );

if ( !function_exists( 'inspiry_load_translation_from_child' ) ) {
    /**
     * Load translation files from child theme
     */
    function inspiry_load_translation_from_child() {
        load_child_theme_textdomain ( 'inspiry-builderpress-child', get_stylesheet_directory () . '/languages' );
    }
    add_action ( 'after_setup_theme', 'inspiry_load_translation_from_child' );
}

if ( !function_exists( 'inspiry_enqueue_child_styles' ) ) {
    /**
     * Changes in styles enqueue due to child theme
     */
    function inspiry_enqueue_child_styles() {
        if ( !is_admin() ) {
            // de-queue and de-register parent default css
            wp_dequeue_style( 'inspiry-parent-default' );
            wp_deregister_style( 'inspiry-parent-default' );

            // de-queue parent custom css
            wp_dequeue_style( 'inspiry-parent-custom' );

            // enqueue parent default css
            wp_enqueue_style( 'inspiry-parent-default', get_template_directory_uri() . '/style.css' );

            // enqueue parent custom css
            wp_enqueue_style( 'inspiry-parent-custom' );

            // child default css
            wp_enqueue_style( 'inspiry-child-default', get_stylesheet_uri(), array( 'inspiry-parent-default' ), INSPIRY_CHILD_THEME_VERSION, 'all' );

            // child custom css
            wp_enqueue_style( 'inspiry-child-custom',  get_stylesheet_directory_uri() . '/child-custom.css', array( 'inspiry-child-default' ), INSPIRY_CHILD_THEME_VERSION, 'all' );
        }
    }
    add_action( 'wp_enqueue_scripts', 'inspiry_enqueue_child_styles', PHP_INT_MAX );
}
