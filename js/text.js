  const text = "Lorem ipsum dolor, sit amet con sectetur adipisicing elit. Voluptas, officiis deleniti omnis consequuntur aliquid rem  landitiis perspiciatis sunt soluta est, quibusdam aliquam. Perferendis cupiditate autem aspernatur eum reiciendis eligendi fugit. Ea reprehenderit vitae, iusto in explicabo deleniti voluptates nobis ratione amet placeat voluptatem libero a odio, suscipit minus commodi tenetur magni iure, consequuntur similique voluptas ad fugiat. Quis, itaque nobis. Iure debitis aperiam tempore ea rem suscipit error minima illo laudantium! Debitis ipsum quibusdam voluptatem mollitia. Repudiandae, numquam est expedita odit at ab aliquam, veritatis illum quae, hic dolorum inventore? Laudantium quasi maiores eligendi sit aut quos modi quae, obcaecati in voluptas ratione incidunt! Ipsum maxime, veritatis ipsa itaque beatae ab molestias exercitationem sapiente veniam tempora cumque expedita accusamus eveniet."


  const htmlParagraph = document.querySelector('#restOfPage')

  const setText = () => {
      for (let i = 1; i < 5; i++) {
          htmlParagraph.textContent += text;
      }
  }

  window.onload = setText()