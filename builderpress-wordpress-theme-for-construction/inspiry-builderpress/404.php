<?php
get_header();

get_template_part( 'partials/banner/banner-404' );
?>

	<div class="container">
		<div class="wrapper-404 text-center">
			<p class="page-not-found"><?php esc_html_e( 'Page Not Found', 'inspiry-builderpress' ); ?></p>
			<h1><?php esc_html_e('404','inspiry-builderpress') ?></h1>
			<p class="message-404">
				<span><?php esc_html_e( 'Oops!', 'inspiry-builderpress' ); ?></span> <?php esc_html_e( 'We can not seem to find the page you are looking for.', 'inspiry-builderpress' ); ?>
			</p>
			<a class="bp-button bp-button-plain button-dark hover-to-yellow" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back to Home', 'inspiry-builderpress' ); ?></a>
		</div>
	</div>

<?php
get_footer();