'use strict';

import AlbumViewModel from './AlbumViewModel.class';
import TrackViewModel from './TrackViewModel.class';
import TrackModel from '../model/TrackModel.class';

describe("Class: AlbumViewModel", function() {

	var albumViewModel = new AlbumViewModel();
	albumViewModel.title = 'Exercises in Futility';
	albumViewModel.description = 'Exercises in Futility description';
	albumViewModel.trackList = [
		new TrackViewModel(new TrackModel(1, 'Exercises in Futility I', 0, 478)),
		new TrackViewModel(new TrackModel(2, 'Exercises in Futility II', 478, 947)),
		new TrackViewModel(new TrackModel(3, 'Exercises in Futility III', 947, 153))
	];

	describe('findTrackViewModelByNumber()', function() {
		it('should return first track', function() {
			var foundTrack = albumViewModel.findTrackViewModelByNumber(1);

			expect(foundTrack).toEqual(albumViewModel.trackList[0]);			
		});

		it('should return second track', function() {
			var foundTrack = albumViewModel.findTrackViewModelByNumber(2);

			expect(foundTrack).toEqual(albumViewModel.trackList[1]);			
		});

		it('should return third track', function() {
			var foundTrack = albumViewModel.findTrackViewModelByNumber(3);

			expect(foundTrack).toEqual(albumViewModel.trackList[2]);			
		});
	});
});