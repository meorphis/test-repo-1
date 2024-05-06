// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as ExistsAPI from 'meorphis-test-40/resources/accounts/exists';

export class Exists extends APIResource {
  /**
   * Determine whether or not an identifier is associated with an existing Bolt
   * account.
   */
  list(params: ExistListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-Publishable-Key': xPublishableKey, ...query } = params;
    return this._client.get('/account/exists', {
      query,
      ...options,
      headers: { Accept: '*/*', 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }
}

export interface ExistListParams {
  /**
   * Query param: A type and value combination that defines the identifier used to
   * detect the existence of an account.
   */
  identifier: ExistListParams.Identifier;

  /**
   * Header param: The publicly viewable identifier used to identify a merchant
   * division.
   */
  'X-Publishable-Key': string;
}

export namespace ExistListParams {
  /**
   * A type and value combination that defines the identifier used to detect the
   * existence of an account.
   */
  export interface Identifier {
    /**
     * The type of identifier
     */
    identifier_type: 'email' | 'email_sha256';

    /**
     * The value of the identifier. The value must be valid for the specified
     * `identifier_type`
     */
    identifier_value: string;
  }
}

export namespace Exists {
  export import ExistListParams = ExistsAPI.ExistListParams;
}
