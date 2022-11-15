import React, { useRef, useEffect } from "react";
import { useAPI } from "./dataProvider";

export const CHECKBOX_STATES = {
  Checked: "Checked",
  Empty: "Empty",
  Indeterminate: "Indeterminate",
};

const TopHeader = () => {
  const { selectAllRowsHandler, selectRowsCount, selectAllState } = useAPI();
  const checkboxRef = useRef();

  useEffect(() => {
    if (selectAllState === CHECKBOX_STATES.Checked) {
      checkboxRef.current.checked = true;
      checkboxRef.current.indeterminate = false;
    } else if (selectAllState === CHECKBOX_STATES.Empty) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (selectAllState === CHECKBOX_STATES.Indeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [selectAllState]);

  return (
    <tr>
      <th>
        <input
          type="checkbox"
          ref={checkboxRef}
          onChange={(e) => {
            selectAllRowsHandler(e.currentTarget.checked);
          }}
        />
      </th>
      <th>Selected {selectRowsCount}</th>
      <th> Download Selected</th>
      <th colSpan={3}></th>
    </tr>
  );
};

export default TopHeader;
