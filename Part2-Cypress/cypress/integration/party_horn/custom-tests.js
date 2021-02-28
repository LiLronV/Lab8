describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  
  it('Slider check when volume changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('volume check when volume changes', () => {
    cy.get('#volume-number').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('audio check when audio element changes using slider', () => {
    cy.get('#volume-number').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', .33);
    });
  });

  it('correct source check for party horn', () => {
    cy.get('#radio-party-horn').click();

    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });

    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });

    
  });



  it('correct source check for volume image when volume is changed (for the 4 levels)', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });

    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    cy.get('#volume-number').clear().type('74');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
    
  });

  it('correct source check for volume image when volume is changed (for the 4 levels)', () => {

    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('BREAK');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('check for error when a number outside of range is tested', () => {
    cy.get('#volume-number').clear().type('1111');
    cy.get('#honk-btn').click();
    cy.get("input:invalid").then(($el) => {
      expect($el).to.exist;
    })
  });



});
