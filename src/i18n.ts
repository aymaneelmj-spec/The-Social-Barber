import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        /* ── Nav ── */
        Services:       'Services',
        Photos:         'Gallery',
        Reviews:        'Reviews',
        FAQ:            'FAQ',

        /* ── Hero ── */
        Tagline:        'Premium haircuts, shaves, facials & spa treatments — all under one roof in Janabiyah, Bahrain.',
        BookNow:        'Book on WhatsApp',

        /* ── Contact / Footer ── */
        Contact:        'Contact',
        Address:        'Building 111 Road 77, Janabiyah, Bahrain',
        Hours:          'Opening Hours',
        Opening_Hours:  'Open 7 Days a Week',

        /* ── Days ── */
        Monday:         'Monday',
        Tuesday:        'Tuesday',
        Wednesday:      'Wednesday',
        Thursday:       'Thursday',
        Friday:         'Friday',
        Saturday:       'Saturday',
        Sunday:         'Sunday',

        /* ── Chat ── */
        ChatWelcome:    'Welcome to The Social Barber! 👋\nHow can I help you today? Ask about our services, prices, or book an appointment via WhatsApp.',

        /* ── FAQ ── */
        FaqQ1: 'Where are you located?',
        FaqA1: 'We are at Building 111 Road 77, Janabiyah, Bahrain. You can find us easily on Google Maps.',

        FaqQ2: 'Do I need to book in advance?',
        FaqA2: 'Walk-ins are welcome, but we recommend booking via WhatsApp (+973 6699 9901) to secure your preferred time slot.',

        FaqQ3: 'What are your opening hours?',
        FaqA3: 'We are open every day: Monday to Wednesday & Saturday to Sunday 10 AM – 10 PM, Thursday & Friday 10 AM – 11 PM.',

        FaqQ4: 'What services do you offer?',
        FaqA4: 'We offer a full range of men\'s grooming and spa services including haircuts, shaves, hair colouring, facials, manicure, pedicure, foot massage, and more. Check our pricelist for the full menu.',
      },
    },

    ar: {
      translation: {
        /* ── Nav ── */
        Services:       'الخدمات',
        Photos:         'المعرض',
        Reviews:        'التقييمات',
        FAQ:            'الأسئلة الشائعة',

        /* ── Hero ── */
        Tagline:        'قصات شعر احترافية، حلاقة، فيشل وخدمات سبا متكاملة — تحت سقف واحد في الجنابية، البحرين.',
        BookNow:        'احجز عبر واتساب',

        /* ── Contact / Footer ── */
        Contact:        'تواصل معنا',
        Address:        'مبنى 111 طريق 77، الجنابية، البحرين',
        Hours:          'ساعات العمل',
        Opening_Hours:  'مفتوح 7 أيام في الأسبوع',

        /* ── Days ── */
        Monday:         'الإثنين',
        Tuesday:        'الثلاثاء',
        Wednesday:      'الأربعاء',
        Thursday:       'الخميس',
        Friday:         'الجمعة',
        Saturday:       'السبت',
        Sunday:         'الأحد',

        /* ── Chat ── */
        ChatWelcome:    'مرحباً بك في ذا سوشيال باربر! 👋\nكيف يمكنني مساعدتك؟ اسأل عن خدماتنا وأسعارنا أو احجز موعدك عبر واتساب.',

        /* ── FAQ ── */
        FaqQ1: 'أين يقع المحل؟',
        FaqA1: 'نقع في مبنى 111 طريق 77، الجنابية، البحرين. يمكنك إيجادنا بسهولة على خرائط جوجل.',

        FaqQ2: 'هل يجب الحجز مسبقاً؟',
        FaqA2: 'نرحب بالزيارات المباشرة، لكن ننصح بالحجز عبر واتساب (+973 6699 9901) لضمان الوقت المناسب لك.',

        FaqQ3: 'ما هي ساعات العمل؟',
        FaqA3: 'نعمل يومياً: من الإثنين إلى الأربعاء ومن السبت إلى الأحد من 10 ص حتى 10 م، والخميس والجمعة من 10 ص حتى 11 م.',

        FaqQ4: 'ما هي الخدمات التي تقدمونها؟',
        FaqA4: 'نقدم مجموعة كاملة من خدمات الحلاقة والسبا للرجال تشمل: قص الشعر، الحلاقة، صباغة الشعر، الفيشل، المانيكير، البديكير، تدليك القدم والمزيد. راجع قائمة الأسعار للاطلاع على القائمة الكاملة.',
      },
    },
  },
});

export default i18n;