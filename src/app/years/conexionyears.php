<?php
$serverName = ".\\SQLEXPRESS"; // Nombre de la instancia SQL Server
$connectionOptions = array(
     "Database" => "DBIMAVA",
     "CharacterSet" => "UTF-8"
 );
 

// Establecer la conexión
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die(print_r(sqlsrv_errors(), true));
}

// Realizar la consulta a la tabla AÑO
$query = "SELECT * FROM [AÑO]";
$result = sqlsrv_query($conn, $query);

if (!$result) {
    die(print_r(sqlsrv_errors(), true));
}

// Obtener los resultados y convertirlos a un array
$data = array();
while ($row = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
    $data[] = $row;
}

// Enviar los datos como JSON al cliente
header('Content-Type: application/json');
echo json_encode($data);

// Cerrar la conexión
sqlsrv_close($conn);
?>
