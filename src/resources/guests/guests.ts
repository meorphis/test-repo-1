// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'meorphis-test-40/resource';
import * as PaymentsAPI from 'meorphis-test-40/resources/guests/payments';

export class Guests extends APIResource {
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
}

export namespace Guests {
  export import Payments = PaymentsAPI.Payments;
  export import PaymentGuestPaymentsInitializeResponse = PaymentsAPI.PaymentGuestPaymentsInitializeResponse;
  export import PaymentGuestPaymentsInitializeParams = PaymentsAPI.PaymentGuestPaymentsInitializeParams;
}
