// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as CallbacksAPI from './callbacks';

export class Callbacks extends APIResource {
  /**
   * Return callback URLs configured on the merchant such as OAuth URLs.
   */
  list(params: CallbackListParams, options?: Core.RequestOptions): Core.APIPromise<CallbackListResponse> {
    const { 'X-Publishable-Key': xPublishableKey } = params;
    return this._client.get('/merchant/callbacks', {
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }

  /**
   * Update and configure callback URLs on the merchant such as OAuth URLs.
   */
  merchantCallbacksUpdate(
    params: CallbackMerchantCallbacksUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallbackMerchantCallbacksUpdateResponse> {
    const { 'X-Publishable-Key': xPublishableKey, ...body } = params;
    return this._client.patch('/merchant/callbacks', {
      body,
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }
}

export interface CallbackListResponse {
  account_page?: string;

  base_domain?: string;

  confirmation_redirect?: string;

  create_order?: string;

  debug?: string;

  get_account?: string;

  mobile_app_domain?: string;

  oauth_logout?: string;

  oauth_redirect?: string;

  privacy_policy?: string;

  product_info?: string;

  remote_api?: string;

  shipping?: string;

  support_page?: string;

  tax?: string;

  terms_of_service?: string;

  universal_merchant_api?: string;

  update_cart?: string;

  validate_additional_account_data?: string;
}

export interface CallbackMerchantCallbacksUpdateResponse {
  account_page?: string;

  base_domain?: string;

  confirmation_redirect?: string;

  create_order?: string;

  debug?: string;

  get_account?: string;

  mobile_app_domain?: string;

  oauth_logout?: string;

  oauth_redirect?: string;

  privacy_policy?: string;

  product_info?: string;

  remote_api?: string;

  shipping?: string;

  support_page?: string;

  tax?: string;

  terms_of_service?: string;

  universal_merchant_api?: string;

  update_cart?: string;

  validate_additional_account_data?: string;
}

export interface CallbackListParams {
  /**
   * The publicly viewable identifier used to identify a merchant division.
   */
  'X-Publishable-Key': string;
}

export interface CallbackMerchantCallbacksUpdateParams {
  /**
   * Header param: The publicly viewable identifier used to identify a merchant
   * division.
   */
  'X-Publishable-Key': string;

  /**
   * Body param:
   */
  account_page?: string;

  /**
   * Body param:
   */
  base_domain?: string;

  /**
   * Body param:
   */
  confirmation_redirect?: string;

  /**
   * Body param:
   */
  create_order?: string;

  /**
   * Body param:
   */
  debug?: string;

  /**
   * Body param:
   */
  get_account?: string;

  /**
   * Body param:
   */
  mobile_app_domain?: string;

  /**
   * Body param:
   */
  oauth_logout?: string;

  /**
   * Body param:
   */
  oauth_redirect?: string;

  /**
   * Body param:
   */
  privacy_policy?: string;

  /**
   * Body param:
   */
  product_info?: string;

  /**
   * Body param:
   */
  remote_api?: string;

  /**
   * Body param:
   */
  shipping?: string;

  /**
   * Body param:
   */
  support_page?: string;

  /**
   * Body param:
   */
  tax?: string;

  /**
   * Body param:
   */
  terms_of_service?: string;

  /**
   * Body param:
   */
  universal_merchant_api?: string;

  /**
   * Body param:
   */
  update_cart?: string;

  /**
   * Body param:
   */
  validate_additional_account_data?: string;
}

export namespace Callbacks {
  export import CallbackListResponse = CallbacksAPI.CallbackListResponse;
  export import CallbackMerchantCallbacksUpdateResponse = CallbacksAPI.CallbackMerchantCallbacksUpdateResponse;
  export import CallbackListParams = CallbacksAPI.CallbackListParams;
  export import CallbackMerchantCallbacksUpdateParams = CallbacksAPI.CallbackMerchantCallbacksUpdateParams;
}
