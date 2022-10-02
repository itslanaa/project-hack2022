<?php
if ( ! class_exists( 'Inspiry_Separator_Control' ) ) {
	return null;
}

/**
 * Class Inspiry_Separator_Control
 *
 * Custom control to display separator
 */
class Inspiry_Separator_Control extends WP_Customize_Control {
	public function render_content() {
		?>
		<label>
			<br>
			<hr>
			<br>
		</label>
		<?php
	}
}

class Inspiry_Google_Description_Control extends WP_Customize_Control {
	public function render_content() {
		?>
		<label>
			<br>
			<i>
			<?php
			echo wp_kses(__("<a target=\"_blank\" href=\"https://inspirythemes.github.io/builderpress-docs/customizer/#google-map-coordinates\">Consult Documentation</a> to learn how to get <strong>Google Map Coordinates</strong> and <strong>Google Map API Key</strong>",'inspiry-builderpress'), array( 'strong' => array(), 'a' => array( 'href' => array(), 'target' => array(), ) ) )
			?>
			</i>
			<br>
		</label>
		<?php
	}
}
