Formatter = require "../Resources/ui/DateFormatting"
Event = require "../Resources/model/Event"

describe 'date formatting', ->
	beforeEach ->
		@event = new Event
			date: new Date "4/7/2013"
			today: new Date "4/5/2013"

	it 'should format numbers using commas', ->
		expect(Formatter.formatNumber(123456)).toEqual "123,456"

	it 'should format days away', ->
		expect(Formatter.daysAwayText(@event)).toEqual "2 days away"
		@event.today = new Date "4/6/2013"
		expect(Formatter.daysAwayText(@event)).toEqual "1 day away"
		@event.today = new Date "4/8/2013"
		expect(Formatter.daysAwayText(@event)).toEqual "1 day ago"
		@event.today = new Date "4/9/2013"
		expect(Formatter.daysAwayText(@event)).toEqual "2 days ago"

	it 'should format hours', ->
		expect(Formatter.hoursAwayText(@event)).toEqual "48 hours away"

	it 'should format minutes', ->
		expect(Formatter.minutesAwayText(@event)).toEqual "2,880 minutes away"

	it 'should format seconds', ->
		expect(Formatter.secondsAwayText(@event)).toEqual "172,800 seconds away"

	it 'should format date text properly', ->
		expect(Formatter.dateText(@event)).toEqual "4/7/2013"
