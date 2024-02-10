// File generated from our OpenAPI spec by Stainless.

import * as Core from 'meorphis-test-4/core';
import { APIResource } from 'meorphis-test-4/resource';
import { isRequestOptions } from 'meorphis-test-4/core';
import * as CreditConfigurationAPI from 'meorphis-test-4/resources/accounts/credit-configuration';

export class CreditConfiguration extends APIResource {
  /**
   * Get an Account's credit configuration
   */
  retrieve(accountToken: string, options?: Core.RequestOptions): Core.APIPromise<Businessaccount> {
    return this._client.get(`/accounts/${accountToken}/credit_configuration`, options);
  }

  /**
   * Update a Business Accounts credit configuration
   */
  update(
    accountToken: string,
    body?: CreditConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Businessaccount>;
  update(accountToken: string, options?: Core.RequestOptions): Core.APIPromise<Businessaccount>;
  update(
    accountToken: string,
    body: CreditConfigurationUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Businessaccount> {
    if (isRequestOptions(body)) {
      return this.update(accountToken, {}, body);
    }
    return this._client.patch(`/accounts/${accountToken}/credit_configuration`, { body, ...options });
  }
}

export interface Businessaccount {
  /**
   * Account token
   */
  token: string;

  collections_configuration?: Businessaccount.CollectionsConfiguration;

  /**
   * Credit limit extended to the Account
   */
  credit_limit?: number;
}

export namespace Businessaccount {
  export interface CollectionsConfiguration {
    /**
     * Number of days within the billing period
     */
    billing_period: number;

    /**
     * Number of days after the billing period ends that a payment is required
     */
    payment_period: number;

    /**
     * The external bank account token to use for auto-collections
     */
    external_bank_account_token?: string;
  }
}

export interface CreditConfigurationUpdateParams {
  /**
   * Number of days within the billing period
   */
  billing_period?: number;

  /**
   * Credit limit extended to the Business Account
   */
  credit_limit?: number;

  /**
   * The external bank account token to use for auto-collections
   */
  external_bank_account_token?: string;

  /**
   * Number of days after the billing period ends that a payment is required
   */
  payment_period?: number;
}

export namespace CreditConfiguration {
  export import Businessaccount = CreditConfigurationAPI.Businessaccount;
  export import CreditConfigurationUpdateParams = CreditConfigurationAPI.CreditConfigurationUpdateParams;
}
