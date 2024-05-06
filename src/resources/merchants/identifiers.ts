// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as IdentifiersAPI from 'meorphis-test-40/resources/merchants/identifiers';

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
