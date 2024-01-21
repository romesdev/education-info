# education-info


# Olá, mundo

#### O propósito desse projeto é ofertar uma solução para persistência e apresentação dos dados do [Nível Socioeconômico (Inse) das Escolas](https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/indicadores-educacionais/nivel-socioeconomico).

## API

Dessa forma, o presente repositório apresenta uma API e uma camada visual através de um front-end web para visualização dos dados. A API foi modelada de forma a persistir de forma estrita os dados presentes no INSE (escolas e indicadores) e os dados relacionados (cidade e munícipio) com um banco relacional.

API apresenta uma organização através de 4 entidades e tabelas, sendo elas: Estado, Cidade, Escolas e Indicadores (INSE). Uma representação visual para essa modelagem da API pode ser vista abaixo na imagem:

![image](https://github.com/romesdev/education-info/assets/40067566/0a350073-0285-4e49-bb03-300c1d7f0d38)

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

```
docker-compose up
```
Verifique se está rodando em seu terminal.

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

3. Crie um arquivo `.env` como o do exemplo (`.env.example`) e coloque as credencias conforme a instância do banco (ver `docker-compose.yml`):

```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/server-db"
```

4. Instale as dependências do projeto com o seu gerenciador de pacotes, algo como:

```
pnpm install
```

5. Popule o banco de dados:

```
pnpm prisma db seed
```
  
7. Inicie o servidor.

```
pnpm run start:dev
```

#### API Documentada com Swagger
Por fim, a API está documentada com o Swagger. Acesse `http://localhost:3000/api` para ver.

![image](https://github.com/romesdev/education-info/assets/40067566/90c6176b-518e-47be-b24d-92ccb4603434)

Destaques: 
- A API tem uma solução de paginação para as escolas, tendo em vista a larga quantidade.
- Possibilidades de filtrar dados de diferentes formas através dos endpoints da API.
- Validação dos objetos de transferência.  

## Front-end/Visualização 
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
- Ordenação do nome em ASC e DESC.  






