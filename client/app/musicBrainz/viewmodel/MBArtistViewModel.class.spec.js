'use strict';

import MBArtistViewModel from './MBArtistViewModel.class';
import MBArtistModel from '../musicBrainzApi/MBArtistModel.class';

describe("Class: MBArtistViewModel", function() {

	var mbArtistViewModel;

	afterEach(function() {
		mbArtistViewModel = undefined;
	})

	describe('constructor()', function() {
		it('should create an empty MBArtistViewModel instance', function() {
			mbArtistViewModel = new MBArtistViewModel();

			expect(mbArtistViewModel).toBeDefined();
			expect(mbArtistViewModel.id).not.toBeDefined();
			expect(mbArtistViewModel.name).not.toBeDefined();
			expect(mbArtistViewModel.country).not.toBeDefined();
			
		});

		it('should create a MBArtistViewModel with id, name and country attributes', function() {
			var id = "dfmlkdfsdfsd";
			var name = "mgla";
			var country = "PL";

			mbArtistViewModel = new MBArtistViewModel(id, name, country);

			expect(mbArtistViewModel).toBeDefined();
			expect(mbArtistViewModel.id).toBe(id);
			expect(mbArtistViewModel.name).toBe(name);
			expect(mbArtistViewModel.country).toBe(country);
			
		});

		it('should create a MBArtistViewModel from MBArtistModel', function() {
			var id = "dfmlkdfsdfsd";
			var name = "mgla";
			var country = "PL";

			var mbArtistModel = new MBArtistModel(id, name, country)

			mbArtistViewModel = new MBArtistViewModel(mbArtistModel);

			expect(mbArtistViewModel).toBeDefined();
			expect(mbArtistViewModel.id).toBe(id);
			expect(mbArtistViewModel.name).toBe(name);
			expect(mbArtistViewModel.country).toBe(country);
			
		});
	})


});