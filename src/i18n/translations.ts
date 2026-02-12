export const languages = {
  en: 'English',
  pt: 'Português',
};

export const defaultLang = 'en';

export const translations = {
  en: {
    // Header
    language: 'Language',
    login: 'Login',
    joinUs: 'Join us!',
    firstWebsite: 'FIRST Website',
    team: 'Team',
    
    // Hero Section
    teamNumber: 'FTC Team #34200',
    tagline: 'Representing Portugal in the FIRST Tech Challenge, building innovative robots and inspiring the next generation of engineers.',
    supportButton: 'Donate to our team',
    meetTheTeamButton: 'Meet the Team',
    
    // Team Page
    meetTheTeam: 'Meet the Team',
    teamDescription: 'The talented students behind Heroes Of The Sea, working together to build innovative robots and compete internationally.',
    teamMembers: 'Team Members',
    
    // Hero Info Cards
    advancedRobotics: 'Advanced Robotics',
    advancedRoboticsDesc: 'Custom-built competition robots',
    internationalStage: 'International Stage',
    internationalStageDesc: 'Competing globally',
    studentInnovation: 'Student Innovation',
    studentInnovationDesc: 'Inspiring future engineers',
    
    // Fundraising
    supportOurTeam: 'Support our team',
    helpCompete: 'Help us compete',
    supportDescription: 'Your support makes it possible for us to compete, innovate, and represent Portugal on the international stage.',
    whereYourDonationGoes: 'Where Your Donation Goes',
    supportUs: 'Support Us',
    otherWaysToHelp: 'Other ways to help',
    competitionRegistration: 'Competition registration',
    competitionRegistrationDesc: 'Entry fees for regional and international tournaments',
    robotParts: 'Robot Parts & Materials',
    robotPartsDesc: 'Motors, sensors, structural components, and electronics',
    travelToCompetitions: 'Travel to competitions',
    travelToCompetitionsDesc: 'Transportation and accommodation for team members',
    teamEquipment: 'Team Equipment',
    teamEquipmentDesc: 'Tools, safety gear, and workspace materials',
    supportOtherTeams: 'Support other teams',
    supportOtherTeamsDesc: 'Help grow the FTC community in Portugal',
    mbWay: 'MB Way',
    mbWayDesc: 'Sent to team captain, then transferred to the main account. Include email in description.',
    comingSoon: 'Coming Soon',
    donate: 'Donate',
    cryptocurrencies: 'Cryptocurrencies',
    cryptocurrenciesDesc: 'Minimum $50 USD. Email us to start your donation.',
    hardwareDonations: 'Hardware & Materials',
    hardwareDonationsDesc: 'Robotics equipment & parts',
    viewTransparentFinances: 'View Transparent Finances',
    seeWhereMoneyGoes: 'See exactly where every dollar goes',
    backToHome: 'Back to Home',
    
    // Footer
    contactUs: 'Contact Us',
    basedIn: 'Based in Portugal 🇵🇹',
    followUs: 'Follow Us',
    copyright: '© {year} Heroes Of The Sea · FTC Team #34200',
    sponsorNote: 'Fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499)',
  },
  pt: {
    // Header
    language: 'Idioma',
    login: 'Entrar',
    joinUs: 'Junta-te a nós!',
    firstWebsite: 'Website da FIRST',
    team: 'Equipa',
    
    // Hero Section
    teamNumber: 'Equipa FTC #34200',
    tagline: 'Uma das equipas que representa Portugal no FIRST Tech Challenge, construindo robôs inovadores e inspirando a próxima geração de engenheiros.',
    supportButton: 'Apoie a nossa equipa',
    meetTheTeamButton: 'Conheça a Equipa',
    
    // Team Page
    meetTheTeam: 'Conheça a Equipa',
    teamDescription: 'Os talentosos estudantes por trás dos Heroes Of The Sea, trabalhando juntos para construir robôs inovadores e competir internacionalmente.',
    teamMembers: 'Membros da Equipa',
    
    // Hero Info Cards
    advancedRobotics: 'Robótica Avançada',
    advancedRoboticsDesc: 'Robots de competição personalizados',
    internationalStage: 'Palco Internacional',
    internationalStageDesc: 'Competindo globalmente',
    studentInnovation: 'Inovação dos Estudantes',
    studentInnovationDesc: 'Inspirando futuros engenheiros',
    
    // Fundraising
    supportOurTeam: 'Apoiar a nossa equipa',
    helpCompete: 'Ajudem-nos a competir!',
    supportDescription: 'O seu apoio torna possível competir, inovar e ir a palcos internacionais e nacionais.',
    whereYourDonationGoes: 'Mas, o seu dinheiro vai para onde?',
    supportUs: 'Apoie-nos',
    otherWaysToHelp: 'Outras formas de ajudar',
    competitionRegistration: 'Inscrição em competições',
    competitionRegistrationDesc: 'Taxas de inscrição para torneios regionais e internacionais ',
    robotParts: 'Peças e materiais do robô',
    robotPartsDesc: 'Motores, sensores, componentes estruturais e eletrónicos',
    travelToCompetitions: 'Viagem para competições',
    travelToCompetitionsDesc: 'Transporte e alojamento para membros da equipa',
    teamEquipment: 'Equipamento da equipa',
    teamEquipmentDesc: 'Ferramentas, equipamento de segurança e materiais do espaço de trabalho',
    supportOtherTeams: 'Apoiar outras equipas',
    supportOtherTeamsDesc: 'Ajudar a crescer a comunidade FIRST em Portugal',
    mbWay: 'MB Way',
    mbWayDesc: 'Enviado ao capitão de equipa, depois transferido para a conta principal. Incluir e-mail na descrição.',
    comingSoon: 'Brevemente',
    donate: 'Doar',
    cryptocurrencies: 'Criptomoedas',
    cryptocurrenciesDesc: 'Apenas acima de 50 USD. Enviar e-mail para iniciar doação.',
    hardwareDonations: 'Equipamento e Materiais',
    hardwareDonationsDesc: 'Equipamento de robótica e peças',
    viewTransparentFinances: 'Ver Finanças Transparentes',
    seeWhereMoneyGoes: 'Veja exatamente para onde vai cada euro',
    backToHome: 'Voltar ao Início',
    
    // Footer
    contactUs: 'Contacte-nos',
    basedIn: 'Baseado em Portugal 🇵🇹',
    followUs: 'Siga-nos',
    copyright: '© {year} Heroes Of The Sea · Equipa FTC #34200',
    sponsorNote: 'Patrocinado fiscalmente pela The Hack Foundation (d.b.a. Hack Club), uma organização sem fins lucrativos 501(c)(3) (EIN: 81-2908499)',
  },
} as const;

export type Language = keyof typeof translations;

export function getTranslation(lang: Language, key: keyof typeof translations.en): string {
  const langTranslations = translations[lang];
  return (langTranslations[key] as string) || translations.en[key];
}
