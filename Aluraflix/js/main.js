var imagemFilmes = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fstudioghibli.com.br%2Fwp-content%2Fuploads%2F2020%2F04%2FVidas-ao-Vento-bluray-calif%25C3%25B3rnia-filmes.jpg%3Ffit%3D830%252C987%26ssl%3D1&f=1&nofb=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/nausicaa-do-vale-do-vento-dvd-vers%C3%A1til.jpg?w=851&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/O-Servi%C3%A7o-de-Entregas-da-Kiki-vers%C3%A1til.jpg?w=670&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/DVD-Kaguya.png?w=832&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Ponyo-Uma-Amizade-que-veio-do-mar-dvd-playarte.jpg?w=756&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/O-castelo-animado-capa-playarte-dvd.jpg?w=761&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/A-Viagem-de-Chihiro-DVD.jpg?w=748&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Princesa-Mononoke-DVD-capa-vers%C3%A1til.jpg?resize=1085%2C1536&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/meu-amigo-totoro-dvd-vers%C3%A1til.jpg?w=1000&ssl=1",
    "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/Meus-Vizinhos-os-Yamadas-poster.jpg?w=846&ssl=1"
  ];
  
  document.getElementById("imagens").innerHTML = "";
  for (var i = 0; i < imagemFilmes.length; i++) {
    document.getElementById("imagens").innerHTML +=
      "<img src=" + imagemFilmes[i] + ">";
  }
  function Adicionar() {
    var link = document.getElementById("imagem").value;
  
    if (imagemFilmes.includes(link)) {
      alert("Imagem já adicionada");
    } else {
      imagemFilmes.push(link);
      document.getElementById("imagens").innerHTML = "";
      for (var i = 0; i < imagemFilmes.length; i++) {
        document.getElementById("imagens").innerHTML +=
          "<img src=" + imagemFilmes[i] + ">";
      }
    }
    console.log(imagemFilmes);
  }
  