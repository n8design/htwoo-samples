import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import styles from './HTwOoShowcaseWebPart.module.scss';
import * as strings from 'HTwOoShowcaseWebPartStrings';

import HooButton from './components/button';
import HooAccordionItem from './components/accordionItem';

import {
  ThemeProvider
} from '@microsoft/sp-component-base';

export interface IHTwOoShowcaseWebPartProps {
  description: string;
}

export default class HTwOoShowcaseWebPart extends BaseClientSideWebPart<IHTwOoShowcaseWebPartProps> {

  private _themeProvider: ThemeProvider;
  private _themeVariant: IReadonlyTheme | undefined;

  private clickMe = (event: MouseEvent): void => {
    alert('Hello World!');
  }

  private getAccordion = (): string => {
    return `
      <section class="hoo-accordion-group" role="accordion">
      ${HooAccordionItem.item("HTWOO IS BUILT WITH HTML AND CSS FIRST",
      `<p>HTML and CSS are the foundational languages of web development, and ultimately, all user interfaces on the web are created using HTML and CSS. While frameworks like React, Angular, and Vue provide additional functionality and tools for developers, they ultimately rely on HTML and CSS to create the UI.</p>
          <p>One advantage of using HTML/CSS for UI components is their flexibility and compatibility with different development frameworks. Because HTML/CSS is a universal language understood by all web browsers and devices, components created using HTML/CSS can be easily translated, included, and embedded in any other development framework. It makes it easier for developers to switch between frameworks without having to rewrite their UI components completely.</p>
          `)}

      ${HooAccordionItem.item("DOCUMENTATION = IMPLEMENTATION", `<p>hTWOo core uses PatternLab.io, a tool that allows you to create a style guide based on the Atomic Design Methodology by Brad Frost. This methodology has been proven since 2012/13 that it’s an easy way to create and describe user interfaces, from the smallest design components to full-page experiences. It is not only limited to the web but is capable of describing and user interface.
      See it in action: hTWOo Core documentation</p>`)}

      ${HooAccordionItem.item()}

      ${HooAccordionItem.item()}
      `;
  }


  public render(): void {

    this.domElement.innerHTML = `
    <section class="${styles.hTwOoShowcase}">
        <br>
        <button class="hoo-button-primary">
          <span class="hoo-button-label">Button</span>
        </button>
        <br>
        ${HooButton.primary('This is a primary button')}<br>
        ${ this.getAccordion()}
    </section>`;

    // 
    // 

    this.domElement.firstElementChild.prepend(HooButton.standard('Button With Event', this.clickMe));


  }

  private setCSSVariables = (palette: any) => {
    let keys = Object.keys(palette);

    for (let key of keys) {

      this.domElement.style.setProperty(`--${key}`, palette[key]);

    }

  }

  protected onInit(): Promise<void> {

    // Consume the new ThemeProvider service
    this._themeProvider = this.context.serviceScope.consume(ThemeProvider.serviceKey);

    // If it exists, get the theme variant
    this._themeVariant = this._themeProvider.tryGetTheme();

    if (this._themeVariant) {
      // transfer color palette into CSS variables
      this.setCSSVariables(this._themeVariant.palette);
      this.setCSSVariables(this._themeVariant.effects);
    }

    return super.onInit();

  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const { palette } = currentTheme;

    this.setCSSVariables(palette);

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
