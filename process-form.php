
<?php 
$nombre = htmlspecialchars $_POST['nombre'];
$email = htmlspecialchars $_POST['email'];
$telefono = htmlspecialchars $_POST['telefono'];
$mensaje = htmlspecialchars $_POST['mensaje'];


echo "El nombre recibido es: " . $nombre . "<br/>"; 
echo "El mail recibido es: " . $email . "<br/>"; 
echo "El teléfono recibido es: " . $telefono . "<br/>"; 
echo "El mensaje recibido es: " . $mensaje . "<br/>"; 
?>

