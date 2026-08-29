import type { Service, Stat, WhyUsItem } from '@/types';

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Internet & Connectivité',
    shortDescription:
      "Solutions d'accès Internet et de connectivité adaptées aux particuliers, professionnels et communautés.",
    fullDescription:
      "Nous proposons et déployons des solutions de connectivité adaptées aux besoins des particuliers, entreprises, professionnels et collectivités. Notre approche consiste à identifier la technologie la plus adaptée en fonction de la localisation, des usages, du nombre d'utilisateurs et du niveau de performance attendu.",
    solutions: [
      'Internet haut débit',
      'Connectivité professionnelle',
      'Accès partagé',
      'Interconnexion',
      'Solutions pour zones peu couvertes',
    ],
    image: '/images/connectivity.png',
  },
  {
    icon: 'Wrench',
    title: 'Installation & Déploiement',
    shortDescription:
      "Installation, configuration et mise en service d'équipements et d'infrastructures télécoms.",
    fullDescription:
      "Notre réseau technique nous permet d'accompagner les opérateurs, équipementiers, entreprises et partenaires technologiques dans leurs projets de déploiement. Notre présence nationale permet d'organiser des opérations dans les 14 régions du Sénégal à partir d'un interlocuteur unique.",
    solutions: [
      "Installation d'équipements télécoms",
      'Configuration',
      'Câblage structuré',
      'Mise en service',
      'Tests et validation',
      'Interventions terrain',
      'Déploiements multi-sites',
    ],
    image: '/images/deploiement.png',
  },
  {
    icon: 'HeadsetIcon',
    title: 'Maintenance & Support',
    shortDescription:
      'Maintenance préventive et corrective, diagnostic, intervention terrain et accompagnement technique.',
    fullDescription:
      "Une infrastructure télécom doit rester disponible dans la durée. Nos équipes assurent la maintenance préventive et corrective des équipements et installations avec un support 24/7 et une supervision réactive.",
    solutions: [
      'Diagnostic des incidents',
      'Dépannage sur site',
      "Remplacement d'équipements",
      'Maintenance préventive',
      'Contrôle des installations',
      'Assistance utilisateurs',
      'Interventions rapides',
    ],
    image: '/images/maintenance.jpg',
  },
  {
    icon: 'Network',
    title: 'Réseaux & Infrastructures',
    shortDescription:
      "Déploiement et optimisation d'infrastructures permettant d'étendre la couverture et la qualité des services.",
    fullDescription:
      "SUNULINK Telecom SA accompagne le développement d'infrastructures permettant d'améliorer la couverture et la qualité des télécommunications. Nous intervenons notamment sur les réseaux d'accès, les équipements de distribution, les points de connexion et les infrastructures nécessaires au dernier kilomètre.",
    solutions: [
      "Réseaux d'accès & transmission",
      'Équipements de distribution',
      'Points de connexion et relais',
      'Infrastructures dernier kilomètre',
    ],
    image: '/images/network.jpg',
  },
  {
    icon: 'Satellite',
    title: 'Connectivité Satellitaire',
    shortDescription:
      "Installation et accompagnement au déploiement de solutions de connectivité satellitaire, notamment dans les zones difficiles à couvrir.",
    fullDescription:
      "Le satellite ouvre de nouvelles possibilités pour connecter rapidement les territoires éloignés ou insuffisamment couverts par les infrastructures terrestres. SUNULINK Telecom SA accompagne le déploiement de solutions satellitaires de haute performance. Notre réseau territorial assure une assistance technique locale continue.",
    solutions: [
      'Étude et qualification du site',
      'Installation et fixation antenne',
      'Configuration réseau & WiFi',
      'Mise en service opérationnelle',
      'Formation et accompagnement',
      'Maintenance et support continu',
    ],
    image: '/images/satellite.jpg',
  },
];

export const stats: Stat[] = [
  { value: 14, suffix: '', label: 'Régions couvertes' },
  { value: 180, suffix: '+', label: 'Professionnels et techniciens' },
  { value: 24000, suffix: '', label: 'Foyers connectés' },
  { value: 12, suffix: '+', label: "Années d'expérience terrain" },
];

export const whyUsItems: WhyUsItem[] = [
  {
    icon: 'MapPin',
    title: 'Couverture nationale',
    description: "Une capacité d'intervention dans les 14 régions du Sénégal.",
  },
  {
    icon: 'Users',
    title: 'Proximité',
    description:
      'Des professionnels issus des territoires dans lesquels nous intervenons.',
  },
  {
    icon: 'Zap',
    title: 'Réactivité',
    description:
      'Un réseau technique mobilisable immédiatement pour les installations et interventions.',
  },
  {
    icon: 'Award',
    title: 'Expertise',
    description:
      "Plus de 12 années d'expérience dans les télécommunications au Sénégal.",
  },
  {
    icon: 'Target',
    title: 'Dernier kilomètre',
    description:
      "Une connaissance concrète des problématiques permettant d'aller de l'infrastructure jusqu'à l'utilisateur final.",
  },
  {
    icon: 'Handshake',
    title: 'Partenariats',
    description:
      "Une organisation capable d'accompagner opérateurs, équipementiers et acteurs technologiques dans leurs déploiements nationaux.",
  },
];

export const forceTerrainPoints: string[] = [
  'Une présence opérationnelle dans les 14 régions du Sénégal',
  'Un réseau de plus de 180 professionnels et techniciens qualifiés',
  'Une base éprouvée de 24 000 foyers déjà connectés',
  "Plus de 12 années d'expérience concrète sur le terrain",
  'Une connaissance approfondie des réalités et marchés locaux',
  "Une capacité d'intervention agile dans les zones urbaines, périurbaines et rurales",
  'Des compétences techniques et linguistiques adaptées aux réalités sénégalaises',
];
