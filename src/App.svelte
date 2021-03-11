<!--
Copyright (c) 2021 genshin.dev
Licensed under the Open Software License version 3.0
-->
<script lang="typescript">
  import Anchor from './components/Anchor.svelte';
</script>

<header>
  <h1>genshin.dev</h1>
  <h2>A fan-made Genshin Impact API for easy access to game data.</h2>
</header>
<main>
  <p>
    Explore the
    <Anchor href="https://api.genshin.dev/" label="genshin.dev API GitHub">
      genshin.dev API via your browser
    </Anchor>
  </p>
  <p>
    <span class="soon">Or check out the genshin.dev API documentation</span>
    <span>Soon™️</span>
  </p>
  <p>
    Check out the source code for the
    <Anchor
      href="https://github.com/genshindev/api"
      label="genshin.dev API GitHub"
    >
      genshin.dev API on GitHub
    </Anchor>
  </p>
  <p>
    Check out the source code for
    <Anchor
      label="genshin.dev Website GitHub"
      href="https://github.com/genshindev/web"
    >
      this website on GitHub
    </Anchor>
  </p>
  <p>
    Follow us on
    <Anchor label="genshin.dev Twitter page" href="https://twitter.com/genshindev">
      our Twitter page
    </Anchor>
    for updates
  </p>
  <p>
    And don't forget to join
    <Anchor label="genshin.dev Discord server" href="https://discord.gg/M8t9nFG">
      our Discord server
    </Anchor>
    to get help with the API
  </p>
</main>
<footer>
  <p>
    genshin.dev isn’t endorsed by
    <Anchor href="https://mihoyo.com" label="miHoYo">miHoYo</Anchor> and doesn’t
    reflect the views or opinions of miHoYo or anyone officially involved in producing
    or managing
    <Anchor href="https://genshin.mihoyo.com" label="Genshin Impact">
      Genshin Impact
    </Anchor>.
    <br />
    Genshin Impact and miHoYo are trademarks or registered trademarks of miHoYo.
    Genshin Impact © miHoYo.
  </p>
  <p>
    Built with ♥️ by
    <Anchor href="https://nurmarv.in" label={'Marvin "NurMarvin" Witt'}>
      Marvin "NurMarvin" Witt
    </Anchor>
    and all
    <Anchor
      label="genshin.dev API contributor list"
      href="https://github.com/genshindev/api/graphs/contributors"
    >
      contributors on GitHub
    </Anchor>
  </p>
</footer>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100vh;

    margin: 0;
    background: #000;
    color: #fff;
    font-family: 'Karla', sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  header h1 {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }

  header h2 {
    font-size: 1.5rem;
    max-width: 60%;
    font-weight: bold;
    text-align: center;
    margin: 8px auto;
  }

  main {
    text-align: center;
  }

  main span.soon {
    text-decoration: line-through;
  }
  footer {
    position: absolute;
    margin-bottom: 1rem;
    bottom: 0;
    text-align: center;
    max-width: 600px;
  }

  @media screen and (max-width: 720px) {
    header h1 {
      font-size: 2rem;
    }
    header h2 {
      font-size: 1.2rem;
    }

    main p {
      font-size: 0.8rem;
    }

    footer {
      font-size: 0.8rem;
    }
  }
</style>
