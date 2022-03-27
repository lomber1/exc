/**
 *   {
 *     "id": 100795227,
 *     "from": "Walutomat - Onet <mailingi@onet.pl>",
 *     "sent_date": "2021-12-13 09:00:02",
 *     "is_unread": false,
 *     "subject": "Wymień walutę szybko i tanio",
 *     "snippet": "Odbierz 50% rabatu na wymianę online"
 *   }
 */

interface Mail {
  id: number;
  from: string;
  sentDate: string;
  subject: string;
  snippet: string;
  isUnread: boolean;
}

interface MailsHash {
  byId: {
    [id: Mail['id']]: Mail;
  };
  allIds: Mail['id'][];
}
