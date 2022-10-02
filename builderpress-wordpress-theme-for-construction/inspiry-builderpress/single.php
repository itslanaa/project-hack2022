<?php
get_header();
get_template_part( 'partials/banner/banner-blog' );
global $post;
$grid_class = 'col-md-8';
$no_sidebar = '';
if ( ! is_active_sidebar( 'default-sidebar' ) ) {
	$grid_class = 'col-md-12';
	$no_sidebar = 'no-sidebar';
}

?>
	<div class="container">
		<div class="wrapper-page-contents">
			<div class="row">
				<div class="<?php echo esc_attr( $grid_class ); ?>">
					<div class="content-area <?php echo esc_attr( $no_sidebar ); ?>">
						<?php
						if ( have_posts() ):
							while ( have_posts() ):
								the_post();
								?>
								<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
									<?php
									if ( has_post_thumbnail() ) {
										?>
										<div class="the-post-thumbnail">
											<a data-imagelightbox="lightbox"
											   href="<?php echo get_the_post_thumbnail_url(); ?>"><?php the_post_thumbnail(); ?></a>
										</div>
										<?php
									}
									?>
									<h1 class="psost-heading-single"><?php the_title(); ?></h1>
									<div class="post-meta">
										<span class="author"><?php the_author(); ?></span>
										<span class="date"><time
												datetime="<?php the_time( 'c' ); ?>"><?php the_time( 'F j, Y' ); ?></time></span>
										<a class="comments" href="<?php comments_link(); ?>">
											<span
												class="post-count"><?php comments_number( esc_html__( '0 Comment', 'inspiry-builderpress' ), esc_html__( '1 Comment', 'inspiry-builderpress' ), esc_html__( '% Comments', 'inspiry-builderpress' ) ); ?></span>
										</a>
									</div>
									<div class="the-content-wrapper clearfix">
										<?php the_content(); ?>
									</div>
									<div class="post-tags">
										<?php the_tags( '<span class="tag-links">', '', '</span>' ); ?>
									</div>
								</article>
								<?php
							endwhile;

							wp_link_pages( array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'inspiry-builderpress' ),
								'after'  => '</div>',
							) );

						endif;

						$the_author_description = get_the_author_meta( 'description' );
						if ( ! empty( $the_author_description ) ) {
							?>
							<div class="author-detail-wrapper">
								<h2><?php esc_html_e( 'About Author', 'inspiry-builderpress' ) ?></h2>
								<div class="author-detail">
									<div class="row">
										<div class="col-sm-3">
											<a class="author-thumbnail"
											   href="<?php echo esc_url( get_author_posts_url( $post->post_author ) ); ?>"><?php echo get_avatar( get_the_author_meta( 'ID' ), 165 ); ?></a>
										</div>
										<div class="col-sm-9">
											<div class="name-social-wrapper">
												<!--author link-->
												<h3><?php the_author_posts_link(); ?></h3>
												<?php
												if( function_exists( 'inspiry_render_user_social_icons')){
													inspiry_render_user_social_icons();
                                                }
												?>
											</div>
											<p><?php echo esc_html($the_author_description); ?></p>
											<a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>" class="view-all bp-lined"><?php esc_html_e( 'View All Posts', 'inspiry-builderpress' ); ?></a>
										</div>
									</div>
								</div>
							</div>

							<?php
						}

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) {
							comments_template();
						}
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