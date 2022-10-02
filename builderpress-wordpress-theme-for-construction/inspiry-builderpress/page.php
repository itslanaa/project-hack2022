<?php
get_header();

$body_classes = get_body_class();

if ( in_array( 'woocommerce-page', $body_classes ) ) {
	get_template_part( 'partials/banner/banner-shop-paged' );

} else {
	get_template_part( 'partials/banner/banner-blog' );
}
?>
<div class="vc-pages-contents-area bp-page-contents">
	<div class="container">
		<?php
		if ( have_posts() ):
			while ( have_posts() ):
				the_post();
				the_content();
			endwhile;
		endif;

		if ( comments_open() ) : ?>
			<div class="inspiry-page-comments">
				<?php comments_template(); ?>
			</div><?php
		endif;
		?>
	</div>
</div>
<?php
get_footer();
?>
