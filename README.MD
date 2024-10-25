# Aplicativo em Electron e Express com TypeScript

Este repositório foi criado após a necessidade de desenvolver um software utilizando Electron, com a exigência de manter o código-fonte em segurança. Reconhecendo que existem várias etapas e critérios a serem seguidos, muitas vezes considerados tediosos, optei por deixá-los prontos e bem explicados.

##  Passo a Passo

  

1.  **Iniciar o npm e instalar as bibliotecas necessárias:**

  

	Execute os seguintes comandos no terminal:

	  

	```bash

	npm init -y

	npm install --save-dev electron @electron-forge/cli typescript @types/express javascript-obfuscator

	npm install express

	```

  

2.  **Criar as pastas `src` e `server`:**

  

	Dentro do seu projeto, crie as pastas `src` e `server` e adicione os respectivos arquivos `index.ts` (exemplo no repositório).

  

3.  **Criar o arquivo `tsconfig.json`:**

  

	Este arquivo será responsável por compilar o TypeScript para o obfuscador. O resultado desses dois processos será compilado.

  

4.  **Importar o projeto para o Electron Forge:**

  

	Utilize o seguinte comando:

	  

	```bash

	npx electron-forge import

	```

  

5.  **Criar os arquivos `.gitignore` e `obfuscator-config.json`:**

  

	Esses arquivos são importantes para gerenciar as configurações e exclusões do seu projeto.

  

6.  **Configurar o `asar` no arquivo `forge.config.js`:**

  

	Faça a configuração do `asar` conforme o exemplo disponível.

  

7.  **Verificar o arquivo `package.json`:**


#  Explicação dos Comandos no package.json

  

##  1. **`"start": "npm run build && electron-forge start"`**

-  **O que faz:** Este comando inicia o aplicativo em modo de desenvolvimento.

-  **Como funciona:**

-  `npm run build`: Chama o script `build` para compilar o código TypeScript em JavaScript.

-  `&&`: Garante que o próximo comando só será executado se o comando anterior for bem-sucedido.

-  `electron-forge start`: Inicia a aplicação Electron em modo de desenvolvimento, utilizando o código compilado.

  

##  2. **`"build": "tsc"`**

-  **O que faz:** Este comando compila o código TypeScript.

-  **Como funciona:**

-  `tsc`: Chama o compilador TypeScript (`TypeScript Compiler`), que converte arquivos `.ts` (TypeScript) em arquivos `.js` (JavaScript) de acordo com as configurações especificadas no `tsconfig.json`.

  

##  3. **`"package": "npm run build && npm run obfuscate && electron-forge package"`**

-  **O que faz:** Este comando empacota a aplicação para distribuição.

-  **Como funciona:**

-  `npm run build`: Compila o código TypeScript em JavaScript.

-  `&& npm run obfuscate`: Se a compilação for bem-sucedida, chama o script `obfuscate` para ofuscar o código JavaScript gerado.

-  `&& electron-forge package`: Se a ofuscação for bem-sucedida, empacota a aplicação usando o Electron Forge, criando um arquivo que pode ser distribuído.

  

##  4. **`"make": "npm run build && npm run obfuscate && electron-forge make"`**

-  **O que faz:** Este comando cria instaladores e pacotes para a aplicação.

-  **Como funciona:**

-  `npm run build`: Compila o código TypeScript.

-  `&& npm run obfuscate`: Ofusca o código JavaScript resultante.

-  `&& electron-forge make`: Se tudo estiver correto, cria instaladores para a aplicação, permitindo que os usuários instalem o aplicativo facilmente.

  

##  5. **`"obfuscate": "javascript-obfuscator ./dist --output ./dist --config obfuscator-config.json"`**

-  **O que faz:** Este comando ofusca o código JavaScript na pasta `dist`.

-  **Como funciona:**

-  `javascript-obfuscator`: Chama a ferramenta de ofuscação de JavaScript.

-  `./dist`: Especifica a pasta de entrada que contém os arquivos JavaScript a serem ofuscados.

-  `--output ./dist`: Define a pasta de saída onde os arquivos ofuscados serão armazenados (substituindo os originais na mesma pasta).

-  `--config obfuscator-config.json`: Utiliza um arquivo de configuração específico para a ofuscação, permitindo definir opções personalizadas para o processo de ofuscação.

  

Esses comandos em conjunto garantem que o seu código TypeScript seja compilado, ofuscado e, em seguida, empacotado ou distribuído de forma eficaz.
