'use strict';

import MBArtistModel from './MBArtistModel.class';

describe("Class: MBArtistModel", function() {

	var mbArtistModel;

	afterEach(function() {
		mbArtistModel = undefined;
	})

	describe('constructor()', function() {
		it('should create an empty MBArtistModel instance', function() {
			mbArtistModel = new MBArtistModel();

			expect(mbArtistModel).toBeDefined();
			expect(mbArtistModel.id).not.toBeDefined();
			expect(mbArtistModel.name).not.toBeDefined();
			expect(mbArtistModel.country).not.toBeDefined();
			
		});

		it('should create a MBArtistModel with id, name and country attributes', function() {
			var id = "dfmlkdfsdfsd";
			var name = "mgla";
			var country = "PL";

			mbArtistModel = new MBArtistModel(id, name, country);

			expect(mbArtistModel).toBeDefined();
			expect(mbArtistModel.id).toBe(id);
			expect(mbArtistModel.name).toBe(name);
			expect(mbArtistModel.country).toBe(country);
			
		});
	})


});