const expect = require('expect.js')
const Synchronizer = require('../services/drive/synchronizer')

describe('Synchronizer', () => { 
    it('creates an instance of the synchronizer class', () => {
        const synchronizerInstance = new Synchronizer()
        expect(synchronizerInstance.constructor.name).to.be('Synchronizer')
    });
})