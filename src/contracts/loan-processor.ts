import { CreditReferenceRating } from './credit-reference';

export interface LoanProcessorState {
  correlationId: string;
  input: LoanProcessorInput;
  creditReference?: CreditReference;
  identityCheck?: IdentityCheck;
}

export interface LoanProcessorInput {
  firstName: string;
  lastName: string;
  postcode: string;
}

export interface CreditReference {
  creditReferenceRating: CreditReferenceRating;
}

export interface IdentityCheck {
  electoralRole: boolean;
  bankAccount: boolean;
}
