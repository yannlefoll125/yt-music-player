'use strict';

import MBReleaseModel from './MBReleaseModel.class';

describe("Class: MBReleaseModel", function() {

	var mbReleaseModel;

	afterEach(function() {
		mbReleaseModel = undefined;
	})

	describe('constructor()', function() {
		it('should create an empty MBReleaseModel instance', function() {
			mbReleaseModel = new MBReleaseModel();

			expect(mbReleaseModel).toBeDefined();
			expect(mbReleaseModel.id).not.toBeDefined();
			expect(mbReleaseModel.title).not.toBeDefined();
			expect(mbReleaseModel.dateString).not.toBeDefined();
			
		});

		it('should create a MBReleaseModel with id, title and dateString attributes', function() {
			var id = "dfmlkdfsdfsd";
			var title = "Exercises in futility";
			var dateString = "2012-01-02";

			mbReleaseModel = new MBReleaseModel(id, title, dateString);

			expect(mbReleaseModel).toBeDefined();
			expect(mbReleaseModel.id).toBe(id);
			expect(mbReleaseModel.title).toBe(title);
			expect(mbReleaseModel.dateString).toBe(dateString);
			
		});
	})


});