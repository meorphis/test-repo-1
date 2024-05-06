# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountAccountGetResponse</a></code>

Methods:

- <code title="get /account">client.accounts.<a href="./src/resources/accounts/accounts.ts">accountGet</a>({ ...params }) -> AccountAccountGetResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/accounts/addresses.ts">AddressUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/addresses.ts">AddressAccountAddressCreateResponse</a></code>

Methods:

- <code title="put /account/addresses/{id}">client.accounts.addresses.<a href="./src/resources/accounts/addresses.ts">update</a>(id, { ...params }) -> AddressUpdateResponse</code>
- <code title="delete /account/addresses/{id}">client.accounts.addresses.<a href="./src/resources/accounts/addresses.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /account/addresses">client.accounts.addresses.<a href="./src/resources/accounts/addresses.ts">accountAddressCreate</a>({ ...params }) -> AddressAccountAddressCreateResponse</code>

## Exists

Methods:

- <code title="get /account/exists">client.accounts.exists.<a href="./src/resources/accounts/exists.ts">list</a>({ ...params }) -> void</code>

## PaymentMethods

Types:

- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodAccountAddPaymentMethodResponse</a></code>

Methods:

- <code title="delete /account/payment-methods/{id}">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /account/payment-methods">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">accountAddPaymentMethod</a>({ ...params }) -> PaymentMethodAccountAddPaymentMethodResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentCreateResponse</a></code>

Methods:

- <code title="post /payments">client.payments.<a href="./src/resources/payments.ts">create</a>({ ...params }) -> PaymentCreateResponse</code>

# Guests

## Payments

Types:

- <code><a href="./src/resources/guests/payments.ts">PaymentGuestPaymentsInitializeResponse</a></code>

Methods:

- <code title="post /guest/payments">client.guests.payments.<a href="./src/resources/guests/payments.ts">guestPaymentsInitialize</a>({ ...params }) -> PaymentGuestPaymentsInitializeResponse</code>

# Merchants

## Callbacks

Types:

- <code><a href="./src/resources/merchants/callbacks.ts">CallbackListResponse</a></code>
- <code><a href="./src/resources/merchants/callbacks.ts">CallbackMerchantCallbacksUpdateResponse</a></code>

Methods:

- <code title="get /merchant/callbacks">client.merchants.callbacks.<a href="./src/resources/merchants/callbacks.ts">list</a>({ ...params }) -> CallbackListResponse</code>
- <code title="patch /merchant/callbacks">client.merchants.callbacks.<a href="./src/resources/merchants/callbacks.ts">merchantCallbacksUpdate</a>({ ...params }) -> CallbackMerchantCallbacksUpdateResponse</code>

## Identifiers

Types:

- <code><a href="./src/resources/merchants/identifiers.ts">IdentifierListResponse</a></code>

Methods:

- <code title="get /merchant/identifiers">client.merchants.identifiers.<a href="./src/resources/merchants/identifiers.ts">list</a>() -> IdentifierListResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="put /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(id) -> WebhookRetrieveResponse</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(id) -> void</code>

# Testings

## Accounts

Types:

- <code><a href="./src/resources/testings/accounts.ts">AccountTestingAccountCreateResponse</a></code>

Methods:

- <code title="post /testing/accounts">client.testings.accounts.<a href="./src/resources/testings/accounts.ts">testingAccountCreate</a>({ ...params }) -> AccountTestingAccountCreateResponse</code>

## CreditCards

Types:

- <code><a href="./src/resources/testings/credit-cards.ts">CreditCardListResponse</a></code>

Methods:

- <code title="get /testing/credit-cards">client.testings.creditCards.<a href="./src/resources/testings/credit-cards.ts">list</a>() -> CreditCardListResponse</code>

## Shipments

Methods:

- <code title="post /testing/shipments">client.testings.shipments.<a href="./src/resources/testings/shipments.ts">testingShipmentTrackingCreate</a>({ ...params }) -> void</code>
