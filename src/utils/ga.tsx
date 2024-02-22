export const gaActions = {
  waitlistSubmit: 'waitlist_submit',
  waitlistStartTyping: 'waitlist_start_typing',
  scheduleDemoThankYou: 'schedule_demo_from_thank_you',
};

export const gaCategories = {
  forms: 'forms',
  click: 'click',
};

type GTagEvent = {
  action: string;
  label?: string;
  category?: string;
  value?: number;
};

export const gaEvent = ({
  action,
  value,
  label = '',
  category = 'engagement',
}: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
