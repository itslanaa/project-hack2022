<?php

get_header();

get_template_part( 'partials/banner/banner-blog' );

?>
	<div class="pages-contents-area contents-projects">
		<div class="container">
			<div class="contents-inner">
				<div class="projects-category-lists">

                    <span class="page-layout-wrapper">
						<span class="bp-grid bp-layout bp-lined">
							<?php include( get_template_directory() . '/images/icons/grid-view.svg' ); ?>
						</span>
                        <span class="bp-full bp-layout bp-lined bp-active">
							<?php include( get_template_directory() . '/images/icons/list-view.svg' ); ?>
						</span>
                    </span>

					<?php
					$queried_object           = get_queried_object();
					$current_project_category = $queried_object->name;
					$status_terms             = get_terms( array( 'taxonomy' => 'project-category' ) );

					if ( ! empty( $status_terms ) ) {
						?>
						<ul class="bp-list-lined">
							<?php
							foreach ( $status_terms as $term ) {
								?>
								<li class="<?php echo esc_attr( ( $current_project_category === $term->name ) ? 'active' : '' ); ?>">
									<a href="<?php echo esc_url( get_term_link( $term ) ); ?>">  <?php echo esc_html( $term->name ); ?> </a>
								</li>
								<?php
							}
							?>
						</ul>
						<?php
					}
					?>
				</div>

				<div class="wrapper-projects">
					<?php
					if ( have_posts() ):
						while ( have_posts() ):
							the_post();
							?>
							<!--project contents-->
							<div class="wrapper-single-box">
								<div class="single-project-box">
									<div class="image-box">
										<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'inspiry_image_size_720_540' ); ?></a>
									</div>
									<div class="detail-box">
										<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<?php
										$location_meta_value = get_post_meta( get_the_ID(), 'bp-location', true );
										if ( ! empty( $location_meta_value ) ) {
											?>
											<span
												class="location"> <?php echo esc_html( $location_meta_value ); ?></span>
											<?php
										}
										$inspiry_categories = get_the_terms( get_the_ID(), 'project-category' );
										if ( ! empty( $inspiry_categories ) ) {
											?>
											<div class="categories-fall">
												<?php
												foreach ( $inspiry_categories as $inspiry_specs_category ) {
													?>
													<a class="inspiry-specs_categories"
													   href="<?php echo esc_url( get_term_link( $inspiry_specs_category ) ); ?>">
														<?php echo esc_html( $inspiry_specs_category->name ); ?>
													</a>
													<?php
												}
												?>
											</div>
											<?php
										}
										?>
										<div class="project-excerpt">
											<?php the_excerpt(); ?>
										</div>
										<div>
											<a class="mont-upper-light-gray view-projects bp-lined"
											   href="<?php the_permalink(); ?>"> <?php esc_html_e( 'Project Detail', 'inspiry-builderpress' ) ?>
												<i class="fa fa-angle-right"></i></a>
										</div>
									</div>
								</div>
							</div>
							<?php
						endwhile;
					else:
						?>
						<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'inspiry-builderpress' ) ?></p>
						<?php
					endif;
					?>
				</div>
				<div class="template-pagination">
					<?php
					inspiry_pagination( $wp_query );
					?>
				</div>
			</div>
		</div>
	</div>

<?php get_footer(); ?>