<?php
/*
 * Template Name: Services Template
 */
get_header();
get_template_part( 'partials/banner/banner-blog' );
?>

	<div class="pages-contents-area contents-services">
		<div class="wrapper-page-icon">
			<div class="container">
				<?php
				$top_page_icon = get_post_meta( get_the_ID(), 'bp-page-top-icon', true );
				if ( ! empty( $top_page_icon ) ) {
					$attachment = get_post( $top_page_icon );
					if ( $attachment ) {
						$get_icon_alt = get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true );
						if ( ! empty( $get_icon_alt ) ) {
							$icon_alt = $get_icon_alt;
						} else {
							$icon_alt = $attachment->post_title;
						}
						?>
                        <span><img src="<?php echo esc_url( wp_get_attachment_url( $top_page_icon ) ); ?>" alt="<?php echo esc_html( $icon_alt ); ?>"></span>
						<?php
					}
				}
				?>
			</div>
		</div>
		<div class="container">
			<div class="contents-inner">
				<?php

				$services_heading_under_banner = get_post_meta( get_the_ID(), 'bp-page-heading', true );
				$services_text_under_banner    = get_post_meta( get_the_ID(), 'bp-page-text', true );

				if ( ! empty( $services_heading_under_banner ) || ( ! empty( $services_text_under_banner ) ) ) {
					?>
					<div class="wrapper-heading-inner-pages">
						<div class="row">
							<div class="col-md-5 col-lg-4">
								<?php
								if ( ! empty( $services_heading_under_banner ) ) {
									?>
									<h2><?php echo esc_html( $services_heading_under_banner ); ?></h2>
									<?php
								}
								?>
							</div>
							<div class="col-md-7 col-lg-8">
								<?php
								if ( ! empty( $services_text_under_banner ) ) {
									?>
									<p><?php echo esc_html( $services_text_under_banner ); ?></p>
									<?php
								}
								?>
							</div>
						</div>
					</div>

					<?php
				}
				?>

				<div class="row">

					<?php
					$post_per_page_meta = get_post_meta( get_the_ID(), 'bp-page-posts-count', true );

					if ( ! empty( $post_per_page_meta ) ) {
						$post_per_page = $post_per_page_meta;
					} else {
						$post_per_page = 6;
					}

					global $paged;
					$cat_count      = 0;
					$count_clearfix = 1;

					$services_args = array(
						'post_type'      => 'service',
						'posts_per_page' => $post_per_page,
						'paged'          => $paged,
					);

					$services_query = new WP_Query( $services_args );
					if ( $services_query->have_posts() ):
						while ( $services_query->have_posts() ):
							$services_query->the_post();
							?>
							<div class="col-md-4 col-sm-6">
								<div class="single-service-box theme-box-shadow">
									<?php
									if ( has_post_thumbnail() ) {
										?>
										<a class="service-image" href="<?php the_permalink(); ?>">
											<figure>
												<?php
												the_post_thumbnail();
												?>
											</figure>
										</a>
										<?php
									}
									?>
									<div class="service-excerpt">
										<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<div class="services-content-wrapper">
											<?php
											echo wp_trim_words( get_the_excerpt(), 17 );
											?>
										</div>
										<a class="bp-hover-dark bp-lined mont-upper-light-gray"
										   href="<?php the_permalink(); ?>"><?php esc_html_e( 'view detail', 'inspiry-builderpress' ); ?>
											<i class="fa fa-angle-right"></i></a>
									</div>
								</div>
							</div>

							<?php
							$cat_count ++;
							if ( $count_clearfix % 3 == 0 ) {
								?>
								<div class="clearfix visible-md visible-lg"></div>
								<?php
							}
							if ( $count_clearfix % 2 == 0 ) {
								?>
								<div class="clearfix visible-sm"></div>
								<?php
							}
							$count_clearfix ++;

						endwhile;
						wp_reset_postdata();
						?>
						<div class="template-pagination services-pagination">
							<?php
							inspiry_pagination( $services_query );
							?>
						</div>
						<?php
					else:
						?>
						<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'inspiry-builderpress' ) ?></p>
						<?php
					endif;
					?>

				</div>


			</div>
		</div>
	</div>
<?php get_footer(); ?>