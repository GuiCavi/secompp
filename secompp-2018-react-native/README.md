# Tutorial de instalação das ferramentas para o minicurso de React Native

## Instalar o aplicativo para fazer o desenvolvimento

Os testes podem ser feitos no simulator (para iOS, somente no Mac)/emulator (para Android, qualquer computador), ou em um dispositivo. Para testes no dispositivo, instalar o aplicativo do Expo

[Link para AppStore (iOS)](https://itunes.apple.com/app/apple-store/id982107779)

[Link para PlayStore (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## Instalando as ferramentas

> OBS: As instalações podem requisitar permissões de administrador, então caso algum comando dê erro, tente novamente com permissões de administrador.

### 1. Instalar NodeJS - de preferência a versão LTS

[LINK PARA PÁGINA DO NODE](https://nodejs.org/en/)

![Imgur](https://i.imgur.com/Mm1zEsn.png)

### 2. Executar a instalação do CRNA com o comando
```shell
$ npm i -g create-react-native-app
```

![Imgur](https://i.imgur.com/WNpXqBx.png)

### 3. Criar um projeto teste com o comando 
```shell
$ create-react-native-app NomeDoProjeto
```
Com isso, vai solicitar para instalar o Expo CLI globalmente, basta aceitar. Esse projeto é apenas para instalar o Expo e testar se está tudo OK, depois pode ser excluído caso queira.

![Imgur](https://i.imgur.com/DOfMacm.png)

### 4. Depois que a instalação do Expo CLI foi concluída (pode levar algum tempo dependendo da conexão com a internet), será pedido para escolher o template do projeto. Escolha qualquer um.

![Imgur](https://i.imgur.com/7TNd8pq.png)

### 5. Em caso de sucesso, você verá uma mensagem "Your project is ready".

![Imgur](https://i.imgur.com/BxdMXNy.png)

> Em caso de erro de timeout, basta executar novamente o comando do passo 3.

### 6. Para testar se tudo ocorreu como esperado, basta digitar os comandos
```shell  
  $ cd NomeDoProjeto
  $ expo start
```

![Imgur](https://i.imgur.com/Xev6Vkp.png)

Esse comando vai iniciar o projeto e abrir uma aba no navegador.
> Caso não abra a aba no navegador, acesse http://localhost:19002/ ou o link que for impresso no terminal

![Imgur](https://i.imgur.com/6vGvVqx.png)

Abrirá uma página como essa:

![Imgur](https://i.imgur.com/exQEY1H.png)

### 7. Abra o aplicativo no dispositvo e tente ler o QR Code.

![Imgur](https://i.imgur.com/rOvNrQX.png)

> Caso haja erro, selecione a opção "Run on Android device/emulator" (Android) ou "Run on iOS simulator" na aba do packager.
