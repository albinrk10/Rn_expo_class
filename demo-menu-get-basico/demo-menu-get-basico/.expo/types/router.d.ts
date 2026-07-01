/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../presentation/components/ComidaCard`; params?: Router.UnknownInputParams; } | { pathname: `/../domain/Comida`; params?: Router.UnknownInputParams; } | { pathname: `/../presentation/components/StateViews`; params?: Router.UnknownInputParams; } | { pathname: `/../infrastructure/service/menuApi`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/../presentation/components/ComidaCard`; params?: Router.UnknownOutputParams; } | { pathname: `/../domain/Comida`; params?: Router.UnknownOutputParams; } | { pathname: `/../presentation/components/StateViews`; params?: Router.UnknownOutputParams; } | { pathname: `/../infrastructure/service/menuApi`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/../presentation/components/ComidaCard${`?${string}` | `#${string}` | ''}` | `/../domain/Comida${`?${string}` | `#${string}` | ''}` | `/../presentation/components/StateViews${`?${string}` | `#${string}` | ''}` | `/../infrastructure/service/menuApi${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../presentation/components/ComidaCard`; params?: Router.UnknownInputParams; } | { pathname: `/../domain/Comida`; params?: Router.UnknownInputParams; } | { pathname: `/../presentation/components/StateViews`; params?: Router.UnknownInputParams; } | { pathname: `/../infrastructure/service/menuApi`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
