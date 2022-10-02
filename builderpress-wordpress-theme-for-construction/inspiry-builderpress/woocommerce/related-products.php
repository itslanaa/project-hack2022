<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.6.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

// Ensure visibility
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<div <?php post_class(); ?>>
	<?php
	/**
	 * woocommerce_before_shop_loop_item hook.
	 *
	 * @hooked woocommerce_template_loop_product_link_open - 10
	 */
	do_action( 'woocommerce_before_shop_loop_item' );


	/**
	 * woocommerce_before_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 * @hooked woocommerce_template_loop_product_thumbnail - 10
	 */
	do_action( 'woocommerce_before_shop_loop_item_title' );
	?>
	<figure>
		<a href="<?php the_permalink(); ?>" class="wrapper-thumb-product">
			<?php the_post_thumbnail( 'shop_catalog', array( 'class' => 'img-responsive' ) ); ?>
			<?php if ( $product->is_on_sale() ) : ?>

				<?php echo apply_filters( 'woocommerce_sale_flash', '<span class="onsale">' . esc_html__( 'Sale', 'inspiry-builderpress' ) . '</span>', $post, $product ); ?>

			<?php endif; ?>
		</a>
	</figure>
	<?php

	/**
	 * woocommerce_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_template_loop_product_title - 10
	 */
	do_action( 'woocommerce_shop_loop_item_title' );
	?>
	<h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

	<?php

	global $comment;
	$rating = intval( get_comment_meta( $comment->comment_ID, 'rating', true ) );

	if ( $rating && get_option( 'woocommerce_enable_review_rating' ) === 'yes' ) { ?>

		<div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating"
		     class="star-rating custom-star-rating"
		     title="<?php echo sprintf( esc_attr__( 'Rated %d out of 5', 'inspiry-builderpress' ), esc_attr( $rating ) ) ?>">
			<span style="width:<?php echo ( esc_attr( $rating ) / 5 ) * 100; ?>%"><strong
					itemprop="ratingValue"><?php echo esc_attr( $rating ); ?></strong> <?php esc_attr_e( 'out of 5', 'inspiry-builderpress' ); ?></span>
		</div>


		<?php
	}


	/**
	 * woocommerce_after_shop_loop_item_title hook.
	 *
	 * @hooked woocommerce_template_loop_rating - 5
	 * @hooked woocommerce_template_loop_price - 10
	 */
	do_action( 'woocommerce_after_shop_loop_item_title' );
	?>
	<div class="woo-separator"></div>

	<div class="price-and-cart">
		<?php if ( $price_html = $product->get_price_html() ) : ?>
			<span><?php echo wp_kses_post( $price_html ); ?></span>
		<?php endif; ?>
	</div>
	<?php

	/**
	 * woocommerce_after_shop_loop_item hook.
	 *
	 * @hooked woocommerce_template_loop_product_link_close - 5
	 * @hooked woocommerce_template_loop_add_to_cart - 10
	 */
	do_action( 'woocommerce_after_shop_loop_item' );
	?>
</div>
