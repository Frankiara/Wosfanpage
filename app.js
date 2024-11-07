function changeimage (x,image)

{
	if(x==1)
	{
		image.src='imagenes/tienda/remerae.jpg';
	}
	else
	if(x==2)
	{
		image.src='imagenes/tienda/remeraf.jpg';
	}
}

function changeim (x,image)

{
	if(x==1)
	{
		image.src='imagenes/tienda/gorrae.jpg';
	}
	else
	if(x==2)
	{
		image.src='imagenes/tienda/gorra1f.jpg';
	}
}

function changeimag (x,image)

{
	if(x==1)
	{
		image.src='imagenes/tienda/buzoe.jpg';
	}
	else
	if(x==2)
	{
		image.src='imagenes/tienda/buzof.jpg';
	}
}

function changeima (x,image)

{
	if(x==1)
	{
		image.src='imagenes/tienda/remera2e.jpg';
	}
	else
	if(x==2)
	{
		image.src='imagenes/tienda/remera2f.jpg';
	}
}





document.getElementById('dropdownButton').onclick = function() {
    document.getElementById('dropdownContent').classList.toggle('show');
}

// Cierra el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}