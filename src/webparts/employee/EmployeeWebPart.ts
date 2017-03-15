import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'employeeStrings';
import Employee from './components/Employee';
import { IEmployeeProps } from './components/IEmployeeProps';
import { IEmployeeWebPartProps } from './IEmployeeWebPartProps';
import {IListItem} from './components/IListItems';

export default class EmployeeWebPart extends BaseClientSideWebPart<IEmployeeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEmployeeProps > = React.createElement(
      Employee,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
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
