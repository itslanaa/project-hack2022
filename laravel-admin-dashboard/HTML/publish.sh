s3cmd del s3://demo.frontted.com/flowdash/120/* &&
s3cmd del s3://demo.frontted.com/flowdash/120/**/**/* &&
s3cmd sync -MP dist/ s3://demo.frontted.com/flowdash/120/ &&
s3cmd put -P --mime-type=text/css dist/assets/css/*.css s3://demo.frontted.com/flowdash/120/assets/css/ &&
s3cmd put -P --mime-type=text/css dist/assets/vendor/*.css s3://demo.frontted.com/flowdash/120/assets/vendor/
s3cmd put -P --mime-type=text/css dist/assets/vendor/dragula/*.css s3://demo.frontted.com/flowdash/120/assets/vendor/dragula/
s3cmd put -P --mime-type=text/css dist/assets/vendor/flatpickr/*.css s3://demo.frontted.com/flowdash/120/assets/vendor/flatpickr/
s3cmd put -P --mime-type=text/css dist/assets/vendor/fullcalendar/*.css s3://demo.frontted.com/flowdash/120/assets/vendor/fullcalendar/