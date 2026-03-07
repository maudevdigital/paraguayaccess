import type { Locale } from "./config";

interface PageSeo {
  title: string;
  description: string;
}

interface LocaleSeo {
  home: PageSeo;
  residency: PageSeo;
  residencyGuide: PageSeo;
  accounting: PageSeo;
  companyFormation: PageSeo;
  about: PageSeo;
  contact: PageSeo;
  privacy: PageSeo;
  terms: PageSeo;
}

export const seoData: Record<Locale, LocaleSeo> = {
  en: {
    home: {
      title: "Paraguay Access | Residency, Tax Advisory & Relocation Services in Paraguay",
      description:
        "Expert firm helping individuals and businesses obtain personal and tax residency in Paraguay. 0% tax on foreign income, fast residency process, no minimum stay. Accounting, fiscal planning, company formation & compliance for expats, digital nomads & investors.",
    },
    residency: {
      title: "Residency Services in Paraguay | Temporary & Permanent Residency 2026",
      description:
        "Get temporary or permanent residency in Paraguay. 0% tax on foreign income, no minimum stay, fast processing. Complete assistance from document preparation to cédula. 750+ clients from 40+ countries. Prices for 2026.",
    },
    residencyGuide: {
      title: "Residency Program in Paraguay | Complete Guide 2026",
      description:
        "Everything you need to know about Paraguay's residency program in 2026. Requirements, documents, timeline, costs, tax implications, and step-by-step process for temporary and permanent residency.",
    },
    accounting: {
      title: "Accounting & Tax Services in Paraguay | RUC, Bookkeeping & Compliance",
      description:
        "Professional accounting and tax services in Paraguay. RUC registration, monthly bookkeeping, tax filing, fiscal consulting, and compliance for residents and businesses. 10% flat corporate tax.",
    },
    companyFormation: {
      title: "Company Formation in Paraguay | S.A. & S.R.L. Setup 2026",
      description:
        "Set up your business in Paraguay. Full company incorporation (S.A. or S.R.L.), RUC registration, bank account opening, and ongoing corporate compliance. Low 10% corporate tax.",
    },
    about: {
      title: "About Paraguay Access | Residency & Tax Experts in Paraguay",
      description:
        "Learn about Paraguay Access: specialized firm with firsthand experience in Paraguay's residency process. 750+ clients from 40+ countries. Expert local team with international perspective.",
    },
    contact: {
      title: "Contact Paraguay Access | Free Consultation for Residency & Tax",
      description:
        "Contact Paraguay Access for residency, tax advisory, accounting, or company formation in Paraguay. Email, WhatsApp, or schedule a free consultation. We respond within 24 hours.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Paraguay Access privacy policy. How we collect, use, and protect your personal data when you use our residency, tax advisory, and business services.",
    },
    terms: {
      title: "Terms of Service",
      description:
        "Paraguay Access terms of service. Rules and conditions governing the use of our website and residency, accounting, tax advisory, and company formation services.",
    },
  },
  es: {
    home: {
      title: "Paraguay Access | Residencia, Asesoría Fiscal y Reubicación en Paraguay",
      description:
        "Firma especializada en residencia personal y fiscal en Paraguay. 0% impuestos sobre ingresos del exterior, proceso rápido, sin estadía mínima. Contabilidad, planificación fiscal, constitución de empresas y cumplimiento para expatriados, nómadas digitales e inversores.",
    },
    residency: {
      title: "Residencia en Paraguay | Residencia Temporal y Permanente 2026",
      description:
        "Obtén residencia temporal o permanente en Paraguay. 0% impuestos sobre ingresos del exterior, sin estadía mínima, proceso rápido. Asistencia completa desde la preparación de documentos hasta la cédula. Precios 2026.",
    },
    residencyGuide: {
      title: "Programa de Residencia en Paraguay | Guía Completa 2026",
      description:
        "Todo lo que necesitas saber sobre el programa de residencia de Paraguay en 2026. Requisitos, documentos, plazos, costos, implicaciones fiscales y proceso paso a paso para residencia temporal y permanente.",
    },
    accounting: {
      title: "Contabilidad e Impuestos en Paraguay | RUC, Teneduría y Cumplimiento",
      description:
        "Servicios profesionales de contabilidad e impuestos en Paraguay. Registro de RUC, teneduría mensual, declaraciones fiscales, consultoría fiscal y cumplimiento para residentes y empresas. Impuesto corporativo del 10%.",
    },
    companyFormation: {
      title: "Constitución de Empresas en Paraguay | S.A. y S.R.L. 2026",
      description:
        "Constituye tu empresa en Paraguay con asesoramiento experto. Incorporación completa (S.A. o S.R.L.), registro de RUC, apertura de cuenta bancaria y cumplimiento corporativo continuo.",
    },
    about: {
      title: "Sobre Paraguay Access | Expertos en Residencia e Impuestos en Paraguay",
      description:
        "Conoce a Paraguay Access: firma especializada con experiencia directa en el proceso de residencia de Paraguay. Más de 750 clientes de más de 40 países.",
    },
    contact: {
      title: "Contacto Paraguay Access | Consulta Gratuita de Residencia e Impuestos",
      description:
        "Contacta a Paraguay Access para residencia, asesoría fiscal, contabilidad o constitución de empresas en Paraguay. Email, WhatsApp o consulta gratuita. Respondemos en 24 horas.",
    },
    privacy: {
      title: "Política de Privacidad",
      description:
        "Política de privacidad de Paraguay Access. Cómo recopilamos, usamos y protegemos sus datos personales.",
    },
    terms: {
      title: "Términos de Servicio",
      description:
        "Términos de servicio de Paraguay Access. Reglas y condiciones que rigen el uso de nuestro sitio web y servicios.",
    },
  },
  pt: {
    home: {
      title: "Paraguay Access | Residência, Assessoria Fiscal e Relocação no Paraguai",
      description:
        "Firma especializada em residência pessoal e fiscal no Paraguai. 0% imposto sobre renda do exterior, processo rápido, sem estadia mínima. Contabilidade, planejamento fiscal, constituição de empresas e conformidade para expatriados, nômades digitais e investidores.",
    },
    residency: {
      title: "Residência no Paraguai | Residência Temporária e Permanente 2026",
      description:
        "Obtenha residência temporária ou permanente no Paraguai. 0% imposto sobre renda do exterior, sem estadia mínima, processo rápido. Assistência completa desde preparação de documentos até a cédula. Preços 2026.",
    },
    residencyGuide: {
      title: "Programa de Residência no Paraguai | Guia Completo 2026",
      description:
        "Tudo que você precisa saber sobre o programa de residência do Paraguai em 2026. Requisitos, documentos, prazos, custos, implicações fiscais e processo passo a passo.",
    },
    accounting: {
      title: "Contabilidade e Impostos no Paraguai | RUC, Escrituração e Conformidade",
      description:
        "Serviços profissionais de contabilidade e impostos no Paraguai. Registro de RUC, escrituração mensal, declarações fiscais, consultoria fiscal e conformidade. Imposto corporativo de 10%.",
    },
    companyFormation: {
      title: "Constituição de Empresas no Paraguai | S.A. e S.R.L. 2026",
      description:
        "Abra sua empresa no Paraguai com orientação especializada. Incorporação completa (S.A. ou S.R.L.), registro de RUC, abertura de conta bancária e conformidade corporativa.",
    },
    about: {
      title: "Sobre a Paraguay Access | Especialistas em Residência e Impostos no Paraguai",
      description:
        "Conheça a Paraguay Access: firma especializada com experiência direta no processo de residência do Paraguai. Mais de 750 clientes de mais de 40 países.",
    },
    contact: {
      title: "Contato Paraguay Access | Consulta Gratuita sobre Residência e Impostos",
      description:
        "Entre em contato com a Paraguay Access para residência, assessoria fiscal, contabilidade ou abertura de empresas no Paraguai. Email, WhatsApp ou consulta gratuita.",
    },
    privacy: {
      title: "Política de Privacidade",
      description: "Política de privacidade da Paraguay Access. Como coletamos, usamos e protegemos seus dados pessoais.",
    },
    terms: {
      title: "Termos de Serviço",
      description: "Termos de serviço da Paraguay Access. Regras e condições de uso do nosso site e serviços.",
    },
  },
  fr: {
    home: {
      title: "Paraguay Access | Résidence, Conseil Fiscal et Relocalisation au Paraguay",
      description:
        "Cabinet spécialisé en résidence personnelle et fiscale au Paraguay. 0% d'impôt sur les revenus étrangers, processus rapide, sans séjour minimum. Comptabilité, planification fiscale, création d'entreprise et conformité.",
    },
    residency: {
      title: "Résidence au Paraguay | Résidence Temporaire et Permanente 2026",
      description:
        "Obtenez votre résidence temporaire ou permanente au Paraguay. 0% d'impôt sur les revenus étrangers, sans séjour minimum, processus rapide. Assistance complète. Prix 2026.",
    },
    residencyGuide: {
      title: "Programme de Résidence au Paraguay | Guide Complet 2026",
      description:
        "Tout ce que vous devez savoir sur le programme de résidence du Paraguay en 2026. Conditions, documents, délais, coûts, implications fiscales et processus étape par étape.",
    },
    accounting: {
      title: "Comptabilité et Fiscalité au Paraguay | RUC, Tenue de Livres et Conformité",
      description:
        "Services professionnels de comptabilité et fiscalité au Paraguay. Enregistrement RUC, comptabilité mensuelle, déclarations fiscales, conseil fiscal et conformité. Impôt sur les sociétés de 10%.",
    },
    companyFormation: {
      title: "Création d'Entreprise au Paraguay | S.A. et S.R.L. 2026",
      description:
        "Créez votre entreprise au Paraguay avec un accompagnement expert. Incorporation complète (S.A. ou S.R.L.), enregistrement RUC, ouverture de compte bancaire et conformité.",
    },
    about: {
      title: "À Propos de Paraguay Access | Experts en Résidence et Fiscalité au Paraguay",
      description:
        "Découvrez Paraguay Access : cabinet spécialisé avec une expérience directe du processus de résidence au Paraguay. Plus de 750 clients de plus de 40 pays.",
    },
    contact: {
      title: "Contact Paraguay Access | Consultation Gratuite Résidence et Fiscalité",
      description:
        "Contactez Paraguay Access pour la résidence, le conseil fiscal, la comptabilité ou la création d'entreprise au Paraguay. Email, WhatsApp ou consultation gratuite.",
    },
    privacy: {
      title: "Politique de Confidentialité",
      description: "Politique de confidentialité de Paraguay Access. Comment nous collectons, utilisons et protégeons vos données personnelles.",
    },
    terms: {
      title: "Conditions d'Utilisation",
      description: "Conditions d'utilisation de Paraguay Access. Règles régissant l'utilisation de notre site web et services.",
    },
  },
  it: {
    home: {
      title: "Paraguay Access | Residenza, Consulenza Fiscale e Trasferimento in Paraguay",
      description:
        "Studio specializzato in residenza personale e fiscale in Paraguay. 0% tasse sui redditi esteri, processo rapido, senza soggiorno minimo. Contabilità, pianificazione fiscale, costituzione società e conformità.",
    },
    residency: {
      title: "Residenza in Paraguay | Residenza Temporanea e Permanente 2026",
      description:
        "Ottieni la residenza temporanea o permanente in Paraguay. 0% tasse sui redditi esteri, senza soggiorno minimo, processo rapido. Assistenza completa dalla preparazione documenti alla cédula. Prezzi 2026.",
    },
    residencyGuide: {
      title: "Programma di Residenza in Paraguay | Guida Completa 2026",
      description:
        "Tutto ciò che devi sapere sul programma di residenza del Paraguay nel 2026. Requisiti, documenti, tempistiche, costi, implicazioni fiscali e processo passo dopo passo.",
    },
    accounting: {
      title: "Contabilità e Fisco in Paraguay | RUC, Contabilità e Conformità",
      description:
        "Servizi professionali di contabilità e fisco in Paraguay. Registrazione RUC, contabilità mensile, dichiarazioni fiscali, consulenza fiscale e conformità. Imposta societaria del 10%.",
    },
    companyFormation: {
      title: "Costituzione Società in Paraguay | S.A. e S.R.L. 2026",
      description:
        "Apri la tua azienda in Paraguay con guida esperta. Incorporazione completa (S.A. o S.R.L.), registrazione RUC, apertura conto bancario e conformità societaria.",
    },
    about: {
      title: "Chi è Paraguay Access | Esperti in Residenza e Fisco in Paraguay",
      description:
        "Scopri Paraguay Access: studio specializzato con esperienza diretta nel processo di residenza del Paraguay. Oltre 750 clienti da oltre 40 paesi.",
    },
    contact: {
      title: "Contatta Paraguay Access | Consulenza Gratuita Residenza e Fisco",
      description:
        "Contatta Paraguay Access per residenza, consulenza fiscale, contabilità o costituzione società in Paraguay. Email, WhatsApp o consulenza gratuita.",
    },
    privacy: {
      title: "Informativa sulla Privacy",
      description: "Informativa sulla privacy di Paraguay Access. Come raccogliamo, utilizziamo e proteggiamo i vostri dati personali.",
    },
    terms: {
      title: "Termini di Servizio",
      description: "Termini di servizio di Paraguay Access. Regole e condizioni che disciplinano l'uso del nostro sito e servizi.",
    },
  },
  ru: {
    home: {
      title: "Paraguay Access | Резидентство, Налоговое Консультирование и Переезд в Парагвай",
      description:
        "Специализированная фирма по получению личного и налогового резидентства в Парагвае. 0% налогов на иностранный доход, быстрый процесс, без минимального пребывания. Бухгалтерия, налоговое планирование, регистрация компаний.",
    },
    residency: {
      title: "Резидентство в Парагвае | Временное и Постоянное Резидентство 2026",
      description:
        "Получите временное или постоянное резидентство в Парагвае. 0% налогов на иностранный доход, без минимального пребывания, быстрое оформление. Полное сопровождение. Цены 2026.",
    },
    residencyGuide: {
      title: "Программа Резидентства в Парагвае | Полное Руководство 2026",
      description:
        "Всё, что нужно знать о программе резидентства Парагвая в 2026 году. Требования, документы, сроки, стоимость, налоговые преимущества и пошаговый процесс.",
    },
    accounting: {
      title: "Бухгалтерия и Налоги в Парагвае | RUC, Учёт и Соответствие",
      description:
        "Профессиональные бухгалтерские и налоговые услуги в Парагвае. Регистрация RUC, ежемесячный учёт, налоговые декларации, консультации и соответствие. Корпоративный налог 10%.",
    },
    companyFormation: {
      title: "Регистрация Компании в Парагвае | S.A. и S.R.L. 2026",
      description:
        "Откройте компанию в Парагвае с экспертной поддержкой. Полная регистрация (S.A. или S.R.L.), RUC, открытие банковского счёта и корпоративное соответствие.",
    },
    about: {
      title: "О Paraguay Access | Эксперты по Резидентству и Налогам в Парагвае",
      description:
        "Узнайте о Paraguay Access: специализированная фирма с практическим опытом в процессе резидентства Парагвая. Более 750 клиентов из более чем 40 стран.",
    },
    contact: {
      title: "Контакт Paraguay Access | Бесплатная Консультация по Резидентству и Налогам",
      description:
        "Свяжитесь с Paraguay Access для резидентства, налогового консультирования, бухгалтерии или регистрации компании в Парагвае. Email, WhatsApp или бесплатная консультация.",
    },
    privacy: {
      title: "Политика Конфиденциальности",
      description: "Политика конфиденциальности Paraguay Access. Как мы собираем, используем и защищаем ваши персональные данные.",
    },
    terms: {
      title: "Условия Использования",
      description: "Условия использования Paraguay Access. Правила и условия использования нашего сайта и услуг.",
    },
  },
  el: {
    home: {
      title: "Paraguay Access | Κατοικία, Φορολογική Συμβουλευτική και Μετεγκατάσταση στην Παραγουάη",
      description:
        "Εξειδικευμένη εταιρεία για προσωπική και φορολογική κατοικία στην Παραγουάη. 0% φόρος στο εισόδημα εξωτερικού, γρήγορη διαδικασία, χωρίς ελάχιστη παραμονή. Λογιστική, φορολογικός σχεδιασμός, ίδρυση εταιρείας.",
    },
    residency: {
      title: "Κατοικία στην Παραγουάη | Προσωρινή και Μόνιμη Κατοικία 2026",
      description:
        "Αποκτήστε προσωρινή ή μόνιμη κατοικία στην Παραγουάη. 0% φόρος σε εισόδημα εξωτερικού, χωρίς ελάχιστη παραμονή, γρήγορη διαδικασία. Πλήρης υποστήριξη. Τιμές 2026.",
    },
    residencyGuide: {
      title: "Πρόγραμμα Κατοικίας στην Παραγουάη | Πλήρης Οδηγός 2026",
      description:
        "Ό,τι χρειάζεστε να ξέρετε για το πρόγραμμα κατοικίας της Παραγουάης το 2026. Απαιτήσεις, έγγραφα, χρονοδιάγραμμα, κόστος και φορολογικά οφέλη.",
    },
    accounting: {
      title: "Λογιστική και Φορολογία στην Παραγουάη | RUC, Λογιστική και Συμμόρφωση",
      description:
        "Επαγγελματικές λογιστικές και φορολογικές υπηρεσίες στην Παραγουάη. Εγγραφή RUC, μηνιαία λογιστική, φορολογικές δηλώσεις, συμβουλευτική και συμμόρφωση.",
    },
    companyFormation: {
      title: "Ίδρυση Εταιρείας στην Παραγουάη | S.A. και S.R.L. 2026",
      description:
        "Ιδρύστε την εταιρεία σας στην Παραγουάη με εξειδικευμένη καθοδήγηση. Πλήρης σύσταση (S.A. ή S.R.L.), εγγραφή RUC, άνοιγμα τραπεζικού λογαριασμού.",
    },
    about: {
      title: "Σχετικά με την Paraguay Access | Ειδικοί σε Κατοικία και Φορολογία στην Παραγουάη",
      description:
        "Γνωρίστε την Paraguay Access: εξειδικευμένη εταιρεία με άμεση εμπειρία στη διαδικασία κατοικίας της Παραγουάης. Πάνω από 750 πελάτες από πάνω από 40 χώρες.",
    },
    contact: {
      title: "Επικοινωνία Paraguay Access | Δωρεάν Συμβουλευτική για Κατοικία και Φορολογία",
      description:
        "Επικοινωνήστε με την Paraguay Access για κατοικία, φορολογική συμβουλευτική, λογιστική ή ίδρυση εταιρείας στην Παραγουάη. Email, WhatsApp ή δωρεάν συμβουλευτική.",
    },
    privacy: {
      title: "Πολιτική Απορρήτου",
      description: "Πολιτική απορρήτου της Paraguay Access. Πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα.",
    },
    terms: {
      title: "Όροι Χρήσης",
      description: "Όροι χρήσης της Paraguay Access. Κανόνες και προϋποθέσεις χρήσης του ιστότοπου και των υπηρεσιών μας.",
    },
  },
};
