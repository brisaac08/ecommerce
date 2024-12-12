function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuario registrado con éxito');
}

function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas');
    }
}
