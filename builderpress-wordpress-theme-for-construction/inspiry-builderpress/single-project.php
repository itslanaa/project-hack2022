<?php
get_header();

get_template_part( 'partials/banner/banner-blog' );
?>

<div class="pages-contents-area contents-project-single">
	<div class="container">
		<?php
		if ( have_posts() ):
			while ( have_posts() ) :
				the_post();
				?>
				<div class="heading-wrapper">
					<?php
					$single_project_breadcrumbs = get_theme_mod( 'inspiry_projects_breadcrumbs', 'true' );
					if ( $single_project_breadcrumbs == 'true' ) {
						inspiry_bp_custom_breadcrumbs();
					}
					?>
					<h2 class="project-title"><?php the_title(); ?></h2>
					<span class="categories-single">
                    	<span><?php esc_html_e( 'In', 'inspiry-builderpress' ); ?></span>
						<?php
						$status_terms = get_the_terms( get_the_ID(), 'project-category' );
						if ( ! empty( $status_terms ) ) {
							foreach ( $status_terms as $term ) {
								?>
							<a href="<?php echo esc_url( get_term_link( $term ) ); ?>">  <?php echo esc_html( $term->name ); ?> </a><?php
							}
						}
						?>
                	</span>
				</div>

				<?php
				/*
				 * Gallery Slider or Featured Image
				 */
				$slider_images = get_post_meta( get_the_ID(), 'bp-slider-image', false );
				if ( ! empty( $slider_images ) ) {
					?>
					<div class="slider-single-project owl-carousel">
						<?php
						foreach ( $slider_images as $image ) {
							$image_url = wp_get_attachment_image_url( $image, 'inspiry_image_size_1140_760' );
							$image_alt = get_post_meta( $image, '_wp_attachment_image_alt', true )
							?>
							<div>
								<a data-imagelightbox="gallery" href="<?php echo esc_url( $image_url ); ?>">
									<img src="<?php echo esc_url( $image_url ); ?>"
									     alt="<?php echo esc_html( $image_alt ); ?>">
								</a>
							</div>
							<?php
						}
						?>
					</div>
					<?php
				} else {
					?>
					<div class="portfolio-thumbnail">
						<a data-imagelightbox="lightbox"
						   href="<?php the_post_thumbnail_url( 'inspiry_image_size_1140_760' ); ?>">
							<?php the_post_thumbnail( 'inspiry_image_size_1140_760' ); ?>
						</a>
					</div>
					<?php
				}
				?>

				<div class="page-content-area">
					<div class="project-single-content-box">
						<div class="project-left-content-box">
							<div class="main-contents-projects">
								<div class="post-meta">
									<?php
									$location_meta_value = get_post_meta( get_the_ID(), 'bp-location', true );
									$date_meta_value     = get_post_meta( get_the_ID(), 'bp-completion-date-text', true );
									$area_meta_value     = get_post_meta( get_the_ID(), 'bp-area', true );

									if ( ! empty( $location_meta_value ) ) {
										?><span class="location"><i
											class="fa fa-map-marker"></i><?php echo esc_html( $location_meta_value ); ?>
										</span><?php
									}

									if ( ! empty( $date_meta_value ) ) {
										?><span class="date"><i
											class="fa fa-calendar"></i><?php echo esc_html( $date_meta_value ); ?>
										</span><?php
									}

									if ( ! empty( $area_meta_value ) ) {
										// todo: make area unit dynamic
										?><span class="area"><i
											class="fa fa-arrows-alt"></i><?php echo esc_html( $area_meta_value ); ?>
										&nbsp;m<sup>2</sup>&nbsp;</span><?php
									}
									?>
								</div>
								<div class="the-content-wrapper clearfix">
									<?php the_content(); ?>
								</div>
							</div>


						</div>

						<?php
						$current_post_id = get_the_ID();
						$args            = array(
							'post_type'      => 'project',
							'posts_per_page' => 5,
							'post__not_in'   => array( $current_post_id ),
						);

						$terms = get_the_terms( $current_post_id, 'project-category' );
						if ( ! is_wp_error( $terms ) ) {
							$terms             = wp_list_pluck( $terms, 'term_id' );
							$args['tax_query'] = array(
								array(
									'taxonomy' => 'project-category',
									'field'    => 'id',
									'terms'    => array_values( $terms )
								)
							);
							$query             = new WP_Query( $args );
						}

						if ( $query->have_posts() ):
							?>
							<div class="project-right-related-box">
								<div class="side-related-projects">
									<h2><?php esc_html_e( 'Related Projects', 'inspiry-builderpress' ) ?></h2>
									<?php
									while ( $query->have_posts() ):
										$query->the_post();
										?>
										<div class="related-project-single">
											<?php the_post_thumbnail( 'inspiry_image_size_360_270' ); ?>
											<div class="wrapper-button">
												<a class="bp-button bp-button-plain button-yellow btn-slider"
												   href="<?php the_permalink(); ?>">
													<?php esc_html_e( 'View Project', 'inspiry-builderpress' ); ?><i
														class="fa fa-chevron-right"></i>
												</a>
											</div>
											<div class="wrapper-location">
												<h3><?php the_title(); ?></h3>
												<?php
												$feature_location_related = get_post_meta( get_the_ID(), 'bp-location', true );
												if ( ! empty( $feature_location_related ) ) {
													?><p
														class="featured-location"><?php echo esc_html( $feature_location_related ); ?></p><?php
												}
												?>
											</div>
										</div>
										<?php
									endwhile;
									wp_reset_postdata();
									?>
								</div>

							</div>
							<?php
						endif;
						?>

					</div>
				</div>
				<?php

			endwhile;

			$post_nav_arrow = get_theme_mod('inspiry_project_nav','true');
			if($post_nav_arrow == 'true'){
		?>
			<div class="prev-next-wrapper project-post-nav">
				<div class="row">
					<div class="col-xs-6">
						<div class="nav-previous">
							<?php previous_post_link( '%link', '<i class="fa fa-angle-left"></i> ' . esc_html__( 'Previous', 'inspiry-builderpress' ) ); ?>

						</div>
					</div>
					<div class="col-xs-6">
						<div class="nav-next">
							<?php next_post_link( '%link', esc_html__( 'Next', 'inspiry-builderpress' ) . ' <i class="fa fa-angle-right"></i>' ); ?>
						</div>
					</div>
				</div>
			</div>
		<?php
			}
		endif;
		?>
	</div>
</div>

<?php
get_footer();
?>
