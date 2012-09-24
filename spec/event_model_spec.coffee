Event = require "../Resources/model/Event"

describe 'event model', ->
	beforeEach ->
		@event = new Event
			date: new Date "4/7/2013"
			today: new Date "4/5/2013"

	it 'should calculate milliseconds away from an event', ->
		expect(@event.msAway()).toEqual 172800000

	it 'should calculate the days away', ->
		expect(@event.daysAway()).toEqual 2

	it 'should calculate hours away', ->
		expect(@event.hoursAway()).toEqual 48

	it 'should calculage minutes away', ->
		expect(@event.minutesAway()).toEqual 48 * 60

	it 'should calculate seconds away', ->
		expect(@event.secondsAway()).toEqual 48 * 60 * 60
