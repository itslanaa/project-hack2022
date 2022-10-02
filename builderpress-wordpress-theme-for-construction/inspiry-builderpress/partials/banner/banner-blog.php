<?php
$in_page_banner_title       = get_post_meta( get_queried_object_ID(), 'bp-banner-in-page-title', true );
$in_page_banner_title_color = get_post_meta( get_queried_object_ID(), 'bp-banner-in-page-title-color', true );
$in_page_banner_bg_image    = get_post_meta( get_queried_object_ID(), 'bp-banner-in-page-bg-image', true );

$blog_page_banner_title_by_id = get_post_meta( get_option( 'page_for_posts' ), 'bp-banner-in-page-title', true );
$blog_page_banner_color_by_id = get_post_meta( get_option( 'page_for_posts' ), 'bp-banner-in-page-title-color', true );
$blog_page_banner_image_by_id = get_post_meta( get_option( 'page_for_posts' ), 'bp-banner-in-page-bg-image', true );

$cpt_banner_meta             = get_post_meta( get_the_ID(), 'bp-project-banner-in-post-bg-image', true );
$cpt_banner_title_meta       = get_post_meta( get_the_ID(), 'bp-projects-banner-in-post-title', true );
$cpt_banner_title_color_meta = get_post_meta( get_the_ID(), 'bp-project-banner-in-post-title-color', true );

$blog_banner_heading = get_theme_mod( 'inspiry-banner-heading' );
$page_for_posts      = get_theme_mod( 'page_for_posts' );
$banner_image_blog   = get_theme_mod( 'banner-image' );
$header_color        = get_theme_mod( 'banner-title-color' );

$header_layout = get_theme_mod( 'inspiry_header_layout' );

$in_page_banner_display_option = get_post_meta( get_the_ID(), 'bp-banner-display-option', true );

if ( $in_page_banner_display_option !== 'no' ) {

	$banner_image = '';
	if (( ! empty( $cpt_banner_meta ) && is_singular( 'project' )) || ( ! empty( $cpt_banner_meta ) && is_singular( 'service' )) ) {
		$banner_image = 'background-image: url(' . esc_url( wp_get_attachment_url( $cpt_banner_meta ) ) . ')';
	} elseif ( ! empty( $blog_page_banner_image_by_id ) && is_singular( 'post' ) ) {
		$banner_image = 'background-image: url(' . esc_url( wp_get_attachment_url( $blog_page_banner_image_by_id ) ) . ')';
	} elseif ( ! empty( $in_page_banner_bg_image ) ) {
		$banner_image = 'background-image: url(' . esc_url( wp_get_attachment_url( $in_page_banner_bg_image ) ) . ')';
	} elseif ( ! empty( $banner_image_blog ) ) {
		$banner_image = 'background-image: url(' . esc_url( wp_get_attachment_url( $banner_image_blog ) ) . ')';
	}
	?>

	<div class="banner <?php if ( $header_layout == 'two' ) { ?> banner-header-2 <?php } ?>"
	     <?php if(!empty($banner_image)){ ?>
	     style="<?php echo esc_attr( $banner_image ); ?>"
	     <?php } ?>
		>

		<?php


		if ( ! empty( $in_page_banner_title ) || ! empty( $in_page_banner_title_color ) ) {

			$in_page_title = '';
			if ( ! empty( $in_page_banner_title ) ) {
				$in_page_title = $in_page_banner_title;
			} elseif ( ! empty( $blog_banner_heading ) ) {
				$in_page_title = $blog_banner_heading;
			} else {
				$in_page_title = get_the_title();
			}

			$in_page_title_color = '';
			if ( ! empty( $in_page_banner_title_color ) ) {
				$in_page_title_color = $in_page_banner_title_color;
			} elseif ( ! empty( $header_color ) ) {
				$in_page_title_color = $header_color;
			}

			?>

			<h1 style="color: <?php echo esc_attr( $in_page_title_color ); ?>"><?php echo esc_html( $in_page_title ); ?></h1>
			<?php

		} elseif ( ( is_singular( 'project' ) || is_singular( 'service' ) ) && ( ! empty( $cpt_banner_title_meta ) || ! empty( $cpt_banner_title_color_meta ) ) ) {
			$single_title = '';
			if ( ! empty( $cpt_banner_title_meta ) ) {
				$single_title = $cpt_banner_title_meta;
			} elseif ( ! empty( $blog_banner_heading ) ) {
				$single_title = $blog_banner_heading;
			} else {
				$single_title = get_the_title();
			}
			$single_title_color = '';
			if ( ! empty( $cpt_banner_title_color_meta ) ) {
				$single_title_color = $cpt_banner_title_color_meta;
			} elseif ( ! empty( $header_color ) ) {
				$single_title_color = $header_color;
			}
			?>
			<h2 style="color: <?php echo esc_attr( $single_title_color ); ?>"><?php echo esc_html( $single_title ); ?></h2>
			<?php

		} elseif ( is_singular( 'post' ) && ( ! empty( $blog_page_banner_color_by_id ) || ! empty( $blog_page_banner_title_by_id ) ) ) {
			$single_title = '';
			if ( ! empty( $blog_page_banner_title_by_id ) ) {
				$single_title = $blog_page_banner_title_by_id;
			} elseif ( ! empty( $blog_banner_heading ) ) {
				$single_title = $blog_banner_heading;
			} else {
				$single_title = get_the_title();
			}
			$single_title_color = '';
			if ( ! empty( $blog_page_banner_color_by_id ) ) {
				$single_title_color = $blog_page_banner_color_by_id;
			} elseif ( ! empty( $header_color ) ) {
				$single_title_color = $header_color;
			}
			?>
			<h2 style="color: <?php echo esc_attr( $single_title_color ); ?>"><?php echo esc_html( $single_title ); ?></h2>
			<?php

		} elseif ( ( is_singular( 'post' ) ) && ( ! empty( $blog_banner_heading ) ) ) {
			if ( ! empty( $blog_banner_heading ) ) {
				?>
				<h2 style="color: <?php echo esc_attr( $header_color ); ?>"><?php echo esc_html( $blog_banner_heading ); ?></h2>
				<?php
			}
		} elseif ( is_singular( 'post' ) ) {
			$get_blog_page            = get_option( 'page_for_posts' );
			$single_post_banner_title = '';
			if ( ! empty( $get_blog_page ) ) {
				$single_post_banner_title = get_the_title( $get_blog_page );
			} else {
				$single_post_banner_title = esc_html__( 'Blog', 'inspiry-builderpress' );
			}
			?>
			<h2 style="color: <?php echo esc_attr( $header_color ); ?>"><?php echo esc_html( $single_post_banner_title ); ?></h2>
			<?php
		} elseif ( is_archive() ) {
			?>
			<h1 style="color: <?php echo esc_attr( $header_color ); ?>"><?php echo get_the_archive_title(); ?></h1>
			<?php

		} elseif ( is_search() ) {
			?>
			<h1 style="color: <?php echo esc_attr( $header_color ); ?>"><?php esc_html_e( 'Search Results', 'inspiry-builderpress' ); ?></h1>
			<?php
		} elseif ( is_home() ) {
			if ( ! empty( $blog_banner_heading ) ) {
				?>
				<h1 style="color: <?php echo esc_attr( $header_color ); ?>"><?php echo esc_html( $blog_banner_heading ); ?></h1>
				<?php

			} elseif ( $page_for_posts ) {
				$blog = get_post( $page_for_posts );
				?>
				<h1 style="color: <?php echo esc_attr( $header_color ); ?>"><?php echo esc_html( $blog->post_title ); ?></h1>
				<?php

			} else {
				?>
				<h1 style="color: <?php echo esc_attr( $header_color ); ?>"><?php esc_html_e( 'Blog', 'inspiry-builderpress' ); ?></h1>
				<?php

			}
		} else {
			?>
			<h1 style="color: <?php echo esc_attr( $header_color ); ?>"><?php the_title(); ?></h1>
			<?php

		}
		?>
	</div>
	<?php
}