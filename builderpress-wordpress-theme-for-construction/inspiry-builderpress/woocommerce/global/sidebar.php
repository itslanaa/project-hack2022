<?php
/**
 * Sidebar
 *
 * @author        WooThemes
 * @package    WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

?>
<aside class="sidebar wc-sidebar">
	<?php
	dynamic_sidebar( 'shop' );
	?>
</aside>
