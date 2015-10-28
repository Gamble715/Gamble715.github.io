<?php

$appId = 'xxxxxxxxxxxxxxx'; //Replace with your App ID
$appSecret = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; //Replace with your App Secret
$fb_id = 'xxxxxxxxxxx'; //Replace with your Facebook ID


# Don't need to edit below this line #
######################################

require 'facebook.php';
$facebook = new Facebook(array(
    'appId' => $appId,
    'secret' => $appSecret,
));

Facebook::$CURL_OPTS[CURLOPT_CAINFO] = getcwd().'/fb_ca_chain_bundle.crt';

$fbApiGetPosts = $facebook->api('/v2.1/'.$fb_id.'?fields=feed&date_format=U');

echo json_encode($fbApiGetPosts );

?>