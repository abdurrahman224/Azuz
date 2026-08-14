import SectionTitle from "../../../../components/ui/SectionTitle";

const services = [
  {
    id: 1,
    title: "ART OF GIFTING",
    description: "Find the perfect gift from our curated selection.",
    image: "/images/home/services_section/image1.webp",
    link_one: "GIFTS FOR HER",
    link_two: "GIFTS FOR HIM",
  },
  {
    id: 2,
    title: "PERSONALISATION",
    description: "Discover a range of personalisation services.",
    image: "/images/home/services_section/image2.webp",
    link_one: "LEARN MORE",
  },
  {
    id: 3,
    title: "THE EXPERIENCE",
    description: "Our personalised experience is the Index difference.",
    image: "/images/home/services_section/image3.webp",
    link_one: "EXPLORE THE EXPERIENCE",
  },
];

const ServicesSection = () => {
  return (
    <div className="px-10 mx-auto">
      <SectionTitle>Services</SectionTitle>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
        {services.map((service) => (
          <div key={service.id} className="col-span-1">
            <img src={service.image} alt={service.title} className="w-full" />
            <div className="text-white flex flex-col gap-1.5 pb-5 mt-2">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-base font-normal">{service.description}</p>

              <div className="flex items-center gap-8 mt-2">
                {/* Fixed Border: Removed w-32 and text-center */}
                <span className="border-b border-white pb-1 text-sm font-semibold tracking-wider cursor-pointer uppercase w-fit">
                  {service.link_one}
                </span>

                {service.link_two && (
                  <span className="border-b border-white pb-1 text-sm font-semibold tracking-wider cursor-pointer uppercase w-fit">
                    {service.link_two}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
