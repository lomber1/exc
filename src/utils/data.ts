export const generateMail = (): Mail => {
  const isOC = Math.random() >= 0.5;

  return ({
    id: Math.floor(Math.random() * 100000000),
    isUnread: Boolean(Math.random() >= 0.5),
    sentDate: new Date().toDateString(),
    from: isOC ? 'Kalkulator OC/AC - Onet <mailingi@onet.pl>' : 'Walutomat - Onet <mailingi@onet.pl>',
    snippet: isOC ? '' : 'Odbierz 50% rabatu na wymianę online',
    subject: isOC ? 'Zaoszczędź! OC już od 230 zł' : 'Wymień walutę szybko i tanio',
  });
};

export const generateMails = (count: number): Mail[] => {
  const mails = [];

  for (let i = 0; i < count; i += 1) {
    mails.push(generateMail());
  }

  return mails;
};

export const generateMailsHash = (count: number) => {
  const mails: MailsHash = {
    byId: {},
    allIds: [],
  };

  for (let i = 0; i < count; i += 1) {
    const mail = generateMail();
    mails.byId[mail.id] = mail;
    mails.allIds.push(mail.id);
  }

  return mails;
};
