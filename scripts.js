function comentar(comentario){
	var div = document.createElement('div');
	var img = document.createElement('img');
	var p = document.createElement('p');

	img.src="imagenes/user.png";
	p.innerHTML=comentario;
	div.appendChild(img);
	div.appendChild(p);
	comentarios.appendChild(div);

	comment.value="";
}