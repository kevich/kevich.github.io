<?php

include_once('../../../../../scripts/loader_bootstrap.php');
include_once('../../../../../scripts/application_bootstrap.php');

$serviceUrl = Zend_Registry::get('bootstrap')->config()->barberry->hostname;
$barberry = new Jobplatform\Barberry($serviceUrl);

if (($_FILES['upload'] == "none") || (empty($_FILES['upload']['name']))) {
   $message = "No file uploaded.";
}
else if ($_FILES['upload']["size"] == 0) {
   $message = "The file is of zero length.";
}
else if (($_FILES['upload']["type"] != "image/pjpeg") && ($_FILES['upload']["type"] != "image/jpeg") && ($_FILES['upload']["type"] != "image/png")) {
   $message = "The image must be in either JPG or PNG format. Please upload a JPG or PNG instead.";
}
else if (!is_uploaded_file($_FILES['upload']["tmp_name"])) {
   $message = "You may be attempting to hack our server. We're on to you; expect a knock on the door sometime soon.";
}
else {
  $message = "";

  $file = $_FILES['upload'];
  $hash = $barberry->save('@'.$file['tmp_name']);
  $url = $barberry->getImageServerAddress()."/".$hash;
}

$output = sprintf("<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction('%s', '%s', '%s');</script>", $_GET['CKEditorFuncNum'], $url, $message);
echo $output;
