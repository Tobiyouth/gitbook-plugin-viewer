require(['gitbook', 'jQuery'], function (gitbook, $) {

	gitbook.events.bind('page.change', function() {
		window.viewer = new Viewer(document.getElementsByClassName('book-body')[0], {
			navbar: false,
			zoomRatio: 0.3,
			toolbar: {
				zoomIn: {
					show: true,
					size: 'large',
				},
				zoomOut: {
					show: true,
					size: 'large',
				},
				oneToOne: {
					show: true,
					size: 'large',
				},
				reset: {
					show: true,
					size: 'large',
				},
				prev: false,
				play: false,
				next: false,
				rotateLeft: {
					show: true,
					size: 'large',
				},
				rotateRight: {
					show: true,
					size: 'large',
				},
				flipHorizontal: {
					show: true,
					size: 'large',
				},
				flipVertical: {
					show: true,
					size: 'large',
				},
			},
		})
	});

});
