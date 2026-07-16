import "./DateFilter.css";

import { CalendarDays } from "lucide-react";

const DateFilter = () => {

    return (

        <div className="date-filter">

            <div className="date-group">

                <label>

                    Start Date

                </label>

                <div className="date-input">

                    <CalendarDays size={18} />

                    <input

                        type="date"

                    />

                </div>

            </div>

            <div className="date-group">

                <label>

                    End Date

                </label>

                <div className="date-input">

                    <CalendarDays size={18} />

                    <input

                        type="date"

                    />

                </div>

            </div>

            <button className="filter-btn">

                Apply Filter

            </button>

        </div>

    );

};

export default DateFilter;