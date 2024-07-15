import { cn } from "@/lib/utils";
import {
  AxeIcon,
  BedIcon,
  BoxIcon,
  CatIcon,
  EyeIcon,
  KeyIcon,
  PiIcon,
  TvIcon,
} from "lucide-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Apprentissage Quotidien",
      description:
        "Chaque jour, découvrez de nouvelles informations fascinantes et enrichissez votre savoir",
      icon: <PiIcon />,
    },
    {
      title: "Partage Facile",
      description:
        "Partagez vos découvertes et connaissances avec une communauté passionnée.",
      icon: <BoxIcon />,
    },
    {
      title: "Navigation Intelligente",
      description:
        "Transformez votre scrolling en une activité productive et éducative.",
      icon: <TvIcon />,
    },
    {
      title: "Communauté Engagée",
      description:
        "Rejoignez une communauté de curieux et d'apprenants actifs.",
      icon: <AxeIcon />,
    },
    {
      title: "Contenu Varié",
      description:
        "Accédez à une multitude de sujets intéressants et diversifiés.",
      icon: <CatIcon />,
    },
    {
      title: "Inspiration Constante",
      description:
        "Trouvez de l'inspiration quotidienne grâce à des faits surprenants et captivants.",
      icon: <BedIcon />,
    },
    {
      title: "Interface Intuitive",
      description: "Profitez d'une expérience utilisateur fluide et agréable.",
      icon: <EyeIcon />,
    },
    {
      title: "Développement Personnel",
      description:
        "Enrichissez vos connaissances et développez de nouvelles compétences chaque jour.",
      icon: <KeyIcon />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
