describe('Pizza Applcation', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3002/pizza')
  })
  const form =() => cy.get('form')
  const errors = () => cy.get('.errors')
  const dropdown = () => cy.get('select[name=dropdown]') 
  const radio = () => cy.get('input[name=sauces]') 
  const text_area = () => cy.get('input[name=text_area]') 
  const checkbox = () => cy.get('form input')
  const submitButton = () => cy.get('button')

  it('form check', () => {
    form().should('exist')
    errors().should('exist')
    dropdown().should('exist')
    radio().should('exist')
    text_area().should('exist')
    submitButton().should('exist')
  })
  
  describe('Filling out the inputs', () => {
    it('Check if submit button is disabled', () => {
      submitButton().should('be.disabled')
    })
    it('Is dropdown working?', () => {
      dropdown().select('sm').should('have.value','sm')
    })
    it('Check and Uncheck TOS checkbox', ()=> {
      checkbox().check(['pepperoni','sausage', 'onions', 'tomatoes', 'spicy_italian', 'spinach', 'bacon', 'mushrooms'])
      checkbox().uncheck(['pepperoni','sausage', 'onions', 'tomatoes', 'spicy_italian', 'spinach', 'bacon', 'mushrooms'])
      
    })
  })   

})