function entrar(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    localStorage.setItem("nomeUsuario", nome);
    document.getElementById("loginBox").style.display = "none";
    let tela = document.getElementById("videoTela");
    tela.style.display = "block";
    let video = document.getElementById("meuVideo");
    video.muted = false;
    video.volume = 1;
    video.play();
    setTimeout(function() {
        window.location.href = "home.html";
    }, 60000);
}