import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAppConfig} from '../models/app-config.model';
import {environment} from '../../../environments/environment';

export function initializeAppConfig(appConfig: AppConfig) {
  return () => appConfig.load();
}

@Injectable()
export class AppConfig {
  public settings: IAppConfig;

  constructor(private http: HttpClient) {
  }

  load() {
    const config = environment.production ? 'deploy' : 'dev';
    const jsonFile = `assets/config/config.${config}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
        this.settings = response as IAppConfig;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }


}
