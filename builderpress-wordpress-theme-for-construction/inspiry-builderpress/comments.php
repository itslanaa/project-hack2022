<?php
/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}

if ( have_comments() ) {
	?>
	<div class="comments-single" id="comments">
		<h2 class="comments-heading"><?php comments_number( esc_html__( 'No Comment', 'inspiry-builderpress' ), esc_html__( 'One Comment', 'inspiry-builderpress' ), esc_html__( '% Comments', 'inspiry-builderpress' ) ); ?></h2>
		<ul class="commentlist">
			<?php wp_list_comments( array( 'callback' => 'inspiry_theme_comment' ) ); ?>
		</ul>
		<?php
		if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) {
			?>
			<nav class="pagination comments-pagination">
				<?php paginate_comments_links(); ?>
			</nav>
			<?php
		}
		?>
	</div>
	<?php
}

if ( ! comments_open() && '0' != get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) {
	?><p class="nocomments"><?php esc_html_e( 'Comments are closed.', 'inspiry-builderpress' ); ?></p><?php
}

$commenter = wp_get_current_commenter();
$req       = get_option( 'require_name_email' );
$aria_req  = ( $req ? " aria-required='true'" : '' );
$fields    = array(
	'author' =>
		'<p class="comment-form-author"><label for="author"></label> ' .
		( $req ? '<span class="required"></span>' : '' ) .
		'<input placeholder="'. esc_html__( 'Name', 'inspiry-builderpress') . '"  id="author" name="author" type="text" value="' . esc_attr( $commenter[ 'comment_author' ] ) .
		'" size="30"' . $aria_req . ' /></p>',

	'email' =>
		'<p class="comment-form-email"><label for="email"></label> ' .
		( $req ? '<span class="required"></span>' : '' ) .
		'<input placeholder="'. esc_html__( 'Email', 'inspiry-builderpress') . '" id="email" name="email" type="text" value="' . esc_attr( $commenter[ 'comment_author_email' ] ) .
		'" size="30"' . $aria_req . ' /></p>',
);

$comments_args = array(
	'title_reply'          => esc_html__( 'Leave a Comment', 'inspiry-builderpress' ),
	'fields'               => apply_filters( 'comment_form_default_fields', $fields ),
	'comment_notes_before' => '<p class="comment-notes"></p>',
	'comment_field'        => '<p class="comment-form-comment"><label for="comment"></label>
    							<textarea placeholder="'. esc_html__( 'Comment', 'inspiry-builderpress') . '" id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>',

);
comment_form( $comments_args );
?>