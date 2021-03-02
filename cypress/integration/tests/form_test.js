describe('Pizza Applcation', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/pizza')
  })
  const form =() => cy.get('form')
  const errors = () => cy.get('.errors')
  const dropdown = () => cy.get('select[name=dropdown]') 
  const radio = () => cy.get('input[type=radio]') 
  const text_area = () => cy.get('input[type=text]') 
  const checkbox = () => cy.get('input[type=checkbox')
  const submitButton = () => cy.get('button')

  it('form check', () => {
    form().should('exist')
    errors().should('not.exist')
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
      it('Are validations met to enable submit button?', () => {
        dropdown().select('sm').should('have.value','sm')
        radio().check('original')
        submitButton().should('not.be.disabled')
      })
      it('Can submit data', () => {
        dropdown().select('sm').should('have.value','sm')
        radio().check('original')
        submitButton().click(submitButton)
      })
  })   

})