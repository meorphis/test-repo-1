// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as CreditCardsAPI from 'meorphis-test-40/resources/testings/credit-cards';

export class CreditCards extends APIResource {
  /**
   * Retrieve test credit card information. This includes its token, which is
   * generated against the `4111 1111 1111 1004` test card.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CreditCardListResponse> {
    return this._client.get('/testing/credit-cards', options);
  }
}

export interface CreditCardListResponse {
  /**
   * The expiration date of the credit card. TODO TO MAKE EXPIRATION REUSABLE
   */
  expiration: string;

  /**
   * The last 4 digits of the credit card number.
   */
  last4: string;

  /**
   * The credit card network.
   */
  network: 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb' | 'unionpay' | 'alliancedata' | 'citiplcc';
}

export namespace CreditCards {
  export import CreditCardListResponse = CreditCardsAPI.CreditCardListResponse;
}
