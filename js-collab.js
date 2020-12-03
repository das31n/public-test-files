<script>
fetch('http://p3t99nwyerlminz1518363jd54bvzk.burpcollaborator.net/some.json', {mode: 'cors'})
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error)
  });
</script>