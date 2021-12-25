class Ouvrage {
    constructor(titre_str,auteur_str,prix,Datedepublication,email,langue,type)
    {
        this.titre = titre_str;
        this.auteur = auteur_str;
        this.prix = prix;
        this.Datedepublication = Datedepublication;
        this.email = email;
        this.langue = langue;
        this.type = type;
    }
    // modifier(titre_str,auteur_str,prix,Datedepublication,email,langue,type)
    // {
    //     this.titre = titre_str;
    //     this.auteur = auteur_str;
    //     this.prix = prix;
    //     this.Datedepublication = Datedepublication;
    //     this.email = email;
    //     this.langue = langue;
    //     this.type = type;
  
    // }

    détailOuvrage()
    {
        return "l'ouvrage : " + this.titre +" est un: "+ this.type +" en langue: " + this.langue + " écrit par : " + this.auteur + "et publié le: " + this.Datedepublication
    }
}

