@testeLivro

Scenario: escolhendo livro
    When Eu acessar o submarino
    And buscar por "livros"
    And quero clicar no primeiro resultado
    Given que eu estou dentro do primeiro resultado do submarino
    Then quero recuperar o nome do autor 


Scenario: site2

   When Eu acessar a livraria
   And buscar por "livros"
   And quero clicar no primeiro resultado
   Then quero conferir o nome do autor


   

Scenario: site3

   When Eu acessar o site
   And buscar por "livros"
   And quero clicar no primeiro resultado
   Then confiro o nome do autor