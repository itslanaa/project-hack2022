<?php
$working_days  = get_theme_mod( 'working-days' );
$working_hours = get_theme_mod( 'working-hours' );
$close_days    = get_theme_mod( 'close-days' );
$close_text    = get_theme_mod( 'close-text' );
if ( ! empty( $working_days ) || ! empty( $working_hours ) || ! empty( $close_days ) || ! empty( $close_text ) ) {
	?>
	<p class="top-section-time">
		<?php echo esc_html( $working_days ); ?> -
		<span><?php echo esc_html( $working_hours ); ?></span>
		<?php
		if ( ! empty( $close_days ) || ! empty( $close_text ) ) {

			?><span class="sep-timings">|</span><?php
			echo esc_html( $close_days );

			if ( ! empty( $close_text ) ) {
				?> - <span><?php echo esc_html( $close_text ); ?></span><?php
			}
		}

		?>
	</p>
	<?php
}
?>