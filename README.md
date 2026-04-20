# ❌ No-as-a-Service

<p align="center">
<img src="https://raw.githubusercontent.com/hotheadhacker/no-as-a-service/main/assets/imgs/naas-with-no-logo-bunny.png" width="800" alt="No-as-a-Service Banner" width="70%"/>



Já precisou de uma forma elegante de dizer “não”?
Esta pequena API retorna razões de rejeição aleatórias, genéricas, criativas e às vezes hilárias — perfeitamente adequadas para qualquer cenário: pessoal, profissional, vida estudantil, vida de desenvolvedor, ou simplesmente porque sim.

Feito para humanos, desculpas e humor.

<!-- GitAds Sponsorship Badge -->
<p align="center">
<a href="https://docs.gitads.dev/">
<img src="https://gitads.dev/assets/images/sponsor/camos/camo-3.png" alt="Sponsored by GitAds" />
</a>


<p align="center">
Este projeto é <strong>patrocinado por <a href="https://docs.gitads.dev/docs/getting-started/publishers">GitAds</a></strong>.<br>
Você também pode patrocinar seu repositório GitHub — <a href="https://docs.gitads.dev/docs/getting-started/publishers">crie sua conta agora</a>.


---

## 🚀 Uso da API

**URL Base**
```
https://naas.isalman.dev/no
```

**Método:** `GET`
**Limite de Requisições:** `120 requisições por minuto por IP`

### 🔄 Exemplo de Requisição
```http
GET /no
```

### ✅ Exemplo de Resposta
```json
{
"reason": "Isso parece algo que o Eu do Futuro gritaria para o Eu do Presente por ter concordado."
}
```

Use em aplicativos, bots, páginas de destino, integrações com Slack, cartas de rejeição, ou onde quer que precise de um não educado (ou espirituoso).

---

## 🛠️ Executando Localmente

Quer rodar na sua máquina? É simples e leve

### 1. Clone este repositório 
```bash
git clone https://github.com/VitaoDeveloper/no-as-a-service-portuguese-ts.git
cd no-as-a-service-portuguese-ts
```

### 2. Instale as dependências (Necessário ter o Node.js instalado)
```bash
npm install
```

### 3. Inicialize o servidor
```bash
npm start
```

A API ficará hospedada temporariamente em:
```
http://localhost:3000/no
```

Você também pode alterar a porta por meio da variável de ambiente:
```bash
PORT=5000 npm start
```

---

## 📁 Estrutura do Projeto

```
no-as-service/
├── index.js            # API com Express.js
├── reasons.json        # 1000+ desculpas universais aleatórias
├── package.json
├── .devcontainer.json  # Arquivo de configuração do devcontainer VS Code / Github
└── README.md
```

---

## 📦 package.json

Pela formalidade, essa é a configuração do package:

```json
{
  "name": "no-as-service",
  "version": "1.0.0",
  "description": "A lightweight API that returns random rejection or no reasons.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "hotheadhacker",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## ⚓ Devcontainer

If you open this repo in Github Codespaces, it will automatically use `.devcontainer.json` to set up your environment.  If you open it in VSCode, it will ask you if you want to reopen it in a container.

---
## Projects Using No-as-a-Service

Here are some projects and websites that creatively integrate [no-as-a-service](https://naas.isalman.dev/no) to deliver humorous or programmatic "no" responses:

1. **[no-as-a-service-rust](https://github.com/ZAZPRO/no-as-a-service-rust)**  
   Rust implementation of this project.

2. **[CSG Admins](https://csg-admins.de)**  
   A system administration and gaming service hub using no-as-a-service to provide playful negative responses across some admin panels and commands.

3. **[FunnyAnswers - /no endpoint](https://www.funnyanswers.lol/no)**  
   A humor-focused API playground that includes a mirror or wrapper for no-as-a-service, perfect for developers exploring fun HTTP-based responses.

4. **[Gerador de Frases Aleatórias (pt-BR)](https://github.com/timeuz/frases-aleatorias)**
   Uma reinterpretação em Python com frases em português, frontend e novas categorias.

5. **[NoAsAnApp](https://github.com/omar-jarid/NoAsAnApp)**  
   A simple native Android app calling no-as-a-service to provide negative responses.

6. **[FunnyReasons](https://github.com/amitbiswal007/FunnyReasons)**  
   A simple Web app using `no-as-a-service` to provide funny reasons to say No.

7. **[How About No?](https://github.com/lloyd094/How-About-No-)**
   A basic GUI using no-as-a-service as the backend. Built with docker in mind.
   
8. **[no-as-a-service-asp](https://github.com/sapph42/no-as-a-service)**  
   A straight-forward implementation of NaaS in ASP.NET Core
   
9. **[No as a Service - Raycast Extension](https://www.raycast.com/nedini/no-as-a-service)**  
   Get a random No from within Raycast. Just install the extension from the Raycast store, open Raycast, then type in 'Random No'. Raycast extension: [No as a Service](https://www.raycast.com/nedini/no-as-a-service).
10. **[Nopeify]([https://github.com/omar-jarid/NoAsAnApp](https://apps.apple.com/us/app/nopeify/id6757724453))**  
   A simple native iOS app calling no-as-a-service to provide negative responses.

11. **[No-as-a-Service - Slack App](https://github.com/pro100svitlo/no-as-a-service-slack-app)**  
   Get a random `No` from within Slack. [Install](https://slack.com/oauth/v2/authorize?client_id=2550998207090.10222067205218&scope=commands,chat:write&user_scope=) the app to your workspace and then use the `/no` command to get a random response. 

12. **[No-as-a-Service - Signal Bot](https://github.com/samtate/signal-no-as-a-service-bot)**  
    Get a random `No` from within Signal. Deploy the Docker container, link your Signal account, and use the `/no` command to get a random response.

13. **[No-as-a-Service GNOME Search](https://extensions.gnome.org/extension/9186/naas-gnome-search/)**
   GNOME search provider for the No-as-a-Service API. Type 'no' to get a random excuse. Click or press Enter to copy to clipboard.

14. **[Nope App](https://github.com/foss-nope/apple-nope) for iPhone and iPad. Available on [AppStore](https://apps.apple.com/app/id6759522055) **  
    Simple OpenSource iOS app inspired by this service to find and curate reasons to say no!

15. **[No MCP](https://github.com/clafoutis42/no-mcp)**  
    Perfect for when you want your AI to be consistently negative or just want to add some humor to your MCP setup.

16. **[Your Project Here?](https://github.com/YOUR_REPO)**
   If you're using no-as-a-service in your project, open a pull request to be featured here!

---

> Want to use no-as-a-service in your own project? Check out the usage section in this README and start returning **"no"** like a pro.
---

## 👤 Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)
Typescript and portuguese fork br [VitaoDeveloper](https://github.com/VitaoDeveloper)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no.