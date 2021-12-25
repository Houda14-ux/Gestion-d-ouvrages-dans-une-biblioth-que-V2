list = new gestionOuvrage();

// var  ovr = new Ouvrage ('le secret','hou',20.30,'20/03/2020','myemail@gemail.us','français','comic');
// var  ovr2 = new Ouvrage ('le public','houda',20.30,'20/03/2020','myemail@gemail.us','français','comic');
// var  ovr3 = new Ouvrage ('le monde','hod',20.30,'20/03/2020','myemail@gemail.us','français','comic');
// var  ovr4 = new Ouvrage ('antigone','houd',20.30,'20/03/2020','myemail@gemail.us','français','comic');
// list.ajouter(ovr);
// list.ajouter(ovr2);
// list.ajouter(ovr3);
// list.ajouter(ovr4);
// list.ajouter(ovr5);

// afficher(list);

function PrintDiv(id) {
    var data=document.getElementById(id).innerHTML;
    var myWindow = window.open('', 'my div', 'height=400,width=600');
    myWindow.document.write('<html><head><title>my div</title>');
    /*optional stylesheet*/ //myWindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    myWindow.document.write('</head><body  id="myprint" >');
    myWindow.document.write(data);
    myWindow.document.write('</body></html>');
    myWindow.print();
    myWindow.document.close(); // necessary for IE >= 10
    
}

function afficher(gestionOVR){
    document.getElementById('lignes').innerHTML = '';
    //document.getElementById('ouvrages').innerHTML = '';
    gestionOVR.trier();
    for (let i = 0; i < gestionOVR.listOuvrage.length; i++) {
        // let li = document.createElement('li');
        // li.textContent = gestionOVR.listOuvrage[i].détailOuvrage();
        // document.getElementById('ouvrages').appendChild(li);
        
        let tr = document.createElement('tr');//<tr></tr>
        let td_titre = document.createElement('td');//<td></td>
        let td_auteur = document.createElement('td');
        let td_Prix = document.createElement('td');
        let td_DateDePublication = document.createElement('td');
        let td_email = document.createElement('td');
        let td_Langue = document.createElement('td');
        let td_Type = document.createElement('td');

        td_titre.textContent = gestionOVR.listOuvrage[i].titre;//<td>Secret </td>
        td_auteur.textContent = gestionOVR.listOuvrage[i].auteur;
        td_Prix.textContent = gestionOVR.listOuvrage[i].prix;
        td_DateDePublication.textContent = gestionOVR.listOuvrage[i].Datedepublication;
        td_email.textContent = gestionOVR.listOuvrage[i].email;
        td_Langue.textContent = gestionOVR.listOuvrage[i].langue;
        td_Type.textContent = gestionOVR.listOuvrage[i].type;
        
        tr.appendChild(td_titre);//<tr id="1"><td>Secret</td></tr>
        tr.appendChild(td_auteur);//<tr id="1"><td>Secret</td><td>Auteur</td></tr>
        tr.appendChild(td_Prix);
        tr.appendChild(td_DateDePublication);
        tr.appendChild(td_email);
        tr.appendChild(td_Langue);
        tr.appendChild(td_Type);

        let lignes = document.getElementById('lignes');
        lignes.appendChild(tr);//<tr id="1"><td>Secret</td>...</td></tr>
    }
}









