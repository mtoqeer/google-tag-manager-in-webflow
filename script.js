<script>
$(document).ready(function(event) {
  /* Extract GTAG <noscript> from <div> created by HTML embed*/
  $("#gtag-div").replaceWith(function() { return $(':first', this); });
});
</script>
