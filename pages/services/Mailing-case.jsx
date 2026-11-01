import ServiceCasePage from '../../components/ServiceCasePage';

const MailingCase = () => (
  <ServiceCasePage
    caseType="mailing"
    title="Mailing Case Support"
    hero="Some problems are only solved by writing to the right people, again and again. We draft, send and track the letters and emails for you."
    heading="Problems solved by correspondence"
    intro="When a complaint needs a chain of emails and posted letters, the details matter: who you write to, what you say and keeping proof. We handle it and keep a record of every message."
    points={[
      'Drafting formal complaint letters and emails',
      'Sending by email and by registered or speed post',
      'Tracking replies and following up',
      'Escalating to the next authority when there is no answer',
      'A complete record of every letter sent and received',
    ]}
  />
);

export default MailingCase;
