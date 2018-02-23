import '../node_modules/react-dates/lib/css/_datepicker.css'
import '../node_modules/react-dates/initialize'

import React from 'react'
import ReactDOM from 'react-dom'

import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates'
import { DateRangePicker } from 'react-dates'

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="your_unique_start_date_id"
              endDate={this.state.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
        )
    }
}
