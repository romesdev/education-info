# education-info

# olá, mundo

#### O propósito desse projeto é ofertar uma solução para persistência e apresentação dos dados do [Nível Socioeconômico (Inse) das Escolas](https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais/nivel-socioeconomico).

Dessa forma, o presente repositório apresenta uma API e uma camada visual através de um front-end web para visualização dos dados. A API foi modelada de forma a persistir de forma estrita os dados presentes no INSE (escolas e indicadores) e os dados relacionados (cidade e munícipio) com um banco relacional.

## API

API apresenta uma organização através de 4 entidades e tabelas, sendo elas: Estado, Cidade, Escola e Indicador (INSE). Uma representação visual para essa modelagem da API pode ser vista abaixo na imagem (primeiro rascunho da solução):

![image](https://github.com/romesdev/education-info/assets/40067566/0a350073-0285-4e49-bb03-300c1d7f0d38)

Nota: a solução final estabeleceu um relacionamento onde uma escola pode ter múltiplos indicadores que é o caso do mundo real. Dessa forma, a API estaria pronta para persistir e mostrar os indicadores por ano da realização da coleta (normalmente, pela prova periódica do SAEB).

Tecnologias utilizadas na API:
- Node.JS
- TypeScript
- Nest.JS
- PostgreSQL
- Prisma
- Docker
- Swagger

### Passos para utilizar a API/Back-end

1. Navegue até a pasta do servidor
```
cd /api/server/
```
2. Configure uma instância do PostgreSQL com o Docker (obrigatório para uso):

```yml
//docker-compose.yml file

version: '3.8'
services:
  postgres:
    image: postgres:13.5
    restart: always
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres:/var/lib/postgresql/data
    ports:
      - '5432:5432'

volumes:
  postgres:
```
Comando:
```
docker-compose up
```


Verifique se está rodando em seu terminal.
Nota: abra outro terminal na mesma pasta para continuar o processo.

3. Crie um arquivo `.env` como o do exemplo (`.env.example`) e coloque as credencias conforme a instância do banco (ver `docker-compose.yml`):

```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/server-db"
```
Nota: pode copiar o conteúdo acima para o arquivo que deve funcionar.

4. Instale as dependências do projeto com o seu gerenciador de pacotes, algo como:

```
pnpm install
```

5. Popule o banco de dados:

```
pnpm prisma migrate dev|reset
pnpm prisma db seed
```
  
6. Inicie o servidor.

```
pnpm run start:dev
➜  Local:   http://localhost:3000/
```

#### API Documentada com Swagger
Por fim, a API está documentada com o Swagger. Acesse `http://localhost:3000/api` para ver.

![image](https://github.com/romesdev/education-info/assets/40067566/90c6176b-518e-47be-b24d-92ccb4603434)

Destaques: 
- A API tem uma solução de paginação para as escolas, tendo em vista a larga quantidade.
- Possibilidades de filtrar dados de diferentes formas através dos endpoints da API.
- Validação dos objetos de transferência.  

## Front-end/Visualização 
Tecnologias utilizadas no front-end:
- TypeScript
- React.JS
- Vite
- React Router
- swr (data fetching)
- Shadcn/ui components

### Passos para utilizar o front-end/visualização

#### Passo ZERO: Esteja com o back-end rodando. 

1. Navegue até a pasta do front-end.
```
in root: cd /front-end
```
2. Instale as dependências do projeto com o seu gerenciador de pacotes, algo como:

```
pnpm install
```

3. Inicie o projeto.

```
pnpm run dev

VITE v5.0.12  ready in 1506 ms
➜  Local:   http://localhost:5173/
```
4. Acesse `http://localhost:5173/`.

![image](https://github.com/romesdev/education-info/assets/40067566/9d1bf063-3b9c-4f28-9158-ac9c65dccdb1)

Destaques: 
- A listagem está páginada (assim como o back-end retorna os resultados por escola de forma paginada).
- Filtros e buscas: Busca por nome, filtro por Classificação do Indicador de Nível Socioeconômico (I-VIII), busca por cidade, filtro por estado.
- Ordenação por nome em ASC e DESC.
- A integração do sistema permite que os múltiplos filtros funcionem de forma conjunta.
- O botão de limpar a busca permite retornar para o estado inicial da listagem ao abrir a tela.

![image](https://github.com/romesdev/education-info/assets/40067566/b7b59f4b-c81c-402a-8946-5e414bb66347)


![image](https://github.com/romesdev/education-info/assets/40067566/a6677d55-a89d-42be-9262-396b8b249831)








