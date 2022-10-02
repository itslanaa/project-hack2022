<?php
$cta_diplay_option = get_theme_mod( 'inspiry-cta-display', 'false' );
if ( $cta_diplay_option == 'true' ) {
	get_template_part( 'partials/footer/cta-bar-footer' );
}
?>
<footer>

	<div class="wrapper-footer">
		<div class="container">
			<?php
			$footer_logo           = get_theme_mod( 'inspiry-footer-logo' );
			$footer_intro_text     = get_theme_mod( 'inspiry-footer-text' );
			$know_more_button_text = get_theme_mod( 'inspiry-know-more-button' );
			$footer_link_page      = get_theme_mod( 'inspiry-footer-btn-link', 0 );
			$footer_link_url       = get_theme_mod( 'inspiry-footer-btn-url' );


			if ( ! empty( $footer_logo ) || ! empty( $footer_intro_text ) || ! empty( $know_more_button_text ) ) {
				?>
				<div class="footer-intro-section">
					<?php
					if ( ! empty( $footer_logo ) ) {
						?>
						<a class="footer-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
							<img src="<?php echo esc_url( $footer_logo ); ?>" alt="<?php bloginfo( 'name' ); ?>">
						</a>
						<?php
					}
					if ( ! empty( $footer_intro_text ) ) {
						?><p><?php echo esc_html( $footer_intro_text ); ?></p><?php
					}

					if ( ! empty( $know_more_button_text ) ) {

						$footer_btn_url = '';
						if ( ! empty( $footer_link_url ) ) {
							$footer_btn_url = $footer_link_url;
						} elseif ( $footer_link_page > 0 ) {
							$footer_btn_url = get_permalink( $footer_link_page );
						}

						?>
						<a class=" bp-button button-yellow-border button-yellow"
						   href="<?php echo esc_url( $footer_btn_url ); ?>">
							<?php echo esc_html( $know_more_button_text ); ?>
						</a>
						<?php
					}
					?>
				</div>
				<?php
			}

			if (
				is_active_sidebar( 'footer-1st-column' ) ||
				is_active_sidebar( 'footer-2nd-column' ) ||
				is_active_sidebar( 'footer-3rd-column' ) ||
				is_active_sidebar( 'footer-4th-column' )
			) {
				?>
				<div class="footer-widgets-area">
					<div class="row">

						<?php if ( is_active_sidebar( 'footer-1st-column' ) ) { ?>
							<div class="col-md-3 col-sm-6">
								<?php dynamic_sidebar( 'footer-1st-column' ); ?>
							</div>
						<?php } ?>
						<?php if ( is_active_sidebar( 'footer-2nd-column' ) ) { ?>
							<div class="col-md-3 col-sm-6">
								<?php dynamic_sidebar( 'footer-2nd-column' ); ?>
							</div>
						<?php } ?>

						<div class="clearfix visible-sm"></div>

						<?php if ( is_active_sidebar( 'footer-3rd-column' ) ) { ?>
							<div class="col-md-3 col-sm-6">
								<?php dynamic_sidebar( 'footer-3rd-column' ); ?>
							</div>
						<?php } ?>

						<?php if ( is_active_sidebar( 'footer-4th-column' ) ) { ?>
							<div class="col-md-3 col-sm-6">
								<?php dynamic_sidebar( 'footer-4th-column' ); ?>
							</div>
						<?php } ?>
					</div>
				</div>
				<?php
			}
			?>

		</div>

		<div class="footer-copyright">
			<div class="container">
				<div class="row">
					<div class="col-sm-7 text-center-xs">
						<?php
						$copyright_text = get_theme_mod( 'inspiry-copyright-text' );
						if ( ! empty( $copyright_text ) ) {
							?><p class="copyright-text"><?php echo esc_html( $copyright_text ); ?></p><?php
						} else {
							?>
							<p class="copyright-text"><?php echo esc_html__( '© Copyright', 'inspiry-builderpress' ) . date( "Y" ) . ' <a href="' . get_site_url() . '"> ' . get_bloginfo( 'name' ) . '</a> ' . esc_html__( ' All Rights Reserved', 'inspiry-builderpress' ) ?> </p>
							<?php
						}
						?>
					</div>
					<?php
					$enable_footer_social_links = get_option( 'enable_footer_social_link', 'true' );
					if ( function_exists( 'inspiry_render_footer_social_icons' ) && 'true' === $enable_footer_social_links ) :
						?>
						<div class="col-sm-5">
							<div class="wrapper-footer-social text-center-xs">
								<?php inspiry_render_footer_social_icons( $enable_footer_social_links ); ?>
							</div>
						</div>
					<?php
					endif;
					?>
				</div>
			</div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>