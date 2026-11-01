import ServiceCasePage from '../../components/ServiceCasePage';

const LoanDispute = () => (
  <ServiceCasePage
    caseType="loan_dispute"
    title="Loan Dispute Support"
    hero="Unfair charges, harassing recovery calls or a balance that does not add up? We review your case and take it up with the lender."
    heading="Loan problems we can help with"
    intro="Disputes with banks and finance companies are easier to resolve when the complaint is documented and sent to the right place. We help you build that case."
    points={[
      'Wrong or unexplained charges, penalties and interest',
      'Recovery agents who harass or threaten you',
      'A disputed outstanding balance or loan statement',
      'Foreclosure and prepayment charges',
      'Loan paid off but no closure or no-dues certificate issued',
    ]}
  />
);

export default LoanDispute;
