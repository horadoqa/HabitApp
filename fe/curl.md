# CURL

## Cadastrando usuário

curl -X POST http://localhost:3000/cadastro -H "Content-Type: application/json" -d '{"nome": "Ricardo Fahham", "email": "rfahham@gmail.com", "senha": "1q2w3e4r"}'

## Obter cadastros

curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "rfahham@gmail.com", "senha": "1q2w3e4r"}'


## Ecluir usuario

curl -X DELETE http://localhost:3000/usuario -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjNlOTA4ZGRmMTg3OWY3MTIwMmE2ZCIsImVtYWlsIjoicmZhaGhhbUBnbWFpbC5jb20iLCJpYXQiOjE3Mzk4NDQ0MDEsImV4cCI6MTczOTg0ODAwMX0.e5nt8IwQYqlspOY-jPaRUd78B9X4tEI2KUcBxHKplh8" -d '{"email": "rfahham@gmail.com"}'

Problema percebido

Estou usando este comando para cadastrar o usuario

curl -X POST http://localhost:3000/cadastro -H "Content-Type: application/json" -d '{"nome": "Ricardo Fahham", "email": "rfahham@gmail.com", "senha": "1q2w3e4r"}'

{"message":"Cadastro realizado com sucesso."}%    

Hash gerado: $2b$10$Nd/zWzixPSD2pgpHzpxs4.I4DcSzGV8oGKLVuTQUbKVbbzcYOf6TS

Consultando
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email": "rfahham@gmail.com", "senha": "1q2w3e4r"}'                             
{"message":"Senha incorreta"}%

Senha fornecida no login: 1q2w3e4r
Senha armazenada no banco: $2b$10$c0o5O3jgvbNaAvn6quOTsufPF4rpgVOaEBFFYCaZrKBld4HtHIirq
Resultado da comparação: false

Reparei que o Hash gerado: é diferente do Senha armazenada no banco: 

O seu problema está claro agora: o hash gerado durante o cadastro não é o mesmo que está sendo armazenado no banco de dados. Por isso, a comparação entre a senha fornecida e o hash armazenado está falhando, resultando em false.
