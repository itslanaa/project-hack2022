<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce/Templates
 * @version     3.9.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product, $woocommerce_loop;

if ( empty( $product ) || ! $product->exists() ) {
	return;
}


if ( $related_products ) :
		$heading = apply_filters( 'woocommerce_product_related_products_heading', __( 'Related products', 'inspiry-builderpress' ) );
		if ( $heading ) :
			?>
			<h2 class="related-product-heading"><?php echo esc_html( $heading ); ?></h2>
			<?php 
		endif; 
		?>
	<div class="col-sm-12">
		<div class="related products">


			<?php woocommerce_product_loop_start(); ?>
			<div id="product-carousel-wc" class="owl-carousel carousel-product-upsells-related">

				<?php foreach ( $related_products as $related_product ) : ?>

					<?php
					$post_object = get_post( $related_product->get_id() );

					setup_postdata( $GLOBALS['post'] =& $post_object ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited, Squiz.PHP.DisallowMultipleAssignments.Found

					wc_get_template_part( 'content', 'product' );
					?>

				<?php endforeach; ?>
			</div>
			<?php woocommerce_product_loop_end(); ?>

		</div>
	</div>

	<?php
endif;

wp_reset_postdata();
