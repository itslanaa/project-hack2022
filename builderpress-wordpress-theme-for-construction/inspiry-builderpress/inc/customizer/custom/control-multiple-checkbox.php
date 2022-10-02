<?php

/**
 * Class Inspiry_Multiple_Checkbox_Customize_Control
 *
 * Multiple checkbox custom control
 */
class Inspiry_Multiple_Checkbox_Customize_Control extends WP_Customize_Control {

	/**
	 * The type of customize control being rendered.
	 */
	public $type = 'multiple-checkbox';

	/**
	 * Enqueue scripts/styles.
	 */
	public function enqueue() {
		wp_enqueue_script(
			'inspiry-customize-controls',
			trailingslashit( get_template_directory_uri() ) . 'inc/customizer/custom/controls.js',
			array( 'jquery' ),
			INSPIRY_THEME_VERSION,
			true
		);
	}

	/**
	 * Displays the control content.
	 *
	 */
	public function render_content() {

		if ( empty( $this->choices ) ) {
			return;
		} ?>

		<?php if ( ! empty( $this->label ) ) : ?>
			<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
		<?php endif; ?>

		<?php if ( ! empty( $this->description ) ) : ?>
			<span class="description customize-control-description"><?php echo esc_html( $this->description ); ?></span>
		<?php endif; ?>

		<?php $multi_values = ! is_array( $this->value() ) ? explode( ',', $this->value() ) : $this->value(); ?>

		<ul>
			<?php foreach ( $this->choices as $value => $label ) : ?>

				<li>
					<label>
						<input type="checkbox"
						       value="<?php echo esc_attr( $value ); ?>" <?php checked( in_array( $value, $multi_values ) ); ?> />
						<?php echo esc_html( $label ); ?>
					</label>
				</li>

			<?php endforeach; ?>
		</ul>

		<input type="hidden" <?php $this->link(); ?> value="<?php echo esc_attr( implode( ',', $multi_values ) ); ?>"/>
	<?php }
}

if ( ! function_exists( 'inspiry_sanitize_multiple_checkboxes' ) ) :
	function inspiry_sanitize_multiple_checkboxes( $values ) {

		$multi_values = ! is_array( $values ) ? explode( ',', $values ) : $values;

		return ! empty( $multi_values ) ? array_map( 'sanitize_text_field', $multi_values ) : array();
	}
endif;