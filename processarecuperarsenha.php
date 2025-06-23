<?php
// Conexão com o banco de dados
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "sistema_usuarios";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Capturar o e-mail informado
$email = $_POST['email'];

// Verificar se o e-mail existe no banco
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    // Aqui você pode implementar envio de e-mail de verdade
    echo "Um link de recuperação foi enviado para o e-mail: $email (Simulação)";
} else {
    echo "E-mail não encontrado em nosso sistema.";
}

$stmt->close();
$conn->close();
?>
