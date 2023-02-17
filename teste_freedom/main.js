function valida (fm) {
  if(fm.setor.value == "" || fm.setor.value == null) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, digite o nome do setor da empresa"
    + "e verifique se digitou mais que 3 caracteres.");
    //Foi definido um focus no campo.
    fm.setor.focus();
    //o form não é enviado.
    return false;
  }

  if(fm.responsavel.value == "" || fm.responsavel.value == null) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, digite o nome do responsável da empresa."
    + "e verifique se digitou mais que 3 caracteres.");
    //Foi definido um focus no campo.
    fm.responsavel.focus();
    //o form não é enviado.
    return false;
  }

  if(fm.tipo.value == "" || fm.tipo.value == null) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, digite o nome do tipo da ocorrência da empresa.");
    //Foi definido um focus no campo.
    fm.tipo.focus();
    //o form não é enviado.
    return false;
  }

  if(fm.exampleFormControlTextarea1.value == "" || 
  fm.exampleFormControlTextarea1.value == null
  || fm.exampleF0) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, digite a descrição da ocorrência."
    + "e verifique se digitou mais que 10 caracteres.");
    //Foi definido um focus no campo.
    fm.exampleFormControlTextarea1.focus();
    //o form não é enviado.
    return false;
  }

  let checkbox = document.getElementById('list1');
  let checkbox2 = document.getElementById('list2');
  let checkbox3 = document.getElementById('list3');

  if(checkbox.checked || checkbox2.checked || checkbox3.checked ) {
    return true;
  } else {
    alert("Marque alguma(s) opção(es) da natureza da ocorrência");
    checkbox.focus();
    checkbox2.focus();
    checkbox3.focus();
    return false;
  }

  if(fm.plano.value == "" || fm.plano.value == null) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, selecione o plano de contingência da empresa.");
    //Foi definido um focus no campo.
    fm.plano.focus();
    //o form não é enviado.
    return false;
  }

  if(fm.responsavel2.value == "" || fm.responsavel2.value == null
) {
    //É mostrado um alerta, caso o campo esteja vazio.
    alert("Por favor, digite o nome do responsavel da ocorrência."
    + "e verifique se digitou mais que 3 caracteres.");
    //Foi definido um focus no campo.
    fm.responsavel2.focus();
    //o form não é enviado.
    return false;
  }
}

function limpar() {
  fm.value == null;
}