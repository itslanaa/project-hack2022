jQuery( document ).ready( function() {

    /**
     * Multiple Checkbox Control
     */

    jQuery( '.customize-control-multiple-checkbox input[type="checkbox"]' ).on(
        'change',
        function() {

            var checkbox_values = jQuery( this ).parents( '.customize-control' ).find( 'input[type="checkbox"]:checked' ).map(
                function() {
                    return this.value;
                }
            ).get().join( ',' );

            jQuery( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).val( checkbox_values ).trigger( 'change' );
        }
    );

} ); // jQuery( document ).ready
