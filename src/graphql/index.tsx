/* eslint-disable import/first */
// tslint:disable
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
  /** File Upload */
  Upload: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};

export type AddMultipleProspects = {
  customers: Array<ProspectCustomer>,
  certificateId?: Maybe<Scalars['String']>,
  personalizedMessage?: Maybe<Scalars['String']>,
};

export type Address = {
   __typename?: 'Address',
  address: Scalars['String'],
  city: Scalars['String'],
  state: Scalars['String'],
  zip: Scalars['String'],
  country: Scalars['String'],
};

export type AddressInput = {
  address: Scalars['String'],
  city: Scalars['String'],
  state: Scalars['String'],
  zip: Scalars['String'],
  country: Scalars['String'],
};

export type AffiliateLink = {
   __typename?: 'AffiliateLink',
  url: Scalars['String'],
  product: ProductReference,
  funnel: FunnelReference,
};

export type AffiliateLinkInput = {
  url: Scalars['String'],
  product: ProductReferenceInput,
  funnel: FunnelReferenceInput,
};

export type Ambassador = {
   __typename?: 'Ambassador',
  updatedAt: Scalars['DateTime'],
  isSubscribed: Scalars['Boolean'],
  email: Scalars['String'],
  remoteLoginId: Scalars['String'],
  lastName: Scalars['String'],
  firstName: Scalars['String'],
  id: Scalars['String'],
  status: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  stripeCustomerId: Scalars['String'],
  stripeCardSource: Scalars['String'],
  phone: Scalars['String'],
  password: Scalars['String'],
};

export type Ancestry = {
   __typename?: 'Ancestry',
  parentUserId?: Maybe<Scalars['String']>,
  ancestors?: Maybe<Scalars['String']>,
  depth: Scalars['Int'],
};

export type AncestryInput = {
  parentUserId?: Maybe<Scalars['String']>,
  ancestors?: Maybe<Scalars['String']>,
  depth: Scalars['Float'],
};

export type ApiMessageResponse = {
   __typename?: 'APIMessageResponse',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
};

export type AppSettings = {
   __typename?: 'AppSettings',
  id?: Maybe<Scalars['ID']>,
  categories: Array<Scalars['String']>,
  tags: Array<VideoTag>,
  roles?: Maybe<Array<Scalars['String']>>,
  sorAccount?: Maybe<Array<Scalars['String']>>,
  plans?: Maybe<Array<Scalars['String']>>,
  migrations?: Maybe<Array<Migration>>,
};

export type AppSettingsAddInput = {
  categories: Array<Scalars['String']>,
};

export type AppSettingsCountryList = {
   __typename?: 'AppSettingsCountryList',
  data: Array<CountryListItem>,
};

export type AppSettingsInput = {
  id: Scalars['ID'],
  categories: Array<Scalars['String']>,
};

export type AssuredTravelActivity = {
   __typename?: 'AssuredTravelActivity',
  activityType: Scalars['Float'],
  fromDate: Scalars['String'],
  endDate: Scalars['String'],
  userMessageReference?: Maybe<Scalars['String']>,
};

export type AssuredTravelCertificateActivityResponse = {
   __typename?: 'AssuredTravelCertificateActivityResponse',
  status: Scalars['Int'],
  error?: Maybe<Scalars['String']>,
  userMessageReference?: Maybe<Scalars['String']>,
  items: Array<Scalars['String']>,
  activityType: Scalars['String'],
  Note: Scalars['String'],
  activityDateStamp: Scalars['DateTime'],
  certificateNumber: Scalars['String'],
  prospectID: Scalars['String'],
};

export type AssuredTravelCertificateStatusResponse = {
   __typename?: 'AssuredTravelCertificateStatusResponse',
  status: Scalars['Int'],
  error?: Maybe<Scalars['String']>,
  userMessageReference?: Maybe<Scalars['String']>,
  certificateNumber: Scalars['String'],
  currentCertificateStatus: Scalars['String'],
};

export type AssuredTravelGetCertificateActivityRequest = {
   __typename?: 'AssuredTravelGetCertificateActivityRequest',
  userMessageReference: Scalars['String'],
  activityType: Scalars['Float'],
  fromDate: Scalars['DateTime'],
  endDate: Scalars['DateTime'],
};

export type AssuredTravelGetCertificateStatusRequest = {
   __typename?: 'AssuredTravelGetCertificateStatusRequest',
  userMessageReference: Scalars['String'],
  certificateNumber: Scalars['String'],
  prospectId: Scalars['String'],
};

export type AssuredTravelGetProductsRequest = {
   __typename?: 'AssuredTravelGetProductsRequest',
  userMessageReference: Scalars['String'],
};

export type AssuredTravelGetProductsResponse = {
   __typename?: 'AssuredTravelGetProductsResponse',
  userMessageReference: Scalars['String'],
  status: Scalars['Int'],
  error?: Maybe<Scalars['String']>,
  certificateTypeID: Scalars['Int'],
  certificateTypeDescription: Scalars['String'],
  certificateRegistrationFee: Scalars['Float'],
  maxDaysToRegister: Scalars['Int'],
};

export type AssuredTravelProduct = {
   __typename?: 'AssuredTravelProduct',
  certificateTypeID: Scalars['Int'],
  certificateTypeDescription: Scalars['String'],
  certificateRegistrationFee: Scalars['Float'],
  maxDaysToRegister: Scalars['Int'],
};

export type AssuredTravelRequestCertificate = {
   __typename?: 'AssuredTravelRequestCertificate',
  certificateTypeID: Scalars['Int'],
  prospectID: Scalars['String'],
  memberID: Scalars['String'],
  prospectEmailAddress: Scalars['String'],
  userMessageReference?: Maybe<Scalars['String']>,
};

export type AssuredTravelRequestCertificateRequest = {
   __typename?: 'AssuredTravelRequestCertificateRequest',
  userMessageReference: Scalars['String'],
  certificateTypeId: Scalars['Int'],
  memberId: Scalars['String'],
  prospectEmailAddress: Scalars['String'],
  prospectID: Scalars['String'],
};

export type AssuredTravelRequestCertificateResponse = {
   __typename?: 'AssuredTravelRequestCertificateResponse',
  userMessageReference: Scalars['String'],
  status: Scalars['Int'],
  error?: Maybe<Scalars['String']>,
  certificateNumber: Scalars['String'],
  certificatePIN: Scalars['Int'],
  certificateActivationCode: Scalars['String'],
  certificateRegistrationFee: Scalars['Float'],
  maxDaysToRegister: Scalars['Int'],
  registrationURL: Scalars['String'],
};

export type AssuredTravelRequestsBase = {
   __typename?: 'AssuredTravelRequestsBase',
  userMessageReference: Scalars['String'],
};

export type AssuredTravelResponseBase = {
   __typename?: 'AssuredTravelResponseBase',
  userMessageReference: Scalars['String'],
  status: Scalars['Int'],
  error?: Maybe<Scalars['String']>,
};

export type AssuredTravelRevokeCertificateRequest = {
   __typename?: 'AssuredTravelRevokeCertificateRequest',
  userMessageReference: Scalars['String'],
  certificateNumber: Scalars['String'],
  prospectId: Scalars['String'],
  reason: Scalars['String'],
};

export type AssuredTravelRevokeCertificateResponse = {
   __typename?: 'AssuredTravelRevokeCertificateResponse',
  certificatedNumber: Scalars['String'],
  currentCertificateStatus: Scalars['String'],
};

export type AssuredTravelStatus = {
   __typename?: 'AssuredTravelStatus',
  certificateNumber: Scalars['String'],
  prospectID: Scalars['String'],
  userMessageReference: Scalars['String'],
};

export type AssuredTravelTestRequest = {
   __typename?: 'AssuredTravelTestRequest',
  userMessageReference: Scalars['String'],
};

export type AuthorizeCaptureResult = {
   __typename?: 'AuthorizeCaptureResult',
  transId?: Maybe<Scalars['String']>,
  authCode?: Maybe<Scalars['String']>,
  message: Scalars['String'],
};

export type AuthorizeNetMessage = {
   __typename?: 'AuthorizeNetMessage',
  code: Scalars['String'],
  description: Scalars['String'],
};

export type AuthorizeNetMessages = {
   __typename?: 'AuthorizeNetMessages',
  message: Array<AuthorizeNetMessage>,
};

export type AuthorizeNetTransaction = {
   __typename?: 'AuthorizeNetTransaction',
  responseCode: Scalars['String'],
  authCode: Scalars['String'],
  avsResultCode: Scalars['String'],
  cvvResultCode: Scalars['String'],
  cavvResultCode: Scalars['String'],
  transId: Scalars['String'],
  refTransID: Scalars['String'],
  transHash: Scalars['String'],
  testRequest: Scalars['String'],
  accountNumber: Scalars['String'],
  accountType: Scalars['String'],
  messages: AuthorizeNetMessages,
  transHashSha2: Scalars['String'],
};

export type Binary = {
   __typename?: 'Binary',
  parentUserId?: Maybe<Scalars['String']>,
  depth: Scalars['Int'],
  placement: Scalars['String'],
  leg: Scalars['String'],
};

export type BooleanResponse = {
   __typename?: 'BooleanResponse',
  success: Scalars['Boolean'],
};

/** YEP or TripValet */
export enum BrandTypeEnum {
  Yep = 'YEP',
  TripValet = 'TripValet'
}

export type Category = {
   __typename?: 'Category',
  category: Scalars['String'],
};

export type Certificate = {
   __typename?: 'Certificate',
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  description: Scalars['String'],
  imageUrl: Scalars['String'],
  redemptionUrl?: Maybe<Scalars['String']>,
  sgTemplateId1?: Maybe<Scalars['String']>,
  sgTemplateId2?: Maybe<Scalars['String']>,
  membershipLevel?: Maybe<Array<Scalars['String']>>,
  apiAccessToken: Scalars['String'],
  active: Scalars['Boolean'],
  destinations?: Maybe<Scalars['Int']>,
  defaultMessage: Scalars['String'],
  displayOrder: Scalars['Int'],
  images: Array<ImageContent>,
  documents: Array<Document>,
  createdAt?: Maybe<Scalars['DateTime']>,
  vendor: Scalars['String'],
  assuredTravel?: Maybe<AssuredTravelProduct>,
  sfx?: Maybe<SfxOffer>,
  unlimitedCertificates?: Maybe<UnlimitedCertificatesProduct>,
  pdfContent?: Maybe<CertificatePdfContent>,
};

export type CertificateForMobile = {
   __typename?: 'CertificateForMobile',
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  membershipLevels?: Maybe<Array<Scalars['String']>>,
  defaultMessage: Scalars['String'],
  thumbnail: Scalars['String'],
};

export type CertificateInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  description: Scalars['String'],
  imageUrl: Scalars['String'],
  membershipLevel?: Maybe<Array<Scalars['String']>>,
  apiAccessToken: Scalars['String'],
  active: Scalars['Boolean'],
  defaultMessage: Scalars['String'],
  displayOrder: Scalars['Int'],
  images: Array<ImageContentInput>,
};

export type CertificatePayment = {
   __typename?: 'CertificatePayment',
  type: CertificatePaymentEnum,
  amount: Scalars['Float'],
  transId: Scalars['String'],
  authCode: Scalars['String'],
  invoiceNumber: Scalars['String'],
  authorizeNet: AuthorizeNetTransaction,
  createdAt?: Maybe<Scalars['DateTime']>,
};

/** Activation or Reservation */
export enum CertificatePaymentEnum {
  Activation = 'Activation',
  Reservation = 'Reservation'
}

export type CertificatePdfContent = {
   __typename?: 'CertificatePdfContent',
  title: Scalars['String'],
  description: Scalars['String'],
  base64: Scalars['String'],
};

export type CertificateRedemptionCode = {
   __typename?: 'CertificateRedemptionCode',
  id?: Maybe<Scalars['ID']>,
  fullRedemptionCode: Scalars['String'],
  numericCode: Scalars['Int'],
  certificateId: Scalars['String'],
  redeemed: Scalars['Boolean'],
  prospect?: Maybe<ProspectReference>,
  user?: Maybe<UserReference>,
};

export type CertificateReference = {
   __typename?: 'CertificateReference',
  id: Scalars['ID'],
  name: Scalars['String'],
  imageUrl?: Maybe<Scalars['String']>,
};

export type CertificateTraveler = {
   __typename?: 'CertificateTraveler',
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  dateOfBirth: Scalars['DateTime'],
  maritalStatus: MaritalStatusEnum,
};

export type CertificateTravelerInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  dateOfBirth: Scalars['DateTime'],
  maritalStatus: MaritalStatusEnum,
};

export type ClickFunnelPurchase = {
   __typename?: 'ClickFunnelPurchase',
  id?: Maybe<Scalars['ID']>,
  userId?: Maybe<Scalars['String']>,
};

export type ClickFunnels = {
   __typename?: 'ClickFunnels',
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  url: Scalars['String'],
  active: Scalars['Boolean'],
};

export type ClickFunnelsAffiliateUrl = {
   __typename?: 'ClickFunnelsAffiliateUrl',
  id: Scalars['ID'],
  path: Scalars['String'],
};

export type ClickFunnelsAffiliateUrlInput = {
  id: Scalars['Int'],
  path: Scalars['String'],
};

export type ClickFunnelsWebHook = {
   __typename?: 'ClickFunnelsWebHook',
  id?: Maybe<Scalars['ID']>,
  payload: Scalars['JSON'],
};

export type CoinMd = {
   __typename?: 'CoinMD',
  memberNumber: Scalars['Int'],
  sponsorMemberNumber: Scalars['Int'],
  sponsorEmail: Scalars['String'],
  sponsorFirstName?: Maybe<Scalars['String']>,
  sponsorLastName?: Maybe<Scalars['String']>,
  sponsorUsername?: Maybe<Scalars['String']>,
};

export type CoinMdInput = {
  memberNumber: Scalars['Int'],
  sponsorMemberNumber: Scalars['Int'],
  sponsorEmail: Scalars['String'],
  sponsorFirstName?: Maybe<Scalars['String']>,
  sponsorLastName?: Maybe<Scalars['String']>,
  sponsorUsername?: Maybe<Scalars['String']>,
};

export type Commission = {
   __typename?: 'Commission',
  id?: Maybe<Scalars['ID']>,
  customer: UserReference,
  affiliate: UserReference,
  tier: TierLevel,
  payCommissionOn: Scalars['DateTime'],
  payoutMethod: Scalars['String'],
  commissionAmount: Scalars['Float'],
  status: Scalars['String'],
  invoice: StripeCustomerInvoiceReference,
  order: OrderReference,
  revenueShare: CommissionRevenueShare,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type CommissionInput = {
  id: Scalars['String'],
  user: UserReferenceInput,
  orderId: Scalars['String'],
  funnel: FunnelReferenceInput,
  payCommissionOn: Scalars['DateTime'],
  commissionAmount: Scalars['Float'],
  status: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
};

export type CommissionOrderReference = {
   __typename?: 'CommissionOrderReference',
  orderId: Scalars['String'],
  productNames: Scalars['String'],
  productAmount: Scalars['Int'],
};

export type CommissionResult = {
   __typename?: 'CommissionResult',
  success: Scalars['Boolean'],
  message: Scalars['String'],
};

export type CommissionRevenueShare = {
   __typename?: 'CommissionRevenueShare',
  isRevenueShare: Scalars['Boolean'],
  revenueShareId: Scalars['String'],
};

export type CommissionRevenueShareInput = {
   __typename?: 'CommissionRevenueShareInput',
  isRevenueShare: Scalars['Boolean'],
  revenueShareId: Scalars['String'],
};

export type CommissionTotal = {
   __typename?: 'CommissionTotal',
  userId: Scalars['String'],
  commissionAmount: Scalars['Float'],
};

export type Contact = {
   __typename?: 'Contact',
  id?: Maybe<Scalars['ID']>,
  uuid: Scalars['String'],
  user: UserReference,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  tag: Scalars['String'],
  status: Scalars['String'],
  subscribe: Scalars['Boolean'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ContactEmail = {
   __typename?: 'ContactEmail',
  id?: Maybe<Scalars['ID']>,
  contactId: Scalars['String'],
  email: Scalars['String'],
  message: Scalars['String'],
  tag: Scalars['String'],
  createdAt: Scalars['DateTime'],
};

export type ContactEmailByUuid = {
   __typename?: 'ContactEmailByUUID',
  email: Scalars['String'],
};

export type ContactEmailCount = {
   __typename?: 'ContactEmailCount',
  contactEmail: Array<ContactEmailInfo>,
  totalRows: Scalars['Int'],
};

export type ContactEmailInfo = {
   __typename?: 'ContactEmailInfo',
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  message: Scalars['String'],
  tag: Scalars['String'],
  createdAt: Scalars['DateTime'],
  isSent: Scalars['Boolean'],
};

export type ContentList = {
   __typename?: 'ContentList',
  totalRows: Scalars['Int'],
  contents: Array<ShareableContent>,
};

/** Image or Video */
export enum ContentTypeEnum {
  Image = 'Image',
  Video = 'Video'
}

export type Coordinate = {
   __typename?: 'Coordinate',
  lat: Scalars['Float'],
  lng: Scalars['Float'],
};

export type Country3DigitListItem = {
   __typename?: 'Country3DigitListItem',
  name: Scalars['String'],
  alphaCode: Scalars['String'],
  numericCode: Scalars['String'],
};

export type CountryListItem = {
   __typename?: 'CountryListItem',
  name: Scalars['String'],
  code: Scalars['String'],
  phone_code: Scalars['String'],
};

export type CouponCode = {
   __typename?: 'CouponCode',
  id: Scalars['String'],
  code: Scalars['String'],
  discountType: Scalars['String'],
  discountAmount: Scalars['Float'],
  appliesToNumberOfGuests: Scalars['Int'],
  appliesToExcursions: Scalars['Boolean'],
};

export type CreditCard = {
   __typename?: 'CreditCard',
  number: Scalars['String'],
  month: Scalars['String'],
  year: Scalars['String'],
  cvc: Scalars['String'],
};

export type CreditCardInput = {
  number: Scalars['String'],
  month: Scalars['String'],
  year: Scalars['String'],
  cvc: Scalars['String'],
};

export type DailyTripAgenda = {
   __typename?: 'DailyTripAgenda',
  day: Scalars['Int'],
  dayTitle: Scalars['String'],
  imageUrl: Scalars['String'],
  agenda: Array<Scalars['String']>,
};

export type DateFilter = {
  value: Scalars['DateTime'],
  filter: Scalars['String'],
};


export type DisplayOrder = {
  displayOrder: Scalars['Int'],
  videoId: Scalars['String'],
};

export type Document = {
   __typename?: 'Document',
  id?: Maybe<Scalars['ID']>,
  type: Scalars['String'],
  url: Scalars['String'],
  images: Array<ImageContent>,
  displayOrder: Scalars['Int'],
  active: Scalars['Boolean'],
};

export type DomainReference = {
   __typename?: 'DomainReference',
  id?: Maybe<Scalars['ID']>,
  tld: Scalars['String'],
};

export type DomainReferenceInput = {
  id: Scalars['String'],
  tld: Scalars['String'],
};

export type DownloadCommissions = {
   __typename?: 'DownloadCommissions',
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  payCommissionOn: Scalars['DateTime'],
  commissionAmount: Scalars['Float'],
  count: Scalars['Int'],
};

export type DumpBucket = {
   __typename?: 'DumpBucket',
  id?: Maybe<Scalars['Int']>,
  userId?: Maybe<Scalars['String']>,
};

export type EscapeBucksByUserId = {
   __typename?: 'EscapeBucksByUserId',
  userId: Scalars['String'],
  bucks: Scalars['Float'],
};

export type EscapeBucksByUserIdInput = {
  userId: Scalars['String'],
  bucks: Scalars['Float'],
};

export type Event = {
   __typename?: 'Event',
  id?: Maybe<Scalars['ID']>,
  userId: Scalars['String'],
  when?: Maybe<Scalars['DateTime']>,
  timeZone: Scalars['String'],
  type: Scalars['String'],
  webinarUrl?: Maybe<Scalars['String']>,
  where?: Maybe<Scalars['String']>,
  address?: Maybe<Address>,
  coordinate?: Maybe<Coordinate>,
  description: Scalars['String'],
  publish?: Maybe<Scalars['Boolean']>,
  recurringDaysOfWeek?: Maybe<Array<Scalars['String']>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type EventList = {
   __typename?: 'EventList',
  events: Array<Event>,
  totalRow: Scalars['Int'],
};

export type Exception = {
   __typename?: 'Exception',
  id?: Maybe<Scalars['ID']>,
  anyId?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  errorMessage: Scalars['String'],
};

export type ForgotPasswordInput = {
  email: Scalars['String'],
};

export type Funnel = {
   __typename?: 'Funnel',
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  active: Scalars['Boolean'],
  hidden: Scalars['Boolean'],
  funnelSteps: Array<FunnelStep>,
  createdAt?: Maybe<Scalars['DateTime']>,
  domain: DomainReference,
  pastUrls?: Maybe<Array<Scalars['String']>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type FunnelReference = {
   __typename?: 'FunnelReference',
  id: Scalars['ID'],
  title: Scalars['String'],
};

export type FunnelReferenceInput = {
  id: Scalars['ID'],
  title: Scalars['String'],
};

export type FunnelStep = {
   __typename?: 'FunnelStep',
  stepOrder: Scalars['Int'],
  url: Scalars['String'],
  products: Array<FunnelStepProduct>,
  nextFunnelStepUrl: Scalars['String'],
};

export type FunnelStepProduct = {
   __typename?: 'FunnelStepProduct',
  id: Scalars['String'],
  displayName: Scalars['String'],
  amount: Scalars['Int'],
  interval: Scalars['String'],
  setup?: Maybe<ProductSetup>,
  promoCodes?: Maybe<Array<PromoCode>>,
  certificates?: Maybe<Array<CertificateReference>>,
};

export type FunnelStepReference = {
   __typename?: 'FunnelStepReference',
  stepOrder: Scalars['Int'],
  url: Scalars['String'],
};

export type FunnelStepWithData = {
   __typename?: 'FunnelStepWithData',
  fid: Scalars['String'],
  funnelStep: FunnelStep,
  luid?: Maybe<Scalars['String']>,
  affiliate?: Maybe<UserBasics>,
};

export type FunnelUserOrderInput = {
  user: UserWithPasswordInput,
  address: AddressInput,
  product: Scalars['String'],
  card: CreditCardInput,
  interests?: Maybe<Array<Scalars['String']>>,
  certificate?: Maybe<Scalars['String']>,
  referralCode?: Maybe<Scalars['String']>,
  couponCode?: Maybe<Scalars['String']>,
};

export type GetAllCommissions = {
   __typename?: 'GetAllCommissions',
  commissions: Array<Commission>,
  totalCommissionPaid: Scalars['Float'],
  totalCommissionPending: Scalars['Float'],
  totalRows: Scalars['Int'],
};

export type GetAllUserSubscriptions = {
   __typename?: 'GetAllUserSubscriptions',
  userSubscriptions: Array<UserSubscription>,
  totalRows: Scalars['Int'],
};

export type HealthCheck = {
   __typename?: 'HealthCheck',
  id?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
};

export type ImageContent = {
   __typename?: 'ImageContent',
  type: Scalars['String'],
  url: Scalars['String'],
  displayOrder: Scalars['Int'],
};

export type ImageContentInput = {
  type: Scalars['String'],
  url: Scalars['String'],
  displayOrder: Scalars['Int'],
};


export type JwtUser = {
   __typename?: 'JwtUser',
  id: Scalars['String'],
  userName: Scalars['String'],
  roles: Array<Scalars['String']>,
};

export type LasVegasCertificatePaymentInput = {
  uuid: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  travelers?: Maybe<Array<CertificateTravelerInput>>,
  preferredDates: Array<Scalars['DateTime']>,
  alternateDates: Array<Scalars['DateTime']>,
  address: AddressInput,
  card: CreditCardInput,
  payActivation: Scalars['Boolean'],
  payReservation: Scalars['Boolean'],
};

export type Lead = {
   __typename?: 'Lead',
  phone?: Maybe<Scalars['String']>,
  user?: Maybe<UserReference>,
  order?: Maybe<OrderReference>,
  subscription?: Maybe<StripeSubscriptionReference>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  funnel: FunnelReference,
  funnelStep: FunnelStepReference,
  domain: DomainReference,
  ip?: Maybe<Scalars['String']>,
  uuid: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  affiliateUserId?: Maybe<Scalars['String']>,
};

export type LeadVisit = {
   __typename?: 'LeadVisit',
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  leadId: Scalars['String'],
  funnel: FunnelReference,
  funnelStep: FunnelStepReference,
  domain: DomainReference,
  ip: Scalars['String'],
  affiliateUserId?: Maybe<Scalars['String']>,
};

export type Links = {
   __typename?: 'Links',
  title: Scalars['String'],
  url: Scalars['String'],
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  user: User,
  token: Scalars['String'],
};

export type ManualCommissionInput = {
  commissionAmount: Scalars['String'],
  affiliateId: Scalars['String'],
  customerId: Scalars['String'],
  product: Scalars['String'],
};

/** Married or Single */
export enum MaritalStatusEnum {
  Married = 'Married',
  Single = 'Single'
}

export type MarkCommissionInput = {
  id: Array<Scalars['ID']>,
};

export type MaxlineTransfer = {
   __typename?: 'MaxlineTransfer',
  id: Scalars['ID'],
  token: Scalars['String'],
  userId?: Maybe<Scalars['String']>,
  sponsorId?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  username: Scalars['String'],
  yepId?: Maybe<Scalars['String']>,
  maxlineId?: Maybe<Scalars['String']>,
  maxlineEnrollerId?: Maybe<Scalars['String']>,
};

export type MaxlineUser = {
   __typename?: 'MaxlineUser',
  yepId: Scalars['ID'],
  sponsorId?: Maybe<Scalars['String']>,
  sponsorEmail?: Maybe<Scalars['String']>,
  placementId?: Maybe<Scalars['String']>,
  maxlinePlacementId?: Maybe<Scalars['String']>,
  maxlineId?: Maybe<Scalars['String']>,
  maxlineEnrollerId?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
};

export type Me = {
   __typename?: 'Me',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
};

export type MeResponse = {
   __typename?: 'MeResponse',
  user?: Maybe<User>,
  threeForFreeCount: Scalars['Int'],
  escapeBucks: Scalars['Float'],
};

export type Migration = {
   __typename?: 'Migration',
  executedOn: Scalars['DateTime'],
  migration: Scalars['String'],
};

export type MobileDevice = {
   __typename?: 'MobileDevice',
  deviceId: Scalars['String'],
};

export type MobileEvent = {
   __typename?: 'MobileEvent',
  id?: Maybe<Scalars['ID']>,
  eventId?: Maybe<Scalars['ID']>,
  who: UserReference,
  when?: Maybe<Scalars['DateTime']>,
  timeZone: Scalars['String'],
  type: Scalars['String'],
  webinarUrl?: Maybe<Scalars['String']>,
  where?: Maybe<Scalars['String']>,
  address?: Maybe<Address>,
  coordinate?: Maybe<Coordinate>,
  description: Scalars['String'],
  publish?: Maybe<Scalars['Boolean']>,
  recurringDaysOfWeek?: Maybe<Array<Scalars['String']>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type MobileEventList = {
   __typename?: 'MobileEventList',
  groupedEvents: Array<MobileEventsGroupByDay>,
  totalRows: Scalars['Int'],
};

export type MobileEventsGroupByDay = {
   __typename?: 'MobileEventsGroupByDay',
  day: Scalars['String'],
  events: Array<MobileEvent>,
};

export type Mutation = {
   __typename?: 'Mutation',
  login: LoginResponse,
  loginWithBiometrics: LoginResponse,
  saveUser: User,
  updatePassword: User,
  resetPassword: BooleanResponse,
  editMe: User,
  forgotPassword: BooleanResponse,
  registerAndSubscribe: RegisterAndSubscribeResponse,
  registerAndSubscribeMotivated: RegisterAndSubscribeResponse,
  registerAndSubscribeIncentives: RegisterAndSubscribeResponse,
  registerAndSubscribeYep: RegisterAndSubscribeResponse,
  upgradeMembership: RegisterAndSubscribeResponse,
  ssoLogin: SorLoginResponse,
  getCiceroUrl: ApiMessageResponse,
  getMibSsoUrl: Scalars['String'],
  setCompensationSide: BooleanResponse,
  setDefaultPlacement: BooleanResponse,
  setInstantPlacement: BooleanResponse,
  addCertificate: Certificate,
  editCertificate: Certificate,
  captureVegasCertificate: AuthorizeCaptureResult,
  captureOdenzaActivation: AuthorizeCaptureResult,
  uploadMexicoCerts: BooleanResponse,
  addAppSettings: AppSettings,
  editAppSettings: AppSettings,
  addManualCommission: Commission,
  editCommission: Commission,
  removeCommission: CommissionResult,
  markCommissionAsPaid: Scalars['Boolean'],
  markCommissionAsPending: Scalars['Boolean'],
  markCommissionAsRefunded: Scalars['Boolean'],
  uploadContactList: BooleanResponse,
  sendContactMail: BooleanResponse,
  subscribe: BooleanResponse,
  unsubscribe: BooleanResponse,
  addProspect: Prospect,
  addYepProspect: BooleanResponse,
  addYepSharedContentProspect: BooleanResponse,
  addMultipleProspects: BooleanResponse,
  sendProspectEmail: BooleanResponse,
  acceptProspectCertificate: Prospect,
  proPaySignup: ProPaySignupResponse,
  setProPayAccountNumber: BooleanResponse,
  payCommission: ProPayDisburseFund,
  delete: Scalars['Boolean'],
  findPlaylistsForSelect: Array<PlaylistReference>,
  saveVideo: Video,
  removeVideo: ApiMessageResponse,
  savePlaylist: ApiMessageResponse,
  saveEvent: Event,
  removeEvent: ApiMessageResponse,
  updateEvent: Event,
  w7gSSO: W7GssoResponse,
  uploadMIBImport: ApiMessageResponse,
  checkW7GMembers: ApiMessageResponse,
  w7gTransferUsers: ApiMessageResponse,
  addSponsorPlacement: BooleanResponse,
  saveContent: ShareableContent,
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  uuid?: Maybe<Scalars['String']>
};


export type MutationLoginWithBiometricsArgs = {
  uuid: Scalars['String']
};


export type MutationSaveUserArgs = {
  data: UserInput
};


export type MutationUpdatePasswordArgs = {
  data: UpdatePasswordInput
};


export type MutationResetPasswordArgs = {
  resetToken: Scalars['String'],
  newPassword: Scalars['String']
};


export type MutationEditMeArgs = {
  id?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  username: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']
};


export type MutationRegisterAndSubscribeArgs = {
  values: FunnelUserOrderInput,
  fid: Scalars['String'],
  aid: Scalars['String'],
  step: Scalars['Float'],
  luid: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  requestedOnboardingCall: Scalars['Boolean']
};


export type MutationRegisterAndSubscribeMotivatedArgs = {
  values: FunnelUserOrderInput,
  fid: Scalars['String'],
  aid: Scalars['String'],
  step: Scalars['Float'],
  luid: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  requestedOnboardingCall: Scalars['Boolean']
};


export type MutationRegisterAndSubscribeIncentivesArgs = {
  values: FunnelUserOrderInput,
  fid: Scalars['String'],
  aid: Scalars['String'],
  step: Scalars['Float'],
  luid: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
  requestedOnboardingCall: Scalars['Boolean']
};


export type MutationRegisterAndSubscribeYepArgs = {
  values: FunnelUserOrderInput,
  fid: Scalars['String'],
  aid?: Maybe<Scalars['String']>,
  luid: Scalars['String'],
  requestType: Scalars['String'],
  paymentIntentId?: Maybe<Scalars['String']>
};


export type MutationUpgradeMembershipArgs = {
  address: AddressInput,
  product: Scalars['String'],
  card: CreditCardInput,
  currentProduct: Scalars['String'],
  userId: Scalars['String'],
  requestType: Scalars['String'],
  paymentIntentId?: Maybe<Scalars['String']>
};


export type MutationGetCiceroUrlArgs = {
  path: Scalars['String']
};


export type MutationSetCompensationSideArgs = {
  id: Scalars['String'],
  side: Scalars['String']
};


export type MutationSetDefaultPlacementArgs = {
  placement: Scalars['String']
};


export type MutationSetInstantPlacementArgs = {
  instant: Scalars['String']
};


export type MutationAddCertificateArgs = {
  args: CertificateInput
};


export type MutationEditCertificateArgs = {
  args: CertificateInput
};


export type MutationCaptureVegasCertificateArgs = {
  args: LasVegasCertificatePaymentInput
};


export type MutationCaptureOdenzaActivationArgs = {
  args: OdenzaActivationPaymentInput
};


export type MutationUploadMexicoCertsArgs = {
  args: UploadMexicoCertsInput
};


export type MutationAddAppSettingsArgs = {
  args: AppSettingsAddInput
};


export type MutationEditAppSettingsArgs = {
  args: AppSettingsInput
};


export type MutationAddManualCommissionArgs = {
  args: ManualCommissionInput
};


export type MutationEditCommissionArgs = {
  args: CommissionInput
};


export type MutationRemoveCommissionArgs = {
  args: RemoveCommissionArgs
};


export type MutationMarkCommissionAsPaidArgs = {
  args: MarkCommissionInput
};


export type MutationMarkCommissionAsPendingArgs = {
  args: MarkCommissionInput
};


export type MutationMarkCommissionAsRefundedArgs = {
  args: MarkCommissionInput
};


export type MutationUploadContactListArgs = {
  args: UploadContactList
};


export type MutationSendContactMailArgs = {
  args: SendContactMailInput
};


export type MutationSubscribeArgs = {
  args: SubscribeInput
};


export type MutationUnsubscribeArgs = {
  args: SubscribeInput
};


export type MutationAddProspectArgs = {
  id?: Maybe<Scalars['ID']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
  deliveryMethod?: Maybe<Scalars['String']>,
  certificateId?: Maybe<Scalars['String']>,
  personalizedMessage?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>
};


export type MutationAddYepProspectArgs = {
  args: YepProspectInput
};


export type MutationAddYepSharedContentProspectArgs = {
  args: YepProspectSharedContentInput
};


export type MutationAddMultipleProspectsArgs = {
  args: AddMultipleProspects
};


export type MutationSendProspectEmailArgs = {
  args: SendProspectEmail
};


export type MutationAcceptProspectCertificateArgs = {
  args: ProspectInput
};


export type MutationProPaySignupArgs = {
  args: ProPayInput
};


export type MutationSetProPayAccountNumberArgs = {
  accountNumber: Scalars['Int']
};


export type MutationPayCommissionArgs = {
  args: ProPayCommissionInput
};


export type MutationDeleteArgs = {
  id: Scalars['String']
};


export type MutationFindPlaylistsForSelectArgs = {
  searchText: Scalars['String']
};


export type MutationSaveVideoArgs = {
  video: VideoInput
};


export type MutationRemoveVideoArgs = {
  videoId: Scalars['String']
};


export type MutationSavePlaylistArgs = {
  id?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  trainer: Scalars['String'],
  category: Scalars['String'],
  subCategory: Scalars['String'],
  thumbnailUrl?: Maybe<Scalars['String']>,
  status: VideoStatusEnum,
  videos?: Maybe<Array<DisplayOrder>>
};


export type MutationSaveEventArgs = {
  id?: Maybe<Scalars['String']>,
  when: Scalars['DateTime'],
  timeZone: Scalars['String'],
  type: Scalars['String'],
  webinarUrl?: Maybe<Scalars['String']>,
  address?: Maybe<AddressInput>,
  where?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  recurringDaysOfWeek?: Maybe<Array<Scalars['String']>>,
  publish?: Maybe<Scalars['Boolean']>
};


export type MutationRemoveEventArgs = {
  id: Scalars['String']
};


export type MutationUpdateEventArgs = {
  eventId: Scalars['String'],
  when: Scalars['DateTime'],
  timeZone: Scalars['String'],
  type: Scalars['String'],
  webinarUrl?: Maybe<Scalars['String']>,
  address?: Maybe<AddressInput>,
  where?: Maybe<Scalars['String']>,
  description: Scalars['String'],
  recurringDaysOfWeek?: Maybe<Array<Scalars['String']>>
};


export type MutationUploadMibImportArgs = {
  file: Scalars['Upload']
};


export type MutationCheckW7GMembersArgs = {
  file: Scalars['Upload']
};


export type MutationSaveContentArgs = {
  content: ShareableContentInput
};

export type OdenzaActivationPaymentInput = {
  uuid: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  address: AddressInput,
  card: CreditCardInput,
  payActivation: Scalars['Boolean'],
  payAmount: Scalars['Float'],
  cert: Scalars['String'],
};

export type Order = {
   __typename?: 'Order',
  id?: Maybe<Scalars['ID']>,
  leadId?: Maybe<Scalars['String']>,
  customer: UserReference,
  affiliate?: Maybe<UserReference>,
  funnel?: Maybe<FunnelReference>,
  products: Array<ProductReference>,
  invoice: StripeCustomerInvoiceReference,
  domain: DomainReference,
  payment: StripeChargeReference,
  commissions: Array<Commission>,
  totalAmount: Scalars['Int'],
  isRevenueShare?: Maybe<Scalars['Boolean']>,
  requestedOnboardingCall?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type OrderReference = {
   __typename?: 'OrderReference',
  id: Scalars['ID'],
  funnel?: Maybe<FunnelReference>,
  products: Array<ProductReference>,
  orderTotal: Scalars['Int'],
};

export type PasswordResetToken = {
   __typename?: 'PasswordResetToken',
  id?: Maybe<Scalars['ID']>,
  userId: Scalars['String'],
};

/** TripValet, CiceroTravel, .... TripValet Incentives */
export enum PaymentAccountEnum {
  TripValetLlc = 'TripValetLLC',
  GetMotivated = 'GetMotivated',
  TripValetGeneral = 'TripValetGeneral',
  CiceroTravel = 'CiceroTravel',
  TripValetIncentives = 'TripValetIncentives',
  YepWonder7Global = 'YepWonder7Global'
}

export type PersonalizedCertificateInput = {
  id: Scalars['String'],
};

export type Phone = {
   __typename?: 'Phone',
  type: PhoneTypeEnum,
  digits: Scalars['String'],
  extension?: Maybe<Scalars['String']>,
};

export type PhoneInput = {
  type: PhoneTypeEnum,
  digits: Scalars['String'],
  extension?: Maybe<Scalars['String']>,
};

/** Type of Phone Number */
export enum PhoneTypeEnum {
  Home = 'Home',
  Business = 'Business',
  Fax = 'Fax',
  Mobile = 'Mobile',
  Department = 'Department',
  Other = 'Other'
}

export type PlacementResponse = {
   __typename?: 'PlacementResponse',
  placement?: Maybe<Scalars['String']>,
};

export type Playlist = {
   __typename?: 'Playlist',
  id?: Maybe<Scalars['ID']>,
  title: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  trainer: Scalars['String'],
  category?: Maybe<Scalars['String']>,
  subCategory?: Maybe<Scalars['String']>,
  thumbnailUrl?: Maybe<Scalars['String']>,
  status?: Maybe<VideoStatusEnum>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type PlaylistReference = {
   __typename?: 'PlaylistReference',
  id: Scalars['String'],
  title: Scalars['String'],
};

export type PlaylistResponse = {
   __typename?: 'PlaylistResponse',
  playLists: Array<Playlist>,
  totalRows: Scalars['Int'],
};

export type PlaylistWithVideoResponse = {
   __typename?: 'PlaylistWithVideoResponse',
  playlist: Playlist,
  videos: Array<Video>,
};

export type Product = {
   __typename?: 'Product',
  id?: Maybe<Scalars['ID']>,
  amount: Scalars['Int'],
  domain: DomainReference,
  name: Scalars['String'],
  displayName: Scalars['String'],
  tierPayouts: Array<TierLevel>,
  roles: Array<Scalars['String']>,
  sorAccount?: Maybe<Scalars['String']>,
  product: StripeProductReference,
  plan: StripePlanReference,
  setup: ProductSetup,
  paymentAccount: PaymentAccountEnum,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ProductReference = {
   __typename?: 'ProductReference',
  id: Scalars['String'],
  name: Scalars['String'],
  displayName: Scalars['String'],
  amount: Scalars['Int'],
  interval: Scalars['String'],
  setup: ProductSetup,
};

export type ProductReferenceInput = {
  id: Scalars['String'],
  name: Scalars['String'],
  displayName: Scalars['String'],
  amount: Scalars['Int'],
  interval: Scalars['String'],
  setup: ProductSetupInput,
};

export type ProductSetup = {
   __typename?: 'ProductSetup',
  fee: Scalars['Float'],
  description: Scalars['String'],
};

export type ProductSetupInput = {
  fee: Scalars['Float'],
  description: Scalars['String'],
};

export type PromoCode = {
   __typename?: 'PromoCode',
  code: Scalars['String'],
  discountType?: Maybe<Scalars['String']>,
  discountAmount?: Maybe<Scalars['Int']>,
  maxUse?: Maybe<Scalars['Int']>,
  currentUse?: Maybe<Scalars['Int']>,
  startDate?: Maybe<Scalars['DateTime']>,
  endDate?: Maybe<Scalars['DateTime']>,
  product?: Maybe<ProductReference>,
};

export type ProPayAccount = {
   __typename?: 'ProPayAccount',
  success: Scalars['Boolean'],
  accountNumber?: Maybe<Scalars['Int']>,
};

export type ProPayCommissionInput = {
  commissionId: Scalars['String'],
};

export type ProPayDisburseFund = {
   __typename?: 'ProPayDisburseFund',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  transNum?: Maybe<Scalars['String']>,
  invNum?: Maybe<Scalars['String']>,
};

export type ProPayInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  dayOfBirth: Scalars['String'],
  ssn: Scalars['String'],
  sourceEmail: Scalars['String'],
  dayPhone: Scalars['String'],
  evenPhone: Scalars['String'],
  address: Scalars['String'],
  city: Scalars['String'],
  state: Scalars['String'],
  zip: Scalars['String'],
  country: Scalars['String'],
};

export type ProPaySignupResponse = {
   __typename?: 'ProPaySignupResponse',
  success: Scalars['Boolean'],
  transType?: Maybe<Scalars['Int']>,
  status?: Maybe<Scalars['String']>,
  accountNumber?: Maybe<Scalars['Int']>,
  password?: Maybe<Scalars['String']>,
  tier?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
};

export type Prospect = {
   __typename?: 'Prospect',
  id: Scalars['ID'],
  uuid: Scalars['String'],
  userId?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint?: Maybe<Scalars['String']>,
  deliveryMethod: Scalars['String'],
  phone?: Maybe<Scalars['String']>,
  visits: Array<Visit>,
  certificate: Certificate,
  personalizedMessage: Scalars['String'],
  redeemed: Scalars['Boolean'],
  assuredTravel?: Maybe<AssuredTravelRequestCertificateResponse>,
  sfx?: Maybe<SfxCertificateOrderResponse>,
  payments?: Maybe<Array<CertificatePayment>>,
  travelers?: Maybe<Array<CertificateTraveler>>,
  preferredDates?: Maybe<Array<Scalars['DateTime']>>,
  alternateDates?: Maybe<Array<Scalars['DateTime']>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ProspectBasics = {
   __typename?: 'ProspectBasics',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
  deliveryMethod: Scalars['String'],
  redeemed: Scalars['Boolean'],
  certificate: Certificate,
  createdAt?: Maybe<Scalars['DateTime']>,
};

export type ProspectCustomer = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
};

export type ProspectInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
  uuid: Scalars['String'],
};

export type ProspectReference = {
   __typename?: 'ProspectReference',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
  deliveryMethod: Scalars['String'],
};

export type ProspectTableResult = {
   __typename?: 'ProspectTableResult',
  prospects: Array<Prospect>,
  totalRows: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  me: MeResponse,
  users: UserCount,
  userById: User,
  userByUserName?: Maybe<User>,
  getSAML: SamlResponse,
  getLocalYepTribes: UserCount,
  getHoldingTankList: YepHoldingTankList,
  getYepCutoffList: YepCutoffList,
  getAllHoldingTankList: YepAllHoldingTankList,
  getDefaultPlacement: PlacementResponse,
  getInstantPlacement: PlacementResponse,
  getCertificates: Array<Certificate>,
  getCertificatesForMobile: Array<CertificateForMobile>,
  getCertificatesForProspect: Array<Certificate>,
  getCertificateDocuments: Array<Certificate>,
  getAppSettings: AppSettings,
  getCategories: Array<Scalars['String']>,
  getVideoTags: Array<VideoTag>,
  getBanners: Array<YepBanner>,
  getBannersForMobile: Array<YepBanner>,
  getPlans?: Maybe<Array<Scalars['String']>>,
  getCountries: Array<Country3DigitListItem>,
  getAllCommissionsByUser: GetAllCommissions,
  getCommissionById: Commission,
  getAllCommissions: GetAllCommissions,
  downloadCommissions: Array<DownloadCommissions>,
  getContactsByAffiliate: ProspectTableResult,
  getContactEmails: ContactEmailCount,
  getContactEmail: ContactEmailByUuid,
  getProspectByUuid: Prospect,
  getProspectsByAffiliate: ProspectTableResult,
  getDocuments: Array<Document>,
  getAllFunnels: Array<Funnel>,
  getAllFunnelsForAffiliateLinks: Array<Funnel>,
  getFunnelById: Array<Funnel>,
  getFunnelStepWithData: FunnelStepWithData,
  getProPayAccountNumber: ProPayAccount,
  getVideoById: Video,
  getYepVideoById: YepVideoByIdResponse,
  getVideos: Array<Video>,
  getAllVideosByUser: VideoAndTotalRows,
  getAllVideos: VideoAndTotalRows,
  getYepClips: Array<YepClips>,
  getYepClipsPlaylists: Array<YepClipsPlaylistsGroupedByCategory>,
  getAllVideoCategories: Array<Category>,
  getAllVideoTagsByCategory: Array<SubCategory>,
  getPlaylists: PlaylistResponse,
  getPublishedPlaylists: PlaylistResponse,
  getPlaylistById: Playlist,
  getYepPlaylistByIdWithVideos: PlaylistWithVideoResponse,
  getVideosByPlaylist: VideosByPlayList,
  getLocalEvents: EventList,
  getMyEvents: EventList,
  getEventById: Event,
  getLocalEventsForMobile: MobileEventList,
  w7gGetMemberInfo: ApiMessageResponse,
  getAllContents: ContentList,
  getAllContentByBrand: Array<ShareableContentGrouped>,
  getContentById: ShareableContent,
  getAllContentCategories: Array<Category>,
  getAllContentTagsByCategory: Array<SubCategory>,
};


export type QueryUsersArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryUserByIdArgs = {
  id: Scalars['String']
};


export type QueryUserByUserNameArgs = {
  userName: Scalars['String']
};


export type QueryGetLocalYepTribesArgs = {
  zip: Scalars['String']
};


export type QueryGetHoldingTankListArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetYepCutoffListArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetAllHoldingTankListArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetCertificatesArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  membershipLevel?: Maybe<Array<Scalars['String']>>
};


export type QueryGetCertificatesForProspectArgs = {
  searchTerm?: Maybe<Scalars['String']>
};


export type QueryGetCertificateDocumentsArgs = {
  type: Scalars['String'],
  skip?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryGetAllCommissionsByUserArgs = {
  skip?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>,
  searchText: Scalars['String'],
  isAffiliate: Scalars['Boolean'],
  dateFilter?: Maybe<DateFilter>
};


export type QueryGetCommissionByIdArgs = {
  id: Scalars['String']
};


export type QueryGetAllCommissionsArgs = {
  skip?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>,
  searchText: Scalars['String'],
  isAffiliate: Scalars['Boolean'],
  dateFilter?: Maybe<DateFilter>
};


export type QueryGetContactsByAffiliateArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetContactEmailsArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetContactEmailArgs = {
  uuid: Scalars['String']
};


export type QueryGetProspectByUuidArgs = {
  uuid: Scalars['String']
};


export type QueryGetProspectsByAffiliateArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetDocumentsArgs = {
  type: Scalars['String'],
  skip?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type QueryGetAllFunnelsArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetAllFunnelsForAffiliateLinksArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetFunnelByIdArgs = {
  id: Scalars['String']
};


export type QueryGetFunnelStepWithDataArgs = {
  path: Scalars['String'],
  luid?: Maybe<Scalars['String']>,
  aid?: Maybe<Scalars['String']>,
  host?: Maybe<Scalars['String']>
};


export type QueryGetVideoByIdArgs = {
  id: Scalars['String']
};


export type QueryGetYepVideoByIdArgs = {
  id: Scalars['String']
};


export type QueryGetVideosArgs = {
  category: Scalars['String'],
  subCategory: Scalars['String']
};


export type QueryGetAllVideosByUserArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetAllVideosArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  brand?: Maybe<Scalars['String']>,
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetYepClipsArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  brand?: Maybe<Scalars['String']>,
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetYepClipsPlaylistsArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  brand?: Maybe<Scalars['String']>,
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetAllVideoCategoriesArgs = {
  brand: Scalars['String']
};


export type QueryGetAllVideoTagsByCategoryArgs = {
  brand: Scalars['String'],
  category: Scalars['String']
};


export type QueryGetPlaylistByIdArgs = {
  id: Scalars['String']
};


export type QueryGetYepPlaylistByIdWithVideosArgs = {
  id: Scalars['String']
};


export type QueryGetVideosByPlaylistArgs = {
  id: Scalars['String']
};


export type QueryGetLocalEventsArgs = {
  city?: Maybe<Scalars['String']>,
  zip?: Maybe<Scalars['String']>
};


export type QueryGetEventByIdArgs = {
  id: Scalars['String']
};


export type QueryGetLocalEventsForMobileArgs = {
  month?: Maybe<Scalars['Int']>,
  year?: Maybe<Scalars['Int']>,
  searchText?: Maybe<Scalars['String']>
};


export type QueryW7gGetMemberInfoArgs = {
  email: Scalars['String']
};


export type QueryGetAllContentsArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetAllContentByBrandArgs = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  brand?: Maybe<Scalars['String']>,
  searchText?: Maybe<Scalars['String']>
};


export type QueryGetContentByIdArgs = {
  id: Scalars['String']
};


export type QueryGetAllContentCategoriesArgs = {
  brand: Scalars['String']
};


export type QueryGetAllContentTagsByCategoryArgs = {
  brand: Scalars['String'],
  category: Scalars['String']
};

export type RegisterAndSubscribeResponse = {
   __typename?: 'RegisterAndSubscribeResponse',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
  nextFunnelStepUrl: Scalars['String'],
};

export type RemoveCommissionArgs = {
  commissionId: Scalars['String'],
  orderId: Scalars['String'],
};

export type RevenueShare = {
   __typename?: 'RevenueShare',
  id?: Maybe<Scalars['ID']>,
  funnel?: Maybe<FunnelReference>,
  user: UserReference,
  userRole?: Maybe<Scalars['String']>,
  daysToPayCommission?: Maybe<Scalars['Int']>,
  commissionType: Scalars['String'],
  commissionAmount: Scalars['Int'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type RevenueShareOrder = {
   __typename?: 'RevenueShareOrder',
  id?: Maybe<Scalars['ID']>,
  revenueShareId: Scalars['String'],
  user: UserReference,
  order: OrderReference,
  commissions: Array<Scalars['String']>,
  totalCommissions: Scalars['Float'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type SamlResponse = {
   __typename?: 'SAMLResponse',
  samlResponse: Scalars['String'],
};

export type SendContactMailInput = {
  uuid: Scalars['String'],
  accept: Scalars['Boolean'],
};

export type SendProspectEmail = {
  receiverEmail: Scalars['String'],
  receiverFirstName: Scalars['String'],
  replyEmail: Scalars['String'],
  senderFirstName: Scalars['String'],
  senderLastName: Scalars['String'],
  message: Scalars['String'],
};

export type SfxCertificate = {
   __typename?: 'SfxCertificate',
  code: Scalars['String'],
  request_id: Scalars['Int'],
  expires: Scalars['DateTime'],
  status: Scalars['String'],
};

export type SfxCertificateOrderRequest = {
   __typename?: 'SfxCertificateOrderRequest',
  offerId: Scalars['Int'],
  memberId: Scalars['String'],
  prospectEmailAddress: Scalars['String'],
  prospectID: Scalars['String'],
};

export type SfxCertificateOrderResponse = {
   __typename?: 'SfxCertificateOrderResponse',
  error?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  order: SfxCertificateOrderResponse,
  certs: Array<SfxCertificate>,
};

export type SfxCertificateRequest = {
   __typename?: 'SfxCertificateRequest',
  offerId: Scalars['Int'],
  memberId: Scalars['String'],
  prospectEmailAddress: Scalars['String'],
  prospectID: Scalars['String'],
};

export type SfxGetOffersResponse = {
   __typename?: 'SfxGetOffersResponse',
  status: Scalars['Int'],
  offers: Array<SfxOffer>,
};

export type SfxOffer = {
   __typename?: 'SfxOffer',
  offer_id: Scalars['Int'],
  name: Scalars['String'],
  description: Scalars['String'],
  comments: Scalars['String'],
  length_of_stay: Scalars['String'],
  room_type: Scalars['String'],
  retail_value: Scalars['String'],
  retail_price: Scalars['String'],
  price_adjust: SfxPriceAdjust,
  price: Scalars['String'],
};

export type SfxPriceAdjust = {
   __typename?: 'SfxPriceAdjust',
  type: Scalars['String'],
  amount: Scalars['String'],
};

export type ShareableContent = {
   __typename?: 'ShareableContent',
  id?: Maybe<Scalars['ID']>,
  category: Scalars['String'],
  subCategory: Scalars['String'],
  subject: Scalars['String'],
  text: Scalars['String'],
  sms: Scalars['String'],
  title: Scalars['String'],
  type: ContentTypeEnum,
  url: Scalars['String'],
  brand: BrandTypeEnum,
  thumbnailUrl?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ShareableContentGrouped = {
   __typename?: 'ShareableContentGrouped',
  category: Scalars['String'],
  shareableContent: Array<ShareableContent>,
};

export type ShareableContentInput = {
  id?: Maybe<Scalars['String']>,
  category: Scalars['String'],
  subCategory: Scalars['String'],
  subject: Scalars['String'],
  text: Scalars['String'],
  sms: Scalars['String'],
  title: Scalars['String'],
  url: Scalars['String'],
  type: ContentTypeEnum,
  brand: BrandTypeEnum,
  thumbnailUrl?: Maybe<Scalars['String']>,
};

export type SorAccountReference = {
   __typename?: 'SorAccountReference',
  userId: Scalars['Int'],
  contractNumber: Scalars['String'],
};

export type SorAccountReferenceInput = {
  userId: Scalars['Float'],
  contractNumber: Scalars['String'],
};

export type SorCreateMemberRequest = {
   __typename?: 'SorCreateMemberRequest',
  Email: Scalars['String'],
  ContractNumber: Scalars['String'],
  Address: Scalars['String'],
  City: Scalars['String'],
  State: Scalars['String'],
  PostalCode: Scalars['String'],
  TwoLetterCountryCode: Scalars['String'],
  Phone: Scalars['String'],
  Password: Scalars['String'],
  FirstName: Scalars['String'],
  LastName: Scalars['String'],
  UserAccountTypeID: Scalars['Int'],
};

export type SorGetMemberApiResponse = {
   __typename?: 'SorGetMemberApiResponse',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
};

export type SorLoginResponse = {
   __typename?: 'SorLoginResponse',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type Sponsor = {
   __typename?: 'Sponsor',
  id: Scalars['ID'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
};

export type SponsorInput = {
  id: Scalars['Int'],
  email: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
};

export type StripeChargeReference = {
   __typename?: 'StripeChargeReference',
  id: Scalars['String'],
  amount: Scalars['Float'],
  created: Scalars['DateTime'],
  customer: StripeCustomerReference,
  description: Scalars['String'],
  paid: Scalars['Boolean'],
  source: StripeSourceReference,
  status: Scalars['String'],
};

export type StripeCustomerInvoiceReference = {
   __typename?: 'StripeCustomerInvoiceReference',
  eventId: Scalars['String'],
  customerId: Scalars['String'],
  chargeId: Scalars['String'],
  invoiceId: Scalars['String'],
  subscription: StripeSubscriptionReference,
};

export type StripeCustomerReference = {
   __typename?: 'StripeCustomerReference',
  id: Scalars['String'],
  email: Scalars['String'],
};

export type StripeData = {
   __typename?: 'StripeData',
  customerId: Scalars['String'],
  subscriptionId?: Maybe<Scalars['String']>,
  productId?: Maybe<Scalars['String']>,
  planId?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  paymentAccountKey?: Maybe<Scalars['String']>,
};

export type StripeDataInput = {
  customerId: Scalars['String'],
  subscriptionId?: Maybe<Scalars['String']>,
  productId?: Maybe<Scalars['String']>,
  planId?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  paymentAccountKey: Scalars['String'],
};

export type StripePlanReference = {
   __typename?: 'StripePlanReference',
  amount: Scalars['Float'],
  id: Scalars['Int'],
  product: Scalars['String'],
  interval: Scalars['String'],
  intervalCount: Scalars['Int'],
  nickname: Scalars['String'],
};

export type StripePlanSummary = {
   __typename?: 'StripePlanSummary',
  amount: Scalars['Float'],
  id: Scalars['ID'],
  product: Scalars['String'],
  interval: Scalars['String'],
  intervalCount: Scalars['Int'],
  nickname: Scalars['String'],
};

export type StripeProductReference = {
   __typename?: 'StripeProductReference',
  id: Scalars['String'],
  name: Scalars['String'],
};

export type StripeSourceReference = {
   __typename?: 'StripeSourceReference',
  id: Scalars['String'],
  brand: Scalars['String'],
  country: Scalars['String'],
  last4: Scalars['String'],
  expMonth: Scalars['Int'],
  expYear: Scalars['Int'],
};

export type StripeSubscriptionReference = {
   __typename?: 'StripeSubscriptionReference',
  id: Scalars['String'],
  userSubscriptionId: Scalars['String'],
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  plan: StripePlanSummary,
};

export type StripeWebhook = {
   __typename?: 'StripeWebhook',
  id: Scalars['ID'],
  order?: Maybe<OrderReference>,
  customerUser?: Maybe<UserReference>,
  affiliateUser?: Maybe<UserReference>,
  type: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
};

export type SubCategory = {
   __typename?: 'SubCategory',
  subCategory: Scalars['String'],
};

export type SubscribeInput = {
  email: Scalars['String'],
};

export type TierLevel = {
   __typename?: 'TierLevel',
  id: Scalars['ID'],
  level: Scalars['Int'],
  commissionType: Scalars['String'],
  value: Scalars['Int'],
  daysToPayCommission: Scalars['Int'],
};

export type TierLevelInput = {
  id: Scalars['ID'],
  level: Scalars['Int'],
  commissionType: Scalars['String'],
  value: Scalars['Int'],
  daysToPayCommission: Scalars['Int'],
};

export type TransferUser = {
   __typename?: 'TransferUser',
  email: Scalars['String'],
  fromRole: Scalars['String'],
  toRole: Scalars['String'],
};

export type Trip = {
   __typename?: 'Trip',
  id?: Maybe<Scalars['ID']>,
  agenda: Array<DailyTripAgenda>,
  couponCodes?: Maybe<Array<CouponCode>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  dates: Array<TripDate>,
  description?: Maybe<Scalars['String']>,
  excursions?: Maybe<Array<TripExcursion>>,
  hotel: TripHotel,
  location: TripLocation,
  includes: Array<Scalars['String']>,
  images: Array<TripImage>,
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  urlSlug?: Maybe<Array<Scalars['String']>>,
  videoUrl?: Maybe<Scalars['String']>,
};

export type TripDate = {
   __typename?: 'TripDate',
  id: Scalars['ID'],
  days: Scalars['Int'],
  end: Scalars['DateTime'],
  start: Scalars['DateTime'],
  status: Scalars['String'],
};

export type TripExcursion = {
   __typename?: 'TripExcursion',
  id: Scalars['ID'],
  description: Scalars['String'],
  imageUrl: Scalars['String'],
  included?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
  restrictions?: Maybe<Scalars['String']>,
  times: Scalars['String'],
  what: Scalars['String'],
  whatType: Scalars['String'],
  when: Scalars['String'],
  dates: Array<TripExcursionDate>,
};

export type TripExcursionDate = {
   __typename?: 'TripExcursionDate',
  id: Scalars['ID'],
  tripDateId: Scalars['String'],
  day: Scalars['DateTime'],
  times: Array<TripExcursionTime>,
};

export type TripExcursionTime = {
   __typename?: 'TripExcursionTime',
  id: Scalars['ID'],
  start: Scalars['DateTime'],
  end: Scalars['DateTime'],
  price: Scalars['Float'],
  cost?: Maybe<Scalars['Float']>,
};

export type TripHotel = {
   __typename?: 'TripHotel',
  description: Scalars['String'],
  images: Array<TripImage>,
  rooms: Array<TripRoomClass>,
  property: Scalars['String'],
  totalRooms: Scalars['Int'],
  totalRoomsRemaining: Scalars['Int'],
};

export type TripImage = {
   __typename?: 'TripImage',
  url: Scalars['String'],
  displayOrder?: Maybe<Scalars['Int']>,
};

export type TripLocation = {
   __typename?: 'TripLocation',
  cityOrRegion: Scalars['String'],
  country: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  images?: Maybe<Array<TripImage>>,
};

export type TripRoomClass = {
   __typename?: 'TripRoomClass',
  id: Scalars['ID'],
  description: Scalars['String'],
  rooms: Scalars['Int'],
  roomsRemaining: Scalars['Int'],
  images: Array<TripImage>,
  roomPriceBasis: Scalars['String'],
  pricing: Array<TripRoomPrice>,
};

export type TripRoomPrice = {
   __typename?: 'TripRoomPrice',
  id: Scalars['ID'],
  role: Scalars['String'],
  pricePerRoom: Scalars['Float'],
  pricePerRoomPerPerson: Scalars['Float'],
  downPayment: Scalars['Float'],
  downPaymentPerPerson: Scalars['Float'],
  addOnPricePerNight: Scalars['Float'],
  extraPricePerNightPerPerson: Scalars['Float'],
};

export type UnlimitedCertificatesProduct = {
   __typename?: 'UnlimitedCertificatesProduct',
  url: Scalars['String'],
  maxDaysToRegister?: Maybe<Scalars['Int']>,
};

export type UpdatePasswordInput = {
  currentPassword: Scalars['String'],
  newPassword: Scalars['String'],
};


export type UploadContactList = {
  template: Scalars['String'],
  message: Scalars['String'],
};

export type UploadMexicoCertsInput = {
  id?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id?: Maybe<Scalars['ID']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  active: Scalars['Boolean'],
  clickFunnelsAffiliateUrls?: Maybe<Array<ClickFunnelsAffiliateUrl>>,
  remoteLoginId?: Maybe<Scalars['String']>,
  isSubscribed?: Maybe<Scalars['Boolean']>,
  phone?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Scalars['String']>>,
  username: Scalars['String'],
  stripe: StripeData,
  address: Address,
  coordinate?: Maybe<Coordinate>,
  sorAccount: SorAccountReference,
  resetToken?: Maybe<Scalars['String']>,
  domain?: Maybe<DomainReference>,
  coinMD?: Maybe<CoinMd>,
  sponsor?: Maybe<Sponsor>,
  ancestry?: Maybe<Ancestry>,
  binary?: Maybe<Binary>,
  affiliateLinks: Array<AffiliateLink>,
  uuid: Scalars['String'],
  crypto?: Maybe<UserCrypto>,
  notes?: Maybe<Scalars['String']>,
  threeForFreeUserIds?: Maybe<Array<Scalars['String']>>,
  isW9onFile?: Maybe<Scalars['Boolean']>,
  payoutMethod?: Maybe<Scalars['String']>,
  proPay?: Maybe<ProPayAccount>,
  isBanned?: Maybe<Scalars['Boolean']>,
  mobileDevices?: Maybe<Array<MobileDevice>>,
  maxlineUser?: Maybe<MaxlineUser>,
  w7gUser?: Maybe<W7GUser>,
  birthDay?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  name: Scalars['String'],
};

export type UserBasics = {
   __typename?: 'UserBasics',
  id: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  uuid: Scalars['String'],
};

export type UserCount = {
   __typename?: 'UserCount',
  users: Array<User>,
  totalRows: Scalars['Int'],
};

export type UserCrypto = {
   __typename?: 'UserCrypto',
  coin: Scalars['String'],
  coinConversion: Scalars['Int'],
  transactionId?: Maybe<Scalars['String']>,
  wallet?: Maybe<Scalars['String']>,
};

export type UserCryptoInput = {
  coin: Scalars['String'],
  coinConversion: Scalars['Float'],
  transactionId?: Maybe<Scalars['String']>,
  wallet?: Maybe<Scalars['String']>,
};

export type UserInput = {
  uuid: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  active: Scalars['Boolean'],
  roles?: Maybe<Array<Scalars['String']>>,
  id?: Maybe<Scalars['ID']>,
  middleName?: Maybe<Scalars['String']>,
  avatarUrl?: Maybe<Scalars['String']>,
  createdOn?: Maybe<Scalars['DateTime']>,
  updatedOn?: Maybe<Scalars['DateTime']>,
};

export type UserReference = {
   __typename?: 'UserReference',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
};

export type UserReferenceInput = {
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
};

export type UserSignupInput = {
  id?: Maybe<Scalars['Int']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  active: Scalars['Boolean'],
  clickFunnelsAffiliateUrls?: Maybe<Array<ClickFunnelsAffiliateUrlInput>>,
  remoteLoginId?: Maybe<Scalars['String']>,
  isSubscribed?: Maybe<Scalars['Boolean']>,
  phone?: Maybe<Scalars['String']>,
  roles?: Maybe<Array<Scalars['String']>>,
  username: Scalars['String'],
  stripe: StripeDataInput,
  address: AddressInput,
  sorAccount: SorAccountReferenceInput,
  resetToken?: Maybe<Scalars['String']>,
  domain?: Maybe<DomainReferenceInput>,
  sponsor?: Maybe<SponsorInput>,
  ancestry?: Maybe<AncestryInput>,
  affiliateLinks?: Maybe<Array<AffiliateLinkInput>>,
  uuid: Scalars['String'],
  crypto?: Maybe<UserCryptoInput>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  notes?: Maybe<Scalars['String']>,
  threeForFreeUserIds?: Maybe<Array<Scalars['String']>>,
  isW9onFile: Scalars['Boolean'],
  payoutMethod?: Maybe<Scalars['String']>,
  paypalEmail?: Maybe<Scalars['String']>,
  venmoAccount?: Maybe<Scalars['String']>,
  isBanned: Scalars['Boolean'],
};

export type UserStripeSubscription = {
   __typename?: 'UserStripeSubscription',
  subscriptionId: Scalars['String'],
  customer: StripeCustomerReference,
  plan: StripePlanSummary,
  product: StripeProductReference,
};

export type UserSubscription = {
   __typename?: 'UserSubscription',
  id?: Maybe<Scalars['ID']>,
  type: Scalars['String'],
  status: Scalars['String'],
  isRevenueShare?: Maybe<Scalars['Boolean']>,
  user: UserReference,
  affiliate?: Maybe<UserReference>,
  start: Scalars['DateTime'],
  currentPeriodEnd: Scalars['DateTime'],
  currentPeriodStart: Scalars['DateTime'],
  subscriptionId: Scalars['String'],
  stripe?: Maybe<UserStripeSubscription>,
  crypto?: Maybe<UserCrypto>,
  referrerCode?: Maybe<Scalars['String']>,
  paymentAccountKey: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserTableList = {
   __typename?: 'UserTableList',
  users: Array<User>,
  totalRows: Scalars['Int'],
};

export type UserWithPasswordInput = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  confirmPassword: Scalars['String'],
  phone: Scalars['String'],
  birthDay: Scalars['DateTime'],
};

export type Video = {
   __typename?: 'Video',
  id?: Maybe<Scalars['ID']>,
  user: UserReference,
  videoTitle: Scalars['String'],
  videoUrl?: Maybe<Scalars['String']>,
  videoS3Url?: Maybe<Scalars['String']>,
  videoThumbnailUrl?: Maybe<Scalars['String']>,
  category: Scalars['String'],
  subCategory: Scalars['String'],
  description: Scalars['String'],
  language: Scalars['String'],
  brand: Scalars['String'],
  trainer?: Maybe<Scalars['String']>,
  displayOrder?: Maybe<Scalars['Int']>,
  playlist?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type VideoAndTotalRows = {
   __typename?: 'VideoAndTotalRows',
  videos: Array<Video>,
  totalRows: Scalars['Int'],
};

export type VideoInput = {
  id?: Maybe<Scalars['ID']>,
  videoTitle: Scalars['String'],
  videoUrl?: Maybe<Scalars['String']>,
  videoS3Url?: Maybe<Scalars['String']>,
  videoThumbnailUrl: Scalars['String'],
  category: Scalars['String'],
  subCategory: Scalars['String'],
  language: Scalars['String'],
  description: Scalars['String'],
  brand: Scalars['String'],
  trainer: Scalars['String'],
  displayOrder?: Maybe<Scalars['Int']>,
  playlist?: Maybe<Scalars['String']>,
};

export type VideosByPlayList = {
   __typename?: 'VideosByPlayList',
  videos: Array<Video>,
};

/** Published or Unpublished */
export enum VideoStatusEnum {
  Published = 'Published',
  Unpublished = 'Unpublished'
}

export type VideoTag = {
   __typename?: 'VideoTag',
  tag: Scalars['String'],
  children: Array<Scalars['String']>,
};

export type VideoUrlInput = {
  videoUrl: Scalars['String'],
};

export type Visit = {
   __typename?: 'Visit',
  visitDate: Scalars['DateTime'],
  ip: Scalars['String'],
  url: Scalars['String'],
};

export type W7GssoResponse = {
   __typename?: 'W7GSSOResponse',
  success: Scalars['Boolean'],
  link?: Maybe<Scalars['String']>,
};

export type W7GUser = {
   __typename?: 'W7GUser',
  memberId?: Maybe<Scalars['ID']>,
  mem_pass?: Maybe<Scalars['String']>,
  upaCode?: Maybe<Scalars['String']>,
  spCode?: Maybe<Scalars['String']>,
  defaultPlacement?: Maybe<Scalars['String']>,
  instantPlacement?: Maybe<Scalars['String']>,
};

export type YepAllHoldingTankList = {
   __typename?: 'YepAllHoldingTankList',
  commissions: Array<YepCommission>,
  totalRows: Scalars['Int'],
};

export type YepBanner = {
   __typename?: 'YepBanner',
  url: Scalars['String'],
  width: Scalars['Int'],
  height: Scalars['Int'],
};

export type YepClips = {
   __typename?: 'YepClips',
  category: Scalars['String'],
  videos: Array<Video>,
};

export type YepClipsPlaylistsGroupedByCategory = {
   __typename?: 'YepClipsPlaylistsGroupedByCategory',
  category?: Maybe<Scalars['String']>,
  playlists: Array<Playlist>,
};

export type YepCommission = {
   __typename?: 'YepCommission',
  id?: Maybe<Scalars['ID']>,
  commission: Scalars['Float'],
  orderId: Scalars['String'],
  type: Scalars['String'],
  userId: Scalars['String'],
  sponsorId: Scalars['String'],
  placement: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  userName: Scalars['String'],
  email: Scalars['String'],
};

export type YepCutoff = {
   __typename?: 'YepCutoff',
  id?: Maybe<Scalars['ID']>,
  userId: Scalars['String'],
  sponsorId: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
  product?: Maybe<Scalars['String']>,
  createdAt: Scalars['DateTime'],
};

export type YepCutoffList = {
   __typename?: 'YepCutoffList',
  users: Array<YepCutoff>,
  totalRows: Scalars['Int'],
};

export type YepHoldingTankList = {
   __typename?: 'YepHoldingTankList',
  users: Array<YepCommission>,
  totalRows: Scalars['Int'],
};

export type YepProduct = {
   __typename?: 'YepProduct',
  id: Scalars['ID'],
  pcode: Scalars['String'],
  pdesc: Scalars['String'],
  groupname: Scalars['String'],
  unit: Scalars['String'],
  price: Scalars['String'],
  pv: Scalars['String'],
  type: Scalars['String'],
  yepProductId: Scalars['String'],
};

export type YepProspect = {
   __typename?: 'YepProspect',
  id?: Maybe<Scalars['ID']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
  categoryId?: Maybe<Scalars['String']>,
  personalizedMessage?: Maybe<Scalars['String']>,
};

export type YepProspectInput = {
  receivers: Array<YepProspectReceiver>,
  categoryId?: Maybe<Scalars['String']>,
  personalizedMessage?: Maybe<Scalars['String']>,
};

export type YepProspectReceiver = {
  id?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
};

export type YepProspectSharedContentInput = {
  prospect: YepProspectReceiver,
  contentId?: Maybe<Scalars['String']>,
  personalizedMessage?: Maybe<Scalars['String']>,
};

export type YepVideoByIdResponse = {
   __typename?: 'YepVideoByIdResponse',
  video: Video,
  related: Array<Video>,
};
export type AddProspectMutationVariables = {
  id?: Maybe<Scalars['ID']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  deliveryEndpoint: Scalars['String'],
  deliveryMethod?: Maybe<Scalars['String']>,
  certificateId: Scalars['String'],
  personalizedMessage: Scalars['String']
};


export type AddProspectMutation = (
  { __typename?: 'Mutation' }
  & { addProspect: (
    { __typename?: 'Prospect' }
    & Pick<Prospect, 'id' | 'firstName' | 'lastName' | 'deliveryEndpoint' | 'deliveryMethod'>
    & { certificate: (
      { __typename?: 'Certificate' }
      & Pick<Certificate, 'title'>
    ) }
  ) }
);

export type EditMeMutationVariables = {
  id?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  username: Scalars['String'],
  password?: Maybe<Scalars['String']>
};


export type EditMeMutation = (
  { __typename?: 'Mutation' }
  & { editMe: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'username' | 'phone' | 'roles'>
  ) }
);

export type AddYepSharedContentProspectMutationVariables = {
  args: YepProspectSharedContentInput
};


export type AddYepSharedContentProspectMutation = (
  { __typename?: 'Mutation' }
  & { addYepSharedContentProspect: (
    { __typename?: 'BooleanResponse' }
    & Pick<BooleanResponse, 'success'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String'],
  uuid?: Maybe<Scalars['String']>
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'username' | 'phone' | 'roles' | 'uuid'>
    ) }
  ) }
);

export type LoginWithBiometricsMutationVariables = {
  uuid: Scalars['String']
};


export type LoginWithBiometricsMutation = (
  { __typename?: 'Mutation' }
  & { loginWithBiometrics: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'username' | 'phone' | 'roles' | 'uuid'>
    ) }
  ) }
);

export type UpdatePasswordMutationVariables = {
  data: UpdatePasswordInput
};


export type UpdatePasswordMutation = (
  { __typename?: 'Mutation' }
  & { updatePassword: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'password'>
  ) }
);

export type GetBannersQueryVariables = {};


export type GetBannersQuery = (
  { __typename?: 'Query' }
  & { getBanners: Array<(
    { __typename?: 'YepBanner' }
    & Pick<YepBanner, 'url' | 'height' | 'width'>
  )> }
);

export type GetBannersForMobileQueryVariables = {};


export type GetBannersForMobileQuery = (
  { __typename?: 'Query' }
  & { getBannersForMobile: Array<(
    { __typename?: 'YepBanner' }
    & Pick<YepBanner, 'url' | 'height' | 'width'>
  )> }
);

export type GetCertificatesForMobileQueryVariables = {};


export type GetCertificatesForMobileQuery = (
  { __typename?: 'Query' }
  & { getCertificatesForMobile: Array<(
    { __typename?: 'CertificateForMobile' }
    & Pick<CertificateForMobile, 'id' | 'title' | 'defaultMessage' | 'membershipLevels' | 'thumbnail'>
  )> }
);

export type GetCertificatesForProspectQueryVariables = {
  searchTerm?: Maybe<Scalars['String']>
};


export type GetCertificatesForProspectQuery = (
  { __typename?: 'Query' }
  & { getCertificatesForProspect: Array<(
    { __typename?: 'Certificate' }
    & Pick<Certificate, 'id' | 'title' | 'description' | 'membershipLevel' | 'defaultMessage'>
    & { images: Array<(
      { __typename?: 'ImageContent' }
      & Pick<ImageContent, 'type' | 'url'>
    )> }
  )> }
);

export type LocalEventsForMobileQueryVariables = {
  month?: Maybe<Scalars['Int']>,
  year?: Maybe<Scalars['Int']>,
  searchText?: Maybe<Scalars['String']>
};


export type LocalEventsForMobileQuery = (
  { __typename?: 'Query' }
  & { getLocalEventsForMobile: (
    { __typename?: 'MobileEventList' }
    & Pick<MobileEventList, 'totalRows'>
    & { groupedEvents: Array<(
      { __typename?: 'MobileEventsGroupByDay' }
      & Pick<MobileEventsGroupByDay, 'day'>
      & { events: Array<(
        { __typename?: 'MobileEvent' }
        & Pick<MobileEvent, 'id' | 'eventId' | 'type' | 'timeZone' | 'description' | 'when' | 'where' | 'recurringDaysOfWeek' | 'webinarUrl'>
        & { address: Maybe<(
          { __typename?: 'Address' }
          & Pick<Address, 'address' | 'city' | 'state' | 'zip' | 'country'>
        )>, who: (
          { __typename?: 'UserReference' }
          & Pick<UserReference, 'id' | 'email' | 'firstName' | 'lastName'>
        ) }
      )> }
    )> }
  ) }
);

export type GetProspectsByAffiliateQueryVariables = {
  searchText?: Maybe<Scalars['String']>,
  skip: Scalars['Int'],
  pageSize: Scalars['Int']
};


export type GetProspectsByAffiliateQuery = (
  { __typename?: 'Query' }
  & { getProspectsByAffiliate: (
    { __typename?: 'ProspectTableResult' }
    & Pick<ProspectTableResult, 'totalRows'>
    & { prospects: Array<(
      { __typename?: 'Prospect' }
      & Pick<Prospect, 'id' | 'firstName' | 'lastName' | 'redeemed' | 'deliveryEndpoint' | 'deliveryMethod' | 'phone' | 'createdAt'>
      & { certificate: (
        { __typename?: 'Certificate' }
        & Pick<Certificate, 'title'>
      ) }
    )> }
  ) }
);

export type GetAllContentByBrandQueryVariables = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>,
  brand: Scalars['String']
};


export type GetAllContentByBrandQuery = (
  { __typename?: 'Query' }
  & { getAllContentByBrand: Array<(
    { __typename?: 'ShareableContentGrouped' }
    & Pick<ShareableContentGrouped, 'category'>
    & { shareableContent: Array<(
      { __typename?: 'ShareableContent' }
      & Pick<ShareableContent, 'id' | 'subCategory' | 'subject' | 'text' | 'sms' | 'title' | 'type' | 'thumbnailUrl'>
    )> }
  )> }
);

export type GetYepClipsQueryVariables = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText?: Maybe<Scalars['String']>,
  brand?: Maybe<Scalars['String']>
};


export type GetYepClipsQuery = (
  { __typename?: 'Query' }
  & { getYepClips: Array<(
    { __typename?: 'YepClips' }
    & Pick<YepClips, 'category'>
    & { videos: Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'id' | 'videoUrl' | 'videoS3Url' | 'videoThumbnailUrl' | 'videoTitle' | 'category' | 'subCategory' | 'description' | 'trainer'>
    )> }
  )> }
);

export type GetYepClipsPlaylistsQueryVariables = {
  skip: Scalars['Int'],
  pageSize: Scalars['Int'],
  searchText: Scalars['String']
};


export type GetYepClipsPlaylistsQuery = (
  { __typename?: 'Query' }
  & { getYepClipsPlaylists: Array<(
    { __typename?: 'YepClipsPlaylistsGroupedByCategory' }
    & Pick<YepClipsPlaylistsGroupedByCategory, 'category'>
    & { playlists: Array<(
      { __typename?: 'Playlist' }
      & Pick<Playlist, 'id' | 'thumbnailUrl' | 'trainer' | 'title'>
    )> }
  )> }
);

export type GetYepPlaylistByIdWithVideosQueryVariables = {
  id: Scalars['String']
};


export type GetYepPlaylistByIdWithVideosQuery = (
  { __typename?: 'Query' }
  & { getYepPlaylistByIdWithVideos: (
    { __typename?: 'PlaylistWithVideoResponse' }
    & { playlist: (
      { __typename?: 'Playlist' }
      & Pick<Playlist, 'id' | 'status' | 'title' | 'trainer' | 'category' | 'subCategory' | 'thumbnailUrl' | 'description'>
    ), videos: Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'id' | 'videoTitle' | 'videoUrl' | 'videoS3Url' | 'videoThumbnailUrl' | 'category' | 'subCategory' | 'language' | 'description' | 'trainer' | 'brand' | 'playlist' | 'displayOrder'>
    )> }
  ) }
);

export const AddProspectDocument = gql`
    mutation addProspect($id: ID, $firstName: String!, $lastName: String!, $deliveryEndpoint: String!, $deliveryMethod: String, $certificateId: String!, $personalizedMessage: String!) {
  addProspect(id: $id, firstName: $firstName, lastName: $lastName, deliveryEndpoint: $deliveryEndpoint, deliveryMethod: $deliveryMethod, certificateId: $certificateId, personalizedMessage: $personalizedMessage) {
    id
    firstName
    lastName
    deliveryEndpoint
    deliveryMethod
    certificate {
      title
    }
  }
}
    `;
export type AddProspectMutationFn = ApolloReactCommon.MutationFunction<AddProspectMutation, AddProspectMutationVariables>;

    export function useAddProspectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddProspectMutation, AddProspectMutationVariables>) {
      return ApolloReactHooks.useMutation<AddProspectMutation, AddProspectMutationVariables>(AddProspectDocument, baseOptions);
    }
export type AddProspectMutationHookResult = ReturnType<typeof useAddProspectMutation>;
export type AddProspectMutationResult = ApolloReactCommon.MutationResult<AddProspectMutation>;
export type AddProspectMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProspectMutation, AddProspectMutationVariables>;
export const EditMeDocument = gql`
    mutation editMe($id: String, $firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String) {
  editMe(id: $id, firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password) {
    id
    email
    firstName
    lastName
    username
    phone
    roles
  }
}
    `;
export type EditMeMutationFn = ApolloReactCommon.MutationFunction<EditMeMutation, EditMeMutationVariables>;

    export function useEditMeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditMeMutation, EditMeMutationVariables>) {
      return ApolloReactHooks.useMutation<EditMeMutation, EditMeMutationVariables>(EditMeDocument, baseOptions);
    }
export type EditMeMutationHookResult = ReturnType<typeof useEditMeMutation>;
export type EditMeMutationResult = ApolloReactCommon.MutationResult<EditMeMutation>;
export type EditMeMutationOptions = ApolloReactCommon.BaseMutationOptions<EditMeMutation, EditMeMutationVariables>;
export const AddYepSharedContentProspectDocument = gql`
    mutation addYepSharedContentProspect($args: YepProspectSharedContentInput!) {
  addYepSharedContentProspect(args: $args) {
    success
  }
}
    `;
export type AddYepSharedContentProspectMutationFn = ApolloReactCommon.MutationFunction<AddYepSharedContentProspectMutation, AddYepSharedContentProspectMutationVariables>;

    export function useAddYepSharedContentProspectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddYepSharedContentProspectMutation, AddYepSharedContentProspectMutationVariables>) {
      return ApolloReactHooks.useMutation<AddYepSharedContentProspectMutation, AddYepSharedContentProspectMutationVariables>(AddYepSharedContentProspectDocument, baseOptions);
    }
export type AddYepSharedContentProspectMutationHookResult = ReturnType<typeof useAddYepSharedContentProspectMutation>;
export type AddYepSharedContentProspectMutationResult = ApolloReactCommon.MutationResult<AddYepSharedContentProspectMutation>;
export type AddYepSharedContentProspectMutationOptions = ApolloReactCommon.BaseMutationOptions<AddYepSharedContentProspectMutation, AddYepSharedContentProspectMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!, $uuid: String) {
  login(email: $email, password: $password, uuid: $uuid) {
    user {
      id
      email
      firstName
      lastName
      username
      phone
      roles
      uuid
    }
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

    export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
    }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LoginWithBiometricsDocument = gql`
    mutation loginWithBiometrics($uuid: String!) {
  loginWithBiometrics(uuid: $uuid) {
    user {
      id
      email
      firstName
      lastName
      username
      phone
      roles
      uuid
    }
    token
  }
}
    `;
export type LoginWithBiometricsMutationFn = ApolloReactCommon.MutationFunction<LoginWithBiometricsMutation, LoginWithBiometricsMutationVariables>;

    export function useLoginWithBiometricsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginWithBiometricsMutation, LoginWithBiometricsMutationVariables>) {
      return ApolloReactHooks.useMutation<LoginWithBiometricsMutation, LoginWithBiometricsMutationVariables>(LoginWithBiometricsDocument, baseOptions);
    }
export type LoginWithBiometricsMutationHookResult = ReturnType<typeof useLoginWithBiometricsMutation>;
export type LoginWithBiometricsMutationResult = ApolloReactCommon.MutationResult<LoginWithBiometricsMutation>;
export type LoginWithBiometricsMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginWithBiometricsMutation, LoginWithBiometricsMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation updatePassword($data: UpdatePasswordInput!) {
  updatePassword(data: $data) {
    id
    username
    password
  }
}
    `;
export type UpdatePasswordMutationFn = ApolloReactCommon.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

    export function useUpdatePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, baseOptions);
    }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = ApolloReactCommon.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const GetBannersDocument = gql`
    query getBanners {
  getBanners {
    url
    height
    width
  }
}
    `;

    export function useGetBannersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
      return ApolloReactHooks.useQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, baseOptions);
    }
      export function useGetBannersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBannersQuery, GetBannersQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetBannersQuery, GetBannersQueryVariables>(GetBannersDocument, baseOptions);
      }
      
export type GetBannersQueryHookResult = ReturnType<typeof useGetBannersQuery>;
export type GetBannersQueryResult = ApolloReactCommon.QueryResult<GetBannersQuery, GetBannersQueryVariables>;
export const GetBannersForMobileDocument = gql`
    query getBannersForMobile {
  getBannersForMobile {
    url
    height
    width
  }
}
    `;

    export function useGetBannersForMobileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBannersForMobileQuery, GetBannersForMobileQueryVariables>) {
      return ApolloReactHooks.useQuery<GetBannersForMobileQuery, GetBannersForMobileQueryVariables>(GetBannersForMobileDocument, baseOptions);
    }
      export function useGetBannersForMobileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBannersForMobileQuery, GetBannersForMobileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetBannersForMobileQuery, GetBannersForMobileQueryVariables>(GetBannersForMobileDocument, baseOptions);
      }
      
export type GetBannersForMobileQueryHookResult = ReturnType<typeof useGetBannersForMobileQuery>;
export type GetBannersForMobileQueryResult = ApolloReactCommon.QueryResult<GetBannersForMobileQuery, GetBannersForMobileQueryVariables>;
export const GetCertificatesForMobileDocument = gql`
    query getCertificatesForMobile {
  getCertificatesForMobile {
    id
    title
    defaultMessage
    membershipLevels
    thumbnail
  }
}
    `;

    export function useGetCertificatesForMobileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCertificatesForMobileQuery, GetCertificatesForMobileQueryVariables>) {
      return ApolloReactHooks.useQuery<GetCertificatesForMobileQuery, GetCertificatesForMobileQueryVariables>(GetCertificatesForMobileDocument, baseOptions);
    }
      export function useGetCertificatesForMobileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCertificatesForMobileQuery, GetCertificatesForMobileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetCertificatesForMobileQuery, GetCertificatesForMobileQueryVariables>(GetCertificatesForMobileDocument, baseOptions);
      }
      
export type GetCertificatesForMobileQueryHookResult = ReturnType<typeof useGetCertificatesForMobileQuery>;
export type GetCertificatesForMobileQueryResult = ApolloReactCommon.QueryResult<GetCertificatesForMobileQuery, GetCertificatesForMobileQueryVariables>;
export const GetCertificatesForProspectDocument = gql`
    query getCertificatesForProspect($searchTerm: String) {
  getCertificatesForProspect(searchTerm: $searchTerm) {
    id
    title
    description
    membershipLevel
    defaultMessage
    images {
      type
      url
    }
  }
}
    `;

    export function useGetCertificatesForProspectQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCertificatesForProspectQuery, GetCertificatesForProspectQueryVariables>) {
      return ApolloReactHooks.useQuery<GetCertificatesForProspectQuery, GetCertificatesForProspectQueryVariables>(GetCertificatesForProspectDocument, baseOptions);
    }
      export function useGetCertificatesForProspectLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCertificatesForProspectQuery, GetCertificatesForProspectQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetCertificatesForProspectQuery, GetCertificatesForProspectQueryVariables>(GetCertificatesForProspectDocument, baseOptions);
      }
      
export type GetCertificatesForProspectQueryHookResult = ReturnType<typeof useGetCertificatesForProspectQuery>;
export type GetCertificatesForProspectQueryResult = ApolloReactCommon.QueryResult<GetCertificatesForProspectQuery, GetCertificatesForProspectQueryVariables>;
export const LocalEventsForMobileDocument = gql`
    query localEventsForMobile($month: Int, $year: Int, $searchText: String) {
  getLocalEventsForMobile(month: $month, year: $year, searchText: $searchText) {
    totalRows
    groupedEvents {
      day
      events {
        id
        eventId
        type
        timeZone
        description
        when
        where
        recurringDaysOfWeek
        address {
          address
          city
          state
          zip
          country
        }
        who {
          id
          email
          firstName
          lastName
        }
        webinarUrl
      }
    }
  }
}
    `;

    export function useLocalEventsForMobileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LocalEventsForMobileQuery, LocalEventsForMobileQueryVariables>) {
      return ApolloReactHooks.useQuery<LocalEventsForMobileQuery, LocalEventsForMobileQueryVariables>(LocalEventsForMobileDocument, baseOptions);
    }
      export function useLocalEventsForMobileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LocalEventsForMobileQuery, LocalEventsForMobileQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<LocalEventsForMobileQuery, LocalEventsForMobileQueryVariables>(LocalEventsForMobileDocument, baseOptions);
      }
      
export type LocalEventsForMobileQueryHookResult = ReturnType<typeof useLocalEventsForMobileQuery>;
export type LocalEventsForMobileQueryResult = ApolloReactCommon.QueryResult<LocalEventsForMobileQuery, LocalEventsForMobileQueryVariables>;
export const GetProspectsByAffiliateDocument = gql`
    query getProspectsByAffiliate($searchText: String, $skip: Int!, $pageSize: Int!) {
  getProspectsByAffiliate(searchText: $searchText, skip: $skip, pageSize: $pageSize) {
    prospects {
      id
      firstName
      lastName
      redeemed
      deliveryEndpoint
      deliveryMethod
      redeemed
      phone
      certificate {
        title
      }
      createdAt
    }
    totalRows
  }
}
    `;

    export function useGetProspectsByAffiliateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProspectsByAffiliateQuery, GetProspectsByAffiliateQueryVariables>) {
      return ApolloReactHooks.useQuery<GetProspectsByAffiliateQuery, GetProspectsByAffiliateQueryVariables>(GetProspectsByAffiliateDocument, baseOptions);
    }
      export function useGetProspectsByAffiliateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProspectsByAffiliateQuery, GetProspectsByAffiliateQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetProspectsByAffiliateQuery, GetProspectsByAffiliateQueryVariables>(GetProspectsByAffiliateDocument, baseOptions);
      }
      
export type GetProspectsByAffiliateQueryHookResult = ReturnType<typeof useGetProspectsByAffiliateQuery>;
export type GetProspectsByAffiliateQueryResult = ApolloReactCommon.QueryResult<GetProspectsByAffiliateQuery, GetProspectsByAffiliateQueryVariables>;
export const GetAllContentByBrandDocument = gql`
    query getAllContentByBrand($skip: Int!, $pageSize: Int!, $searchText: String, $brand: String!) {
  getAllContentByBrand(skip: $skip, pageSize: $pageSize, searchText: $searchText, brand: $brand) {
    category
    shareableContent {
      id
      subCategory
      subject
      text
      sms
      title
      type
      thumbnailUrl
    }
  }
}
    `;

    export function useGetAllContentByBrandQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllContentByBrandQuery, GetAllContentByBrandQueryVariables>) {
      return ApolloReactHooks.useQuery<GetAllContentByBrandQuery, GetAllContentByBrandQueryVariables>(GetAllContentByBrandDocument, baseOptions);
    }
      export function useGetAllContentByBrandLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllContentByBrandQuery, GetAllContentByBrandQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetAllContentByBrandQuery, GetAllContentByBrandQueryVariables>(GetAllContentByBrandDocument, baseOptions);
      }
      
export type GetAllContentByBrandQueryHookResult = ReturnType<typeof useGetAllContentByBrandQuery>;
export type GetAllContentByBrandQueryResult = ApolloReactCommon.QueryResult<GetAllContentByBrandQuery, GetAllContentByBrandQueryVariables>;
export const GetYepClipsDocument = gql`
    query getYepClips($skip: Int!, $pageSize: Int!, $searchText: String, $brand: String) {
  getYepClips(skip: $skip, pageSize: $pageSize, searchText: $searchText, brand: $brand) {
    category
    videos {
      id
      videoUrl
      videoS3Url
      videoThumbnailUrl
      videoTitle
      category
      subCategory
      description
      trainer
    }
  }
}
    `;

    export function useGetYepClipsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetYepClipsQuery, GetYepClipsQueryVariables>) {
      return ApolloReactHooks.useQuery<GetYepClipsQuery, GetYepClipsQueryVariables>(GetYepClipsDocument, baseOptions);
    }
      export function useGetYepClipsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetYepClipsQuery, GetYepClipsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetYepClipsQuery, GetYepClipsQueryVariables>(GetYepClipsDocument, baseOptions);
      }
      
export type GetYepClipsQueryHookResult = ReturnType<typeof useGetYepClipsQuery>;
export type GetYepClipsQueryResult = ApolloReactCommon.QueryResult<GetYepClipsQuery, GetYepClipsQueryVariables>;
export const GetYepClipsPlaylistsDocument = gql`
    query getYepClipsPlaylists($skip: Int!, $pageSize: Int!, $searchText: String!) {
  getYepClipsPlaylists(skip: $skip, pageSize: $pageSize, searchText: $searchText) {
    category
    playlists {
      id
      thumbnailUrl
      trainer
      title
    }
  }
}
    `;

    export function useGetYepClipsPlaylistsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetYepClipsPlaylistsQuery, GetYepClipsPlaylistsQueryVariables>) {
      return ApolloReactHooks.useQuery<GetYepClipsPlaylistsQuery, GetYepClipsPlaylistsQueryVariables>(GetYepClipsPlaylistsDocument, baseOptions);
    }
      export function useGetYepClipsPlaylistsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetYepClipsPlaylistsQuery, GetYepClipsPlaylistsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetYepClipsPlaylistsQuery, GetYepClipsPlaylistsQueryVariables>(GetYepClipsPlaylistsDocument, baseOptions);
      }
      
export type GetYepClipsPlaylistsQueryHookResult = ReturnType<typeof useGetYepClipsPlaylistsQuery>;
export type GetYepClipsPlaylistsQueryResult = ApolloReactCommon.QueryResult<GetYepClipsPlaylistsQuery, GetYepClipsPlaylistsQueryVariables>;
export const GetYepPlaylistByIdWithVideosDocument = gql`
    query getYepPlaylistByIdWithVideos($id: String!) {
  getYepPlaylistByIdWithVideos(id: $id) {
    playlist {
      id
      status
      title
      trainer
      category
      subCategory
      thumbnailUrl
      description
    }
    videos {
      id
      videoTitle
      videoUrl
      videoS3Url
      videoThumbnailUrl
      category
      subCategory
      language
      description
      trainer
      brand
      playlist
      displayOrder
    }
  }
}
    `;

    export function useGetYepPlaylistByIdWithVideosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetYepPlaylistByIdWithVideosQuery, GetYepPlaylistByIdWithVideosQueryVariables>) {
      return ApolloReactHooks.useQuery<GetYepPlaylistByIdWithVideosQuery, GetYepPlaylistByIdWithVideosQueryVariables>(GetYepPlaylistByIdWithVideosDocument, baseOptions);
    }
      export function useGetYepPlaylistByIdWithVideosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetYepPlaylistByIdWithVideosQuery, GetYepPlaylistByIdWithVideosQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetYepPlaylistByIdWithVideosQuery, GetYepPlaylistByIdWithVideosQueryVariables>(GetYepPlaylistByIdWithVideosDocument, baseOptions);
      }
      
export type GetYepPlaylistByIdWithVideosQueryHookResult = ReturnType<typeof useGetYepPlaylistByIdWithVideosQuery>;
export type GetYepPlaylistByIdWithVideosQueryResult = ApolloReactCommon.QueryResult<GetYepPlaylistByIdWithVideosQuery, GetYepPlaylistByIdWithVideosQueryVariables>;