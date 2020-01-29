import React from "react";
import { FieldContainer, FieldInput } from "@arch-ui/fields";
import { CheckboxPrimitive } from "@arch-ui/controls";

export const Checkbox = ({ label, value, onChange }) => {
  const checked = value || false;
  const htmlID = `ks-input-${label}`;
  // Note: field label is not working for this case with multi-inputs per field
  return (
    <FieldContainer>
      <label htmlFor={htmlID}>{label}</label>
      <FieldInput css={{ height: 35 }}>
        <CheckboxPrimitive
          autoFocus={false}
          checked={checked}
          onChange={event => onChange({ [label]: event.target.checked })}
          id={htmlID}
        />
      </FieldInput>
    </FieldContainer>
  );
};
