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
			expect(mbReleaseGroupModel.title).not.toBeDefined();
			expect(mbReleaseGroupModel.dateString).not.toBeDefined();
			
		});

		it('should create a MBReleaseGroupModel with id, title and dateString attributes', function() {
			var id = "dfmlkdfsdfsd";
			var title = "Exercises in futility";
			var dateString = "2012-01-02";

			mbReleaseGroupModel = new MBReleaseGroupModel(id, title, dateString);

			expect(mbReleaseGroupModel).toBeDefined();
			expect(mbReleaseGroupModel.id).toBe(id);
			expect(mbReleaseGroupModel.title).toBe(title);
			expect(mbReleaseGroupModel.dateString).toBe(dateString);
			
		});
	})


});