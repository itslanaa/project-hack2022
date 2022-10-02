<?php
/**
 * The template for displaying product widget entries.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-widget-product.php.
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.5
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product; ?>

<li>
	<a href="<?php echo esc_url( $product->get_permalink() ); ?>"
	   title="<?php echo esc_attr( $product->get_title() ); ?>">
		<div class="bp-woo-widget-image">
			<?php echo wp_kses_post( $product->get_image() ); ?>
		</div>
		<div class="bp-woo-widget-detail">
			<span class="product-title"><?php echo wp_kses_post( $product->get_title() ); ?></span><br>
			<?php echo wp_kses_post( $product->get_price_html() ); ?><br>
			<?php if ( ! empty( $show_rating ) ) : ?>
				<?php echo wc_get_rating_html( $product->get_average_rating() ); ?>
			<?php endif; ?>
		</div>
	</a>


</li>
