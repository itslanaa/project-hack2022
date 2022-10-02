<?php
$contact_phone_label    = get_theme_mod( 'contact-phone-label' );
$contact_phone_number   = get_theme_mod( 'contact-phone-number' );
$contact_phone_icon_png = get_theme_mod( 'contact-phone-icon-png' );

$contact_email_label    = get_theme_mod( 'contact-email-label' );
$contact_email_address  = get_theme_mod( 'contact-email-address' );
$contact_email_icon_png = get_theme_mod( 'contact-email-icon-png' );
?>
<div class="header-box-contact">
	<div class="wrapper-header-contact">
		<?php
		if ( ! empty( $contact_phone_number ) ) {
			?>
			<div class="contact-box contact-phone">
				<?php
				if ( ! empty( $contact_phone_label ) ) {
					?>
					<span><?php echo esc_html( $contact_phone_label ); ?></span>
					<?php
				}
				?>
				<p><?php echo esc_html( $contact_phone_number ); ?></p>
				<span class="icon-contacts">
					<?php
					if ( ! empty( $contact_phone_icon_png ) ) {
						?>
						<img src="<?php echo esc_url( $contact_phone_icon_png ); ?>"
						     alt="<?php echo esc_attr( $contact_phone_label ); ?>">
						<?php
					} else {
						?>
						<img src="<?php echo esc_url( get_template_directory_uri() . '/images/icons/phone.svg' ); ?>"
						     alt="<?php echo esc_attr( $contact_phone_label ); ?>">
						<?php
					}
					?>
				</span>
			</div>
			<?php
		}
		if ( ! empty( $contact_email_address ) ) {
			?>
			<div class="contact-box contact-email">
				<?php
				if ( ! empty( $contact_email_label ) ) {
					?>
					<span><?php echo esc_html( $contact_email_label ); ?></span>
					<?php
				}
				?>
				<p>
					<a href="mailto:<?php echo antispambot( $contact_email_address ); ?>"><?php echo antispambot( $contact_email_address ); ?></a>
				</p>
				<span class="icon-contacts">
					<?php
					if ( ! empty( $contact_email_icon_png ) ) {
						?>
						<img src="<?php echo esc_url( $contact_email_icon_png ); ?>"
						     alt="<?php echo esc_attr( $contact_email_label ); ?>">
						<?php
					} else {
						?>
						<img
							src="<?php echo esc_url( get_template_directory_uri() . '/images/icons/mail-read.svg' ); ?>"
							alt="<?php echo esc_attr( $contact_email_label ); ?>">
						<?php
					}
					?>
				</span>
			</div>
			<?php
		}

		$header_quote_button_text = get_theme_mod( 'inspiry-header-quote-text', 'Get A Quote' );
		$header_quote_button_url  = get_theme_mod( 'inspiry-header-quote-url' );
		$header_quote_button_page = get_theme_mod( 'inspiry-header-quote-page' );

		$button_url = '';
		if ( ! empty( $header_quote_button_url ) ) {
			$button_url = $header_quote_button_url;
		} elseif ( $header_quote_button_page > 0 ) {
			$button_url = get_permalink( $header_quote_button_page );
		}

		if ( ! empty( $header_quote_button_text ) ) {
			?>
			<a class="request-quote-btn inspiry-scheme-border-color inspiry-scheme-hover-color"
			   href="<?php echo esc_url( $button_url ); ?>"><?php echo esc_html( $header_quote_button_text ); ?></a>
			<?php
		}
		?>
	</div>
</div>

