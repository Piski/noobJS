<?php

if(isset($_GET['data_1']) && isset($_GET['data_2'])) {
	$data_1 =  $_GET['data_1'];
	$data_2 =  $_GET['data_2'];
} else {
	echo "nothing was set";
}

echo $data_1;

?>