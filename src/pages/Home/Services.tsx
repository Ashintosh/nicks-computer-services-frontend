const services = [
  {
    title: 'Computer Repair',
    description: 'Troubleshooting and repair for desktops, laptops, and other devices.',
  },
  {
    title: 'Virus & Malware Removal',
    description: 'Help removing malware, viruses, unwanted software, and other security problems.',
  },
  {
    title: 'Data Recovery',
    description: 'Help recovering important files from computers and storage devices.',
  },
  {
    title: 'Upgrades',
    description: 'RAM, SSD, storage, and other hardware upgrades to improve your computer.',
  },
  {
    title: 'Technical Support',
    description: 'Friendly help with everyday computer problems and questions.',
  },
  {
    title: 'Custom PCs',
    description: 'Build a new custom desktop for your specific needs.',
  },
];

function Services() {
  return (
    <section id="services">
      <h2>Services</h2>

      <div>
        {services.map((service) => (
          <article key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
