require(['gitbook'], function (gitbook) {

	gitbook.events.bind('page.change', function() {
		var pluginConfig = gitbook.state.config.pluginsConfig || {}
		var viewerConfig = pluginConfig.viewer || {}

		window.viewer && window.viewer.destroy()
		window.viewer = new Viewer(document.getElementsByClassName('book-body')[0], viewerConfig)
	});

});
