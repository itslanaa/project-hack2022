<?php
/**
 * Single Product Image
 *
 * @author        WooThemes
 * @package    WooCommerce/Templates
 * @version     3.5.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

global $post, $woocommerce, $product;

$attachment_ids = $product->get_gallery_image_ids();

if ( $attachment_ids ) {
	/* generated product images slider if gallery have multiple images */
	?>
	<div class="product-slider images">
		<ul class="slides">
			<?php
			foreach ( $attachment_ids as $attachment_id ) {
				$image_title    = esc_attr( get_the_title( $attachment_id ) );     // title text for image
				$full_image_url = wp_get_attachment_url( $attachment_id );      // full image url for lightbox
				$thumb_img      = wp_get_attachment_image_src( $attachment_id, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ) );   // thumbnail image url for thumbnail
				?>
				<li data-thumb="<?php echo esc_url( $thumb_img[0] ); ?>">
					<a href="<?php echo esc_url( $full_image_url ); ?>" data-imagelightbox="gallery"
					   class="product-single-slide-image <?php echo esc_attr( $image_title ); ?>">
						<?php echo wp_get_attachment_image( $attachment_id, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ), false, array( 'alt' => trim( strip_tags( get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) ) ) ) ); ?>
					</a>
				</li>
				<?php
			}
			?>
		</ul>
	</div>
	<?php
} else if ( has_post_thumbnail() ) {
	?>
	<div class="product-image images">
		<?php
		$thumbnail_id = get_post_thumbnail_id();
		$image_title  = esc_attr( get_the_title( $thumbnail_id ) );
		$image_link   = wp_get_attachment_url( $thumbnail_id );
		$image        = get_the_post_thumbnail( $post->ID, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ), array( 'title' => $image_title ) );
		echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" data-imagelightbox="lightbox" itemprop="image" class="woocommerce-main-image zoom" title="%s">%s</a>', $image_link, $image_title, $image ), $post->ID );
		?>
	</div>
	<?php
} else {
	?>
	<div class="product-image images">
		<?php echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<img src="%s" alt="Placeholder" />', wc_placeholder_img_src() ), $post->ID ); ?>
	</div>
	<?php
}
?>