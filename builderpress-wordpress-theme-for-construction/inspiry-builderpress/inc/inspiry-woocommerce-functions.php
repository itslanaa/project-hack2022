<?php
/*-----------------------------------------------------------------------------------*/
/*	Check if WooCommerce is activated
/*-----------------------------------------------------------------------------------*/
if ( ! function_exists( 'is_woocommerce_activated' ) ) {
	function is_woocommerce_activated() {
		if ( class_exists( 'WooCommerce' ) ) {
			return true;
		} else {
			return false;
		}
	}
}
/*-----------------------------------------------------------------------------------*/
/*	WooCommerce Functions
/*-----------------------------------------------------------------------------------*/
if ( class_exists( 'woocommerce' ) ) {
	remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
	remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
	remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
	remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );
	remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title', 10 );
	remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
	remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );

	// change priority on single template
	remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
	remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
	add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 10 );
	add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 20 );

	/*
	 * Enqueue styles for WooCommerce
	 */
	if ( ! function_exists( 'inspiry_woo_enqueue_styles' ) ) :
		function inspiry_woo_enqueue_styles() {
			$inspiry_template_directory_uri = get_template_directory_uri();
			wp_enqueue_style( 'Inspiry-woocommerece', $inspiry_template_directory_uri . '/css/custom-woocommerce.css', array(), '' );
            wp_enqueue_style( 'lightbox', $inspiry_template_directory_uri . '/css/image-light-box.css', array(), '1.0.0' );
		}
	endif;
	add_action( 'wp_enqueue_scripts', 'inspiry_woo_enqueue_styles' );

	/*
     * Enqueue scripts for WooCommerce
     */
	if ( ! function_exists( 'inspiry_woo_enqueue_scripts' ) ) :
		function inspiry_woo_enqueue_scripts() {
            wp_enqueue_script( 'lightbox', get_template_directory_uri() . '/js/imagelightbox.js', array( 'jquery' ), '', true );
		}
	endif;
	add_action( 'wp_enqueue_scripts', 'inspiry_woo_enqueue_scripts' );

	/*
     * WooCommerce Side bar Register
     */
	if ( ! function_exists( 'inspiry_woocommerce_sidebar' ) ) {
		function inspiry_woocommerce_sidebar() {
			// Location: Shop Sidebar
			register_sidebar( array(
				'id'            => 'shop',
				'name'          => esc_html__( 'Shop Sidebar', 'inspiry-builderpress' ),
				'description'   => esc_html__( 'This sidebar is for shop page', 'inspiry-builderpress' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>'
			) );
		}
	}
	add_action( 'widgets_init', 'inspiry_woocommerce_sidebar' );

	/*
	 * customizer function for shop
	 */
	if ( ! function_exists( 'inspiry_shop_customizer' ) ):
		function inspiry_shop_customizer( WP_Customize_Manager $wp_customize ) {
			/*
			* Shop Template controls
			*/
			$wp_customize->add_section( 'inspiry-shop-section', array(
				'title'    => esc_html__( 'Shop', 'inspiry-builderpress' ),
				'priority' => 168,
			) );

			$wp_customize->add_setting( 'shop-banner-image', array(
				'sanitize_callback' => 'inspiry_sanitize',
			) );
			$wp_customize->add_control(
				new WP_Customize_Cropped_Image_Control(
					$wp_customize,
					'shop-banner-image',
					array(
						'label'       => esc_html__( 'Upload an image for shop banner', 'inspiry-builderpress' ),
						'description' => esc_html__( 'Default image from "Header Section" will be shown if no image selected.(1900x250)', 'inspiry-builderpress' ),
						'section'     => 'inspiry-shop-section',
						'settings'    => 'shop-banner-image',
						'width'       => 1900,
						'height'      => 250
					)
				)
			);

			$wp_customize->add_setting( 'inspiry-shop-heading', array(
				'sanitize_callback' => 'sanitize_text_field',
			) );
			$wp_customize->add_control( 'inspiry-shop-heading', array(
				'label'       => esc_html__( 'Shop page banner title', 'inspiry-builderpress' ),
				'type'        => 'text',
				'section'     => 'inspiry-shop-section',
				'settings'    => 'inspiry-shop-heading',
				'description' => esc_html__( 'Default page title will be shown if field is empty', 'inspiry-builderpress' )
			) );

			$wp_customize->add_setting( 'inspiry-shop-heading-color', array(
				'sanitize_callback' => 'inspiry_sanitize',
			) );
			$wp_customize->add_control(
				new WP_Customize_Color_Control(
					$wp_customize,
					'inspiry-shop-heading-color',
					array(
						'label'       => esc_html__( 'Banner Title Color', 'inspiry-builderpress' ),
						'section'     => 'inspiry-shop-section',
						'settings'    => 'inspiry-shop-heading-color',
						'description' => esc_html__( 'Default header color will be shown if no color selected', 'inspiry-builderpress' )
					) )
			);

			/*
			 *  SHop Products per page control
			 */
			$wp_customize->add_setting( 'inspiry-shop-products-per-page', array(
				'sanitize_callback' => 'sanitize_text_field',
			) );

			$wp_customize->add_control( 'inspiry-shop-products-per-page', array(
				'label'       => esc_html__( 'Shop Products Per Page', 'inspiry-builderpress' ),
				'type'        => 'text',
				'section'     => 'inspiry-shop-section',
				'settings'    => 'inspiry-shop-products-per-page',
				'description' => esc_html__( 'If field is empty, Default (Admin > Settings > reading ) blog posts per page will be applied', 'inspiry-builderpress' )
			) );
		}
		add_action( 'customize_register', 'inspiry_shop_customizer' );
	endif;

	/*
	 *  SHop Products per page
	 */
	if ( ! function_exists( 'inspiry_shop_products_per_page' ) ) {
		function inspiry_shop_products_per_page() {
			$get_products_per_page = get_theme_mod( 'inspiry-shop-products-per-page' );
			if ( ! empty( $get_products_per_page ) ) {
				return intval( get_theme_mod( 'inspiry-shop-products-per-page' ) );
			} else {
				return 9; // 12 products per page
			}
		}
	}
	add_filter( 'loop_shop_per_page', 'inspiry_shop_products_per_page' );

	/*
	 *Change prettyPhoto to lightbox in image html
	 */
	if ( ! function_exists( 'woo_replace_lightbox_rel' ) ) {
		function woo_replace_lightbox_rel( $html ) {
			$html = str_replace( 'data-rel="prettyPhoto', 'data-imagelightbox="lightbox"', $html );
			return $html;
		}
	}
	add_filter( 'woocommerce_single_product_image_html', 'woo_replace_lightbox_rel', 99, 1 ); // single image
	add_filter( 'woocommerce_single_product_image_thumbnail_html', 'woo_replace_lightbox_rel', 99, 1 ); // thumbnails
}

/*-----------------------------------------------------------------------------------*/
//	social share icons for woocommerce product
/*-----------------------------------------------------------------------------------*/
if ( ! function_exists( 'inspiry_share_social_icons' ) ) {
	function inspiry_share_social_icons() {
		global $post;
		$permalink  = get_permalink( $post->ID );
		$post_title = rawurlencode( get_the_title( $post->ID ) );
		?>
		<div class="share-social-icons">

			<a class="facebook" href="http://www.facebook.com/sharer.php?u=<?php echo esc_url( $permalink ); ?>" target="_blank"
			   title="<?php esc_html_e( 'Share on Facebook', 'inspiry-builderpress' ); ?>">
				<i class="fa fa-facebook"></i>
			</a>

			<a class="twitter" href="https://twitter.com/share?url=<?php echo esc_url( $permalink ); ?>" target="_blank"
			   title="<?php esc_html_e( 'Share on Twitter', 'inspiry-builderpress' ); ?>">
				<i class="fa fa-twitter"></i>
			</a>

			<?php
			$featured_image_src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' );
			$featured_image     = $featured_image_src['0'];
			?>
			<a class="pinterest"
			   href="//pinterest.com/pin/create/button/?url=<?php echo esc_url( $permalink ); ?>&amp;media=<?php echo esc_url( $featured_image ); ?>&amp;description=<?php echo esc_url( $post_title ); ?>"
			   target="_blank" title="<?php esc_html_e( 'Pin on Pinterest', 'inspiry-builderpress' ); ?>">
				<i class="fa fa-pinterest"></i>
			</a>
		</div>
		<?php
	}
	add_action( 'woocommerce_share', 'inspiry_share_social_icons' );
}

/*-----------------------------------------------------------------------------------*/
//	Add to cart dropdown for Quick View Cart in Header
/*-----------------------------------------------------------------------------------*/
if ( ! function_exists( 'inspiry_add_to_cart_dropdown' ) ) {
	function inspiry_add_to_cart_dropdown( $fragments ) {
		global $woocommerce;
		ob_start();
		?>
		<div class="cart-inner">
		<?php
		$bp_cart_url = ( function_exists('wc_get_cart_url') ) ? wc_get_cart_url() : $woocommerce->cart->get_cart_url();
		?>
			<a href="<?php echo esc_url( $bp_cart_url ); ?>" class="cart-link">
				<div class="cart-icon">
					<i><?php include( get_template_directory() . '/images/icons/cart.svg' ); ?></i>
				</div>
			</a>
			<div class="nav-dropdown">
				<div class="nav-dropdown-inner">
					<?php
					if ( sizeof( $woocommerce->cart->cart_contents ) > 0 ) :
						?>
						<div class="cart_list">
							<?php
							foreach ( $woocommerce->cart->cart_contents as $cart_item_key => $cart_item ) :
								$_product = $cart_item['data'];
								if ( $_product->exists() && $cart_item['quantity'] > 0 ) :
									?>
									<div class="row mini-cart-item">
										<div class="col-sm-2">
											<?php
											$bp_cart_remove_url = ( function_exists('wc_get_cart_remove_url') ) ? wc_get_cart_remove_url( $cart_item_key ) : $woocommerce->cart->get_remove_url( $cart_item_key );
											echo apply_filters( 'woocommerce_cart_item_remove_link',
												sprintf( '<a href="%s" class="remove" title="%s"><i class="fa fa-close"></i></a>',
													esc_url( $bp_cart_remove_url ),
													esc_html__( 'Remove this item', 'inspiry-builderpress' ) ), $cart_item_key );
											?>
										</div>
										<div class="col-sm-7">
											<?php
											$product_title = $_product->get_title();
											echo '<a class="cart_list_product_title" href="' . get_permalink( $cart_item['product_id'] ) . '">' . apply_filters( 'woocommerce_cart_widget_product_title', $product_title, $_product ) . '</a>';
											echo '<div class="cart_list_product_price">' . wc_price( $_product->get_price() ) . ' /</div>';
											echo '<div class="cart_list_product_quantity">' . esc_html__( 'Quantity', 'inspiry-builderpress' ) . ': ' . $cart_item['quantity'] . '</div>';
											?>
										</div>
										<div class="col-sm-3">
											<?php echo '<a class="cart_list_product_img" href="' . get_permalink( $cart_item['product_id'] ) . '">' . $_product->get_image() . '</a>'; ?>
										</div>
									</div><!-- end row -->
									<?php
								endif;
							endforeach;
							?>
						</div>
						<div class="minicart_total_checkout">
							<?php esc_html_e( 'Cart Subtotal', 'inspiry-builderpress' ); ?>
							<span><?php echo wp_kses_post( $woocommerce->cart->get_cart_total() ); ?></span>
						</div>
						<?php 
						$bp_cart_url = ( function_exists('wc_get_cart_url') ) ? wc_get_cart_url() : $woocommerce->cart->get_cart_url();
						$bp_checkout_url = ( function_exists('wc_get_checkout_url') ) ? wc_get_checkout_url() : $woocommerce->cart->get_checkout_url();
						?>
						<a href="<?php echo esc_url( $bp_cart_url ); ?>"
						   class="button-mini-cart"><?php esc_html_e( 'View Cart', 'inspiry-builderpress' ); ?></a>
						<a href="<?php echo esc_url( $bp_checkout_url ); ?>"
						   class="button-mini-cart"><?php esc_html_e( 'Proceed to Checkout', 'inspiry-builderpress' ); ?></a>
						<?php
					else:
						echo '<p class="empty-cart-message">' . esc_html__( 'No products in the cart.', 'inspiry-builderpress' ) . '</p>';
					endif;
					?>
				</div>
			</div>
		</div>
		<?php
		$fragments['.cart-inner'] = ob_get_clean();

		return $fragments;
	}
	add_filter( 'woocommerce_add_to_cart_fragments', 'inspiry_add_to_cart_dropdown' );
}