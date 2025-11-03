const child=document.createElement("div");
child.className="card";
const image = document.createElement("img");
image.src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg";
image.width="150";
image.height="150";
const h4= document.createElement("h4");
h4.innerText ="Price: 350/-";
child.appendChild(image);
child.appendChild(h4);

const parent = document.getElementById("root");
parent.appendChild(child);