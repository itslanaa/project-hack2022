<?php
/*
 * Template Name: Projects Template
 */
get_header();
get_template_part( 'partials/banner/banner-blog' );
?>
	<div class="pages-contents-area contents-projects">
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
				$projects_heading_under_banner = get_post_meta( get_the_ID(), 'bp-page-heading', true );
				$projects_text_under_banner    = get_post_meta( get_the_ID(), 'bp-page-text', true );

				if ( ! empty( $projects_heading_under_banner ) || ( ! empty( $projects_text_under_banner ) ) ) {
					?>
					<div class="wrapper-heading-inner-pages">
						<div class="row">
							<div class="col-md-5 col-lg-4">
								<?php
								if ( ! empty( $projects_heading_under_banner ) ) {
									?>
									<h2><?php echo esc_html( $projects_heading_under_banner ); ?></h2>
									<?php
								}
								?>
							</div>
							<div class="col-md-7 col-lg-8">
								<?php
								if ( ! empty( $projects_text_under_banner ) ) {
									?>
									<p><?php echo esc_html( $projects_text_under_banner ); ?></p>
									<?php
								}
								?>
							</div>
						</div>
					</div>
					<?php
				}
				global $paged;

				$post_per_page_meta = get_post_meta( get_the_ID(), 'bp-page-posts-count', true );
				if ( ! empty( $post_per_page_meta ) ) {
					$post_per_page = $post_per_page_meta;
				} else {
					$post_per_page = 6;
				}
				$project_args   = array(
					'post_type'      => 'project',
					'posts_per_page' => $post_per_page,
					'paged'          => $paged,
				);
				$current_cat_bp = "";
				if ( isset( $_GET['project-cat'] ) && $_GET['project-cat'] != "all" ) {
					$current_cat_bp            = $_GET['project-cat'];
					$project_args['tax_query'] = array(
						array(
							'taxonomy' => 'project-category',
							'field'    => 'slug',
							'terms'    => $current_cat_bp,
						),
					);
				}
				?>

				<div class="projects-category-lists">
                    <span class="page-layout-wrapper">
                        <?php
                        $page_layout = get_post_meta( get_the_ID(), 'bp-page-layout-option', true );
                        ?>

	                    <span class="bp-grid bp-layout  bp-lined <?php if ( $page_layout == 'grid' ) {
		                    echo "bp-active";
	                    } ?>"><?php include( get_template_directory() . '/images/icons/grid-view.svg' ); ?></span>

                        <span class="bp-full bp-layout bp-lined  <?php if ( $page_layout == 'full' ) {
	                        echo "bp-active";
                        } ?>"><?php include( get_template_directory() . '/images/icons/list-view.svg' ); ?></span>
                    </span>

					<?php
					$status_terms = get_terms( array( 'taxonomy' => 'project-category' ) );
					?>

					<ul class="bp-list-lined">
						<li class="<?php echo esc_attr( $current_cat_bp == null ) ? 'active' : ''; ?>">
							<a href="?project-cat=all"><?php esc_html_e( 'All', 'inspiry-builderpress' ) ?></a>
						</li>
						<?php
						if ( ! empty( $status_terms ) ) {

							foreach ( $status_terms as $term ) {
								?>
								<li class="<?php echo esc_attr( ( $current_cat_bp === $term->name ) ? 'active' : '' ); ?>">
									<a href="<?php echo esc_url( "?project-cat=" . $term->name ); ?>">  <?php echo esc_html( $term->name ); ?> </a>
								</li>
								<?php
							}

						}
						?>
					</ul>
				</div>

				<div class="wrapper-projects <?php if ( $page_layout == 'grid' ) {
					echo "wrapper-projects-grid";
				} ?>">
					<?php
					$project_query = new WP_Query( $project_args );
					if ( $project_query->have_posts() ):
						while ( $project_query->have_posts() ):
							$project_query->the_post();
							?>

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
											<?php
											the_excerpt();
											?>
										</div>
										<?php
										?>
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
						wp_reset_postdata();
					else: ?>
						<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'inspiry-builderpress' ) ?></p>
						<?php
					endif;
					?>

				</div>
				<div class="template-pagination">
					<?php
					inspiry_pagination( $project_query );
					?>
				</div>

			</div>
		</div>
	</div>

<?php get_footer(); ?>