<!DOCTYPE html>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">

      <?php include("includes/common/head.php"); ?>
      <script src="resources/js/index.js"></script>
      <link href="resources/css/index.css" rel="stylesheet">
  </head>

  <body>
    <?php include("includes/common/header.php"); ?>
    <div class="container">
      <div class="row padd-side15">
        <div class="col-xs-12 body-content">
          <div class="col-xs-12 col-sm-9">
            <?php
              function curPageURL() {
                 $pageURL = 'http';
                 $pageURL .= "://";
                 if ($_SERVER["SERVER_PORT"] != "80") {
                  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
                 } else {
                  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
                 }
                 return $pageURL;
              }
              $arr=parse_url(curPageURL());
              $pathSplit=explode("/",$arr["path"]);
              $page=$pathSplit[count($pathSplit)-1];
              if (!empty($page)) {
                $view=explode(".",$pathSplit[count($pathSplit)-1]);
                include("includes/".$view[0].".php");
              } else {
                include("includes/index.php");
              }
            ?>
          </div>
          <div id="panier" class="col-sm-3 hidden-xs" style="border: 1px solid black;">
            <h3>Panier</h3>
            <div style="height: 150px;">
            </div>
          </div>
        </div>  
      </div>
    </div>
    <?php include("includes/common/footer.php"); ?>
  </body>
</html>