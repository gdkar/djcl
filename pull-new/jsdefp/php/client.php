<html>

<head>
 <script>
  var tok = location.hash.substring(1);
  var xhr = new XMLHttpRequest();

  function getresource(tok)
  {
   xhr.open("GET", "resource.php?"+tok);
   xhr.onload = function()
   {
    document.getElementById('data').innerText = this.responseText;
   };
   xhr.send();
  }

  window.onload = function()
  {
   if(tok.substring(0,6)=="token=")
   {
    getresource(tok);
   }
   else
   {
    document.getElementById('data').innerHTML = '<a href="auth.php?response_type=token&client_id=test&redirect_uri=client.php">Login with OAuth</a>';
   }
  }
 </script>
</head>

<body>
<h1>Welcome to Test OAuth client</h1>
<div id="data">Loading...</div>
</body>

</html>

