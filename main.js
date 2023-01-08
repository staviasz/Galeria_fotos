$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereco_nova_imagem = $('#nova-imagem').val();
        const nova_imagem =$('<li style="display: none"></li>');
        $(`<img src="${endereco_nova_imagem}"/>`).appendTo(nova_imagem);

        $(`
            <div class="overlay-img-link">
                <a href="${endereco_nova_imagem}" title="Ver imagem em tamanho real"target="_blank">
                Ver imagem em tamanho real</a>
            </div>
        `).appendTo(nova_imagem);

        $(nova_imagem).appendTo('ul');
        $(nova_imagem).fadeIn('slow');
        $('#nova-imagem').val('')
    });

});
