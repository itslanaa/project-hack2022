<header class="main-header bp-header-2">
	<div class="custom-container-header-2">
		<div class="wrapper-header-boxed">
			<div class="container">
				<?php
				$show_hide_bar = get_theme_mod( 'top-bar-show', 'false' );
				if ( $show_hide_bar == 'true' ) {
					?>
					<div class="header-top-section">
						<div class="row">
							<div class="col-md-5 visible-md visible-lg">
								<?php
								$header_tag_line = get_theme_mod( 'header-tag-line' );
								if ( ! empty( $header_tag_line ) ) {
									?>
									<p class="short-line text-center-sm"><?php echo esc_html( $header_tag_line ); ?></p>
									<?php
								}
								?>
							</div>

							<div class="col-md-7">
								<div class="wrapper-top-right text-center-sm">
									<?php
									// work days
									get_template_part( 'partials/header/work-days' );

									// Social Navigation.
									$enable_footer_social_links = get_option( 'enable_top_social_link', 'true' );
									if ( function_exists( 'inspiry_render_footer_social_icons' ) && 'true' === $enable_footer_social_links ) :
										inspiry_render_footer_social_icons( $enable_footer_social_links );
									endif;
									?>
								</div>
							</div>

						</div>
					</div>
					<?php
				}
				?>

				<div class="header-logo-contact-section text-center-sm">
					<div class="header-box">

						<?php get_template_part( 'partials/header/logo' ); ?>

						<?php get_template_part( 'partials/header/header-partials/contact-detail' ); ?>

					</div>
				</div>
			</div>
			<div class="wrapper-nav-section-2">
				<?php
				$sticky_header_enable = get_theme_mod('inspiry_header_sticky_layout','false');
				?>
				<div class="header-nav-section-2 <?php if ($sticky_header_enable == 'true'){echo "bp-sticky-menu-2";}; ?>">
					<div class="container">

						<nav class="main-menu">
							<?php
							wp_nav_menu( array(
								'theme_location' => 'primary',
								'container'      => 'ul',
								'fallback_cb'    => false, // Do not fall back to wp_page_menu().
							) );
							?>

							<?php
							if ( is_woocommerce_activated() ) {
								global $woocommerce;
								?>
								<div class="mini-cart cart-fixed">
									<div class="cart-inner">
									</div>
								</div>
								<?php
							}
							?>

						</nav>

					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</header>


