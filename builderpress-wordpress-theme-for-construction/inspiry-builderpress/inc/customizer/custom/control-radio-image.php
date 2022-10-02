<?php

/**
 * Custom Radio Image Control
 */
class Inspiry_Custom_Radio_Image_Control extends WP_Customize_Control {

	/**
	 * Declare the control type.
	 * @var string
	 */
	public $type = 'radio-image';

	/**
	 * Enqueue scripts and styles for the custom control.
	 *
	 * Note, you can also enqueue stylesheets here as well. Stylesheets are hooked
	 * at 'customize_controls_print_styles'.
	 *
	 */
	public function enqueue() {
		wp_enqueue_script( 'jquery-ui-button' );
	}

	/**
	 * Render the control to be displayed in the Customizer.
	 */
	public function render_content() {
		if ( empty( $this->choices ) ) {
			return;
		}

		$name = '_customize-radio-' . $this->id;
		?>
		<span class="customize-control-title">
			<?php echo esc_attr( $this->label ); ?>
			<?php if ( ! empty( $this->description ) ) : ?>
				<span
					class="description customize-control-description"><?php echo esc_html( $this->description ); ?></span>
			<?php endif; ?>
		</span>
		<div id="input_<?php echo esc_attr( $this->id ); ?>" class="image">
			<?php foreach ( $this->choices as $value => $label ) : ?>
				<input class="image-select" type="radio" value="<?php echo esc_attr( $value ); ?>" id="<?php echo esc_attr( $this->id . $value ); ?>" name="<?php echo esc_attr( $name ); ?>" <?php $this->link(); checked( $this->value(), $value ); ?>>
					<label for="<?php echo esc_attr( $this->id . $value ); ?>">
						<img src="<?php echo esc_url( $label ); ?>" alt="<?php echo esc_attr( $value ); ?>" title="<?php echo esc_attr( $value ); ?>">
					</label>
				</input>
			<?php endforeach; ?>
		</div>
		<script>jQuery(document).ready(function ($) {
				$('[id="input_<?php echo esc_attr( $this->id ); ?>"]').buttonset();
			});</script>
		<?php
	}
}


/**
 * Add CSS for custom controls
 */
function inspiry_customizer_custom_control_css() {
	?>
	<style>
		.customize-control-radio-image .image.ui-buttonset input[type=radio] {
			height: auto;
		}

		.customize-control-radio-image .image.ui-buttonset label {
			display: inline-block;
			margin-right: 5px;
			margin-bottom: 20px;
		}

		.customize-control-radio-image .image.ui-buttonset label.ui-state-active {
			background: none;
		}

		.customize-control-radio-image .customize-control-radio-buttonset label {
			padding: 5px 10px;
			background: #f7f7f7;
			border-left: 1px solid #dedede;
			line-height: 35px;
		}

		.customize-control-radio-image label img {
			border: 1px solid #bbb;
			opacity: 0.5;
		}

		#customize-controls .customize-control-radio-image label img {
			/*max-width: 120px;*/
			height: auto;
		}

		.customize-control-radio-image label.ui-state-active img {
			background: #dedede;
			border-color: #000;
			opacity: 1;
		}

		.customize-control-radio-image label.ui-state-hover img {
			opacity: 0.9;
			border-color: #999;
		}

		.customize-control-radio-buttonset label.ui-corner-left {
			border-radius: 3px 0 0 3px;
			border-left: 0;
		}

		.customize-control-radio-buttonset label.ui-corner-right {
			border-radius: 0 3px 3px 0;
		}
	</style>
	<?php
}

add_action( 'customize_controls_print_styles', 'inspiry_customizer_custom_control_css' );
