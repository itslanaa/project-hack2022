<?php
$cta_image_id      = get_theme_mod( 'inspiry-cta-image' );
$cta_overlay       = get_theme_mod( 'inspiry-cta-overlay' );
$cta_heading       = get_theme_mod( 'inspiry-cta-heading' );
$cta_heading_color = get_theme_mod( 'inspiry-cta-heading-color' );
$cta_text          = get_theme_mod( 'inspiry-cta-text' );
$cta_text_color    = get_theme_mod( 'inspiry-cta-text-color' );
$cta_url           = get_theme_mod( 'inspiry-cta-button-url' );
$cta_page          = get_theme_mod( 'inspiry-cta-page', 0 );
$cta_button_text   = get_theme_mod( 'inspiry-cta-button-text', 'GET A QUOTE' );
$cta_image         = wp_get_attachment_url( $cta_image_id );

?>
<div
	class="quote-bar-home" <?php if ( ! empty( $cta_image_id ) ) { ?> style= "background-image: url(<?php echo esc_url( $cta_image ); ?>)"<?php } ?>>
	<div class="cta-overlay"
	     <?php
	     if ( ! empty( $cta_overlay ) ){ ?>style="background:<?php echo esc_attr( $cta_overlay ); ?>;opacity: .85;  " <?php }
	?>>
	</div>
	<div class="container">
		<div class="wrapper-quote-box">
			<div class="flex-item">

				<?php
				if ( ! empty( $cta_heading ) ) {
					?>
					<h2 <?php if ( ! empty( $cta_heading_color ) ) { ?> style="color: <?php echo esc_attr( $cta_heading_color ); ?>" <?php } ?>><?php echo esc_html( $cta_heading ); ?></h2>
					<?php
				}
				if ( ! empty( $cta_text ) ) {
					?>
					<p <?php if ( ! empty( $cta_text_color ) ) { ?> style="color: <?php echo esc_attr( $cta_text_color ); ?>" <?php } ?>><?php echo esc_html( $cta_text ); ?></p>
					<?php
				}
				?>
			</div>
			<?php
			$button_url = '';
			if ( ! empty( $cta_url ) ) {
				$button_url = $cta_url;
			} elseif ( $cta_page > 0 ) {
				$button_url = get_permalink( $cta_page );
			}
			if ( ! empty( $cta_button_text ) ) {
				?>
				<div class="flex-item">
					<a class="bp-button bp-button-plain button-dark"
					   href="<?php echo esc_url( $button_url ); ?>"><?php echo esc_html( $cta_button_text ); ?></a>
				</div>
				<?php
			}
			?>
		</div>
	</div>
</div>