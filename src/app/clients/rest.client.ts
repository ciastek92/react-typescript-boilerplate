import { throwError, Observable, Subscriber } from 'rxjs';
import { AjaxCreationMethod } from 'rxjs/internal-compatibility';
import { catchError, map } from 'rxjs/operators';

export interface AjaxRequest {
  url?: string;
  body?: any;
  user?: string;
  async?: boolean;
  method?: string;
  headers?: Object;
  timeout?: number;
  password?: string;
  hasContent?: boolean;
  crossDomain?: boolean;
  withCredentials?: boolean;
  createXHR?: () => XMLHttpRequest;
  progressSubscriber?: Subscriber<any>;
  responseType?: string;
}

export const METHOD_GET = 'GET';
export const METHOD_PATCH = 'PATCH';
export const METHOD_POST = 'POST';

export class RestClient {
  private dispatch: Function;
  private ajax: AjaxCreationMethod;

  constructor(dispatch: Function, ajax: AjaxCreationMethod) {
    this.dispatch = dispatch;
    this.ajax = ajax;
  }

  private sendRequest(
    endpointUrl: string,
    method: string,
    body: any
  ): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    };

    const ajaxRequest: AjaxRequest = {
      url: endpointUrl,
      method: method,
      headers: headers
    };

    if (body) {
      ajaxRequest.body = body;
    }

    return this.ajax(ajaxRequest).pipe(
      map(
        (request: any): any[] => {
          return request.response;
        }
      ),
      catchError(
        (error: {}): Observable<any> => {
          return throwError(error);
        }
      )
    );
  }

  public get(endpointUrl: string): Observable<any> {
    return this.sendRequest(endpointUrl, METHOD_GET, null);
  }

  public patch(endpointUrl: string, body: any): Observable<any> {
    return this.sendRequest(endpointUrl, METHOD_PATCH, body);
  }

  public post(endpointUrl: string, body: any): Observable<any> {
    return this.sendRequest(endpointUrl, METHOD_POST, body);
  }
}
