<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Links -->
        <link rel="shortcut icon" href="{{ asset('storage/icon/icon.png') }}" type="image/x-icon">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- JS -->
        <script defer src="{{ asset('js/main.js') }}"></script>

        <title>Pokédex</title>

    </head>
    <body>
        <main>

            <img src="" class="pokemon_image">

            <h1 class="pokemon_data">
                <span class="pokemon_number"></span> -
                <span class="pokemon_name"></span>
            </h1>

            <form class="form">

                <input type="search" class="input_search" placeholder="Nome ou Numero" required>

            </form>

            <div class="buttons">

                <button class="button btn-prev">Anterior &lt;</button>
                <button class="button btn-next">Proximo &gt;</button>

            </div>

            <img src="{{ asset('storage/images/pokedex.png') }}" alt="Pokédex" class="pokedex">

        </main>
    </body>
</html>
