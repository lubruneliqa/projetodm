describe('Automação página de pesquisa de livros', () => {
  
    it('Visitar a página prática de automação', () => {
      // Visitar a página do formulário de prática de automação
      cy.visit('https://demoqa.com/automation-practice-form');
      
      // Verificar se a página contém o título 'Student Registration Form'
      cy.get('h5').should('contain.text', 'Student Registration Form');
      
      // Clicar no botão 'Book Store Application'
      cy.get('.home-body .card-body h5').contains('Book Store Application').click();
      
      // Verificar se a URL mudou para a página da aplicação de livros
      cy.url().should('include', '/books');
      beforeEach(() => {
      cy.visit('https://demoqa.com/books');
      });
    
    it('deve permitir que os usuários pesquisem livros pelo título', () => {
        // Insere termo de pesquisa
        cy.get('#searchBox').type('Git');
        
        // Verifica resultados da pesquisa
        cy.get('.rt-tbody').find('.rt-tr-group').should('have.length.greaterThan', 0);
        cy.get('.rt-tbody .rt-tr-group').each(($el) => {
        cy.wrap($el).find('.rt-td').eq(1).should('contain.text', 'Git');
        });
      });
    
      it('deve permitir que os usuários pesquisem livros pelo autor', () => {
        // Insere termo de pesquisa
        cy.get('#searchBox').type('Marijn');
        
        // Verifica resultados da pesquisa
        cy.get('.rt-tbody').find('.rt-tr-group').should('have.length.greaterThan', 0);
        cy.get('.rt-tbody .rt-tr-group').each(($el) => {
        cy.wrap($el).find('.rt-td').eq(2).should('contain.text', 'Marijn');
        });
      });
    
      it('deve mostrar nenhum resultado para termo de pesquisa inválido', () => {
        // Insere termo de pesquisa inválido
        cy.get('#searchBox').type('LivroInexistente');
        
        // Verifica nenhum resultado da pesquisa
        cy.get('.rt-noData').should('contain.text', 'Nenhuma linha encontrada');



    });
});
    
});