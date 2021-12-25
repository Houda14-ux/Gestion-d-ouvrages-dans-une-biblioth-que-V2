class gestionOuvrage {
    listOuvrage = Array();
    constructor()
    {
    }

    rechercher(titre) {
        for (let i = 0; i < this.listOuvrage.length; i++) {
            if( this.listOuvrage[i].titre == titre){
                //alert('ouvrage trouvé');
                return i;
            }
        }
        return false;
    }

    trier(){
        this.listOuvrage.sort(function compare(ovr1,ovr2) {
            if( ovr1.titre > ovr2.titre ){
                return 1;
            }
            else if( ovr1.titre < ovr2.titre ){
                return -1;
            }else{
                return 0;
            }
        })
    }

    valider( ovr ) {
        if (ovr.titre.length > 30 || ovr.titre.length == 0) {
            alert("la longueur du titre doit êtes compris entre 1 et 30 caractaires");
            return false;
        }
        if (ovr.auteur.length > 30 || ovr.auteur.length == 0) {
            alert("la longueur du nom de l'auteur doit êtes compris entre 1 et 30 caractaires");
            return false;
        }
        ///let regexPrix = new RegExp('');
        if (/^([0-9]+)([.]{1}[0-9]{0,2}){0,1}$/.test(  ovr.prix + '' ) == false) {
            alert("Prix invalide " + ovr.prix );
            return false;
        }
        let regexString = '([0-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/([0-9]{4})';
        //var regex=new RegExp("([0-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/([0-9]{4})");
        let regexDate = new RegExp(regexString);
    
        let dateOk = regexDate.test(ovr.Datedepublication);
    
        if (dateOk == false) {
            alert("Date invalide !");
            return false;
        }
        //let regexStrEmail = '/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,4}$/';
        //let rejexemail = new RegExp(regexStrEmail)
        //let emailOk = rejexemail.test(ovr.email);
        let emailOk = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(ovr.email);
        if (emailOk == false ) {
            alert("email invalide!")
            return false;
        }
    

        return true;
    }
    
    creerEtAjouter(){
        let titre = document.getElementById('Titre').value;
        let auteur = document.getElementById('Auteur').value;
        let Prix = document.getElementById('Prix').value;
        let DateDePublication = document.getElementById('Datedepublication').value;
        let email = document.getElementById('email').value;
        let langue = document.getElementById('langue').value;
        let Type = document.querySelector('input[name="category"]:checked').value;
        let ov = new Ouvrage(titre,auteur,Prix,DateDePublication,email,langue,Type);
        this.ajouter(ov);
    }

    ajouter( ouvrage ) {
        let validation = this.valider(ouvrage);
        let recherche = this.rechercher(ouvrage.titre);
        
        if( validation == true && recherche == false ){
            let confirmer = confirm("Confirmez l'ajout de l'ouvrage \n" + ouvrage.détailOuvrage()  );
            if( confirmer == true ){
                this.listOuvrage.push(ouvrage);
            }else{
                alert('ajout annulé .');
            }
        }else{
            console.log('ouvrage non valid !');
        }
    }

    modifier(){
        let titre = document.getElementById('Titre').value;
        let auteur = document.getElementById('Auteur').value;
        let Prix = document.getElementById('Prix').value;
        let DateDePublication = document.getElementById('Datedepublication').value;
        let email = document.getElementById('email').value;
        let langue = document.getElementById('langue').value;
        let Type = document.querySelector('input[name="category"]:checked').value;
        let ouvrage = new Ouvrage(titre,auteur,Prix,DateDePublication,email,langue,Type);
        let validation = this.valider(ouvrage);

        let index = this.rechercher(ouvrage.titre);
        if( index !== false && validation === true ){
            this.listOuvrage[index].Datedepublication    = ouvrage.Datedepublication;
            this.listOuvrage[index].email    = ouvrage.email;
            this.listOuvrage[index].langue   = ouvrage.langue;
            this.listOuvrage[index].type     = ouvrage.type;
            this.listOuvrage[index].prix     = ouvrage.prix;
            this.listOuvrage[index].auteur   = ouvrage.auteur;
        }else{
            console.log(validation,index);
            alert('Ouvrage non trouvé ou non valid ');
        }

    }

    supprimer(){
        let titre = prompt('entrez le titre a supprimer !');
        let index  = this.rechercher(titre);
        if(index !== false){
            //suppression
            this.listOuvrage.splice(index, 1 );
            alert('ouvrage bien supprimer');
        }else{
            alert('ouvrage non trouvé !');
        }


    }

    détailListOuvrage()
    {
        return "le liste contien 20 ouvrage<hr>"
    }
}


// function createRow (entree) {
//     const tr = document.createElement('tr')
//     const td_titre = document.createElement('td')
//     td_titre.classList.add('titre')
//     tr.appendChild(td_titre)
//     return tr

// }


