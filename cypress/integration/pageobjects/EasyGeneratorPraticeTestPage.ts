/**
 * @author Lathika Herath
 * @date 2023/04/07
 * @description page objects methods of the easygenerator practice test page
 */

   class EasyGeneratorPraticeTestPage {

    public StepOpenLocalhtmlFile() {
        cy.visit('./cypress/support/util/htmlfiles/task.html')
    }
    

    public StepSelectValueFromTheDropDown() {
        cy.get('select').select('option2')
        return this;
    }

    public StepSelectImageFromTheLocalPc() {
        cy.get('input[name="img"]').click();
        return this;
    }

    public StepOpenNewTab() {
       cy.get('#opentab').invoke('removeAttr', 'target').click();
       return this; 
    }

    public StepEnterYourName() {
        cy.get('#name').type('Lathika');
        return this;
    }

    public StepClickAlertButton() {
        cy.get('#alertbtn').click();
        return this;
    }

    public StepClickConfirmButton() {
        cy.get('#confirmbtn').click();
        return this;
    }

    public VerifyAlertPopupText() {
        cy.on('window:alert', (str) => {

            expect(str).to.equal('Hello Lathika, share this practice page and share your knowledge')
        })
        return this;

    }   

    public VerifyConfirmationPoupText() {
        cy.on('window:confirm', (str) => {
            
            expect(str).to.equal('Hello Lathika, Are you sure you want to confirm?')
        })
        return this;
    }

    public VerifyHideShowTextBoxVisibility() {
        cy.get('#displayed-text').should('be.visible');
        return this;

    }

    public StepTypeYourNameHideShowTextBox() {
        cy.get('#displayed-text').type('Lathika');
        return this;
    }

    public StepClickHideButton() {
        cy.get('#hide-textbox').click();
        return this;
    }

    public VerifyHideShowTextBoxInvisibility() {
        cy.get('#displayed-text').should('not.be.visible');
        return this;
    }

    public StepClickShowButton() {
        cy.get('#show-textbox').click();
        return this;
    }

    public VerifyMouseHoverOptions() {
        cy.get('.hover-container').invoke('show')
        return this;
    }

    public StepClickTopOption() {
        cy.contains('Top').click();
        return this;
    }

    public StepClickReloadOption() {
        cy.contains('Reload').click();
        return this;
    }



}