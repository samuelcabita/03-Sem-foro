# 🚦 Semáforo Interativo

Este é um projeto de **Semáforo Interativo** desenvolvido com **HTML**, **CSS** e **JavaScript**. O objetivo é simular o funcionamento de um semáforo com mudanças automáticas e animadas entre as luzes (vermelho, amarelo e verde).

## 🔧 Funcionalidades

- Alterna automaticamente entre as luzes (vermelho, amarelo e verde)
- Controle manual para iniciar ou parar o semáforo
- Animação suave nas mudanças de luz

## 🚀 Tecnologias Utilizadas

- **HTML**: Estrutura base do semáforo
- **CSS**: Estilização e animação das luzes
- **JavaScript**: Lógica de controle das luzes e interatividade

## 🎨 Demonstração Visual

![Exemplo de funcionamento do semáforo](https://via.placeholder.com/400x200) <!-- Substituir pela URL de uma imagem real se tiver -->

## ⚙️ Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/semaforo-interativo.git
   ```

2. Abra o arquivo `index.html` em seu navegador para visualizar e interagir com o semáforo.

## 🌈 Animação

As mudanças entre as luzes do semáforo são feitas com animações suaves utilizando **CSS transitions**. O semáforo alterna automaticamente entre:

- 🔴 **Vermelho** (para parar)
- 🟡 **Amarelo** (atenção)
- 🟢 **Verde** (para seguir)

As animações fazem com que as transições entre as cores sejam mais visíveis e agradáveis aos olhos.

```css
.light {
  transition: background-color 0.5s ease;
}
```

## 📂 Estrutura do Projeto

```bash
semaforo-interativo/
│
├── index.html      # Estrutura do semáforo
├── style.css       # Estilos e animações
└── script.js       # Lógica de controle do semáforo
```

## 📈 Melhorias Futuras

- Adicionar sons para cada mudança de luz
- Implementar um timer visível para cada estado do semáforo
- Suporte a diferentes tipos de semáforos (ex: pedestres, bicicletas)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/semaforo-interativo/issues) ou enviar um pull request.

---

**Autor**: Samuel Cabita
**Licença**: MIT
```

Esse exemplo inclui animação no código CSS para suavizar a transição das luzes e uma estrutura clara para o projeto. Caso você tenha uma imagem ou GIF do semáforo funcionando, você pode substituir o placeholder no Markdown.
