function validacao () {
if (form.fielset.nome.value=="") {
    alert ("Por favor preencha o campo nome.");
    form.fielset.nome.focus ();
    return false;
}
}