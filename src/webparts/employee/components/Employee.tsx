import * as React from 'react';
import styles from './Employee.module.scss';
import { IEmployeeProps } from './IEmployeeProps';
import {IEmployeeState} from './IEmployeeState';
import {IListItem} from './IListItems';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Employee extends React.Component<IEmployeeProps,IEmployeeState> {
  private listItemEntityTypeName: string = undefined;

  constructor(props:IEmployeeProps, state:IEmployeeState){
    super(props);
    this.state = {
      status:this.listNotConfigured(this.props)? 'Please assign a list':'Ready',
      items:[]
    }
  }

  public render(): React.ReactElement<IEmployeeProps> {
    const items: JSX.Element[] = this.state.items.map((item: IListItem, i: number): JSX.Element => {
      return (
        <li>{item.Title} ({item.Location}-{item.SME})</li>
      );
    });


    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  private listNotConfigured(props: IEmployeeProps): boolean {
    return props.listName === undefined ||
      props.listName === null ||
      props.listName.length === 0;
  }
}
