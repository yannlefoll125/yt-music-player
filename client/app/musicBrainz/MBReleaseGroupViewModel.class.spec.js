'use strict';

import MBReleaseGroupViewModel from './MBReleaseGroupViewModel.class';
import MBReleaseGroupModel from '../musicBrainzApi/MBReleaseGroupModel.class';

describe("Class: MBReleaseGroupViewModel", function() {

	var mbReleaseGroupViewModel;

	afterEach(function() {
		mbReleaseGroupViewModel = undefined;
	})

	describe('constructor()', function() {
		it('should create an empty MBReleaseGroupViewModel instance', function() {
			mbReleaseGroupViewModel = new MBReleaseGroupViewModel();

			expect(mbReleaseGroupViewModel).toBeDefined();
			expect(mbReleaseGroupViewModel.id).not.toBeDefined();
			expect(mbReleaseGroupViewModel.artist).not.toBeDefined();
			expect(mbReleaseGroupViewModel.title).not.toBeDefined();
			expect(mbReleaseGroupViewModel.type).not.toBeDefined();

			
		});

		it('should create a MBReleaseGroupViewModel with id, artist, title and type attributes', function() {
			var id = "dfmlkdfsdfsd";
			var artist = 'Mgla';
			var title = "Exercises in futility";
			var type = 'album';


			mbReleaseGroupViewModel = new MBReleaseGroupViewModel(id, artist, title, type);

			expect(mbReleaseGroupViewModel).toBeDefined();
			expect(mbReleaseGroupViewModel.id).toBe(id);
			expect(mbReleaseGroupViewModel.artist).toBe(artist);
			expect(mbReleaseGroupViewModel.title).toBe(title);
			expect(mbReleaseGroupViewModel.type).toBe(type);

			
		});

		it('should create a MBReleaseGroupViewModel from a MBReleaseGroupModel', function() {
			var id = "dfmlkdfsdfsd";
			var artist = 'Mgla';
			var title = "Exercises in futility";
			var type = 'album';

			var mbReleaseGroupModel = new MBReleaseGroupModel(id, artist, title, type);


			mbReleaseGroupViewModel = new MBReleaseGroupViewModel(mbReleaseGroupModel);

			expect(mbReleaseGroupViewModel).toBeDefined();
			expect(mbReleaseGroupViewModel.id).toBe(id);
			expect(mbReleaseGroupViewModel.artist).toBe(artist);
			expect(mbReleaseGroupViewModel.title).toBe(title);
			expect(mbReleaseGroupViewModel.type).toBe(type);

			
		});
	});


});