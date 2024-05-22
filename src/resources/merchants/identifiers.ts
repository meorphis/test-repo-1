// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as IdentifiersAPI from './identifiers';

export class Identifiers extends APIResource {
  /**
   * Return several identifiers for the merchant, such as public IDs, publishable
   * keys, signing secrets, etc...
   */
  list(options?: Core.RequestOptions): Core.APIPromise<IdentifierListResponse> {
    return this._client.get('/merchant/identifiers', options);
  }
}

export interface IdentifierListResponse {
  merchant_divisions: Array<IdentifierListResponse.MerchantDivision>;

  merchant_id: string;

  signing_secret: string;
}

export namespace IdentifierListResponse {
  export interface MerchantDivision {
    publishable_key: string;
  }
}

export namespace Identifiers {
  export import IdentifierListResponse = IdentifiersAPI.IdentifierListResponse;
}
