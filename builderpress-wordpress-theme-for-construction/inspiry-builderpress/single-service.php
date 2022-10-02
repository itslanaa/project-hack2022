<?php
get_header();

get_template_part( 'partials/banner/banner-blog' );
?>

	<div class="pages-contents-area contents-service-single">
		<?php
		$files_pdf    = get_post_meta( get_the_ID(), 'bp-file-pdf-info', false );
		$info_heading = get_post_meta( get_the_ID(), 'bp-heading-info-files', true );

		$contact_phone_label    = get_theme_mod( 'contact-phone-label' );
		$contact_phone_number   = get_theme_mod( 'contact-phone-number' );
		$contact_phone_icon_png = get_theme_mod( 'contact-phone-icon-png' );

		$contact_email_label    = get_theme_mod( 'contact-email-label' );
		$contact_email_address  = get_theme_mod( 'contact-email-address' );
		$contact_email_icon_png = get_theme_mod( 'contact-email-icon-png' );

		if ( have_posts() ):

			while ( have_posts() ) :
				the_post();
				?>
				<div class="container">

					<?php
					$single_project_breadcrumbs = get_theme_mod( 'inspiry_services_breadcrumbs', 'true' );
					if ( $single_project_breadcrumbs == 'true' ) {
						inspiry_bp_custom_breadcrumbs();
					}
					?>

					<div class=" page-content-area">

						<div class="row">
							<div class="col-md-8">
								<div class="the-content-wrapper">
									<div class="content-area">
										<?php
										if ( has_post_thumbnail() ) {
											?>
											<div class="post-thumbnail">
												<?php the_post_thumbnail(); ?>
											</div>
											<?php
										}
										?>
										<div class="main-contents-projects clearfix">
											<?php the_content(); ?>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<div class="services-sidebar">
									<?php
									/*
									 * Services List
									 */
									$current_service_id = get_the_ID();
									$services_args      = array(
										'post_type'      => 'service',
										'posts_per_page' => 50
										// using 50 instead of -1 just to be on the safe side.
									);
									$services_query     = new WP_Query( $services_args );
									?>
									<div class="side-services-list">
										<ul>
											<?php
											if ( $services_query->have_posts() ):
												while ( $services_query->have_posts() ):
													$services_query->the_post();
													?>
													<li class="<?php if ( $current_service_id == get_the_ID() ) {
														echo "current";
													} ?>">
														<a href="<?php the_permalink(); ?>"><?php the_title(); ?> </a>
													</li>
													<?php
												endwhile;
												wp_reset_postdata();
											endif;
											?>
										</ul>
									</div>


									<?php
									/*
									 * Related Projects
									 */
									$project_to_service = get_post_meta( get_the_ID(), 'bp-listed-projects-to-service', false );
									if ( ! empty( $project_to_service ) ) {
										$args  = array(
											'post_type'      => 'project',
											'posts_per_page' => 10,
											'post__in'       => $project_to_service
										);
										$query = new WP_Query( $args );
										if ( $query->have_posts() ):
											?>
											<div class="side-related-projects">
												<h2><?php esc_html_e( 'Related Projects', 'inspiry-builderpress' ); ?></h2>
												<?php
												while ( $query->have_posts() ):
													$query->the_post();
													?>
													<div class="related-project-single">
														<?php the_post_thumbnail( 'inspiry_image_size_360_270' ); ?>
														<div class="wrapper-button">
															<a class="bp-button bp-button-plain button-yellow btn-slider"
															   href="<?php the_permalink(); ?>">
																<?php esc_html_e( 'View Project', 'inspiry-builderpress' ) ?>
																<i class="fa fa-chevron-right"></i>
															</a>
														</div>
														<div class="wrapper-location">
															<h3><?php the_title(); ?></h3>
															<?php
															$feature_location_related = get_post_meta( get_the_ID(), 'bp-location', true );
															if ( ! empty( $feature_location_related ) ) {
																?>
																<p class="featured-location"><?php echo esc_html( $feature_location_related ); ?></p>
																<?php
															}
															?>
														</div>
													</div>
													<?php
												endwhile;
												wp_reset_postdata();
												?>
											</div>
											<?php
										endif;
									}


									/*
									 * Brochure
									 */
									if ( ! empty( $files_pdf ) ) {
										?>
										<div class="side-brochures">
											<?php
											if ( ! empty( $info_heading ) ) {
												?><h2><?php echo esc_html( $info_heading ); ?></h2><?php
											} else {
												?>
												<h2><?php esc_html_e( 'Brochures', 'inspiry-builderpress' ); ?></h2><?php
											}

											foreach ( $files_pdf as $file ) {
												?>
												<a target="_blank" title="<?php echo get_the_title( $file ); ?>"
												   href="<?php echo wp_get_attachment_url( $file ); ?>"><?php echo get_the_title( $file ); ?></a>
												<?php
											}
											?>
										</div>
										<?php
									}


									/*
									 * Contact Phone & Email
									 */
									if ( ! empty( $contact_phone_number ) || ! empty( $contact_email_address ) ) {
										?>
										<div class="side-contact-us">
											<h2><?php esc_html_e( 'Contact Us', 'inspiry-builderpress' ); ?></h2>
											<?php
											if ( ! empty( $contact_phone_number ) ) {
												?>
												<div class="contact-box contact-phone">
													<?php
													if ( ! empty( $contact_phone_label ) ) {
														?>
														<span><?php echo esc_html( $contact_phone_label ); ?></span><?php
													}
													?>
													<p><?php echo esc_html( $contact_phone_number ); ?></p>
												<span class="icon-contacts">
													<?php
													if ( ! empty( $contact_phone_icon_png ) ) {
														?><img src="<?php echo esc_url( $contact_phone_icon_png ); ?>"
														       alt="<?php echo esc_html( $contact_phone_label ); ?>"><?php
													} else {
														include get_template_directory() . '/images/icons/phone.svg';
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
														<span><?php echo esc_html( $contact_email_label ); ?></span><?php
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
													     alt="phone">
													<?php
												} else {
													include get_template_directory() . '/images/icons/mail-read.svg';
												}
												?>
												</span>
												</div>
												<?php
											}
											?>
										</div>
										<?php
									}
									?>
								</div>
							</div>

						</div>
					</div>

				</div>
				<?php
			endwhile;

			$post_nav_arrow = get_theme_mod('inspiry_service_nav','true');
			if($post_nav_arrow == 'true'){
			?>
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="prev-next-wrapper">
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
					</div>
				</div>

			</div>

			<?php
			}
		endif;
		?>
	</div>

<?php
get_footer();
?>