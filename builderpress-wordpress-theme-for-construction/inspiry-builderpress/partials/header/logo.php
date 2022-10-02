<div class="header-box-logo">
	<div class="wrapper-logo">

		<?php
		if ( function_exists( 'has_custom_logo' ) && has_custom_logo() ) {
			the_custom_logo();
		} else {
			?>
			<?php if ( is_front_page() ) : ?>
				<h1 class="site-title">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
				</h1>
			<?php else : ?>
				<p class="site-title">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
				</p>
			<?php endif; ?>
			<?php
		}

		$bp_description = get_bloginfo( 'description' );
		if ( ! empty( $bp_description ) ) {
			echo '<small class="bp-tag-line">';
			echo esc_html( $bp_description );
			echo '</small>';
		}
		?>

	</div>
</div>
