# 🏡 Refúgio Araçá - Website Oficial

Website moderno e responsivo para a Pousada Refúgio Araçá, localizada em Morro Redondo/RS.

## 🚀 Como executar o projeto

### 1️⃣ Pré-requisitos

- Node.js instalado (v16 ou superior) - [Download aqui](https://nodejs.org)

### 2️⃣ Instalação

```bash
# Clone ou baixe o projeto
# Entre na pasta
cd refugio-araca

# Instale as dependências
npm install
```

### 3️⃣ Configurar Tailwind CSS

```bash
# Criar arquivo de configuração do PostCSS
echo "export default { plugins: { tailwindcss: {}, autoprefixer: {} } }" > postcss.config.js
```

### 4️⃣ Adicionar imagens

Crie a estrutura de pastas em `public/`:

```
public/
└── images/
    ├── hero.jpg (imagem principal)
    ├── pitanga/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── ... (6 fotos)
    ├── butia/
    │   └── (6 fotos)
    ├── bergamota/
    │   └── (6 fotos)
    ├── amora/
    │   └── (6 fotos)
    └── area-externa/
        └── (6 fotos)
```

**📸 Dica**: Otimize as imagens antes:

- Tamanho máximo: 1920x1080px
- Formato: JPG (qualidade 80%)
- Use ferramentas como [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app)

### 5️⃣ Executar em desenvolvimento

```bash
npm run dev
```

Abra: http://localhost:5173

### 6️⃣ Build para produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

---

## 📁 Estrutura do Projeto

```
refugio-araca/
├── public/
│   └── images/          # Suas fotos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Acomodacoes.jsx
│   │   ├── ReservaModal.jsx
│   │   ├── CabanaModal.jsx
│   │   ├── Localizacao.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppFloat.jsx
│   │   └── Logo.jsx
│   ├── data/
│   │   └── cabanas.js   # Dados das cabanas
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entrada do React
│   └── index.css        # Estilos globais
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎨 Personalizações

### Alterar cores

Edite `tailwind.config.js`:

```javascript
colors: {
  'araca-green': '#4A5D3F',    // Verde principal
  'araca-brown': '#3D2817',     // Marrom escuro
  'araca-terracota': '#B8764F', // Terracota
  'araca-beige': '#E8DCC4',     // Bege
}
```

### Alterar textos

Edite `src/data/cabanas.js` - todos os textos e informações estão centralizados lá.

### Adicionar mais cabanas

Adicione novos objetos no array `cabanas` em `src/data/cabanas.js`.

---

## 🌐 Deploy Gratuito

### Opção 1: Vercel (Recomendado)

1. Crie conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Faça o deploy:
   ```bash
   vercel
   ```
4. Siga as instruções no terminal
5. Seu site estará no ar em segundos!

### Opção 2: Netlify

1. Crie conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` (depois de `npm run build`) para o Netlify Drop
3. Pronto!

---

## 🔧 Tecnologias Utilizadas

- **React 18** - Interface moderna
- **Vite** - Build super rápido
- **Tailwind CSS** - Estilização profissional
- **Lucide React** - Ícones modernos

---

## 📝 Checklist de Deploy

- [ ] Todas as imagens adicionadas e otimizadas
- [ ] Textos revisados em `src/data/cabanas.js`
- [ ] Telefone e email corretos
- [ ] Links de redes sociais funcionando
- [ ] Testado no mobile
- [ ] Build executado sem erros (`npm run build`)
- [ ] Deploy realizado

---

## 🆘 Problemas Comuns

**Erro: "Cannot find module"**

```bash
npm install
```

**Imagens não aparecem**

- Verifique se estão em `public/images/`
- Caminhos devem começar com `/images/`

**Tailwind não funciona**

- Verifique se `tailwind.config.js` existe
- Execute `npm install` novamente

---

## 📞 Suporte

Para dúvidas sobre o código, entre em contato através do email: contato@refugioaraca.com.br

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para o Refúgio Araçá.

---

**Desenvolvido com ❤️ para o Refúgio Araçá**
