import React from "react";
import { Checkbox, Label } from "tailwindcss";

const RoundCheckbox = ({ checked, onChange }) => {
  return (
    <div class="flex items-center">
      <Checkbox
        id="round-checkbox"
        name="round-checkbox"
        checked={checked}
        onChange={onChange}
        class="w-4 h-4 rounded"
      />
      <Label for="round-checkbox">Round checkbox</Label>
    </div>
  );
};

export default RoundCheckbox;