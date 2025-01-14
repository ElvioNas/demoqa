describe('Desafio automação', () => {
  it('Forms', () => {
    cy.visit('https://demoqa.com')
    cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    cy.get('#firstName').type('elvio')
    cy.get('#lastName').type('nascimento')
    cy.get('#userEmail').type('elvio@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#userNumber').type('81996552048')
    cy.get('.subjects-auto-complete__value-container').click().type('Maths').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#uploadPicture').click()
    cy.get('#currentAddress').type('Rua Nova 100 Recife - PE CEP 54730380')
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-3-option-0').click()
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-4-option-0').click()
    cy.get('#submit').click()
    cy.get('#example-modal-sizes-title-lg')
       cy.get('#example-modal-sizes-title-lg')
         .should('contain', 'Thanks for submitting the form')

  })

  it('Alerts, frame & windows', () => {
    cy.visit('https://demoqa.com')
    cy.get(':nth-child(3) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-0 > .text').click()
    cy.get('#windowButton').click()

  })

  it('Elements', () => {
    cy.visit('https://demoqa.com')
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type('elvio')
    cy.get('#lastName').type('nascimento')
    cy.get('#userEmail').type('elvio@gmail.com')
    cy.get('#age').type('35')
    cy.get('#salary').type('8000')
    cy.get('#department').type('informatica')
    cy.get('#submit').click()

})

it('Widgets', () => {
  cy.visit('https://demoqa.com')
  cy.get(':nth-child(4) > :nth-child(1) > .card-body > h5').click()
  cy.get(':nth-child(4) > .element-list > .menu-list > #item-4').click()
  cy.get('#startStopButton').click()
  

})
it('Interactions', () => {
  cy.visit('https://demoqa.com')
  cy.get(':nth-child(5) > :nth-child(1) > .card-body > h5').click()
  cy.get(':nth-child(5) > .element-list > .menu-list > #item-0').click()
  

})
})