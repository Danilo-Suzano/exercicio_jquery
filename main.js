$(document).ready(function(){
    

    $('#form').hide();//esconder o formulário quando a página for inicializada
    $('header button').click(function(){
        $('form').slideDown(); // criar o efeito de expansão quando clicar em nova tarefa
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp(); // criar o efeito de retração quando clicar no cancelar
    })

    $('form').on('submit',function(e){
        e.preventDefault();

        const novoItemDaLista = $('#nova-tarefa').val();
        $('ul').append(`<li>${novoItemDaLista}</li>`);
        $('#nova-tarefa').val('');
    })

    $('ul').on('click','li',function(){
        $(this).toggleClass('linha-meio');
    })
})