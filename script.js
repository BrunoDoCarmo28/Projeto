function togglemode() {
        const html = document.documentElement
        html.classList.toggle("L")
      
        // pegar a tag img
        const img = document.querySelector("#profile img")
      
        // substituir a imagem
        if (html.classList.contains("L")) {
          // se tiver light mode, adicionar a imagem light
          img.setAttribute("src", "Assets/avl.png")
        } else {
          // se tiver sem light mode, manter a imagem normal
          img.setAttribute("src", "Assets/avatar.png")
        }
      }
