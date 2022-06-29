import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangePicker = ({}) => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  console.log(range?.[0]?.startDate && +new Date(range?.[0]?.startDate));
  return (
    <div className="calendarWrap">
      <StyledInput
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />

      <StyledDiv ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="vertical"
            className="calendarElement myCalendar"
            class
          />
        )}
      </StyledDiv>
    </div>
  );
};
const StyledDiv = styled.div.attrs({
  className: "myCalendar",
})`
  &.myCalendar {
    position: absolute;
  }
`;

const StyledInput = styled.input`
  margin-left: 29px;
  box-sizing: border-box;
  width: 221px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  outline: none;
  text-indent: 10px;
  z-index: 99999;
`;
export default DateRangePicker;
