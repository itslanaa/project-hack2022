<?php
get_header();

// Banner
get_template_part( 'partials/banner/banner-blog' );

?>
	<div class="container">
		<div class="wrapper-page-contents <?php builderpress_content_width('default-sidebar'); ?>">
			<div class="row">

				<div class="col-md-8">
					<div class="content-area">
						<?php if ( have_posts() ):
							while ( have_posts() ):
								the_post(); ?>
								<!--blog post-->
								<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

									<?php
									if ( has_post_thumbnail() ) {
										?>
										<div class="the-post-thumbnail">
											<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
										</div>
										<?php
									}
									?>

									<h2 class="post-heading">
										<?php if ( is_sticky() ) { ?>
											<span class="sticky-pin-icon"><?php include( get_template_directory() . '/images/icons/pin.svg' ); ?></span>
										<?php } ?>
										<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
									</h2>

									<div class="post-meta">
										<span class="author"><?php the_author(); ?></span>
										<span class="date"><time datetime="<?php the_time( 'c' ); ?>"><?php the_time( 'F j, Y' ); ?></time></span>
										<a class="comments" href="<?php echo esc_url( get_comments_link() ); ?>">
											<span class="post-count"><?php comments_number( esc_html__( '0 Comment', 'inspiry-builderpress' ), esc_html__( '1 Comment', 'inspiry-builderpress' ), esc_html__( '% Comments', 'inspiry-builderpress' ) ); ?></span>
										</a>
									</div>
									<div class="the-content-wrapper">
										<?php the_excerpt(); ?>
									</div>
									<a class="read-more bp-lined" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Read More', 'inspiry-builderpress' ); ?></a>
								</article>
								<!--blog post ends-->

								<?php
							endwhile;

							inspiry_pagination( $wp_query );

						else:
							?>
							<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'inspiry-builderpress' ) ?></p>
							<?php
						endif;
						?>
					</div>
				</div>
				<?php if ( is_active_sidebar( 'default-sidebar' ) ) : ?>
					<div class="col-md-4">
						<?php get_sidebar(); ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>

<?php get_footer() ?>