NavigationControllerInstance = 
	open: -> @
GLOBAL.NavigationController = -> NavigationControllerInstance

EventListViewInstance = {}
GLOBAL.EventListView = -> EventListViewInstance

Main = require "../Resources/ui/Main.js"

describe 'Main UI', ->
	it 'should create a navigation controller and open an EventListView', ->
		spyOn NavigationControllerInstance, 'open'
		main = new Main()
		expect(NavigationControllerInstance.open).toHaveBeenCalledWith EventListViewInstance