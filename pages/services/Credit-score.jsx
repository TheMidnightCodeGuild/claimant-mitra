import ServiceCasePage from '../../components/ServiceCasePage';

const CreditScore = () => (
  <ServiceCasePage
    caseType="credit_score"
    title="Credit Score Support"
    hero="Wrong entries or a low score holding you back? We help you find errors in your credit report and get them corrected."
    heading="Credit report problems we can help with"
    intro="Errors in a credit report can lower your score and block loans. We help you spot them and raise the dispute with the credit bureau and the lender."
    points={[
      'Accounts you do not recognise or never opened',
      'Wrong payment history or overdue status',
      'Closed or settled loans still shown as open',
      'Duplicate entries and mixed-up identities',
      'Raising and following up disputes with the bureau and lender',
    ]}
  />
);

export default CreditScore;
