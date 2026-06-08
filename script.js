function buscarNoticias(){

const noticias = [

{
titulo:"Flamengo próximo de anunciar reforço",
resumo:"Negociação avançada com atleta internacional."
},

{
titulo:"Verstappen lidera treino livre",
resumo:"Piloto da Red Bull fecha treino na liderança."
},

{
titulo:"Novo uniforme é apresentado",
resumo:"Clube divulga novo uniforme para temporada."
}

];

let html = "";

noticias.forEach(noticia => {

html += `
<div class="card">

<h2>${noticia.titulo}</h2>

<p>${noticia.resumo}</p>

</div>
`;

});

document.getElementById("feed").innerHTML = html;

}
