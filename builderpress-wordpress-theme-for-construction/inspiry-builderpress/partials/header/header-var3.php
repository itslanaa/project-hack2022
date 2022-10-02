<header class="main-header bp-header-3">
	<div class="wrapper-header-nav-top">
		<?php
		$sticky_header_enable = get_theme_mod('inspiry_header_sticky_layout','false');
		?>
		<div class="header-nav-top <?php if ($sticky_header_enable == 'true'){echo "bp-sticky-menu-3";}; ?>">
			<div class="container">

				<div class="wrapper-top-bar-menu">
					<nav class="main-menu">
						<?php
						wp_nav_menu( array(
							'theme_location' => 'primary',
							'container'      => 'ul',
							'fallback_cb'    => false, // Do not fall back to wp_page_menu().
						) );
						?>
					</nav>
				</div>
				<div class="cart-and-social-wrapper">
					<?php
					if ( is_woocommerce_activated() ) {
						global $woocommerce;
						?>
						<div class="mini-cart top-bar-car">
							<div class="cart-inner">

							</div>
						</div>
						<?php
					}

					// Social Navigation
					$enable_footer_social_links = get_option( 'enable_top_social_link', 'true' );
					if ( function_exists( 'inspiry_render_footer_social_icons' ) && 'true' === $enable_footer_social_links ) :
						inspiry_render_footer_social_icons( $enable_footer_social_links );
					endif;
					?>
				</div>
			</div>
		</div>
	</div>
	<div class="header-logo-contact-section text-center-sm">
		<div class="container">
			<div class="header-box">

				<?php get_template_part( 'partials/header/logo' ); ?>

				<?php get_template_part( 'partials/header/header-partials/contact-detail' ); ?>

			</div>
		</div>
	</div>

</header>

