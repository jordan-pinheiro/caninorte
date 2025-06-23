<?php
// Conexão com o banco de dados (ajuste os dados abaixo conforme seu servidor)
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "sistema_usuarios";

$conn = new mysqli($host, $usuario, $senha, $banco);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Receber dados do formulário
$nome = $_POST['name'];
$sobrenome = $_POST['last_name'];
$data_nascimento = $_POST['birthdate'];
$email = $_POST['email'];
$senha = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Criptografando a senha
$genero = $_POST['gender'];

// Gravar no banco
$sql = "INSERT INTO usuarios (nome, sobrenome, data_nascimento, email, senha, genero) 
        VALUES ('$nome', '$sobrenome', '$data_nascimento', '$email', '$senha', '$genero')";

if ($conn->query($sql) === TRUE) {
    echo "Conta criada com sucesso!";
    // Redirecionar para a página de login
    header("Location: login.html");
    exit();
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
