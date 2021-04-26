import * as React from "react";
import isEqual from "lodash/isEqual";

export interface IButtonProps {
  disabled: boolean;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonState {
}

export class ButtonState implements IButtonState {
  constructor() { }
}

export default class HooButton extends React.Component<IButtonProps, IButtonState> {
  private LOG_SOURCE: string = "🔶Button";

  constructor(props: IButtonProps) {
    super(props);
    this.state = new ButtonState();
  }

  public shouldComponentUpdate(nextProps: IButtonProps, nextState: IButtonState) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IButtonProps> {
    try {
      return (
        <button className="hoo-button" disabled={this.props.disabled} aria-disabled={this.props.disabled} onClick={this.props.onClick}>
          <div className="hoo-button-label">{this.props.label}</div>
        </button>
      );
    } catch (err) {
      console.log(`${this.LOG_SOURCE} (render) - ${err}`);
      return null;
    }
  }
}