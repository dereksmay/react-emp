import {SPHttpClient} from '@microsoft/sp-http';

export interface IEmployeeProps {
  spHttpClient:SPHttpClient;
  listName:string;
 /* description?: string;*/
  siteUrl:string;
}
