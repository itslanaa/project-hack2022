<?php
/*
 * Archive Services Page
 */
get_header();
get_template_part( 'partials/banner/banner-blog' );
?>
	<div class="pages-contents-area contents-services">
		<div class="container">
			<div class="contents-inner">
				<div class="row">

					<?php
					global $query;
					$cat_count      = 0;
					$count_clearfix = 1;
					if ( have_posts() ):
						while ( have_posts() ):
							the_post();
							?>
							<div class="col-md-4 col-sm-6">
								<div class="single-service-box theme-box-shadow">
									<?php if ( has_post_thumbnail() ) { ?>
										<a class="service-image" href="<?php the_permalink(); ?>">
											<figure>
												<?php the_post_thumbnail(); ?>
											</figure>
										</a>
									<?php } ?>
									<div class="service-excerpt">
										<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<div class="services-content-wrapper">
											<?php the_excerpt(); ?>
										</div>
										<a class="bp-lined mont-upper-light-gray bp-angle"
										   href="<?php the_permalink(); ?>"><?php echo esc_html__( 'view detail', 'inspiry-builderpress' ); ?>
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
						?>
						<div class="services-pagination">
							<?php
							inspiry_pagination( $wp_query );
							?>
						</div>
						<?php
					else:
						?>
						<p class="no-found"><?php echo esc_html__( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'inspiry-builderpress' ) ?></p>
						<?php
					endif;
					?>

				</div>

			</div>
		</div>
	</div>
<?php get_footer(); ?>