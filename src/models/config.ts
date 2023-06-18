export interface DynamicConfig {
    appApiUrl: string;
    commonApiURL:string;
    authority:string;
    authorityDomain:string;
    editProfileUrl:string;
    applicationId:string;
    organisationId:string;
  }
  
  export const defaultConfig: DynamicConfig = {
    appApiUrl: "http://localhost:8080/undefinedApiUrl",
    commonApiURL:"http://localhost:7600/noCommonApiUrl",
    authority:"noAuth",
    authorityDomain:"noDomain",
    editProfileUrl:"noUrl",
    applicationId:"noAppId",
    organisationId:"noOrdId",
  };
  
  export const dynamicConfigUrl = "config.json";
  