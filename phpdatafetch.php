<?php

$api_url = 'https://gorest.co.in/public/v1/users';

// Read JSON file
$json_data = file_get_contents($api_url);

// Decode JSON data into PHP array
$response_data = json_decode($json_data);

// All user data exists in 'data' object
$user_data = $response_data->data;

// Cut long data into small & select only first 10 records
$user_data = array_slice($user_data, 0, 9);

// Print data if need to debug
//print_r($user_data);

// Traverse array and display user data
foreach ($user_data as $user) {
	echo "name: ".$user->name;
	echo "<br />";
	echo "name: ".$user->email;
	echo "<br /> <br />";
    echo "gender: ".$user->gender;
	echo "<br /> <br />";
    echo "status: ".$user->status;
	echo "<br /> <br />";
}

?>