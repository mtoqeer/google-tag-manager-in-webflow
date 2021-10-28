# Google Tag Manager In Webflow

### Found a solution:
* Follow https://webflow.com/blog/integrating-google-tag-manager-with-google-analytics-in-webflow
* Add the id "gtag-div" to the HTML embed

Add the following to the Project Custom Code Footer to remove the wrapping

```javascript
<script>
$(document).ready(function(event) {
  /* Extract GTAG <noscript> from <div> created by HTML embed*/
  $("#gtag-div").replaceWith(function() { return $(':first', this); });
});
</script>
```

### Youtube Video Link

[How To Install Google Tag Manager In Webflow](https://youtu.be/t4zkStLyw-E)

