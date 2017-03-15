declare interface IEmployeeStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'employeeStrings' {
  const strings: IEmployeeStrings;
  export = strings;
}
