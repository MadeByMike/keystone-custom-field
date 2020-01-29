import React from "react";
import { Checkbox } from "./MultiCheck";
// import { FieldDescription } from "@arch-ui/fields";

// Field description will be added in next release

export default class MultiCheckField extends React.Component {
  constructor(props) {
    super(props);
    const { field, value } = props; // TODO: not handling errors or autoFocus
    const { defaultValue } = field.config;
    this.state = { values: value ? JSON.parse(value) : defaultValue };
  }

  handleChange = newValue => {
    this.setState({ values: { ...this.state.values, ...newValue } });
    this.props.onChange(JSON.stringify({ ...this.state.values, ...newValue }));
  };

  render() {
    return (
      <div>
        {/* {field.config.adminDoc && (
          <FieldDescription>{field.config.adminDoc}</FieldDescription>
        )} */}
        {Object.keys(this.state.values).map(label => {
          return (
            <Checkbox
              key={`ks-input-${label}`}
              value={this.state.values[label]}
              label={label}
              onChange={this.handleChange}
            />
          );
        })}
      </div>
    );
  }
}
