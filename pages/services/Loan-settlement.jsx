import ServiceCasePage from '../../components/ServiceCasePage';

const LoanSettlement = () => (
  <ServiceCasePage
    caseType="loan_settlement"
    title="Loan Settlement Support"
    hero="Struggling to repay a loan? We negotiate with the lender for a one-time settlement you can manage."
    heading="How a loan settlement works with us"
    intro="A settlement closes a loan for less than the full outstanding amount. It needs careful negotiation and written terms, and it can affect your credit record, so we explain the trade-offs before you decide."
    points={[
      'Review of your outstanding dues and loan documents',
      'Negotiating a reduced one-time settlement with the lender',
      'Getting the agreed terms in writing before you pay',
      'Making sure the account is closed after payment',
      'Understanding how a settlement shows on your credit record',
    ]}
  />
);

export default LoanSettlement;
