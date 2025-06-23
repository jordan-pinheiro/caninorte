<?php
session_start();

// Conexão com o banco de dados
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "sistema_usuarios";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Recebendo os dados do formulário
$email = $_POST['email'];
$senhaDigitada = $_POST['password'];

// Consulta para buscar o usuário
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $usuario = $resultado->fetch_assoc();

    // Verificar a senha
    if (password_verify($senhaDigitada, $usuario['senha'])) {
        // Login bem-sucedido
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['usuario_nome'] = $usuario['nome'];
        header("Location: site.html");  // Redireciona para o site principal
        exit();
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}

$stmt->close();
$conn->close();
?>
