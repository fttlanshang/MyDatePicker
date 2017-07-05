import React from 'react';
import { DatePicker } from 'antd';
import './index.css';

/* MyDatePicker component utilizes the DatePicker provided by antd,
    only today - 2018.07.31 can be picked
*/
class MyDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDateString: ''
        };
    }

    render() {
        var prefix = (this.state.selectedDateString === '' ? '' : '当前日期为');
        return (
            <div>
                <DatePicker
                    format="YYYY-MM-DD"
                    disabledDate={this.disabledDate}
                    onChange={this.whenSelected.bind(this)}/>
                <span className="description">{prefix}{this.state.selectedDateString}</span>
            </div>
        );
    }

    /*when date changes, this function will be called and reset the current state */
    whenSelected(date, dateString) {
        this.setState({selectedDateString: dateString});
    }

    /*this function specifies the optional range */
    disabledDate(current) {
        /* calculateToDays function will get the number of days from 1970-01-01 */
        var calculateToDays = function(dateNo) {
            const ONE_DAY = 24 * 60 * 60 * 1000;
            return Math.floor(dateNo / ONE_DAY);
        }
        if(current !== undefined) {
            var currentDate = calculateToDays(current.valueOf());
            var min = calculateToDays(Date.now());
            var max = calculateToDays(new Date('2017-08-31').valueOf());
            return currentDate < min || currentDate > max;
        }
        return false;
    }
}
export default MyDatePicker;