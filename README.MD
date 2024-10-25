# (English-Version) Application in Electron and Express with TypeScript

This repository was created after the need to develop software using Electron, with the requirement to keep the source code secure. Recognizing that there are several steps and criteria to be followed, often considered tedious, I opted to have them ready and well explained.

## Step by Step

1.  **Start npm and install the necessary libraries:**

	Run the following commands in the terminal:

	```bash
	npm init -y
	npm install --save-dev electron @electron-forge/cli typescript @types/express javascript-obfuscator
	npm install express
	```

2.  **Create the `src` and `server` folders:**

	Within your project, create the `src` and `server` folders and add the respective `index.ts` files (example in the repository).

3.  **Create the `tsconfig.json` file:**

	This file will be responsible for compiling TypeScript for the obfuscator. The result of these two processes will be compiled.

4.  **Import the project into Electron Forge:**

	Use the following command:

	```bash
	npx electron-forge import
	```

5.  **Create the `.gitignore` and `obfuscator-config.json` files:**

	These files are important for managing your project's configurations and exclusions.

6.  **Configure `asar` in the `forge.config.js` file:**

	Make the `asar` configuration as per the available example.

7.  **Check the `package.json` file:**


# Explanation of the Commands in package.json

##  1. **`"start": "npm run build && electron-forge start"`**
-  **What it does:** This command starts the application in development mode.
-  **How it works:**
-  `npm run build`: Calls the `build` script to compile TypeScript code into JavaScript.
-  `&&`: Ensures that the next command will only run if the previous command was successful.
-  `electron-forge start`: Starts the Electron application in development mode, using the compiled code.

##  2. **`"build": "tsc"`**
-  **What it does:** This command compiles the TypeScript code.
-  **How it works:**
-  `tsc`: Calls the TypeScript Compiler (`TypeScript Compiler`), which converts `.ts` (TypeScript) files into `.js` (JavaScript) files according to the configurations specified in `tsconfig.json`.

##  3. **`"package": "npm run build && npm run obfuscate && electron-forge package"`**
-  **What it does:** This command packages the application for distribution.
-  **How it works:**
-  `npm run build`: Compiles the TypeScript code into JavaScript.
-  `&& npm run obfuscate`: If the build is successful, calls the `obfuscate` script to obfuscate the generated JavaScript code.
-  `&& electron-forge package`: If obfuscation is successful, packages the application using Electron Forge, creating a file that can be distributed.

##  4. **`"make": "npm run build && npm run obfuscate && electron-forge make"`**
-  **What it does:** This command creates installers and packages for the application.
-  **How it works:**
-  `npm run build`: Compiles the TypeScript code.
-  `&& npm run obfuscate`: Obfuscates the resulting JavaScript code.
-  `&& electron-forge make`: If everything is correct, creates installers for the application, allowing users to install the application easily.

##  5. **`"obfuscate": "javascript-obfuscator ./dist --output ./dist --config obfuscator-config.json"`**
-  **What it does:** This command obfuscates the JavaScript code in the `dist` folder.
-  **How it works:**
-  `javascript-obfuscator`: Calls the JavaScript obfuscation tool.
-  `./dist`: Specifies the input folder containing the JavaScript files to be obfuscated.
-  `--output ./dist`: Defines the output folder where the obfuscated files will be stored (overwriting the originals in the same folder).
-  `--config obfuscator-config.json`: Uses a specific configuration file for obfuscation, allowing custom options to be set for the obfuscation process.




# (Portuguese-Version) Aplicativo em Electron e Express com TypeScript

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
"""



