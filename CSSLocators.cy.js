
describe('CSSLocators', () => {
it("csslocators", () => {
    cy.visit("https://www.panamericana.com.co/")
    cy.get("[placeholder='¿Qué estás buscando hoy?']").type("agendas")
    cy.get(".vtex-store-components-3-x-searchBarIcon").click()
    cy.get(".vtex-search-result-3-x-totalProductsMessage").contains("Productos encontrados")

})
})