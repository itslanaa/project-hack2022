<?php
/**
 * The current version of the theme.
 */
define( 'INSPIRY_THEME_VERSION', '1.2.4' );

// Define path for customizer
define( 'INSPIRY_CUSTOMIZER', get_template_directory() . '/inc/customizer/' );

if ( ! function_exists( 'inspiry_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since 1.0.0
	 */
	function inspiry_theme_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 */
		load_theme_textdomain( 'inspiry-builderpress', get_template_directory() . '/languages' );

		/*
		 * Add default posts and comments RSS feed links to head.
		 */
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 */
		add_theme_support( 'title-tag' );

		/*
         * Set the default content width.
         */
		$GLOBALS['content_width'] = 750;

		/*
		 * Custom Background Support
		 */
		add_theme_support( 'custom-background' );

		/*
		 * Custom Logo
		 */
		add_theme_support( 'custom-logo' );

		/*
		 * WooCommerce Theme Support
		 */
		add_theme_support( 'woocommerce' );

		/*
		 * Block Style support for Posts.
		 */
		add_theme_support( 'wp-block-styles' );

		/*
		 * Block Style Align Wide support for Posts.
		 */
		add_theme_support( 'align-wide' );

		/*
		 * Gutenberg Editor Style support for Posts.
		 */
		add_theme_support( 'editor-styles' );

		add_editor_style( array( get_template_directory_uri() . '/css/editor-styles.css', inspiry_google_fonts() ) );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Set Post Thumbnail Size
		 */
		set_post_thumbnail_size( 750, 440, true );

		/*
		 * Image Sizes
		 */
		add_image_size( 'inspiry_image_size_1140_760', 1140, 760, true );
		add_image_size( 'inspiry_image_size_720_540', 720, 540, true );
		add_image_size( 'inspiry_image_size_570_525', 570, 525, true );
		add_image_size( 'inspiry_image_size_360_270', 360, 270, true );

		/*
		 * Theme theme uses wp_nav_menu in one location.
		 */
		register_nav_menus( array( 'primary' => esc_html__( 'Header Menu', 'inspiry-builderpress' ) ) );
	}

	add_action( 'after_setup_theme', 'inspiry_theme_setup' );
endif;

if ( ! function_exists( 'inspiry_content_width' ) ) {
	/**
	 * Set the content width in pixels, based on the theme's design and stylesheet.
	 *
	 * Priority 0 to make it available to lower priority callbacks.
	 *
	 * @global int $content_width
	 */
	function inspiry_content_width() {

		$content_width = $GLOBALS['content_width'];

		if ( is_page() ) {
			$content_width = 1140;
		}

		$GLOBALS['content_width'] = apply_filters( 'inspiry_content_width', $content_width );
	}

	add_action( 'template_redirect', 'inspiry_content_width', 0 );
}

if ( ! function_exists( 'inspiry_google_fonts' ) ):

	function inspiry_google_fonts() {

		$fonts_url = '';

		$poppins    = _x( 'on', 'Poppins font: on or off', 'inspiry-builderpress' );
		$montserrat = _x( 'on', 'Poppins font: on or off', 'inspiry-builderpress' );

		if ( 'off' !== $poppins || 'off' !== $montserrat ) {
			$font_families = array();

			if ( 'off' !== $poppins ) {
				$font_families[] = 'Poppins:300,400,500,600,700';
			}

			if ( 'off' !== $montserrat ) {
				$font_families[] = 'Montserrat:400,700';
			}

			$query_args = array(
				'family' => urlencode( implode( '|', $font_families ) ),
				'subset' => urlencode( 'latin,latin-ext' ),
			);

			$fonts_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
		}

		return esc_url_raw( $fonts_url );
	}
endif;

if ( ! function_exists( 'inspiry_enqueue_styles' ) ) :
	/**
	 * Enqueue required styles for front end
	 * @return  void
	 */
	function inspiry_enqueue_styles() {

		if ( ! is_admin() ) :

			$inspiry_template_directory_uri = get_template_directory_uri();

			// Google Font
			wp_enqueue_style(
				'inspiry_google_fonts',
				inspiry_google_fonts(),
				array(),
				INSPIRY_THEME_VERSION
			);

			// flexslider
			wp_enqueue_style( 'bootstrap',
				$inspiry_template_directory_uri . '/css/bootstrap.min.css',
				array(),
				'3.3.5'
			);

			// owl carousel
			wp_enqueue_style( 'bootstrap-theme',
				$inspiry_template_directory_uri . '/css/bootstrap-theme.min.css',
				array(),
				'3.3.5'
			);

			// Mean Menu
			wp_enqueue_style( 'mean-menu',
				$inspiry_template_directory_uri . '/css/meanmenu.css',
				array(),
				'2.0.7'
			);

			// font awesome
			wp_enqueue_style( 'font-awesome',
				$inspiry_template_directory_uri . '/css/font-awesome.min.css',
				array(),
				'4.5.0'
			);

			// Owl carousel
			wp_enqueue_style( 'owl-carousel',
				$inspiry_template_directory_uri . '/css/owl.carousel.min.css',
				array(),
				'1.3.3'
			);

			// Owl carousel theme default
			wp_enqueue_style( 'owl-carousel-theme',
				$inspiry_template_directory_uri . '/css/owl.theme.default.min.css',
				array(),
				'1.3.3'
			);

			// flexslider css
			wp_enqueue_style( 'flexslider',
				$inspiry_template_directory_uri . '/css/flexslider.css',
				array(),
				'1.3.3'
			);

			// animate.css
			wp_enqueue_style( 'animate-css',
				$inspiry_template_directory_uri . '/css/animate.css',
				array(),
				'1.3.3'
			);

			// select2.css
			wp_enqueue_style( 'select-2',
				$inspiry_template_directory_uri . '/css/select2.min.css',
				array(),
				'4.0.3'
			);

			// main styles
			wp_enqueue_style( 'inspiry-main',
				$inspiry_template_directory_uri . '/css/main.css',
				array(),
				INSPIRY_THEME_VERSION
			);

			// parent theme style.css
			wp_enqueue_style( 'inspiry-parent-default',
				get_stylesheet_uri(),
				array( 'inspiry-main' ),
				INSPIRY_THEME_VERSION
			);

			// parent theme css/custom.css
			wp_enqueue_style( 'inspiry-parent-custom',
				$inspiry_template_directory_uri . '/css/custom.css',
				array(),
				INSPIRY_THEME_VERSION
			);

		endif;
	}

	add_action( 'wp_enqueue_scripts', 'inspiry_enqueue_styles' );
endif; // inspiry_enqueue_styles

if ( ! function_exists( 'inspiry_enqueue_scripts' ) ) :
	/**
	 * Enqueue required java scripts for front end
	 * @since   1.0.0
	 * @return  void
	 */
	function inspiry_enqueue_scripts() {

		if ( ! is_admin() ) :

			$inspiry_template_directory_uri = get_template_directory_uri();

			// jquery modernizr
			wp_enqueue_script( 'modernizr',
				$inspiry_template_directory_uri . '/js/modernizr.custom.97074.js',
				array( 'jquery' ),
				'2.6.2',
				false
			);

			// JQuery ui tabs
			wp_enqueue_script( 'jquery-ui-tabs' );

			// jquery scrollTo
			wp_enqueue_script( 'scrollTo',
				$inspiry_template_directory_uri . '/js/jquery.scrollTo.min.js',
				array( 'jquery' ),
				'2.1.3',
				true
			);

			// jquery hoverdir
			wp_enqueue_script( 'hoverdir',
				$inspiry_template_directory_uri . '/js/jquery.hoverdir.js',
				array( 'jquery' ),
				'1.1.2',
				true
			);

			// owl Carousel
			wp_enqueue_script( 'owl-carousel',
				$inspiry_template_directory_uri . '/js/owl.carousel.js',
				array( 'jquery' ),
				'2.1.4',
				true
			);

			// flexslider
			wp_enqueue_script( 'flex-slider',
				$inspiry_template_directory_uri . '/js/jquery.flexslider-min.js',
				array( 'jquery' ),
				'2.1.4',
				true
			);

			// select 2
			wp_enqueue_script( 'select-2',
				$inspiry_template_directory_uri . '/js/select2.min.js',
				array( 'jquery' ),
				'4.0.3',
				true
			);

			// Mean Menu
			wp_enqueue_script( 'meanmenu',
				$inspiry_template_directory_uri . '/js/jquery.meanmenu.min.js',
				array( 'jquery' ),
				'2.0.8',
				true
			);

			// Comment reply script
			if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
				wp_enqueue_script( 'comment-reply' );
			}

			// Main js
			wp_enqueue_script( 'custom',
				$inspiry_template_directory_uri . '/js/custom.js',
				array( 'jquery' ),
				INSPIRY_THEME_VERSION,
				true
			);
		endif;
	}

	add_action( 'wp_enqueue_scripts', 'inspiry_enqueue_scripts' );

endif;

if ( ! function_exists( 'inspiry_enqueue_admin_scripts' ) ) :
	/**
	 * Enqueue admin side scripts
	 */
	function inspiry_enqueue_admin_scripts( $hook ) {
		if ( $hook == 'post.php' || $hook == 'post-new.php' || $hook == 'widgets.php' ) {
			wp_enqueue_script( 'inspiry-admin-script', get_theme_file_uri( '/js/admin.js' ), array( 'jquery' ), INSPIRY_THEME_VERSION );
		}
	}

	add_action( 'admin_enqueue_scripts', 'inspiry_enqueue_admin_scripts' );
endif;

if ( ! function_exists( 'inspiry_theme_sidebars' ) ) :
	/**
	 * Register theme sidebars
	 *
	 */
	function inspiry_theme_sidebars() {

		// Location: Default Sidebar
		register_sidebar( array(
			'name'          => esc_html__( 'Default Sidebar', 'inspiry-builderpress' ),
			'id'            => 'default-sidebar',
			'description'   => esc_html__( 'Sidebar for main blog page and archive pages.', 'inspiry-builderpress' ),
			'before_widget' => '<section id="%1$s" class="widget clearfix %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

		// Location: footer 1st column
		register_sidebar( array(
			'name'          => esc_html__( 'Footer 1st column', 'inspiry-builderpress' ),
			'id'            => 'footer-1st-column',
			'description'   => esc_html__( 'Sidebar for footer first column.', 'inspiry-builderpress' ),
			'before_widget' => '<section id="%1$s" class="widget clearfix %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

		//location: footer 2nd column
		register_sidebar( array(
			'name'          => esc_html__( 'Footer 2nd column', 'inspiry-builderpress' ),
			'id'            => 'footer-2nd-column',
			'description'   => esc_html__( 'Sidebar for footer second column.', 'inspiry-builderpress' ),
			'before_widget' => '<section id="%1$s" class="widget clearfix %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

		//location: footer 3rd column
		register_sidebar( array(
			'name'          => esc_html__( 'Footer 3rd column', 'inspiry-builderpress' ),
			'id'            => 'footer-3rd-column',
			'description'   => esc_html__( 'Sidebar for footer third column.', 'inspiry-builderpress' ),
			'before_widget' => '<section id="%1$s" class="widget clearfix %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

		//location: footer 4th column
		register_sidebar( array(
			'name'          => esc_html__( 'Footer 4th column', 'inspiry-builderpress' ),
			'id'            => 'footer-4th-column',
			'description'   => esc_html__( 'Sidebar for footer 4th column.', 'inspiry-builderpress' ),
			'before_widget' => '<section id="%1$s" class="widget clearfix %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		) );

	}

	add_action( 'widgets_init', 'inspiry_theme_sidebars' );

endif;

if ( ! function_exists( 'inspiry_new_excerpt_more' ) ) {
	/**
	 * Excerpt More
	 */
	function inspiry_new_excerpt_more( $more ) {
		return esc_html__( '...', 'inspiry-builderpress' );
	}

	add_filter( 'excerpt_more', 'inspiry_new_excerpt_more' );
}

if ( ! function_exists( 'inspiry_new_excerpt_length' ) ) {
	/**
	 * Excerpt Lenth
	 */
	function inspiry_new_excerpt_length( $length ) {
		return 20;
	}

	add_filter( 'excerpt_length', 'inspiry_new_excerpt_length', 999 );
}

if ( ! function_exists( 'inspiry_theme_comment' ) ) {
	/**
	 * Theme Custom Comment Template
	 */
	function inspiry_theme_comment( $comment, $args, $depth ) {

		$GLOBALS['comment'] = $comment;
		switch ( $comment->comment_type ) :
			case 'pingback' :
			case 'trackback' :
				?>
                <li class="pingback">
                    <p><?php esc_html_e( 'Pingback:', 'inspiry-builderpress' ); ?><?php comment_author_link(); ?><?php edit_comment_link( esc_html__( '(Edit)', 'inspiry-builderpress' ), ' ' ); ?></p>
                </li>
				<?php
				break;

			default :
				?>
            <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
                <article id="comment-<?php comment_ID(); ?>" class="comment-wrapper">
                    <div class="row">
                        <div class="col-sm-2">
                            <a class="avatar" href="<?php comment_author_url(); ?>">
								<?php echo get_avatar( $comment, 96 ) ?>
                            </a>
                        </div>
                        <div class="col-sm-10">
                            <div class="comment-list-heading clearfix">
                                <h3><?php echo get_comment_author_link(); ?></h3>
                                <span class="comment-date">  <time
                                            datetime="<?php comment_time( 'c' ); ?>"><?php echo get_comment_date(); ?></time></span>
                            </div>

							<?php comment_text(); ?>
							<?php comment_reply_link( array_merge( array( 'before' => '' ), array(
								'depth'     => $depth,
								'max_depth' => $args['max_depth']
							) ) ); ?>

                        </div>

                    </div>
                </article>
                <!-- end of comment -->
				<?php
				break;

		endswitch;
	}
}

if ( ! function_exists( 'wpb_move_comment_field_to_bottom' ) ) {
	/**
	 * comment form textarea area move to bottom
	 */
	function wpb_move_comment_field_to_bottom( $fields ) {
		$comment_field = $fields['comment'];
		unset( $fields['comment'] );
		$fields['comment'] = $comment_field;

		return $fields;
	}

	add_filter( 'comment_form_fields', 'wpb_move_comment_field_to_bottom' );
}

if ( ! function_exists( 'inspiry_pagination' ) ) :
	/**
	 * Output pagination
	 *
	 * @param $query
	 */
	function inspiry_pagination( $query ) {
		echo "<nav class='paging-navigation pagination clearfix'>";
		$big = 999999999; // need an unlikely integer
		echo paginate_links( array(
			'base'               => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
			'format'             => '?paged=%#%',
			'prev_text'          => esc_html__( 'PREV', 'inspiry-builderpress' ),
			'next_text'          => esc_html__( 'NEXT', 'inspiry-builderpress' ),
			'current'            => max( 1, get_query_var( 'paged' ) ),
			'total'              => $query->max_num_pages,
			'before_page_number' => '<span class="meta-nav screen-reader-text">' . esc_html__( 'Page', 'inspiry-builderpress' ) . ' </span>',

		) );
		echo "</nav>";
	}
endif;

if ( ! function_exists( 'builderpress_post_classes' ) ) :
	function builderpress_post_classes( $classes ) {

		if ( is_home() || is_singular( 'post' ) || is_archive() || is_search() ) {
			$classes[] = 'single-post-bp clearfix';
		}

		return $classes;
	}
endif;
add_filter( 'post_class', 'builderpress_post_classes' );

/*-----------------------------------------------------------------------------------*/
/* Adds css class to content div when no sidebar is active
/*-----------------------------------------------------------------------------------*/
function builderpress_content_width( $sidebar ) {
	if ( ! is_active_sidebar( $sidebar ) ) {
		echo esc_attr( 'builderpress-content-fullwidth' );
	}
}

/*-----------------------------------------------------------------------------------*/
/*	Include Customizer
/*-----------------------------------------------------------------------------------*/
require_once( INSPIRY_CUSTOMIZER . 'customizer.php' );

/*-----------------------------------------------------------------------------------*/
/*	Include inspiry woocommerce functions
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/inspiry-woocommerce-functions.php' );

/*-----------------------------------------------------------------------------------*/
/*	include required plugins
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/tgm/inspiry-required-plugins.php' );

/*-----------------------------------------------------------------------------------*/
/*	One Click Demo Import
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/demo/one-click-demo-import.php' );
add_filter( 'pt-ocdi/disable_pt_branding', '__return_true' );

/*-----------------------------------------------------------------------------------*/
/*	Include Breadcrumbs
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/breadcrumbs.php' );

/*-----------------------------------------------------------------------------------*/
/*	Include metaboxes
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/theme-meta-box.php' );

/*-----------------------------------------------------------------------------------*/
/*	Include VC classes ext
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/vc-classes-ext.php' );

/*-----------------------------------------------------------------------------------*/
/*	Color Schemes for Theme
/*-----------------------------------------------------------------------------------*/
require_once( get_template_directory() . '/inc/color-schemes/color-schemes.php' );