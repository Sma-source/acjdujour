import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",

      quote:
        "Grâce à ACJ, j'apprends quelque chose de nouveau chaque jour - c'est passionnant !",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",

      quote:
        "Je ne scroll plus bêtement, je découvre des infos fascinantes avec ACJ",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",

      quote:
        "Partager et apprendre avec ACJ a transformé mon utilisation des réseaux sociaux.",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl sm:text-center md:mx-auto">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            Ce que disent nos utilisateurs satisfaits
          </h3>
          <p className="mt-3 ">
            Découvrez comment ACJ a transformé leur quotidien.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-neutral-100 dark:bg-black p-6 rounded-xl  border border-gray-300 dark:border-primary"
              >
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="w-16 h-16 rounded-full" />
                    <div>
                      <span className="block text-gray-800 dark:text-neutral-200 font-semibold">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700 dark:text-neutral-300">
                      {item.quote}
                    </p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
