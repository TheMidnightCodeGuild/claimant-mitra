/**
 * Loan / credit / mailing case types, as the public website collects them.
 *
 * A copy of the field definitions in the master portal's lib/serviceCaseTypes.js
 * (the apps share no package) - keep the two in step.
 * Last synced with the master portal: 2026-11-01.
 */
export const CASE_TYPES = {
  loan_dispute: {
    label: 'Loan Dispute',
    fields: [
      { name: 'lender', label: 'Lender / bank', required: true },
      { name: 'loanAccountNo', label: 'Loan account number', required: true },
      {
        name: 'loanType',
        label: 'Loan type',
        type: 'select',
        options: ['Personal', 'Home', 'Vehicle', 'Business', 'Education', 'Credit card', 'Other'],
      },
      { name: 'disputedAmount', label: 'Disputed amount (Rs.)', type: 'number' },
      { name: 'disputeNature', label: 'What is the dispute about?', type: 'textarea', required: true },
    ],
  },
  loan_settlement: {
    label: 'Loan Settlement',
    fields: [
      { name: 'lender', label: 'Lender / bank', required: true },
      { name: 'loanAccountNo', label: 'Loan account number', required: true },
      { name: 'outstandingAmount', label: 'Outstanding amount (Rs.)', type: 'number', required: true },
      { name: 'offeredAmount', label: 'Settlement offered by lender (Rs.)', type: 'number' },
    ],
  },
  credit_score: {
    label: 'Credit Score',
    fields: [
      {
        name: 'bureau',
        label: 'Credit bureau',
        type: 'select',
        options: ['CIBIL', 'Experian', 'Equifax', 'CRIF High Mark'],
        required: true,
      },
      { name: 'currentScore', label: 'Current score', type: 'number' },
      { name: 'targetScore', label: 'Target score', type: 'number' },
      { name: 'issue', label: 'What needs fixing?', type: 'textarea', required: true },
    ],
  },
  mailing: {
    label: 'Mailing Case',
    fields: [
      { name: 'subject', label: 'Subject', required: true },
      { name: 'counterpartyName', label: 'Other party (person / organisation)', required: true },
      { name: 'counterpartyEmail', label: 'Other party email' },
      { name: 'counterpartyAddress', label: 'Other party postal address', type: 'textarea' },
      { name: 'description', label: 'What needs to be resolved?', type: 'textarea', required: true },
    ],
  },
};

export const CASE_TYPE_KEYS = Object.keys(CASE_TYPES);

export function isCaseType(value) {
  return Object.prototype.hasOwnProperty.call(CASE_TYPES, value);
}

export const STAGE_LABELS = {
  new: 'New',
  under_review: 'Under Review',
  accepted: 'Accepted',
  escalated: 'Escalated',
  resolved: 'Resolved',
  rejected: 'Rejected',
};
