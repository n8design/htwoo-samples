import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HTwOoSampleWebPart.module.scss';
import * as strings from 'HTwOoSampleWebPartStrings';

export interface IHTwOoSampleWebPartProps {
  description: string;
}

import {
  ThemeProvider,
  ThemeChangedEventArgs,
  IReadonlyTheme,
  ISemanticColors
} from '@microsoft/sp-component-base';

export default class HTwOoSampleWebPart extends BaseClientSideWebPart<IHTwOoSampleWebPartProps> {

  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;

  protected onInit(): Promise<void> {
    // Consume the new ThemeProvider service
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);

    // If it exists, get the theme variant
    this._themeVariant = this._themeProvider.tryGetTheme();

    console.log(this._themeVariant);

    // Assign theme slots
    if (this._themeVariant) {

      // transfer semanticColors into CSS variables
      this.setCSSVariables(this._themeVariant.semanticColors);

      // transfer fonts into CSS variables
      this.setCSSVariables(this._themeVariant.fonts);

      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant.palette);

      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant["effects"]);

    } else {

      // Fallback to core theme state options applicable for Single Canvas Apps and Microsoft Teams
      this.setCSSVariables(window["__themeState__"].theme)

    }


    // Register a handler to be notified if the theme variant changes
    this._themeProvider.themeChangedEvent.add(this, this._handleThemeChangedEvent);

    return super.onInit();
  }

  // Handle all theme changes
  private _handleThemeChangedEvent(args: ThemeChangedEventArgs): void {
    this._themeVariant = args.theme;

    // transfer semanticColors into CSS variables
    this.setCSSVariables(this._themeVariant.semanticColors);

    // transfer fonts into CSS variables
    this.setCSSVariables(this._themeVariant.fonts);

    // transfer color palette into CSS variables
    this.setCSSVariables(this._themeVariant.palette);

    // transfer color palette into CSS variables
    this.setCSSVariables(this._themeVariant["effects"]);

    
  }

  /// Converts JSON Theme Slots it CSS variables
  private setCSSVariables(theming: any) {

    // request all key defined in theming
    let themingKeys = Object.keys(theming);
    // if we have the key
    if (themingKeys !== null) {
      // loop over it
      themingKeys.forEach(key => {
        // add CSS variable to style property of the web part
        this.domElement.style.setProperty(`--${key}`, theming[key])

      });

    }

  }

  public render(): void {
    this.domElement.innerHTML = `
    <div class="${styles.hTWOoSample}">
      <button class="hoo-button">
        <div class="hoo-button-label">My First H2O button</div>
      </button><br>
      <button class="hoo-button-primary">
        <div class="hoo-button-label">My First H2O Primary button</div>
      </button><br>
      ${this.getFacePiles()}
  </div>`;
  }

  private getFacePiles(): string {
    return `      <div class="hoo-facepile">
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/astronaut-mugshot-001.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-online" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/dog-mugshot-001.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-online" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/female-mugshot-001.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-away" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/male-mugshot-001.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-dnd" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/female-mugshot-002.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-dnd" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/male-mugshot-002.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-oof" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/female-mugshot-003.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-oof" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/male-mugshot-003.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-dnd" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/female-mugshot-004.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-dnd" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/male-mugshot-004.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-dnd" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/female-mugshot-005.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-dnd" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/male-mugshot-005.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-online" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/female-mugshot-006.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-online" title=""></div>
    </div>
    <div class="hoo-avatar-pres-48">
      <div class="hoo-avatar-48">
        <img src="https://lab.n8d.studio/htwoo/htwoo-core/images//mug-shots/male-mugshot-006.jpg" alt="" class="hoo-avatar" height="48" width="48" loading="lazy">
      </div>
      <div class="hoo-presence is-online" title=""></div>
    </div>
  </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
