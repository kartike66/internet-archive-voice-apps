const {expect} = require('chai');

const query = require('../../state/query');

const mockApp = require('../_utils/mocking/app');

describe('state', () => {
  let app;

  beforeEach(() => {
    app = mockApp();
  });

  describe('query', () => {
    it('should fill slot', () => {
      const collection = 'the-best-collection-ever';
      query.setSlot(app, 'collection', collection);
      expect(query.getSlot(app, 'collection')).to.be.equal(collection);
    });

    describe('hasSlot', () => {
      it('should return true when we have setup slot before', () => {
        expect(query.hasSlot(app, 'collection')).to.be.false;
        query.setSlot(app, 'collection', 'the-best-collection-ever');
        expect(query.hasSlot(app, 'collection')).to.be.true;
      });
    });
  });
});