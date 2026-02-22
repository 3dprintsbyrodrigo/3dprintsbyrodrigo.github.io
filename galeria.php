<?php
$dir = "imagenes/";
$images = glob($dir . "*.jpg"); // Cambia si tienes otros formatos
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Galería | 3D Prints by Rodrigo</title>
    <link rel="icon" href="imagenes/logo.svg">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <nav>
        <img src="imagenes/logo.svg" alt="Logo">
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="materiales.html">Materiales</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>

<section class="galeria-grid">
    <?php foreach($images as $img): 
        $filename = basename($img, ".jpg"); 
        $caption = str_replace("_", " ", $filename);
    ?>
        <div class="card">
            <img src="<?php echo $img; ?>" alt="<?php echo $caption; ?>">
            <p><?php echo ucwords($caption); ?></p>
        </div>
    <?php endforeach; ?>
</section>

<footer>
    © 2026 3D Prints by Rodrigo
</footer>

<script src="script.js"></script>
</body>
</html>
