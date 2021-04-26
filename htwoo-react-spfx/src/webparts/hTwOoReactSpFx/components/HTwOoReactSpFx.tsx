import * as React from 'react';
import styles from './HTwOoReactSpFx.module.scss';
import { IHTwOoReactSpFxProps } from './IHTwOoReactSpFxProps';
import { escape } from '@microsoft/sp-lodash-subset';

import HooButton from './hoobutton-standard';
import HooButtonPrimary from './hoobutton-primary';

export default class HTwOoReactSpFx extends React.Component<IHTwOoReactSpFxProps, {}> {
  public render(): React.ReactElement<IHTwOoReactSpFxProps> {
    return (
      <div className={ styles.hTWOoReactSpFx }>
        <HooButton label="My first hTWOo React Button" disabled={false} onClick={()=>{}} />
        <br />
        <HooButtonPrimary label="My first hTWOo React Button" disabled={false} onClick={()=>{}} />
      </div>
    );
  }
}
