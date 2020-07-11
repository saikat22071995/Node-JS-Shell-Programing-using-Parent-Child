module.exports = function (username, password) {
    this.username = username;
    this.password = password;
    this.checkUserAndPass = function () { 
        if(this.username==='saikat' && this.password==='saikat'){
            return 'Logged In Successfully';
        }else{
            return 'Autrhentication Failed';
        }
    }
}