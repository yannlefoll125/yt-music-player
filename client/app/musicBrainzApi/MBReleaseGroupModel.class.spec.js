'use strict';

import MBReleaseGroupModel from './MBReleaseGroupModel.class';

describe("Class: MBReleaseGroupModel", function() {

	var mbReleaseGroupModel;

	afterEach(function() {
		mbReleaseGroupModel = undefined;
	})

	describe('constructor()', function() {
		it('should create an empty MBReleaseGroupModel instance', function() {
			mbReleaseGroupModel = new MBReleaseGroupModel();

			expect(mbReleaseGroupModel).toBeDefined();
			expect(mbReleaseGroupModel.id).not.toBeDefined();
			expect(mbReleaseGroupModel.artist).not.toBeDefined();
			expect(mbReleaseGroupModel.title).not.toBeDefined();

			
		});

		it('should create a MBReleaseGroupModel with id, title and dateString attributes', function() {
			var id = "dfmlkdfsdfsd";
			var artist = 'Mgla';
			var title = "Exercises in futility";


			mbReleaseGroupModel = new MBReleaseGroupModel(id, artist, title);

			expect(mbReleaseGroupModel).toBeDefined();
			expect(mbReleaseGroupModel.id).toBe(id);
			expect(mbReleaseGroupModel.artist).toBe(artist);
			expect(mbReleaseGroupModel.title).toBe(title);

			
		});
	})


});