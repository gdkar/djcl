<html>

<head>
 <script>
  var tok = location.hash; // #access_token= after redirection
  var xhr = new XMLHttpRequest();
  function getresource()
  {
   xhr.open("GET", "/resource.php?"+tok);
   xhr.onload = function()
   {
    document.getElementById('data').innerText = this.responseText;
   };
   xhr.send();
  }
 </script>
</head>

<body onload="getresource()">
<h1>User details</h1>
<div id="data">Loading...</div>
</body>

</html>