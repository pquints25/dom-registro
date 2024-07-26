let btnRegistrar = document.querySelector('.btn');
btnRegistrar.addEventListener('click',function(){
  let txtCorreo = document.querySelector("#txtCorreo");
  let txtClave = document.querySelector("#txtClave");
  let txtNombreUsuario = document.querySelector("#txtNombreUsuario");
  let reSoloCadenas = new RegExp("^[a-zA-z]+$");
  let reFormaClave = "";
  let reFormaCorreo = "";
  if (txtCorreo.value == 'que tenga estructura de correo'){

  }
  if(txtClave.value == 'que sea una clave fuerte'){

  }
  if(reSoloCadenas.test(txtNombreUsuario.value)){
    console.log('Cumple');

  }else {
    console.log('No cumple');
  }
});

//expresion regular: regex
// : un conjunto de caracteres especiales con significado que logran plantear un partron a cumplir